import React, { useState } from 'react';
import {
  Dumbbell,
  Trophy,
  Flame,
  Soup,
  IceCream2,
  Sprout,
  ChevronLeft,
  ChevronRight,
  FileText,
  ExternalLink,
} from 'lucide-react';

export default function About() {
  const focusAreas = [
    {
      label: "Financial oversight",
      detail: "P&L management and payroll tracking across a multi-million dollar contract base.",
    },
    {
      label: "Variance Analysis",
      detail: "Reconciling invoices and auditing data to resolve discrepancies before they compound.",
    },
    {
      label: "Business development",
      detail: "Sourcing and qualifying new contract pipelines through rigorous data analysis.",
    },
    {
      label: "Digital Architecture",
      detail: "Designing and deploying a web platform to scale organizational presence.",
    },
  ];

  const projects = [
    {
      name: "SWFL Urban Market Analysis",
      tagline: "Listed-home analytics for SWFL with pricing, inventory, and geospatial views.",
      tags: ["Python", "R", "EDA", "Time Series", "GIS"],
      img: "/assets/SWFL.png",
      links: {
        pdf: "/assets/writing/SWFL Quantitative Analysis of Urban Housing Markets.pdf",
        github: "https://github.com/Chris-D-Jose-Castaneda/SWFL-Real-Estate-Analytical-Project",
        tableau: "https://public.tableau.com/app/profile/chris.d.jose/viz/SWFLDashboard/SWFLRealEstateDashboard",
      },
    },
    {
      name: "Equity Dashboard Analytics",
      tagline: "Incorporates multi-asset monitoring and KPI tracking using a robust database infrastructure.",
      tags: ["Flask & REST APIs", "React", "Supabase", "Auth"],
      img: "/assets/Equity_Analytics.png",
      links: {
        external: "https://equity-dashboard-analytics.vercel.app/login",
      },
    },
    {
      name: "Blue Owl Capital Equity Research",
      tagline: "Uses financial statements to create a equity research report built on a FactSet data pipeline.",
      tags: ["FactSet", "3-Statement", "Tableau", "Equities"],
      img: "/assets/BOC.png",
      links: {
        pdf: "/assets/writing/Blue_Owl_Capital_Report.pdf",
        github: "https://github.com/Chris-D-Jose-Castaneda/BOC-Report",
        tableau: "https://public.tableau.com/app/profile/chris.d.jose/viz/BlueOwlOverview/BlueOwlOverview",
      },
    },
  ];

  // Static "Outside of Work" cards (top row)
  const personalStatic = [
    {
      icon: Dumbbell,
      title: "POWERLIFTING",
      copy: "Training toward a 500+ lb deadlift, with a structured, high-protein plan behind it.",
    },
    {
      icon: Trophy,
      title: "SOCCER",
      copy: "A devoted club and international football follower. Excited for the World Cup, and building a random forest model to predict outcomes across the top 5 European leagues and the Champions League.",
    },
  ];

  // Switchable "Cooking" carousel
  const cookingSlides = [
    {
      icon: Flame,
      title: "GRILLING",
      copy: "Grilling ribeyes to perfection, focusing on heat management and sear quality.",
    },
    {
      icon: Soup,
      title: "BAKING",
      copy: "Baking roasted potatoes paired with fresh, zesty chimichurri.",
    },
    {
      icon: IceCream2,
      title: "ICE CREAM",
      copy: "Churning fresh batches with the Ninja Creami.",
    },
  ];

  // Switchable "Gardening" carousel
  const gardenSlides = [
    {
      icon: Sprout,
      title: "FRUIT TREES",
      copy: "Growing bananas, papayas, mamey sapote, cherries, limes, pineapple, and lychee in my garden to eat fresh, blend into smoothies, or churn into ice cream.",
    },
    {
      icon: Sprout,
      title: "PRODUCE",
      copy: "Cultivating tomatoes for from-scratch pasta sauce and avocados for homemade guacamole right in my backyard.",
    },
    {
      icon: Sprout,
      title: "HERBS",
      copy: "Maintaining a garden of fresh oregano, parsley, cilantro, garlic, and scallions—the essential base for a good chimichurri.",
    },
  ];

  const [cookingIndex, setCookingIndex] = useState(0);
  const [gardenIndex, setGardenIndex] = useState(0);

  const cycle = (setter, length, direction) => {
    setter((prev) => (prev + direction + length) % length);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-24 transition-colors duration-300">

      {/* Page Header */}
      <div className="flex flex-col items-center text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002060] dark:text-white tracking-tight font-serif mb-4">
          About Me
        </h1>
        <div className="h-1.5 w-16 bg-[#002060] dark:bg-white mx-auto rounded-full" />
      </div>

      {/* Central Bio Section */}
      <div className="relative flex flex-col items-center mb-24 max-w-4xl mx-auto">
        
        {/* Bio Card */}
        <div className="relative w-full overflow-hidden bg-[#000a1f] dark:bg-slate-900 p-8 md:p-14 rounded-3xl shadow-xl border border-[#002060]/50 dark:border-slate-800 flex flex-col items-center text-center transition-all duration-300">
          
          {/* Subtle Hexagon Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08] dark:hidden pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='194' viewBox='0 0 112 194'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.5'%3E%3Cpath d='M56 0L0 32v64l56 32 56-32V32z'/%3E%3Cpath d='M56 194L0 162V98l56-32 56 32v64z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '112px 194px',
            }}
          />

          {/* Central Photo */}
          <div className="relative z-20 mb-10">
            <img
              src="/assets/Headshot2.png"
              alt="Chris Castaneda"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-[4px] border-white/20 dark:border-slate-700 shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          <p className="mb-6 text-lg md:text-xl text-blue-50/95 dark:text-slate-300 leading-relaxed font-serif max-w-3xl relative z-10">
            I'm a financial and statistical analyst based in Southwest Florida. My background in statistics from Cornell, paired with hands-on experience across financial operations, sits at the intersection of high finance and data engineering.
          </p>
          <p className="mb-10 text-lg md:text-xl text-blue-50/95 dark:text-slate-300 leading-relaxed font-serif max-w-3xl relative z-10">
            I leverage Python, SQL, and financial modeling to turn data into decisions. I am deeply interested in quantitative research, particularly predicting top-league soccer and Champions League outcomes using Random Forest algorithms as I look toward the upcoming World Cup.
          </p>

          <div className="relative z-10 inline-block px-8 py-3.5 bg-slate-100 dark:bg-slate-200 text-[#002060] font-serif text-[13px] md:text-sm tracking-[0.2em] uppercase font-bold rounded-full shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl hover:bg-white dark:hover:bg-white">
            CFA Level I Candidate
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-16">

        {/* Current Work at Apex */}
        <section className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
          <div className="flex flex-col items-center">
            <h2 className="inline-block px-10 py-3 bg-[#002060] dark:bg-slate-800 text-white font-serif text-[13px] md:text-sm tracking-[0.2em] uppercase font-bold rounded-full shadow-lg">
              Current Work
            </h2>
          </div>

          <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 my-8"></div>

          <div className="grid sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {focusAreas.map((item) => (
              <div key={item.label} className="text-center flex flex-col items-center">
                <p className="text-sm font-bold uppercase tracking-widest text-[#002060] dark:text-[#FFFFFF] mb-4 font-serif">
                  {item.label}
                </p>
                <p className="text-slate-700 dark:text-slate-400 font-serif leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Analytical Scopes (Projects) */}
        <section className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
          <div className="text-center flex flex-col items-center">
            <h2 className="inline-block px-10 py-3 bg-[#002060] dark:bg-slate-800 text-white font-serif text-[13px] md:text-sm tracking-[0.2em] uppercase font-bold rounded-full shadow-lg mb-6">
              Core Analytical Scopes
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-serif text-sm max-w-2xl mx-auto">
              A versatile body of work spanning geospatial real estate forecasting, full-stack equity dashboards, and deep-dive equity research, each pairing rigorous analysis with a distinct technical stack.
            </p>
          </div>

          <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 my-8"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/50 dark:hover:border-[#2ab5b5]/50"
              >
                <div className="w-full h-48 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow items-center text-center">
                  <h3 className="text-lg font-bold text-[#002060] dark:text-white mb-2 font-serif leading-snug">
                    {project.name}
                  </h3>

                  <div className="flex items-center justify-center gap-3 mb-4 w-full">
                    {project.links.pdf && (
                      <a
                        href={project.links.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Read the report (PDF)"
                        aria-label="Read the report (PDF)"
                        className="p-2 rounded-full text-[#002060] dark:text-slate-300 hover:text-white hover:bg-blue-600 dark:hover:bg-[#2ab5b5] dark:hover:text-slate-950 transition-colors bg-slate-50 dark:bg-slate-800"
                      >
                        <FileText className="w-4 h-4" strokeWidth={1.75} />
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View on GitHub"
                        aria-label="View on GitHub"
                        className="p-2 rounded-full text-[#002060] dark:text-slate-300 hover:text-white hover:bg-blue-600 dark:hover:bg-[#2ab5b5] dark:hover:text-slate-950 transition-colors bg-slate-50 dark:bg-slate-800"
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                      </a>
                    )}
                    {project.links.tableau && (
                      <a
                        href={project.links.tableau}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Tableau Dashboard"
                        aria-label="View Tableau Dashboard"
                        className="p-2 rounded-full hover:bg-blue-600 dark:hover:bg-[#2ab5b5] transition-colors bg-slate-50 dark:bg-slate-800 flex items-center justify-center"
                      >
                        <img
                          src="/assets/tableau-icon.png"
                          alt="Tableau"
                          className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100"
                        />
                      </a>
                    )}
                    {project.links.external && (
                      <a
                        href={project.links.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open live app"
                        aria-label="Open live app"
                        className="p-2 rounded-full text-[#002060] dark:text-slate-300 hover:text-white hover:bg-blue-600 dark:hover:bg-[#2ab5b5] dark:hover:text-slate-950 transition-colors bg-slate-50 dark:bg-slate-800"
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm font-serif text-slate-700 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md bg-transparent dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outside of Work */}
        <section className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
          <div className="flex flex-col items-center">
            <h2 className="inline-block px-10 py-3 bg-[#002060] dark:bg-slate-800 text-white font-serif text-[13px] md:text-sm tracking-[0.2em] uppercase font-bold rounded-full shadow-lg">
              Outside of Work
            </h2>
          </div>

          <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 my-8"></div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Top row: static cards */}
              {personalStatic.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center transition-transform hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50"
                  >
                    <Icon className="w-6 h-6 text-[#002060] dark:text-[#2ab5b5] mb-3" strokeWidth={1.75} />
                    
                    <p className="font-bold text-[#002060] dark:text-white text-sm mb-4 tracking-widest uppercase font-serif">
                      {item.title}
                    </p>
                    
                    <p className="text-sm font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                      {item.copy}
                    </p>
                  </div>
                );
              })}

            {/* Bottom row: Cooking carousel */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center relative transition-transform hover:-translate-y-1">
              {(() => {
                const Icon = cookingSlides[cookingIndex].icon;
                return <Icon className="w-6 h-6 text-[#002060] dark:text-[#2ab5b5] mb-3" strokeWidth={1.75} />;
              })()}

              <div className="flex items-center justify-center gap-4 mb-4 w-full">
                <button
                  type="button"
                  onClick={() => cycle(setCookingIndex, cookingSlides.length, -1)}
                  aria-label="Previous cooking category"
                  className="text-[#002060] dark:text-[#2ab5b5] hover:opacity-70 transition-opacity p-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <p className="font-bold text-[#002060] dark:text-white text-sm tracking-widest uppercase font-serif min-w-[110px]">
                  {cookingSlides[cookingIndex].title}
                </p>
                <button
                  type="button"
                  onClick={() => cycle(setCookingIndex, cookingSlides.length, 1)}
                  aria-label="Next cooking category"
                  className="text-[#002060] dark:text-[#2ab5b5] hover:opacity-70 transition-opacity p-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm font-serif text-slate-700 dark:text-slate-300 leading-relaxed min-h-[3.5rem]">
                {cookingSlides[cookingIndex].copy}
              </p>

              <div className="flex gap-1.5 mt-4">
                {cookingSlides.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      i === cookingIndex ? "bg-[#002060] dark:bg-[#2ab5b5]" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom row: Gardening carousel */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center relative transition-transform hover:-translate-y-1">
              {(() => {
                const Icon = gardenSlides[gardenIndex].icon;
                return <Icon className="w-6 h-6 text-[#002060] dark:text-[#2ab5b5] mb-3" strokeWidth={1.75} />;
              })()}

              <div className="flex items-center justify-center gap-4 mb-4 w-full">
                <button
                  type="button"
                  onClick={() => cycle(setGardenIndex, gardenSlides.length, -1)}
                  aria-label="Previous garden category"
                  className="text-[#002060] dark:text-[#2ab5b5] hover:opacity-70 transition-opacity p-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <p className="font-bold text-[#002060] dark:text-white text-sm tracking-widest uppercase font-serif min-w-[110px]">
                  {gardenSlides[gardenIndex].title}
                </p>
                <button
                  type="button"
                  onClick={() => cycle(setGardenIndex, gardenSlides.length, 1)}
                  aria-label="Next garden category"
                  className="text-[#002060] dark:text-[#2ab5b5] hover:opacity-70 transition-opacity p-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm font-serif text-slate-700 dark:text-slate-300 leading-relaxed min-h-[3.5rem] max-w-sm">
                {gardenSlides[gardenIndex].copy}
              </p>

              <div className="flex gap-1.5 mt-4">
                {gardenSlides.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      i === gardenIndex ? "bg-[#002060] dark:bg-[#2ab5b5]" : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}