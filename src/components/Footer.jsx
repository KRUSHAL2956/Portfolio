import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800/50 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Krushal Hirpara. Crafted with passion and code.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React • Styled with Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
