import React from 'react';

export default function useOutsideClick(
  enabled: boolean,
  elementRef: React.RefObject<HTMLElement | null>,
  callback: VoidFunction
) {
  React.useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    const handle = (e: MouseEvent): void => {
      if (!element?.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handle);

    return () => {
      document.removeEventListener('click', handle);
    };
  }, [callback, elementRef, enabled]);
}

/*  - Usage in the component

interface DialogProps {
    isOpen: boolean,
    onClose: VoidFunction
}
export default function Dialog({ isOpen, onClose }: DialogProps){
    const elementRef = useRef<HTMLElement | null>(null);
    useOutsideClick(isOpen, elementRef, () => {
        onClose();
    });

    return isOpen ? <div ref={elementRef} role='dialog' /> : null;
}

*/
