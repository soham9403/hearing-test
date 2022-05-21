const CustomSlider = (props) => {
    
    return (
        <>
            <div className="slider-track df">
                <div className="slide-value" style={{ flex: props.value + 0.5 }}>

                </div>
                <div className="df" style={{ flex: ((props.options.length-(props.value+0.5))) }}>

                </div>
            </div>
            <div className="df row slider-labels">
                {props.options.map((option, index) => {
                    return (
                        <div key={index} className="df  center slider-labels-btn flex-1 column" onClick={()=>{props.onChange(index)}}>
                            <div className="vertical-border"></div>
                            <span className="bold-2 text-2-secondary body-4 font-intern  p-4">{option.label}</span>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default CustomSlider