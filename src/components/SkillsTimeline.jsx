import React, { useState } from 'react';

// Data sorted in chronological descending order (10 yrs -> 2 yrs)
// Data sorted in chronological descending order (10 yrs -> 2 yrs)
const timelineData = [
  {
    title: 'Microsoft Office & Excel',
    years: 10,
    yearsText: '10 yrs',
    category: 'Data & Modeling',
    items: [
      '10 years of using Microsoft Office, including 9 years since formal Excel certification.',
      'Since then I have learned advanced spreadsheet modeling, financial templates, and rigorous data cleaning.',
      'Advanced manipulation (Power Query, Pivot Tables) and efficiency optimizations (XLOOKUP, macros).'
    ]
  },
{
    title: 'Python',
    years: 5,
    yearsText: '5 yrs',
    category: 'Data & Modeling',
    items: [
      'Utilizing Python for data science, quantitative analysis, stochastic calculus, and machine learning.',
      'Developing analytical workflows and time series forecasting models using pandas, NumPy, and scikit-learn.',
      'Engineering automated scripts to reduce redundant manual tasks and accelerate workflow efficiency.'
    ]
  },
  {
    title: 'R',
    years: 5,
    yearsText: '5 yrs',
    category: 'Data & Modeling',
    items: [
      'Utilizing R for data analysis, data visualization, time series analysis, and numerical computing.',
      'Building rigorous statistical models and robust visual outputs using ggplot, dplyr, and tidymodels.',
      'Conducting in-depth exploratory data analysis and statistical testing to drive actionable insights.'
    ]
  },

  {
    title: 'Frontend Development',
    years: 4,
    yearsText: '4 yrs',
    category: 'Software & Web',
    items: [
      'Building responsive, data-rich user interfaces incorporating React, Vite, and Tailwind CSS.',
      'Translating complex analytical outputs into interactive web dashboards.'
    ]
  },
  {
    title: 'Bash & PowerShell Scripting',
    years: 4,
    yearsText: '4 yrs',
    category: 'Software & Web',
    items: [
      'Cross-platform shell scripting for system automation, file management, and environment setup.',
      'Orchestrating deployment workflows and routine data pipeline execution.'
    ]
  },
  {
    title: 'JMP',
    years: 4,
    yearsText: '4 yrs',
    category: 'Data & Modeling',
    items: [
      '4 years of experience conducting Design of Experiments (DOE) and exploratory data analysis.',
      'Proficient in statistical discovery, predictive modeling, and quality control analysis using JMP software.'
    ]
  },
  {
    title: 'Generative AI',
    years: 4,
    yearsText: '4 yrs',
    category: 'Tools & Other',
    items: [
      'Prompt engineering, accelerated learning, and workflow automation using ChatGPT, Claude, Gemini, and GitHub Copilot.',
      'Leveraging large language models to efficiently debug complex codebases and accelerate the development of statistical models.',
      'Utilizing AI assistants to streamline the creation of scalable reporting workflows and data pipelines.'
    ]
  },
  {
    title: 'SQL & Databases',
    years: 3,
    yearsText: '3 yrs',
    category: 'Data & Modeling',
    items: [
      'Relational database management (PostgreSQL, MySQL, Microsoft SQL Server).',
      'Advanced query design, conditional statements, and complex data extraction.',
      'Architecting robust data pipelines and integrating Cloud SQL environments.'
    ]
  },
{
    title: 'BI Tools',
    years: 3,
    yearsText: '3 yrs',
    category: 'Data & Modeling',
    items: [
      'Designing interactive and scalable dashboards using Tableau, Power BI, and Looker (GCP).',
      'Connecting to relational databases to automate real-time reporting workflows.',
      'Transforming complex datasets into actionable visual insights.'
    ]
  },
{
    title: 'Financial Data Platforms',
    years: 2,
    yearsText: '2 yrs',
    category: 'Finance',
    items: [
      'Extracting market data from Bloomberg Terminal, FactSet, and LSEG Workspace.',
      'Utilizing S&P Capital IQ Pro and PitchBook for in-depth financial analysis.',
      'Pulling data from financial APIs by reading and interpreting built-in documentation.'
    ]
  },
  {
    title: 'Cloud Systems',
    years: 2,
    yearsText: '2 yrs',
    category: 'Software & Web',
    items: [
      'Deploying scalable applications and managing environments via Google Cloud Platform.',
      'Configuring backend infrastructure, database schemas, and authentication with Supabase.'
    ]
  },
  {
    title: 'LaTeX',
    years: 2,
    yearsText: '2 yrs',
    category: 'Tools & Other',
    items: [
      '2 years of experience typesetting academic, statistical, and financial documents.',
      'Creating complex mathematical formulas and professional research reports.'
    ]
  }
];
// Extract unique categories for the filter menu
const categories = ['All', ...new Set(timelineData.map(item => item.category))];

export default function SkillsTimeline() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter data based on active selection
  const filteredData = timelineData.filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="w-full">
      
      {/* Category Filter Menu */}
      <div className="flex flex-wrap justify-start md:justify-center gap-2.5 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800/80">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all duration-300 shadow-sm border ${
              activeCategory === category
                ? 'bg-[#002060] border-[#002060] text-white dark:bg-[#2ab5b5] dark:border-[#2ab5b5] dark:text-slate-900'
                : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-700 hover:text-[#002060] dark:hover:text-white hover:border-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-slate-200 dark:border-slate-800/80 ml-4 md:ml-6 py-2 transition-all duration-500 ease-in-out">
        {filteredData.length > 0 ? (
          filteredData.map((category, index) => {
            // Dynamically pad the number based on the current filtered array so it never skips digits
            const nodeNumber = String(index + 1).padStart(2, '0');

            return (
              <div key={category.title} className="mb-12 relative pl-8 md:pl-10 last:mb-0 group animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: `${index * 50}ms` }}>
                
                {/* Timeline Number Node */}
                <div className="absolute -left-[17px] top-0 h-8 w-8 bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-sm transition-colors duration-300 group-hover:border-[#002060] dark:group-hover:border-white">
                  <span className="text-xs font-bold text-[#002060] dark:text-white">
                    {nodeNumber}
                  </span>
                </div>

                {/* Title & Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5 -mt-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#002060] dark:text-white group-hover:text-blue-600 dark:group-hover:text-[#2ab5b5] transition-colors">
                    {category.title}
                  </h3>
                  <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-[#002060] dark:text-slate-300 text-xs font-bold uppercase tracking-[0.15em] rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">                    {category.yearsText}
                  </span>
                </div>

                {/* Custom Stylized Bullets */}
                <ul className="space-y-3.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      
                      {/* Geometric Diamond Bullet */}
                      <div className="mt-1.5 mr-3.5 shrink-0 flex items-center justify-center h-2.5 w-2.5">
                        <div className="h-1.5 w-1.5 bg-[#002060]/50 dark:bg-white/50 rotate-45 group-hover:bg-[#002060] dark:group-hover:bg-white group-hover:scale-125 transition-all duration-300 shadow-sm" />
                      </div>
                      
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
              </div>
            );
          })
        ) : (
          <div className="pl-8 text-slate-500 dark:text-slate-400 italic text-sm">
            No skills found for this category.
          </div>
        )}
      </div>

    </div>
  );
}