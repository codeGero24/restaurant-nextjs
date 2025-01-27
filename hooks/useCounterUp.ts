import React from 'react';

interface useScrollProps {
  inView: boolean;
  rate?: string | number;
  duration?: number;
}

const useCounterUp = ({ inView = false, rate = 10, duration = 2 }: useScrollProps) => {
  const [counter, setCounter] = React.useState<number>(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = typeof rate === 'number' ? rate : parseInt(rate, 10);

      const incrementTime = (duration * 1000) / end;

      const timer = setInterval(() => {
        start += 1;
        setCounter(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      if (start === end) return clearInterval(timer);

      return () => clearInterval(timer);
    }
  }, [inView, rate, duration]);
  return { counter };
};

export default useCounterUp;
