import React from 'react';

interface useScrollProps {
  threshold?: number;
  scrollTo?: number;
  axis?: 'x' | 'y';
}

const useScroll = ({ threshold = 50, scrollTo = 0, axis = 'y' }: useScrollProps) => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  const scrollToRef = () =>
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = axis === 'y' ? window.scrollY : window.scrollX;
      // About half of the navbar is not visible anymore,
      // so we put navbar as fixed
      setIsScrolled(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, scrollTo, axis]);

  return { isScrolled, scrollToRef };
};

export default useScroll;
