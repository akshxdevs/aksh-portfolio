'use client';

import { useState, useEffect } from 'react';
import { ContributionDay, ContributionWeek } from '../../lib/github';

interface ContributionsProps {
  username?: string;
  year?: number;
  className?: string;
}

export const Contributions = ({ 
  username = 'akshxdevs', 
  year = new Date().getFullYear(),
  className = ''
}: ContributionsProps) => {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/contributions?username=${username}&year=${year}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }

        const data = await response.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        setWeeks(data.contributionCalendar.weeks);
        setTotalContributions(data.contributionCalendar.totalContributions);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching contributions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, year]);

  const getTooltipText = (day: ContributionDay) => {
    const date = new Date(day.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    if (day.contributionCount === 0) {
      return `No contributions on ${date}`;
    } else if (day.contributionCount === 1) {
      return `1 contribution on ${date}`;
    } else {
      return `${day.contributionCount} contributions on ${date}`;
    }
  };

  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (loading) {
    return (
      <div className={`px-44 bg-slate-900 border border-slate-700 rounded-lg p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-50">GitHub Contributions</h3>
          <div className="h-4 bg-slate-700 rounded w-20 animate-pulse"></div>
        </div>
        
        {/* GitHub-style loading skeleton */}
        <div className="flex items-start">
          {/* Day labels */}
          <div className="flex flex-col mr-2 mt-3">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <div key={day} className="text-xs text-slate-400 h-3 flex items-center mb-0.5">
                {index % 2 === 1 ? day : ''}
              </div>
            ))}
          </div>
          
          {/* Month labels */}
          <div className="flex flex-col">
            <div className="flex mb-1">
              {monthLabels.map((month, index) => (
                <div key={month} className="text-xs text-slate-400 w-3 text-center">
                  {index % 2 === 0 ? month : ''}
                </div>
              ))}
            </div>
            
            {/* Contribution grid skeleton */}
            <div className="flex">
              {[...Array(53)].map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col mr-0.5">
                  {[...Array(7)].map((_, dayIndex) => (
                    <div key={`${weekIndex}-${dayIndex}`} className="w-3 h-3 bg-slate-800 rounded-sm mb-0.5 animate-pulse"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`px-44 bg-slate-900 border border-slate-700 rounded-lg p-6 ${className}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-50">GitHub Contributions</h3>
          <div className="text-sm text-red-400">Error loading data</div>
        </div>
        <div className="text-center py-8">
          <p className="text-slate-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`px-44 bg-slate-900 border border-slate-700 rounded-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-50">
          GitHub Contributions {year}
        </h3>
        <div className="text-sm text-slate-400">
          {totalContributions.toLocaleString()} contributions this year
        </div>
      </div>

      {/* GitHub-style contribution graph */}
      <div className="flex items-start">
        {/* Day labels - GitHub style */}
        <div className="flex flex-col mr-2 mt-3">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={day} className="text-xs text-slate-400 h-3 flex items-center mb-0.5">
              {index % 2 === 1 ? day : ''}
            </div>
          ))}
        </div>

        {/* Main graph container */}
        <div className="flex flex-col">
          {/* Month labels - GitHub style */}
          <div className="flex mb-1">
            {monthLabels.map((month, index) => (
              <div key={month} className="text-xs text-slate-400 w-3 text-center">
                {index % 2 === 0 ? month : ''}
              </div>
            ))}
          </div>

          {/* Contribution squares - Perfect GitHub alignment */}
          <div className="flex">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col mr-0.5">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className="w-3 h-3 rounded-sm cursor-pointer hover:ring-1 hover:ring-slate-400 transition-all duration-200 mb-0.5"
                    style={{ backgroundColor: day.color }}
                    title={getTooltipText(day)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend - GitHub style */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-slate-400">
          Less
        </div>
        <div className="flex gap-1">
          {[
            { color: '#161b22', label: '0' },
            { color: '#0e4429', label: '1-3' },
            { color: '#006d32', label: '4-6' },
            { color: '#26a641', label: '7-9' },
            { color: '#39d353', label: '10+' }
          ].map((item, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: item.color }}
              title={item.label}
            />
          ))}
        </div>
        <div className="text-xs text-slate-400">
          More
        </div>
      </div>

      {/* GitHub link */}
      <div className="mt-4 text-center">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};