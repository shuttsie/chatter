import React, { useEffect, useState } from 'react';
import { hexToRgb } from './utils';

const Placeholder = (props) => {
  const { bgColor, isActive, playing, spinnerColor } = props;

  const [gradientBg, setGradientBg] = useState('');

  const getRgba = (rgb, alpha) => {
    const [r, g, b] = rgb;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  if (isActive && playing) {
    return null;
  }

  return (
    <div className="placeholder" style={{ background: '#000' }}>
      <div className="placeholder-content">
      {isActive && !playing && (
          <div
            className="placeholder-spinner"
            style={{ background: spinnerColor }}
          >
            <div
              className="placeholder-gradient"
              style={{ backgroundImage: gradientBg }}
            />
          </div>
        )}

        <img
          className="placeholderImage"
          src='https://fiservseminars-media.s3.amazonaws.com/coming-soon.jpg'
        />
      </div>
    </div>
  );
};

export default Placeholder;