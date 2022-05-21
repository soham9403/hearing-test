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
                style={{ marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight }}
            >
                <linearGradient xmlns="http://www.w3.org/2000/svg" id="paint0_linear_75_56" x1="241.5" y1="-97" x2="-80.5" y2="187.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A91674" />
                    <stop offset="1" stopColor="#E6234A" />
                </linearGradient>
                <circle
                    className="svg-circle-bg"
                    stroke={circleOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
                <circle
                    className="svg-circle"
                    ref={circleRef}
                    stroke="url(#paint0_linear_75_56)"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}

                />
                <text
                    x={`${center}`}
                    y={`${center}`}
                    className="svg-circle-text text-2-primary font-intern h3">
                    {progress}%

                </text>
                <text
                    x={`${center}`}
                    y={`${center + (center/2)}`} className="svg-circle-text text-2-primary font-intern h5 ">
                    {text}
                </text>

            </svg>
        </>
    );
}



export default CircularProgressBar;