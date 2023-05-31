import React, { useState } from 'react';


const SpinningWheel = () => {
  const [selectedMantra, setSelectedMantra] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  const startSpin = () => {
    if (isSpinning) return; // Prevent multiple spins while spinning

    const mantras = ['Om', 'Shanti', 'Namaste', 'Aum', 'Bhakti'];
    const randomIndex = Math.floor(Math.random() * mantras.length);
    const selectedMantra = mantras[randomIndex];

    setIsSpinning(true);

    setTimeout(() => {
      setSelectedMantra(selectedMantra);
      setIsSpinning(false);
    }, 3000); // Adjust the duration of the spinning animation

    // Optionally, you can add additional animations or logic while spinning
    // ...
  };

  return (
    <div className="spinning-wheel">
      <div className={`wheel ${isSpinning ? 'spin' : ''}`}></div>
      <button onClick={startSpin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>
      {selectedMantra && <div className="reward">{selectedMantra}</div>}
    </div>
  );
};

export default SpinningWheel;
