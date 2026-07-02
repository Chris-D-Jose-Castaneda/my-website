import { FaCheckCircle, FaRegFileAlt, FaFileExcel } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { FiAward, FiBookOpen } from 'react-icons/fi';

export default function Education() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-24 transition-colors duration-300 space-y-24">
      
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002060] dark:text-white tracking-tight font-serif mb-4">
          Education
        </h1>
          {/* Border matches the #002060 text fill in light mode */}
        <div className="h-1.5 w-16 bg-[#002060] dark:bg-white mx-auto rounded-full" />

      </div>

      {/* 1. Academic & CFA Section */}
      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* Education Timeline Cards */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          
          {/* Degree 1: Statistics */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
            {/* Graduated Badge */}
            <div className="absolute top-0 right-0 bg-[#115e59] dark:bg-emerald-700 text-white px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-bl-xl rounded-tr-xl shadow-sm">
              Graduated
            </div>
            
            <h3 className="text-2xl font-bold text-[#002060] dark:text-white mb-1 mt-2">
              Cornell University
            </h3>
            <p className="text-[#002060] dark:text-[#2ab5b5] font-bold mb-5">
              B.S. in Statistics (2023-2025)
            </p>
            <p className="text-base text-slate-500 dark:text-slate-400 mb-6 italic border-l-2 border-slate-200 dark:border-slate-700 pl-4">
              Transferred to Statistics major to pursue a more analytical background.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {['Data Mining & Modeling', 'Stochastic Processes','Machine Learning', 'Econometrics', 'Time Series Analysis', 'Statistical Computing', 'Multivariate Analysis', 'Probability Models & Inference','Linear Algebra','Casual Inference','Theory of Statistics'].map(course => (
                <span key={course} className="text-[10px] font-bold uppercase tracking-widest bg-transparent dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-md border border-slate-200/80 dark:border-slate-700/50 group-hover:border-blue-200 dark:group-hover:border-[#2ab5b5]/30 transition-colors">
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Degree 2: Hotel Admin */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative flex-1 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
            {/* Incomplete Badge */}
            <div className="absolute top-0 right-0 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-5 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-bl-xl rounded-tr-xl border-b border-l border-slate-200 dark:border-slate-700">
              Incomplete
            </div>
            
            <h3 className="text-2xl font-bold text-[#002060] dark:text-white mb-1 mt-2">
              Cornell University
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-bold mb-6">
              B.S. in Hotel Administration (2021-2023)
            </p>
            
            <div className="flex flex-wrap gap-2">
              {['Quantitative Analysis', 'Business Computing','Microeconomics','Financial Accounting','Hospitality Development and Management'].map(course => (
                <span key={course} className="text-[10px] font-bold uppercase tracking-widest bg-transparent dark:bg-slate-800 text-slate-400 dark:text-slate-500 px-3 py-1.5 rounded-md border border-slate-200/80 dark:border-slate-700/50">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Photo & CFA */}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          {/* Photo */}
          <div className="group overflow-hidden rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 h-64 relative">
            <img
              src="/src/assets/Grad_Headshot.jpg"
              alt="Cornell Graduation"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* CFA Card */}
          <div className="relative overflow-hidden bg-[#001530] dark:bg-slate-900 p-7 rounded-xl text-white shadow-md flex-1 flex flex-col justify-center border border-transparent dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
            {/* Background Texture/Icon */}
            <FiAward className="absolute -right-6 -bottom-6 text-[120px] text-white/5 group-hover:text-white/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-1 tracking-wide">CFA Level I Candidate</h3>
              <p className="text-xs text-blue-100/80 dark:text-slate-400 mb-6">
                Currently studying, exam date to be scheduled
              </p>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#00df81] dark:text-[#2ab5b5] text-lg shrink-0" /> 
                  <span>Quantitative Methods</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#00df81] dark:text-[#2ab5b5] text-lg shrink-0" /> 
                  <span>Economics</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100/60 dark:text-slate-400">
                  <BiTime className="text-lg shrink-0" /> 
                  <span>Alternative Investments</span>
                </li>
                <li className="flex items-center gap-3 text-blue-100/60 dark:text-slate-400">
                  <BiTime className="text-lg shrink-0" /> 
                  <span>FSA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* 2. Foundations (Split Layout) */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="md:w-1/4 pt-2 md:sticky md:top-32 flex items-start gap-4">
          <div className="bg-blue-50/50 dark:bg-slate-800 p-2.5 rounded-lg border border-blue-100/60 dark:border-slate-700 shrink-0">
            <FiBookOpen className="text-[#002060] dark:text-[#2ab5b5] text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-[#002060] dark:text-white mt-1">Foundations</h2>
        </div>

        <div className="md:w-3/4">
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              My interest in quantitative work started well before college. Growing up, I competed on a math team
              focused on statistics and calculus, which led me to build a strong foundation in high school across
              Calculus I through III, probability and statistics, Python programming, and Excel.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Calculus I-III', 'Probability & Statistics', 'Python', 'Excel'].map(item => (
                <span key={item} className="text-[10px] font-bold uppercase tracking-widest bg-transparent dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-md border border-slate-200/80 dark:border-slate-700/50">
                  {item}
                </span>
              ))}
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-800 my-6" />

            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Alongside the technical track, I have a long-standing interest in American history, economics, and
              philosophy, subjects that continue to shape how I think about markets, institutions, and decision making.
            </p>
          </div>
        </div>
      </div>


      {/* 3. Certifications & Credentials (Split Layout) */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="md:w-1/4 pt-2 md:sticky md:top-32 flex items-start gap-4">
          <div className="bg-blue-50/50 dark:bg-slate-800 p-2.5 rounded-lg border border-blue-100/60 dark:border-slate-700 shrink-0">
            <FiAward className="text-[#002060] dark:text-[#2ab5b5] text-xl" />
          </div>
          <h2 className="text-2xl font-bold text-[#002060] dark:text-white leading-tight mt-1">
            Certifications &<br/>Credentials
          </h2>
        </div>

        <div className="md:w-3/4 grid sm:grid-cols-2 gap-6">
          {/* Microsoft Box */}
          <div className="group bg-white dark:bg-slate-900 p-7 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
            <div className="flex items-center gap-3 mb-6">
              <FaFileExcel className="text-[#002060] dark:text-[#2ab5b5] text-xl" />
              <h3 className="text-lg font-bold text-[#002060] dark:text-white">Microsoft Office</h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/60">
                <span className="font-medium">Excel 2016</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Feb 2017</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span className="font-medium">Excel 2019 Associate</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Feb 2022</span>
              </li>
            </ul>
          </div>

          {/* LSEG Box */}
          <div className="group bg-white dark:bg-slate-900 p-7 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
            <div className="flex items-center gap-3 mb-6">
              <FiAward className="text-[#002060] dark:text-[#2ab5b5] text-xl" />
              <h3 className="text-lg font-bold text-[#002060] dark:text-white">LSEG Certifications</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-blue-700 dark:text-[#2ab5b5] mt-0.5 font-bold">•</span>
                LSEG Finance Essentials
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-700 dark:text-[#2ab5b5] mt-0.5 font-bold">•</span>
                LSEG Workspace Certification
              </li>
            </ul>
          </div>

          {/* Exam Proctoring */}
          <div className="group bg-white dark:bg-slate-900 p-7 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50">
            <div className="flex items-center gap-3 mb-4">
              <FaRegFileAlt className="text-[#002060] dark:text-[#2ab5b5] text-xl" />
              <h3 className="text-lg font-bold text-[#002060] dark:text-white">Exam Proctoring</h3>
            </div>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Occasionally proctored Certiport Microsoft Excel exams in 2024, teaching concepts including lookup functions, nested functions,
              conditional statements, statistical analysis, data visualizations, pivot tables, and automation.
            </p>
          </div>

          {/* Self-Directed Learning */}
          <div className="group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sm:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600/30 dark:hover:border-[#2ab5b5]/50 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#002060] dark:text-white mb-4">Self-Directed Learning</h3>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                In addition, I have taught myself financial modeling and valuation, building on my statistics
                background to develop practical, market-ready analytical skills. I regularly tune into podcasts and
                read articles to apply these concepts in real time, alongside material from the CFA curriculum.
                Through CFA coursework and independent reading and listening, I have studied both private and public
                markets, and explored alternative investment strategies such as statistical arbitrage.
              </p>
              
              <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-r-xl border-l-[3px] border-blue-600 dark:border-[#2ab5b5] p-4">
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  Whatever I don't yet know, I make a point of learning from those who do.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}