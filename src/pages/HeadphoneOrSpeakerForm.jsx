import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import Headphone from "../components/svgs/Headphone"
import Speaker from "../components/svgs/Speaker"
import { rootUrl } from "../routes/RouteIndex"
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "../actions/persoalIntrestAction"
import CustomButton from "../components/CustomButton"
const HeadphoneOrSpeakerForm = () => {
    const [temp, setTemp] = useState(false)
    const personalIntrest = useSelector((state) => { return state.personalIntrest });

    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (<>
    <div className="container df column " style={{margin:"auto"}}>

   
        <h1 className="h2 font-intern mt-1 mb-1">WHAT DEVICE ARE YOU USING FOR TEST?</h1>
        <div className=" df  column " >
            <div className="row center df">
                {/* <button onClick={() => { dispatch(setDevice("headphone")) }} className={personalIntrest.device_selected === "headphone" ? "device_selection_box  center p-3 device_selection_box_active primary-shadow border-2-primary border-2-primary-thin column radius-1 df" : "device_selection_box primary-shadow border-2-primary border-2-primary-thin center  column p-3 radius-1 df"}> */}
                <button onClick={() => { dispatch(setDevice("headphone")) }} className={`mr-1 device_selection_box primary-shadow border-2-primary border-2-primary-thin center  column p-3 radius-0 df ${personalIntrest.device_selected === "headphone"?'bg-2-primary':''}`}>
                    <Headphone isSelected={personalIntrest.device_selected === "headphone"} />
                    <span className={`h5 row df font-intern bold-1 mt-3  center ${personalIntrest.device_selected === "headphone"?'text-2-light':'text-2-primary'}`} style={{ marginBottom: "0px" }}>Headphone
                    </span>
                    <span className={`h7 row df font-intern bold-1 mt-3  center ${personalIntrest.device_selected === "headphone"?'text-2-light':'text-2-secondary'}`} style={{ marginBottom: "0px" }}>( recommended )
                    </span>
                </button>
                <button onClick={() => { dispatch(setDevice("speaker")) }} className={`ml-1 device_selection_box primary-shadow border-2-primary border-2-primary-thin center  column p-3 radius-0 df ${personalIntrest.device_selected === "speaker"?'bg-2-primary':''}`}>
                    <Speaker isSelected={personalIntrest.device_selected === "speaker"} />
                    <span className={`h5 row df font-intern bold-1 mt-3  center ${personalIntrest.device_selected === "speaker"?'text-2-light':'text-2-primary'}`} style={{ marginBottom: "0px" }}>Speaker
                    </span>
                    
                </button>
            </div>
            <div className="row  df">
                <p className="h3 row center df bold-2 font-intern mt-1 mb-2">
                    Find a quiet environment for best results. Please set your volume level to 80-90% before beginning the test.
                </p>
            </div>
            <div className="df row flex-end">
                <div>
                <CustomButton text={"Next"} disabled={personalIntrest.device_selected === ""} onClick={() => { navigate(rootUrl + "/step/select-mode") }}/>
                </div>
                {/* <Button variant="contained" disabled={personalIntrest.device_selected === ""} onClick={() => { navigate(rootUrl + "/step/select-mode") }} className="row p-3 m-v-primary" color="secondary" >Next</Button> */}
            </div>
        </div>
        </div>
    </>)
}
export default HeadphoneOrSpeakerForm