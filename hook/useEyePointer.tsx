import React from 'react';
const useEyePointer = () => {
  const [
    irisPosition,
    setIrisPosition
  ] = React.useState({ x: null, y: null });
  React.useEffect(() => {
    const updateMousePosition = (ev:any) => {
      setIrisPosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return irisPosition;
};
export default useEyePointer;

// mode view
// exit double blink quick -=> exit
// click enter
// 