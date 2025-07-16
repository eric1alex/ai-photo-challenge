
import React from 'react';
import { CameraIcon } from './icons/CameraIcon';

interface HeaderProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems = ['Home', 'Guidelines', 'Competition', 'Blog', 'About'];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('Home'); }} className="flex items-center space-x-2 text-white">
                    <CameraIcon className="h-8 w-8 text-teal-400" />
                    <span className="text-2xl font-bold">PhotoChallenge</span>
                </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
           <div className="md:hidden">
              {/* Mobile menu button can be added here */}
           </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
