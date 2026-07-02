import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiBookOpen, FiFileText, FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";

const projects = [
  {
    name: "SWFL Urban Market Analysis",
    description: "Listed-home analytics for April 2025 with pricing, inventory, and geospatial views.",
    tags: ["Data Analysis", "Python", "EDA", "Time Series", "GIS"],
    url: "https://github.com/Chris-D-Jose-Castaneda/SWFL-Real-Estate-Analytical-Project",
    tableauUrl: "https://public.tableau.com/app/profile/chris.d.jose/viz/SWFLDashboard/SWFLRealEstateDashboard",
    shinyUrl: "https://chris-jose-castaneda.shinyapps.io/SWFL_Quant_Analysis/",
    imgSrc: "/assets/SWFL.png",
    imgAlt: "SWFL Urban Housing analysis cover",
    pdfUrl: "/assets/writing/SWFL Quantitative Analysis of Urban Housing Markets.pdf",
    pdfLabel: "Read the report",
  },
  {
    name: "SWFL Forecasting Model V2",
    description: "Sold-home forecasting over the past five years with interactive maps and stats.",
    tags: ["Machine Learning", "Data Analysis", "Python", "Time Series"],
    url: "https://github.com/Chris-D-Jose-Castaneda/SWFL_Analysis_V2",
    imgSrc: "/assets/SWFL Forecasting Analysis.png",
    imgAlt: "SWFL Forecasting Analysis",
  },
  {
    name: "Equity Dashboard Analytics",
    description: "Incorporates multi-asset monitoring and KPI tracking using a robust database infrastructure.",
    tags: ["Web Development", "Financial Modeling", "React", "APIs"],
    url: "https://equity-dashboard-analytics.vercel.app/",
    imgSrc: "/assets/Equity_Analytics.png",
    imgAlt: "Equity Dashboard Analytics",
  },
  {
    name: "Valuation Screener",
    description: "Streamlit app to load Excel universes and screen by EV/EBITDA, ROE, and more.",
    tags: ["Financial Modeling", "Data Analysis", "Python", "Excel"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Valuation-Screener",
    imgSrc: "/assets/Valuation_Screener.png",
    imgAlt: "Valuation Screener dashboard",
  },
  {
    name: "Premier League 2025/26 Prediction",
    description: "Match outcome and table projections for the 2025/26 season.",
    tags: ["Machine Learning", "Data Analysis", "Python", "Sports Analytics"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Premier_League_2025_26_Prediction",
    tableauUrl: "https://public.tableau.com/app/profile/chris.d.jose/viz/EPL_17718285429440/NovEPL",
    imgSrc: "/assets/Cole_Palmer.png",
    imgAlt: "Premier League model",
  },
  {
    name: "Grading Analysis",
    description: "Track, analyze, and visualize grading data from a spreadsheet modeling course from the past 5 semesters.",
    tags: ["Data Analysis", "Machine Learning", "Python", "SQL"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Lead_Assistant_Grading_Analysis",
    streamlitUrl: "https://biz-comp.streamlit.app/",
    tableauUrl: "https://public.tableau.com/app/profile/chris.d.jose/viz/Exams_17715565581320/Dashboard1",
    imgSrc: "/assets/CU_clocktower.png",
    imgAlt: "Lead Analysis",
    pdfUrl: "/assets/writing/Grading Analysis Report.pdf",
    pdfLabel: "Read the report",
  },
  {
    name: "Macro-Credit Stress & Sim",
    description: "FRED/Eikon pipelines, stress scoring, and scenario simulations with a Streamlit UI.",
    tags: ["Financial Modeling", "Data Analysis", "Python"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Macro-Credit-Stress-and-Sim",
    imgSrc: "/assets/Macro-Credit Stressboard.png",
    imgAlt: "Macro-Credit Stressboard & CFA",
    pdfUrl: "/assets/writing/Macroeconomic Dashboard Report.pdf",
    pdfLabel: "Read the report",
  },
  {
    name: "Cross-Asset Regime Research",
    description: "Regime detection and cross-asset analytics with FRED/Eikon/Yfinance pipelines and a Streamlit UI.",
    tags: ["Financial Modeling", "Data Analysis", "Python"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Cross-Asset-Regime-Research",
    imgSrc: "/assets/Macro_Credit_Radar.png",
    imgAlt: "Cross-Asset Regime Research",
  },
  {
    name: "My Website",
    description: "Version III built using React, Vite, TailwindCSS, and React Router.",
    tags: ["Web Development", "React", "TailwindCSS"],
    url: "https://github.com/Chris-D-Jose-Castaneda/my-website",
    imgSrc: "/assets/portfolio.png",
    imgAlt: "Portfolio Screenshot",
  },
  {
    name: "Datalytics-Tech",
    description: "Real estate and data solutions for 100+ clients, including dashboards, automation, and market research.",
    tags: ["Web Development", "Data Analysis", "Automation"],
    url: "https://datalytics-tech.vercel.app/",
    imgSrc: "/assets/Datalytics.png",
    imgAlt: "Datalytics-Tech cover",
  },
  {
    name: "Commodities Oil Tracking",
    description: "Analyzing the oil markets and tracking commodity prices & how it affects my portfolio as well as expected outcomes.",
    tags: ["Financial Modeling", "Data Analysis", "Python", "Monte Carlo"],
    url: "https://github.com/Chris-D-Jose-Castaneda/SWFL-COST-Scenario",
    imgSrc: "/assets/Oil.png",
    imgAlt: "Oil Tracking Analysis",
    pdfUrl: "/assets/writing/Retail Fuel Pricing Report.pdf",
    pdfLabel: "Read the report",
  },
  {
    name: "Janus Henderson Case Study",
    description: "Analyzes the performance of Janus Henderson's overall value.",
    tags: ["Financial Modeling", "Data Analysis", "Tableau"],
    tableauUrl: "https://public.tableau.com/app/profile/chris.d.jose/viz/JanusHendersonDashboard/JanuisHendersonOverview",
    imgSrc: "/assets/JHI.png",
    imgAlt: "Janus Henderson Case Study",
  },
  {
    name: "Blue Owl Capital Case Study",
    description: "Analyzes the performance of Blue Owl Capital's overall value & affects of the private credit market.",
    tags: ["Financial Modeling", "Data Analysis", "Tableau"],
    url: "https://github.com/Chris-D-Jose-Castaneda/BOC-Report",
    tableauUrl: "https://public.tableau.com/app/profile/chris.d.jose/viz/BlueOwlOverview/BlueOwlOverview",
    imgSrc: "/assets/BOC.png",
    imgAlt: "Blue Owl Capital Case Study",
    pdfUrl: "/assets/writing/Blue_Owl_Capital_Report.pdf",
    pdfLabel: "Read the report",
  },
  {
    name: "Road to CFA",
    description: "Condensed notes, formulas, and study trackers for CFA Levels I through II.",
    tags: ["Financial Modeling", "Finance", "CFA"],
    url: "https://github.com/Chris-D-Jose-Castaneda/Road-to-CFA-",
    imgSrc: "/assets/CFA.png",
    imgAlt: "CFA study materials cover",
  }
];

const writingSamples = [
  {
    title: "Shakespeare or Romeo in Love?",
    description: "A close reading of Romeo and Juliet examining whether Romeo's love is genuine devotion or self-indulgent infatuation.",
    pdfUrl: "/assets/writing/Shakespeare or Romeo in Love.pdf",
    imgSrc: "/assets/writing/images/Film.png",
    downloadName: "Shakespeare or Romeo in Love.pdf",
  },
  {
    title: "Fall & Rise of the Florida Panther",
    description: "A research piece tracing the Florida panther's near-extinction and the conservation efforts behind its slow recovery.",
    pdfUrl: "/assets/writing/Florida Panther Report.pdf",
    imgSrc: "/assets/writing/images/Panther.png",
    downloadName: "Florida Panther Report.pdf",
  },
  {
    title: "Hurricane Harmony & Florida Ecology",
    description: "An exploration of how Florida's ecosystems have adapted to, and depend on, the seasonal disruption of hurricanes.",
    pdfUrl: "/assets/writing/Hurricane Harmony.pdf",
    imgSrc: "/assets/writing/images/Hurricane.png",
    downloadName: "Hurricane Harmony.pdf",
  },
  {
    title: "Childishness or Consequences of Society?",
    description: "An analytical essay questioning whether perceived immaturity in literature reflects character flaws or the pressures of a flawed society.",
    pdfUrl: "/assets/writing/Childishness or Consequences of Society.pdf",
    imgSrc: "/assets/writing/images/Childishness.png",
    downloadName: "Childishness or Consequences of Society.pdf",
  },
  {
    title: "Succession: A Reincarnation of Shakespeare's King Lear?",
    description: "An op-ed drawing parallels between the television series Succession and the family power struggles at the heart of King Lear.",
    pdfUrl: "/assets/writing/King_Lear_Succession_Op-Ed.pdf",
    imgSrc: "/assets/writing/images/Op-Ed.png",
    downloadName: "King Lear Succession Op-Ed.pdf",
  },
  {
    title: "Shakespeare Around the World Exhibit",
    description: "A report examining how Shakespeare's work has been adapted, translated, and reinterpreted across global cultures.",
    pdfUrl: "/assets/writing/Shakespeare_Museum_Final.pdf",
    imgSrc: "/assets/writing/images/Around_The_World.png",
    downloadName: "Shakespeare Museum Final.pdf",
  },
  {
    title: "Protein Secondary Structure Report",
    description: "A scientific report examining alpha helix and beta sheet formation and their role in determining protein function.",
    pdfUrl: "/assets/writing/Protein Secondary Structure Report.pdf",
    imgSrc: "/assets/writing/images/Protein.png",
    downloadName: "Protein Secondary Structure Report.pdf",
  },
];

const categories = [
  "All",
  "Data Analysis",
  "Machine Learning",
  "Financial Modeling",
  "Web Development"
];

// Shared icon color treatment so every card icon reads the same across the page
const ICON_CLASSES =
  "text-teal-700 dark:text-teal-400 hover:text-[#002060] dark:hover:text-white transition-colors text-xl";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllWriting, setShowAllWriting] = useState(false);

  // Filter projects by selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  // Determine how many projects/writing pieces to show
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);
  const visibleWriting = showAllWriting ? writingSamples : writingSamples.slice(0, 3);

  const IconFor = (url) =>
    url.includes("github.com") ? <FiGithub /> : <FiExternalLink />;

  return (
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 space-y-24">
      
      {/* Projects Section */}
      <div>
        <div className="flex flex-col items-center text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#002060] dark:text-white tracking-tight font-serif mb-4">
            Projects
          </h1>
          {/* Border matches the #002060 text fill in light mode */}
          <div className="h-1.5 w-16 bg-[#002060] dark:bg-white mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setShowAllProjects(false); // Reset expansion when changing filters
              }}
              className={`px-5 py-1.5 text-xs font-bold tracking-[0.1em] uppercase rounded-full transition-all duration-300 ${
                filter === cat
                  ? "bg-[#002060] text-white shadow-md"
                  : "bg-transparent text-slate-500 border border-slate-200 dark:border-slate-700 hover:text-[#002060] dark:hover:text-white hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((proj) => (
            <div
              key={proj.name}
              className="group block bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-700/30 dark:hover:border-teal-400/50"
            >
              <a
                href={proj.url || proj.tableauUrl || proj.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img
                  src={proj.imgSrc}
                  alt={proj.imgAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-[#002060]/0 group-hover:bg-[#002060]/10 transition-colors duration-300" />
              </a>
              <div className="p-6 flex flex-col items-center text-center">
                <a
                  href={proj.url || proj.tableauUrl || proj.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-[#002060] dark:text-white hover:text-teal-700 dark:hover:text-teal-400 transition-colors leading-snug mb-3"
                >
                  {proj.name}
                </a>

                {/* Updated Links Section for PDF, GitHub, Tableau, Shiny, and Streamlit */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  {proj.pdfUrl && (
                    <a
                      href={proj.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={proj.pdfLabel || "Read the report"}
                      className={ICON_CLASSES}
                    >
                      <FiFileText />
                    </a>
                  )}
                  {proj.tableauUrl && (
                    <a
                      href={proj.tableauUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Tableau Dashboard"
                      className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <img
                        src="/assets/tableau-icon.png"
                        alt="Tableau"
                        className="w-5 h-5 object-contain"
                      />
                    </a>
                  )}
                  {proj.shinyUrl && (
                    <a
                      href={proj.shinyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View R-Shiny App"
                      className={ICON_CLASSES}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                  {proj.streamlitUrl && (
                    <a
                      href={proj.streamlitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View Streamlit App"
                      className={ICON_CLASSES}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                  {proj.url && (
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={proj.url.includes("github.com") ? "View on GitHub" : "View project"}
                      className={ICON_CLASSES}
                    >
                      {IconFor(proj.url)}
                    </a>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-md border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Show More / Less Button */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap text-[#002060] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 transition-all shadow-sm"
            >
              {showAllProjects ? (
                <>Hide Projects <FiChevronUp className="text-lg" /></>
              ) : (
                <>View All {filteredProjects.length} Projects <FiChevronDown className="text-lg" /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Writing Samples Section */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#002060] dark:text-white tracking-tight font-serif mb-4">
            Writing Samples
          </h2>
          <div className="h-1.5 w-16 bg-[#002060] dark:bg-white mx-auto rounded-full mb-6" />
          <div className="inline-flex max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-full px-8 py-3 shadow-sm">
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              English and literature coursework spanning literary analysis, environmental writing, and cultural commentary.
            </p>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleWriting.map((piece) => (
            <div
              key={piece.title}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-700/30 dark:hover:border-teal-400/50"
            >
              <a
                href={piece.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative border-b border-slate-100 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-800"
              >
                <img
                  src={piece.imgSrc}
                  alt={`${piece.title} cover`}
                  className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <a 
                  href={piece.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#002060] dark:text-white leading-snug hover:text-teal-700 dark:hover:text-teal-400 transition-colors mb-3"
                >
                  {piece.title}
                </a>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <a
                    href={piece.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Read the piece"
                    className={ICON_CLASSES}
                  >
                    <FiBookOpen />
                  </a>
                  <a
                    href={piece.pdfUrl}
                    download={piece.downloadName}
                    title="Download PDF"
                    className={ICON_CLASSES}
                  >
                    <FiDownload />
                  </a>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {piece.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Writing Samples Show More / Less Button */}
        {writingSamples.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAllWriting(!showAllWriting)}
              className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap text-[#002060] dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 transition-all shadow-sm"
            >
              {showAllWriting ? (
                <>Hide Writing Samples <FiChevronUp className="text-lg" /></>
              ) : (
                <>View All {writingSamples.length} Samples <FiChevronDown className="text-lg" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}