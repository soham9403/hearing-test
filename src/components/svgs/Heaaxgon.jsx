const Hexagon = (props)=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 137.934 159.274">
            <defs>
                <linearGradient id="linear-gradient" x1="0.165" y1="0.136" x2="0.835" y2="0.864" gradientUnits="objectBoundingBox">
                    <stop offset="0.084" stop-color="#ff6333" />
                    <stop offset="0.581" stop-color="#ef135b" />
                    <stop offset="1" stop-color="#af0797" />
                </linearGradient>
            </defs>
            <g id="Group_74" dataName="Group 74">
                <path id="Path_11" dataName="Path 11" d="M299.54,376.376l-68.967-39.819V256.921L299.54,217.1l68.967,39.819v79.636Zm-62.877-43.334,62.877,36.3,62.877-36.3V260.436l-62.877-36.3-62.877,36.3Z" transform="translate(-230.573 -217.102)" fill="url(#linear-gradient)" />
            </g>
            <text id="_125" dataName="125" transform="translate(70.483 75.356)" fill="#fff" font-size="46" className=" font-metropolis-bold titles" font-weight="700"><tspan x="-20%" y="0">{props.value}</tspan></text>
            <text id="PHI" transform="translate(68.483 110.356)" fill="#fff" font-size="21" className=" font-metropolis-bold titles" ><tspan x="-18.427" y="0">{props.text}</tspan></text>
        </svg>

    )
}
export default Hexagon