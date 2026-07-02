import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    { 
      id: 'github',
      icon: <FaGithub size={24} />, 
      url: "https://github.com/Chris-D-Jose-Castaneda" 
    },
    { 
      id: 'linkedin',
      icon: <FaLinkedin size={24} />, 
      url: "https://www.linkedin.com/in/chris-d-jose" 
    },
    { 
      id: 'email',
      icon: <FaEnvelope size={24} />, 
      url: "mailto:chris.jose.castaneda@gmail.com" 
    }
  ];
  
  return (
    <div className="flex space-x-8 items-center justify-center md:justify-start w-full">
      {socials.map((s) => (
        <a
          key={s.id}
          href={s.url}
          target={s.id === 'email' ? "_self" : "_blank"}
          rel={s.id === 'email' ? undefined : "noopener noreferrer"}
          className="text-[#002060] hover:text-[#2ab5b5] dark:text-slate-400 dark:hover:text-white transition-transform hover:scale-110"
        >
          {s.icon}
        </a>
      ))}
      {/* Custom Tableau Icon */}
      <a
        href="https://public.tableau.com/app/profile/chris.d.jose"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110 flex items-center justify-center"
      >
        <img 
          src="/assets/tableau-icon.png" 
          alt="Tableau Portfolio" 
          className="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity dark:opacity-60 dark:hover:opacity-100"
        />
      </a>
    </div>
  );
}