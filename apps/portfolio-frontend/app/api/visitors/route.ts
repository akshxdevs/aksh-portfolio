import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../lib/db';

const VISITOR_COOKIE = 'portfolio_visitor_id';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS visitor_counts (
      visitor_id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

async function getTotalVisits(): Promise<number> {
  const result = await pool.query<{ total: string }>(
    'SELECT COUNT(*)::int AS total FROM visitor_counts'
  );
  return Number(result.rows[0]?.total || 0);
}

export async function GET() {
  try {
    await ensureTable();
    const totalVisits = await getTotalVisits();
    return NextResponse.json({ totalVisits });
  } catch (error) {
    console.error('Error reading visitors data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor count' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await ensureTable();

    const existingVisitorId = request.cookies.get(VISITOR_COOKIE)?.value;
    const visitorId = existingVisitorId || crypto.randomUUID();

    await pool.query(
      `
        INSERT INTO visitor_counts (visitor_id)
        VALUES ($1)
        ON CONFLICT (visitor_id) DO NOTHING
      `,
      [visitorId]
    );

    const totalVisits = await getTotalVisits();
    const response = NextResponse.json({ totalVisits });

    if (!existingVisitorId) {
      response.cookies.set(VISITOR_COOKIE, visitorId, {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        path: '/',
        maxAge: ONE_YEAR_SECONDS,
      });
    }

    return response;
  } catch (error) {
    console.error('Error updating visitors data:', error);
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    );
  }
}

