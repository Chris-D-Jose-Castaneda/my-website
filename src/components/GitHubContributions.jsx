import { useState, useEffect, Suspense } from 'react';
// Adding curly braces around GitHubCalendar fixes the Version 5 named export issue
import { GitHubCalendar } from 'react-github-calendar';

export default function GitHubContributions() {
  const [mounted, setMounted] = useState(false);
  const username = "Chris-D-Jose-Castaneda";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // Removed py-12 to eliminate redundant vertical spacing
    <section className="w-full max-w-4xl mx-auto">
      
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl font-extrabold text-[#002060] dark:text-white tracking-tight font-serif mb-4">
          GitHub Contributions
        </h2>
        <div className="h-1.5 w-16 bg-[#002060] dark:bg-white mx-auto rounded-full" />
      </div>
      
      <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50 overflow-x-auto">
        {mounted ? (
          <Suspense fallback={<div className="h-40 w-full rounded-md bg-slate-100 dark:bg-slate-800 animate-pulse" />}>
            <GitHubCalendar
              username={username}
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              colorScheme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
            />
          </Suspense>
        ) : (
          <div className="h-40 w-full rounded-md bg-slate-100 dark:bg-slate-800 animate-pulse" />
        )}
      </div>
    </section>
  );
}