import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github, Globe, Sun, Moon } from 'lucide-react';

const IconMap = {
  Globe: Globe,
  Instagram: Instagram,
  Twitter: Twitter,
  Linkedin: Linkedin,
  Github: Github,
  Facebook: Facebook
};

const SocialLink = ({ icon, href, label, isDarkMode }) => {
  const Icon = IconMap[icon];
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`flex items-center justify-center w-full py-3 px-4 ${
        isDarkMode 
          ? 'bg-gray-300 text-blue-900 hover:bg-gray-400' 
          : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
      } transition-colors rounded-lg text-center font-bold`}
    >
      <Icon className="mr-2" />
      {label}
    </a>
  );
};

const LinkTreePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const config = {
    name: "Your Name",
    tagline: "Brief description or tagline",
    socialLinks: [
      { 
        icon: "Globe", 
        label: "Personal Website", 
        href: "https://yourwebsite.com" 
      },
      { 
        icon: "Instagram", 
        label: "Instagram", 
        href: "https://instagram.com/yourusername" 
      },
      { 
        icon: "Twitter", 
        label: "Twitter", 
        href: "https://twitter.com/yourusername" 
      },
      { 
        icon: "Linkedin", 
        label: "LinkedIn", 
        href: "https://linkedin.com/in/yourusername" 
      },
      { 
        icon: "Github", 
        label: "GitHub", 
        href: "https://github.com/yourusername" 
      },
      { 
        icon: "Facebook", 
        label: "Facebook", 
        href: "https://facebook.com/yourusername" 
      }
    ]
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${
      isDarkMode ? 'bg-blue-900' : 'bg-yellow-400'
    } flex flex-col items-center justify-center p-4`}>
      <button 
        onClick={toggleDarkMode} 
        className={`absolute top-4 left-4 p-2 rounded-full ${
          isDarkMode 
            ? 'bg-gray-300 text-blue-900 hover:bg-gray-400' 
            : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
        } transition-colors`}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-bold italic ${
            isDarkMode ? 'text-gray-300' : 'text-gray-800'
          }`}>
            {config.name}
          </h1>
          <p className={`italic ${
            isDarkMode ? 'text-gray-300' : 'text-gray-800'
          }`}>
            {config.tagline}
          </p>
        </div>

        <div className="space-y-4">
          {config.socialLinks.map((link, index) => (
            <SocialLink 
              key={index} 
              icon={link.icon} 
              label={link.label} 
              href={link.href}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTreePage;
