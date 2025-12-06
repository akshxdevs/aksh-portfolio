import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const VISITORS_FILE = path.join(process.cwd(), 'data', 'visitors.json');

interface VisitorsData {
  totalVisits: number;
  uniqueVisitors: Set<string>;
  lastUpdated: string;
}

// Helper function to get visitor identifier
function getVisitorId(request: NextRequest): string {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
    request.headers.get('x-real-ip') || 
    'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  return `${ip}-${userAgent}`;
}

// Helper function to read visitors data
async function readVisitorsData(): Promise<VisitorsData> {
  try {
    await fs.mkdir(path.dirname(VISITORS_FILE), { recursive: true });
    const data = await fs.readFile(VISITORS_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return {
      totalVisits: parsed.totalVisits || 0,
      uniqueVisitors: new Set(parsed.uniqueVisitors || []),
      lastUpdated: parsed.lastUpdated || new Date().toISOString(),
    };
  } catch (error) {
    // File doesn't exist or is invalid, return default
    return {
      totalVisits: 0,
      uniqueVisitors: new Set<string>(),
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Helper function to write visitors data
async function writeVisitorsData(data: VisitorsData): Promise<void> {
  try {
    await fs.mkdir(path.dirname(VISITORS_FILE), { recursive: true });
    await fs.writeFile(
      VISITORS_FILE,
      JSON.stringify({
        totalVisits: data.totalVisits,
        uniqueVisitors: Array.from(data.uniqueVisitors),
        lastUpdated: data.lastUpdated,
      }, null, 2),
      'utf-8'
    );
  } catch (error) {
    console.error('Error writing visitors data:', error);
  }
}

// GET endpoint to retrieve visitor count
export async function GET(request: NextRequest) {
  try {
    const data = await readVisitorsData();
    return NextResponse.json({
      totalVisits: data.totalVisits,
      uniqueVisitors: data.uniqueVisitors.size,
    });
  } catch (error) {
    console.error('Error reading visitors data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch visitor count' },
      { status: 500 }
    );
  }
}

// POST endpoint to increment visitor count
export async function POST(request: NextRequest) {
  try {
    const data = await readVisitorsData();
    const visitorId = getVisitorId(request);
    
    // Increment total visits
    data.totalVisits += 1;
    
    // Add to unique visitors if not already present
    if (!data.uniqueVisitors.has(visitorId)) {
      data.uniqueVisitors.add(visitorId);
    }
    
    data.lastUpdated = new Date().toISOString();
    
    await writeVisitorsData(data);
    
    return NextResponse.json({
      totalVisits: data.totalVisits,
      uniqueVisitors: data.uniqueVisitors.size,
    });
  } catch (error) {
    console.error('Error updating visitors data:', error);
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    );
  }
}

