import { useState, useEffect } from 'react';
import { FaPlay, FaMapMarkerAlt } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';
import GitHubContributions from '../components/GitHubContributions';

// Typing animation for the rotating role line
function TypingRole() {
  const phrases = [
    { article: 'An ', noun: 'Analyst' },
    { article: 'A ', noun: 'Statistician' },
    { article: 'A ', noun: 'Developer' },
  ];
  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const PAUSE_AFTER_TYPE = 1600;
  const PAUSE_AFTER_DELETE = 300;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const { article, noun } = phrases[phraseIndex];
  const fullPhrase = article + noun;

  useEffect(() => {
    let timeout;

    if (!deleting && charIndex < fullPhrase.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
    } else if (!deleting && charIndex === fullPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), DELETE_SPEED);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((p) => (p + 1) % phrases.length);
      }, PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, fullPhrase, phrases.length]);

  const typedText = fullPhrase.slice(0, charIndex);
  const typedArticle = typedText.slice(0, article.length);
  const typedNoun = typedText.slice(article.length);

  return (
    <div className="flex items-center gap-2 mb-8">
      {/* Custom CSS for a true 500ms on/off blinking cursor */}
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: cursor-blink 1s step-end infinite;
        }
      `}</style>
      
      <p className="text-xl sm:text-2xl tracking-tight text-[#002060] dark:text-white font-serif min-h-[2rem]">
        <span className="font-normal">{typedArticle}</span>
        <span className="font-bold">
          {typedNoun}
          <span className="inline-block w-[2px] h-4 sm:h-5 bg-[#002060] dark:bg-white ml-1 align-middle animate-blink" />
        </span>
        <span className="font-normal"> from Southwest Florida </span>
        <FaMapMarkerAlt className="inline-block text-[#800020] dark:text-[#c04060] text-xl align-middle" aria-hidden="true" />
      </p>
    </div>
  );
}

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const TRACK_ID = "2xdppsYDnWSZKOhqwbje2V";

  return (
    // Changed pb-24 to pb-8 to pull the footer up
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-8 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        
        {/* Responsive Text Column: Centered on mobile, Left-aligned on Desktop */}
        <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left">

          {/* Forced onto one line using whitespace-nowrap and responsive sizing */}
          <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] whitespace-nowrap font-extrabold text-[#002060] dark:text-white mb-4 tracking-tight">
            Chris Jose Castaneda
          </h1>

          {/* Animated role line, replaces the old static tagline */}
          <TypingRole />
          
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-serif">
            Analyzing complex market dynamics requires rigorous statistical modeling. I bridge financial metrics with scalable reporting workflows.  
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
            {['Programming', 'Data Visualization', 'Statistical Modeling', 'Equity Research'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-transparent text-[#002060] dark:text-slate-300 text-[11px] font-bold uppercase tracking-widest border border-slate-300 dark:border-slate-700 rounded-sm">
                {skill}
              </span>
            ))}
          </div>
          
          {/* Dynamically inherits alignment */}
          <div className="w-full mt-2">
            <SocialLinks />
          </div>
        </div>

        {/* Image & Audio Player */}
        <div className="w-full md:w-[45%] flex flex-col items-center">
          <div className="relative mb-8 flex justify-center w-full">
             <img
              src="/assets/Headshot.jpg"
              alt="Chris Castaneda"
              fetchPriority="high"
              className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-slate-100 dark:border-slate-800"
            />
          </div>

          <div className="w-full max-w-[288px]">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="w-full flex items-center justify-center px-6 py-4 bg-[#002060] dark:bg-slate-800 text-white text-xs tracking-[0.2em] uppercase font-bold rounded-full hover:bg-[#115e59] transition-colors shadow-lg"
              >
                <FaPlay className="mr-3" />
                Audio Profile
              </button>
            ) : (
              <div className="w-full shadow-2xl rounded-2xl overflow-hidden bg-slate-900">
                <iframe
                  src={`https://open.spotify.com/embed/track/${TRACK_ID}?utm_source=generator&theme=0`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; fullscreen"
                  title="Spotify Player"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition Boxes (Strictly Centered Content) */}
      <section className="grid md:grid-cols-3 gap-6 py-12 border-t border-slate-200 dark:border-slate-800">
        {[
          { title: "Quantitative Analysis", text: "Building robust statistical models to navigate complex financial data sets to find market ineffiiencies." },
          { title: "Automation", text: "Scaling workflows to proactively reconcile large datasets and monitor critical risk parameters." },
          { title: "Due Diligence", text: "Synthesizing deep analytical investigations to drive high-stakes evaluations and strategic decisions." }
        ].map((item) => (
          <div key={item.title} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
            <h3 className="text-[#002060] dark:text-white font-extrabold mb-3 uppercase tracking-widest text-xs">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-serif">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* GitHub Section - Reduced padding from py-16 to pt-12 pb-4 */}
      <section className="pt-12 pb-4 border-t border-slate-200 dark:border-slate-800">
        <GitHubContributions />
      </section>
      
    </div>
  );
}