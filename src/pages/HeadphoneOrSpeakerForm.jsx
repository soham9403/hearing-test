import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import Headphone from "../components/svgs/Headphone"
import Speaker from "../components/svgs/Speaker"
import { rootUrl } from "../routes/RouteIndex"
import { useDispatch, useSelector } from "react-redux";
import { setDevice } from "../actions/persoalIntrestAction"
const HeadphoneOrSpeakerForm = () => {
    const [temp, setTemp] = useState(false)
    const personalIntrest = useSelector((state) => { return state.personalIntrest });

    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (<>
        <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">WHAT DEVICE ARE YOU USING FOR TEST ?</h1>
        <div className="container-max  m-v-secondary" >
            <div className="row center df">
                <button onClick={() => { dispatch(setDevice("headphone")) }} className={personalIntrest.device_selected==="headphone" ? "device_selection_box center p-primary device_selection_box_active column radius-primary df" : "device_selection_box center  column p-primary radius-primary df"}>
                    <Headphone />
                    <span className="titles row df font-metropolis-bold m-v-primary  center" style={{ marginBottom: "0px" }}>Headphone
                    </span>
                </button>
                <button onClick={() => { dispatch(setDevice("speaker")) }} className={personalIntrest.device_selected==="speaker" ? "device_selection_box center p-primary device_selection_box_active column radius-primary df" : "device_selection_box center  column p-primary radius-primary df"}>
                    <Speaker width={"70%"} height={"60%"} />
                    <span className="titles row df font-metropolis-bold m-v-primary  center" style={{ marginBottom: "0px" }}>Speaker
                    </span>
                </button>
            </div>
            <div className="row m-v-primary df">
                <p className="txt-gray sub-heading row center df font-metropolis-regular m-v-primary">
                    Find a quiet environment for best results. Please set your volume level to 80-90% before beginning the test.
                </p>
            </div>
            <div className="small_container m-v-secondary">
                <Button variant="contained" disabled={personalIntrest.device_selected===""} onClick={() => { navigate(rootUrl + "/step/select-mode") }} className="row p-primary m-v-primary" color="secondary" >Next</Button>
            </div>
        </div>
    </>)
}
export default HeadphoneOrSpeakerForm