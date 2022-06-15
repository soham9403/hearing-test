import { Slider, styled } from "@mui/material";

const CustomSlider = (props) => {
    const styledSlider = {
        color: '#52af77',
        padding: "0px",
        height: "1.667vw",
        '@media (max-width:450px)': {
            height: "4vw",
            padding: "0px",
        },
        '& .MuiSlider-track': {
            border: 'none',
            backgroundColor: "#E6234A",
            // boxShadow: 'inset 0px 0px 9px rgba(230, 35, 74, 0.2)'
        },
        '& .MuiSlider-rail': {
            border: 'none',
            backgroundColor: "#F4F4F4",
            boxShadow: 'inset 0px 0px 9px rgba(230, 35, 74, 0.2)'
        },
        '& .MuiSlider-thumb': {
            outline: "0.035vw solid white",
            height: '2.778vw',
            width: '2.778vw',
            backgroundColor: '#fff',
            zIndex: "111111",
            border: '0.486vw solid #E6234A',
            '@media (max-width:450px)': {
                height: "6vw",
                width: "6vw",
            },
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
    }
    return (
        <>
            <div className="df row column pl-4 pr-4">
                <div className="df row">
                    {/* <PrettoSlider
                        max={5}
                        // min={0}

                        // draggable
                        // valueLabelDisplay="off"
                        step={1}
                        onChange={(e,val) => { if (e.target.value >= 0) { props.onChange(val) } }}
                        aria-label="Volume"
                        value={props.value}
                        // defaultValue={props.value}
                    // value={props.value}

                    /> */}

                    <Slider sx={styledSlider} aria-label="Volume" max={5} min={0} value={props.value} onChange={(e, val) => { if (e.target.value >= 0) { props.onChange(val) } }} />
                </div>
                <div className="df row slider-labels" style={{ alignItems: "flex-start" }}>

                    {props.options.map((option, index) => {

                        return (


                            <div key={index} style={{ alignItems: index == 0 ? "space-between" : "flex-end", left: index * (100 / (props.options.length - 1)) + "%" }} className="df center p-absolute slider-labels-btn flex-1" >
                                <div className="df  column flex-1 "  >
                                    <div className="vertical-border"></div>
                                    <span className="bold-2 text-2-secondary body-4 font-intern pt-4 row" dangerouslySetInnerHTML={{ __html: option.label.replace(" ", "<br/>") }}>{ }</span>
                                </div>
                            </div>

                        )

                    })}
                </div>
            </div>


        </>
    )
}
export default CustomSlider