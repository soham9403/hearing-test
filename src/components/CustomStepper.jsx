const CustomStepper = (props) => {

    return (
        <>
            <div className="row df ">
                {props.steps.map((item, index) => {
                    return <>
                        <div className="stepper-box flex-1 df column row-center" key={index}>
                            <div className={`stepper-img-box df center primary-shadow border-2-primary border-2-primary-thin  ${props.activeStep >= index ? 'bg-gradient' : 'bg-2-light shadow-primary'}`}>
                                {<img src={props.activeStep >= index ? item.activeImg : item.img} className="fit-content" alt="" />}
                            </div>
                            <span className="font-intern text-2-primary h7 mt-3" dangerouslySetInnerHTML={{ __html: item.text }}></span>
                        </div>
                        {index != props.steps.length - 1 && <div className="df flex-1 horizontal-border-box df center">
                            <div className="df row horizontal-border">

                            </div>
                        </div>}
                    </>
                })}
            </div>

        </>
    )
}
export default CustomStepper