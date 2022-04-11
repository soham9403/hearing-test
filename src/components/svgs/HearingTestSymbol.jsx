

const HearingTestSymbol = (props) => {
    return (
        <div className="hearing_test_symbol">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" viewBox="0 0 494.349 48">
                <defs>
                    <linearGradient xlinkHref="#linear-gradient" id="linear-gradient" x1="-0.016" y1="0.234" x2="2.076" y2="1.312" gradientUnits="objectBoundingBox">
                        <stop offset="0.084" stopColor="#ff6333">

                        </stop>
                        <stop offset="0.581" stopColor="#ef135b">

                        </stop>
                        <stop offset="1" stopColor="#af0797">

                        </stop>
                    </linearGradient>
                    <linearGradient xlinkHref="#linear-gradient" id="linear-gradient-2" x1="-0.868" y1="-0.205" x2="1.223" y2="0.872" >

                    </linearGradient>
                    <linearGradient xlinkHref="#linear-gradient" id="linear-gradient-3" x1="0.067" y1="0.277" x2="1.824" y2="1.183" >

                    </linearGradient>
                    <linearGradient xlinkHref="#linear-gradient" id="linear-gradient-4" x1="-1.554" y1="0.101" x2="2.507" y2="1.076" >

                    </linearGradient>
                    <linearGradient xlinkHref="#linear-gradient" id="linear-gradient-5" x1="-2.778" y1="-0.379" x2="1.312" y2="0.599" >

                    </linearGradient>
                </defs>
                <g id="Group_93" data-name="Group 93" transform="translate(-994.52 -317.859)">
                    <text id="hearing_test" data-name="hearing test" color='white' style={{ color: "white" }} transform="translate(1079.869 356.859)" fontSize="46" className="font-azonix" fontFamily="font-h1-azonix-bold">
                        <tspan x="0" fontFamily="font-h1-azonix-bold" y="0" className="font-azonix" fill={props.isWhite ? "white" : "black"} >hearing test</tspan>
                    </text>
                    <g id="Group_4" data-name="Group 4" transform="translate(0 4)">
                        <path id="Path_5" data-name="Path 5" d="M1014.237,321.571a16.568,16.568,0,1,0,16.568,16.568A16.566,16.566,0,0,0,1014.237,321.571Z" fill="url(#linear-gradient)">

                        </path>
                        <path id="Path_6" data-name="Path 6" d="M1066.559,321.583v-.02h-7.442L1050,333.375l-9.116-11.812h-7.461l12.835,16.636-12.757,16.537h7.462L1050,343.022l9.036,11.714h7.461L1053.724,338.2Z" fill="url(#linear-gradient-2)">

                        </path>
                        <path id="Path_7" data-name="Path 7" d="M1014.237,318.421a19.719,19.719,0,1,0,19.719,19.718A19.74,19.74,0,0,0,1014.237,318.421Zm0,38.115a18.4,18.4,0,1,1,18.4-18.4A18.416,18.416,0,0,1,1014.237,356.536Z" fill="url(#linear-gradient-3)">

                        </path>
                        <path id="Path_8" data-name="Path 8" d="M1029.184,318.371l-.066-.085h-1.672l15.38,19.847-13.44,16.8h1.694l13.429-16.782Z" fill="url(#linear-gradient-4)">

                        </path>
                        <path id="Path_9" data-name="Path 9" d="M1057.154,338.166l13.462-16.823h-1.694l-13.451,16.81,15.205,19.621.066.085h1.673Z" fill="url(#linear-gradient-5)">

                        </path>
                    </g>
                </g>
            </svg>
            {/* <img src={Hearingtestsymbolimg} className="row" alt="" /> */}
        </div>
    )
}
export default HearingTestSymbol