import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-6 mt-0">
      <div className="container mx-auto px-4 text-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Festus Mikhael. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
