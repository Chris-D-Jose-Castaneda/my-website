import { FiDatabase, FiTarget, FiTrendingUp } from 'react-icons/fi';
import SkillsTimeline from '../components/SkillsTimeline';

export default function Skills() {
  // --- Organized Data Arrays ---
  const coreCompetencies = [
    'Automation', 'Data Analysis', 'Financial Modeling', 'Revenue Reconciliation',
    'Statistical Analysis', 'Machine Learning', 'Data Science', 'Quantitative Analysis'
  ];

  const additionalDisciplines = ['Equity Research', 'Data Engineering', 'Full Stack Development'];

  // Streamlined to only include unique APIs not explicitly detailed in the timeline
  const financeDataSections = [
    { label: 'Data & APIs', items: ['FRED API', 'US Census Data', 'Treasury FX Rates', 'Polygon', 'Yahoo Finance', 'Alpaca Markets', 'FINRA Fixed Income', 'Backtrader'] }
  ];

  const newsLogos = [
    { name: 'The Wall Street Journal', src: '/assets/Wall_Street_Journal.png', url: 'https://www.wsj.com/' },
    { name: 'Financial Times', src: '/assets/Financial_Times.png', url: 'https://www.ft.com/' },
    { name: 'The New York Times', src: '/assets/NYT-Logo.png', url: 'https://www.nytimes.com/section/business' },
    { name: 'The Economist', src: '/assets/The_Economist_Logo.png', url: 'https://www.economist.com/' },
    { name: 'Bloomberg', src: '/assets/Bloomberg.png', url: 'https://www.bloomberg.com/' },
  ];

  const podcastLogos = [
    { name: 'Morning Brew Daily', src: '/assets/Morning_Brew_Daily.png', url: 'https://www.morningbrew.com/stories/morning-brew-podcasts' },
    { name: 'Bloomberg Daybreak: US', src: '/assets/Bloomberg_DayBreak.png', url: 'https://www.bloomberg.com/podcasts' },
    { name: 'The Rundown', src: '/assets/The_Rundown.png', url: 'https://open.spotify.com/show/0VYfS0q26zf0cFc5VuCjwG' },
    { name: 'The Journal', src: '/assets/The_Journal.png', url: 'https://www.wsj.com/podcasts/the-journal' },
  ];

  const navSections = [
    { id: 'core-competencies', label: 'Core Competencies' },
    { id: 'technical-proficiencies', label: 'Proficiencies' },
    { id: 'finance-data', label: 'Finance' },
    { id: 'daily-read-listen', label: 'Daily Read & Listen' },
  ];

  // --- Sub-Components ---
  const TagRow = ({ items }) => (
    <div className="flex flex-wrap justify-center gap-2.5">
      {items.map((item) => (
        <span
          key={item}
          className="px-3.5 py-1.5 bg-transparent dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest border border-slate-200/80 dark:border-slate-700/50 rounded-md transition-colors duration-300 hover:border-blue-300 dark:hover:border-[#2ab5b5]/50 hover:text-[#002060] dark:hover:text-white"
        >
          {item}
        </span>
      ))}
    </div>
  );

  const SectionCard = ({ id, icon, title, subtitle, children }) => (
    <section id={id} className="max-w-4xl mx-auto w-full scroll-mt-40">
      <div className="group bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="text-[#002060] dark:text-white text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-[#002060] dark:text-white">{title}</h2>
        </div>
        
        {subtitle && (
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );

  const CardSubsections = ({ sections }) => (
    <div className="space-y-8">
      {sections.map((sec, idx) => (
        <div key={sec.label}>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
            {sec.label}
          </p>
          <TagRow items={sec.items} />
          {idx < sections.length - 1 && (
            <div className="h-px bg-slate-100 dark:bg-slate-800/60 w-3/4 mx-auto mt-8" />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-24 transition-colors duration-300 space-y-16">

      {/* Page Header */}
      <div className="flex flex-col items-center text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002060] dark:text-white tracking-tight font-serif mb-4">
          Technical Skills
        </h1>
        <div className="h-1.5 w-16 bg-[#002060] dark:bg-white mx-auto rounded-full" />
      </div>

      {/* Jump Nav - Added mb-10 to match the spacing in Projects.jsx */}
      <nav className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-10">
        {navSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="px-5 py-2 text-xs font-bold tracking-[0.1em] uppercase rounded-sm transition-all duration-300 whitespace-nowrap bg-white dark:bg-slate-900 text-[#002060] dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Intro Box */}
      <section className="max-w-4xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-md bg-[#000a1f] dark:bg-slate-900 px-8 py-12 md:py-14 transition-all duration-300 hover:shadow-xl border border-[#002060]/50 dark:border-slate-800">
            <div
              className="absolute inset-0 opacity-[0.08] dark:hidden pointer-events-none rounded-3xl animate-hex-drift"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='194' viewBox='0 0 112 194'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.5'%3E%3Cpath d='M56 0L0 32v64l56 32 56-32V32z'/%3E%3Cpath d='M56 194L0 162V98l56-32 56 32v64z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '112px 194px',
              }}
            />
          <div className="absolute inset-0 bg-gradient-to-br from-[#001530]/90 to-transparent pointer-events-none" />
          
          <div className="relative z-10 text-white dark:text-slate-200 leading-relaxed text-center text-sm md:text-base max-w-3xl mx-auto space-y-5">
            <p>
              Graduated with a Bachelor of Science in Statistics in five semesters. Strong analytical foundations
              from my statistical course load highlighted how data drives markets, sparking curiosity. I am studying
              CFA material that covers financial statement analysis, equity investments, fixed income, and derivatives
              so I can evaluate value and risk with greater discipline and sharpen portfolio models.
            </p>
            <p>
              I am drawn to the intersection of quantitative data, markets, and technology, building research 
              pipelines, testing hypotheses, and translating insights into decisions. I want to explore portfolio 
              management and understanding and evaluating risk, combining research and statistical analysis in a 
              high pressure environment centered on quantitative research.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Core Competencies */}
      <SectionCard id="core-competencies" icon={<FiTarget />} title="Core Competencies">
        <TagRow items={coreCompetencies} />
        <div className="h-px bg-slate-100 dark:bg-slate-800/60 my-8 w-3/4 mx-auto" />
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
          Additional Disciplines
        </p>
        <TagRow items={additionalDisciplines} />
      </SectionCard>

      {/* 2. Technical Proficiencies (Timeline) */}
      <SectionCard id="technical-proficiencies" icon={<FiTrendingUp />} title="Timeline of Technical Proficiencies">
        <div className="text-left mt-6">
          <SkillsTimeline />
        </div>
      </SectionCard>

      {/* 3. Finance Data & Platforms */}
      <SectionCard
        id="finance-data"
        icon={<FiDatabase />}
        title="Finance Data & Platforms"
        subtitle="APIs, market data, and fixed income resources I use. I primarily use FactSet and Capital IQ for market data platforms and Alpaca Markets API for data."
      >
        <CardSubsections sections={financeDataSections} />
      </SectionCard>

      {/* 4. Daily Read & Listen */}
      <section id="daily-read-listen" className="max-w-4xl mx-auto w-full scroll-mt-40">
        <div className="group bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
          
          <h2 className="text-2xl font-bold text-[#002060] dark:text-white mb-3">
            Daily Read & Listen
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Daily reading and listening that keeps me close to markets, macro, and the broader news cycle.
          </p>

          <div className="space-y-12">
            {/* News Marquee */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                News
              </p>
              <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max animate-marquee-news gap-16 items-center">
                  {[...newsLogos, ...newsLogos, ...newsLogos].map((outlet, index) => (
                    <a
                      key={`news-${index}`}
                      href={outlet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-16 shrink-0 transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100"
                      aria-label={outlet.name}
                    >
                      <img
                        src={outlet.src}
                        alt={outlet.name}
                        className="h-7 md:h-8 object-contain dark:brightness-200 dark:contrast-200"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-800/60 w-1/2 mx-auto" />

            {/* Podcasts Marquee */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                Podcasts
              </p>
              <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max animate-marquee-podcasts gap-16 items-center">
                  {[...podcastLogos, ...podcastLogos, ...podcastLogos].map((outlet, index) => (
                    <a
                      key={`podcast-${index}`}
                      href={outlet.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-16 shrink-0 transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100"
                      aria-label={outlet.name}
                    >
                      {outlet.src ? (
                        <img
                          src={outlet.src}
                          alt={outlet.name}
                          className="h-10 md:h-12 object-contain rounded-lg shadow-sm"
                        />
                      ) : (
                        <span className="text-sm font-bold text-[#002060] dark:text-white">
                          {outlet.name}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Scoped Keyframes */}
      <style>{`
        @keyframes hexDrift {
          from { background-position: 0 0; }
          to { background-position: 112px 194px; }
        }
        .animate-hex-drift {
          animation: hexDrift 40s linear infinite;
        }
        @keyframes marqueeLoop {
          from { transform: translateX(0); }
          to { transform: translateX(-33.3333%); }
        }
        .animate-marquee-news {
          animation: marqueeLoop 40s linear infinite;
        }
        .animate-marquee-news:hover {
          animation-play-state: paused;
        }
        .animate-marquee-podcasts {
          animation: marqueeLoop 45s linear infinite;
        }
        .animate-marquee-podcasts:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-news,
          .animate-marquee-podcasts,
          .animate-hex-drift {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}