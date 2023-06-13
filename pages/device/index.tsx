import { useState } from "react"

const Device=(props:any)=>{
  
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useState()


  return <div>
    Device: {"ADDG"} 
    Record:  {}-{}-{}
    Trasaction
    {/* <Etertainment></Etertainment> */}
    Entertainment
    Knowledge
    Jobs
    Market


  </div>
}

export default Device


import React from 'react';

interface DialProps {
  value: number; // The value to display on the dial (e.g., 0-100)
  maxValue: number; // The maximum value of the dial
  radius: number; // The radius of the dial in pixels
  strokeWidth: number; // The stroke width of the dial in pixels
}

export const Dial: React.FC<DialProps> = ({ value, maxValue, radius, strokeWidth }) => {
  const circumference = 2 * Math.PI * radius; // Calculate the circumference of the dial

  // Calculate the dash offset based on the value
  const dashOffset = circumference - (value / maxValue) * circumference;

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="#ccc"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="#ff0000"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={radius / 4}
      >
        {value}
      </text>
    </svg>
  );
};

