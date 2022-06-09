import { Slider, styled } from "@mui/material";

const CustomSlider = (props) => {
    const PrettoSlider = styled(Slider)({
        color: '#52af77',
        height: "1.667vw",
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
            border: '0.486vw solid #E6234A',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },

    });

    return (
        <>
            <div className="df row column pl-2 pr-2">
            <div className="df row">
                <PrettoSlider
                    max={5}
                    min={-1}

                    step={1}
                    onChange={(e) => { if (e.target.value >= 0) props.onChange(e.target.value) }}
                    aria-label="pretto slider"
                    value={props.value}
                />
            </div>
            <div className="df row slider-labels">

                {props.options.map((option, index) => {

                    return (
                        <>


                            <div key={index} style={{ alignItems: index == 0 ? "space-between" : "flex-end" }} className="df  center slider-labels-btn flex-1" >
                                {index == 0 && <div className="df column " style={{ alignItems: "flex-end", transform: "translateX(-100%)" }}>
                                    <div className="vertical-border"></div>
                                    <span className="bold-2 text-2-secondary body-4 font-intern pt-4" style={{ transform: "translateX(50%)" }} >0 hours</span>
                                </div>}
                                <div className="df center column flex-1" style={{ alignItems: "flex-end" }}>
                                    <div className="vertical-border"></div>
                                    <span className="bold-2 text-2-secondary body-4 font-intern pt-4">{option.label}</span>
                                </div>
                            </div>

                        </>)

                })}
            </div>
            </div>
           

        </>
    )
}
export default CustomSlider