import { NextRequest, NextResponse } from 'next/server';
import { fetchGitHubContributions } from '../../../lib/github';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'akshxdevs';
    const year = parseInt(searchParams.get('year') || new Date().getFullYear().toString());

    const token = process.env.GITHUB_TOKEN;
    
    if (!token) {
      return NextResponse.json(
        { error: 'GitHub token not configured' },
        { status: 500 }
      );
    }

    const contributions = await fetchGitHubContributions(username, token, year);

    if (!contributions) {
      return NextResponse.json(
        { error: 'Failed to fetch contributions' },
        { status: 500 }
      );
    }

    return NextResponse.json(contributions);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 