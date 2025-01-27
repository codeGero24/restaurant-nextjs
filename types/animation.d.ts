type animationText =
  | 'none'
  | 'spin'
  | 'ping'
  | 'pulse'
  | 'pulse-border'
  | 'bounce'
  | 'fede-in'
  | 'fede-in-slow'
  | 'zoom-in'
  | 'zoom-out'
  | 'gradient-shimmer'
  | 'spin-slow'
  | 'slide-in-up'
  | 'slide-in-down'
  | 'slide-in-right'
  | 'slide-in-left';

export type animation = `animate-${animationText}`;

export type duration = `duration-[${number}ms]`;
