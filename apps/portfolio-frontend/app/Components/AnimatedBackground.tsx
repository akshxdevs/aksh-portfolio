'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const gifUrls = [
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHViMHRjYmlpN2YxcHU1NmF6cmJwdWdyZzVxanBwcmpmeml6ejd1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dMsfVKqi7PHyYTdHsS/giphy.gif',
  'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3ZHViMHRjYmlpN2YxcHU1NmF6cmJwdWdyZzVxanBwcmpmeml6ejd1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BMu2SwuXflOlQP8jTC/giphy.gif',
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjY2d2JqMjZvdHJmaHhzbTM0NWpzam5jaDE1NWRtOHV3czhjMHZmMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NDNFrO9RnNFPn0Arp8/giphy.gif',
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3I4dm5yNjg5N3Vnb2J1MTZrMTl5ZjY4cWx3amF4amI4bnQ5MmQ5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p3fc8pEjsoGC4/giphy.gif',
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3hjdXI4czl6cHFwbnk4Y3F0bnN6c2doajBpZzE5YXlmbWtkY2x5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1BgQOc1Jj7L86BA4/giphy.gif'
];

export const AnimatedBackground = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const { theme } = useTheme();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex(prevIndex => (prevIndex + 1) % gifUrls.length);
    }, 60 * 60 * 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <div className="relative w-full h-[400px]">
        <img 
          src={gifUrls[currentGifIndex]} 
          alt="Animated background" 
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className={`absolute bottom-0 left-0 w-full h-full ${theme === 'dark' ? 'bg-gradient-to-b from-transparent to-zinc-900' : 'bg-gradient-to-b from-transparent to-white'}`}/>
      </div>
    </div>
  );
}; 