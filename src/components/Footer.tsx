import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-light text-white p-8 text-center text-sm mt-12">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} BLINK CASINO. All rights reserved.</p>
        <p className="mt-2">Play responsibly. For help, visit [Link to Responsible Gaming Page]</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-neon-blue transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
