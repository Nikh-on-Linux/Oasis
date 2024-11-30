import React from 'react';

function ArrowDownIcon({ width, height = width, boxFill, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={boxFill} xmlns="http://www.w3.org/2000/svg">
      <g id="arrow-down">
        <path id="Vector" d="M12.0001 21.25C11.8101 21.25 11.6201 21.18 11.4701 21.03L5.40012 14.96C5.11012 14.67 5.11012 14.19 5.40012 13.9C5.69012 13.61 6.17012 13.61 6.46012 13.9L12.0001 19.44L17.5401 13.9C17.8301 13.61 18.3101 13.61 18.6001 13.9C18.8901 14.19 18.8901 14.67 18.6001 14.96L12.5301 21.03C12.3801 21.18 12.1901 21.25 12.0001 21.25Z" fill={fill} />
        <path id="Vector_2" d="M12 21.08C11.59 21.08 11.25 20.74 11.25 20.33V3.5C11.25 3.09 11.59 2.75 12 2.75C12.41 2.75 12.75 3.09 12.75 3.5V20.33C12.75 20.74 12.41 21.08 12 21.08Z" fill={fill} />
      </g>
    </svg>

  )
}

export default ArrowDownIcon;