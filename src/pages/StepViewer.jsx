import { Button, Step, StepLabel, Stepper } from "@mui/material"
import { useLocation, useNavigate } from "react-router"
import { rootUrl } from "../routes/RouteIndex"

const StepViewer = () => {
    const steps = ['SOUND TEST', 'SPEECH TEST', 'RESULTS']
    const location = useLocation()
    const step = location.pathname.split("/")[location.pathname.split("/").length - 1]
    const navigate = useNavigate()
    return (
        <>

            <div className="small_container">
                <div className="df row m-v-secondary">
                    <Stepper activeStep={step == 4 ? 0 : 1} className={"row"} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label} >
                                <StepLabel  >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
               

            </div>
            {step == 4 ? <h1 className="sub-heading df p-h-primary row center  font-metropolis-bold m-v-primary">SOUND FREQUENCY TEST</h1> :
                    <h1 className="sub-heading df p-h-primary row center  font-metropolis-bold m-v-primary">SOUND SPEECH TEST</h1>
                }
            <div className="container-max m-v-secondary" style={{ marginTop: '0px' }}>
                {step == 4 ? <p className="titles row df font-metropolis-regular m-v-primary  center" style={{ lineHeight: "120%" }}>In next test different frequency will be played, you have to set the volume from bar when you can hear the sound/ tones barely. This test will calculate how your ears respond to different frequencies.</p> :
                    <p className="titles row df font-metropolis-regular m-v-primary  center" style={{ lineHeight: "120%" }}>In the next test you will hear combination of 3 numbers along with the background noise, you have to write those numbers in box. This will test your ear’s ability to hear human speech in noisy environment.
                    </p>
                }
            </div>
            <div className="small_container m-v-secondary">
                {step == 4 ? <Button variant="contained" onClick={() => { navigate(rootUrl + "/step/5") }} className="row p-primary" color="secondary" >Start</Button>
                    :
                    <Button variant="contained" onClick={() => { navigate(rootUrl + "/step/7") }} className="row p-primary" color="secondary" >Start</Button>
                }
            </div>
        </>
    )
}
export default StepViewer