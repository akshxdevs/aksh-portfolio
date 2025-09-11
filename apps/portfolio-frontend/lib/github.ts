import { GraphQLClient } from 'graphql-request';

const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export interface GitHubContributions {
  contributionCalendar: ContributionCalendar;
}

const CONTRIBUTIONS_QUERY = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function fetchGitHubContributions(
  username: string,
  token: string,
  year: number = new Date().getFullYear()
): Promise<GitHubContributions | null> {
  try {
    const client = new GraphQLClient(GITHUB_GRAPHQL_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const from = `${year}-01-01T00:00:00Z`;
    const to = `${year}-12-31T23:59:59Z`;

    const data = await client.request<{ user: GitHubContributions }>(
      CONTRIBUTIONS_QUERY,
      {
        username,
        from,
        to,
      }
    );

    return data.user;
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return null;
  }
} 