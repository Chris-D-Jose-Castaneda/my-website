import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    // Set background to match navbar (bg-white/95 dark:bg-slate-950/95 or similar)
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm">
        
        {/* Footer Text - Consistent with navbar/body theme */}
        <p className="font-medium text-[#002060] dark:text-slate-300 transition-colors duration-300">
          Built & updated by Chris Castaneda © {new Date().getFullYear()}
        </p>
        
        {/* SocialLinks */}
        <div className="mt-4 md:mt-0">
          <SocialLinks />
        </div>
        
      </div>
    </footer>
  );
}