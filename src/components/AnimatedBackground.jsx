import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.05]" />
    </div>
  );
};

export default AnimatedBackground;
