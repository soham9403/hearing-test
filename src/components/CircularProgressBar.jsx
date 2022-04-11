import React, { useEffect, useState, useRef } from 'react';


// import './CircularProgressBar.css';

const CircularProgressBar = props => {
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
        text,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = radius * 2 * Math.PI;

    useEffect(() => {       
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);

        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out';

    }, [setOffset, progress, circumference, offset]);

    return (
        <>
            <svg
                className="svg"
                width={size}
                height={size}
                style={{marginTop:marginTop,marginBottom:marginBottom,marginLeft:marginLeft,marginRight:marginRight}}
                >
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    transform = "rotate(-90 100 100)"
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform = "rotate(-90 100 100)"

                />
                <text 
                    x={`${center}`} 
                    y={`${center}`} 
                    className="svg-circle-text font-metropolis-bold sub-heading">
                        {progress}% 
                       
                </text>
                <text
                    x={`${center}`}
                    y={`${center+50}`} className="svg-circle-text font-metropolis-bold titles">
                    {text}
                </text>

            </svg>
        </>
    );
}



export default CircularProgressBar;