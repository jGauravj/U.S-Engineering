import React from 'react';

interface GridBackgroundProps {
  color?: string;
  opacity?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ color = 'currentColor', opacity = '0.2' }) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="${color}" stroke-width="0.5">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 1 1 1 1 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  `;

  const svgToDataUri = (svg: string) => {
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  return (
    <div
      className="absolute inset-0 transform -skew-y-12 scale-150"
      style={{ backgroundImage: `url(${svgToDataUri(svg)})`, opacity }}
    ></div>
  );
};

export default GridBackground;
