import React from 'react'

function SearchIcon({ width, height = width, boxFill, fill }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill={boxFill} xmlns="http://www.w3.org/2000/svg">
      <g id="minus">
        <path id="Vector" d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill={fill} />
      </g>
    </svg>

  )
}

export default SearchIcon