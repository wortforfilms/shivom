import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const PostDesigner = () => {
  const [text, setText] = useState('');
  const [fontColor, setFontColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(24);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [animate, setAnimate] = useState(false);

  const animateProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: {
      opacity: animate ? 1 : 0,
      transform: `scale(${animate ? 1 : 0.8})`,
    },
  });

  const handleTextChange = (e:any) => {
    setText(e.target.value);
  };

  const handleFontColorChange = (e:any) => {
    setFontColor(e.target.value);
  };

  const handleFontSizeChange = (e:any) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleBackgroundImageChange = (e:any) => {
    setBackgroundImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h1>Animated Instagram Post Designer</h1>
      <div>
        <label>Background Image:</label>
        <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
      </div>
      <div>
        <label>Text:</label>
        <input type="text" value={text} onChange={handleTextChange} />
      </div>
      <div>
        <label>Font Color:</label>
        <input type="color" value={fontColor} onChange={handleFontColorChange} />
      </div>
      <div>
        <label>Font Size:</label>
        <input type="number" value={fontSize} onChange={handleFontSizeChange} />
      </div>
      <div>
        <label>Animate:</label>
        <input type="checkbox" checked={animate} onChange={(e) => setAnimate(e.target.checked)} />
      </div>
      <div>
        <animated.div style={animateProps}>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              width: '400px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: fontColor,
              fontSize: `${fontSize}px`,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {text}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default PostDesigner;


