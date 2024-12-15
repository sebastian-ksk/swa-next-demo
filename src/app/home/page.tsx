'use client';

import React, { useState } from 'react';

const PageHome = () => {
  const colors = [
    'bg-blue-500',
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-orange-500',
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <button
        onClick={handleClick}
        className={`${colors[currentColorIndex]} text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 hover:opacity-90`}
      >
        ¡Haz click para cambiar el color!
      </button>
    </div>
  );
};

export default PageHome;
