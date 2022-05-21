import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import Headphone from "../components/svgs/Headphone"
import Speaker from "../components/svgs/Speaker"
import { rootUrl } from "../routes/RouteIndex"
import { useDispatch, useSelector } from "react-redux";
import { setTestMode } from "../actions/persoalIntrestAction"
import CustomButton from "../components/CustomButton"
const TestMode = () => {
    const [temp, setTemp] = useState(false)
    const personalIntrest = useSelector((state) => { return state.personalIntrest });

    const dispatch = useDispatch();
    const navigate = useNavigate()
    // return (<>
    //     <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">SELECT MODE OF TESTING </h1>
    //     <div className="container-max  m-v-secondary" >
    //         <div className="row center df">
    //         <button onClick={() => { dispatch(setTestMode("ear")) }} className={personalIntrest.test_mode==="ear" ? "device_selection_box center p-primary device_selection_box_active column radius-primary df" : "device_selection_box center  column p-primary radius-primary df"}>

    //                 <span className="titles row df font-metropolis-bold m-v-primary  center" style={{ marginBottom: "0px" }}>EAR
    //                 </span>
    //             </button>
    //             <button onClick={() => { dispatch(setTestMode("bone")) }} className={personalIntrest.test_mode==="bone" ? "device_selection_box center p-primary device_selection_box_active column radius-primary df" : "device_selection_box center  column p-primary radius-primary df"}>

    //                 <span className="titles row df font-metropolis-bold m-v-primary  center" style={{ marginBottom: "0px" }}>BONE
    //                 </span>
    //             </button>

    //             <button onClick={() => { dispatch(setTestMode("both")) }} className={personalIntrest.test_mode==="both" ? "device_selection_box center p-primary device_selection_box_active column radius-primary df" : "device_selection_box center  column p-primary radius-primary df"}>

    //                 <span className="titles row df font-metropolis-bold m-v-primary  center" style={{ marginBottom: "0px" }}>BOTH
    //                 </span>
    //             </button>
    //         </div>
    //         <div className="row m-v-primary df">
    //             <p className="txt-gray sub-heading row center df font-metropolis-regular m-v-primary">
    //                 Find a quiet environment for best results. Please set your volume level to 80-90% before beginning the test.
    //             </p>
    //         </div>
    //         <div className="small_container m-v-secondary">
    //             <Button variant="contained" disabled={personalIntrest.test_mode===""} onClick={() => { navigate(rootUrl + "/step/4") }} className="row p-primary m-v-primary" color="secondary" >Next</Button>
    //         </div>
    //     </div>
    // </>)

    return (
        <>
            <h1 className="h2 font-intern mt-1 mb-1 container center" >SELECT MODE OF TESTING </h1>
            <div className=" df  column container" >
                <div className="row center df">
                    {/* <button onClick={() => { dispatch(setDevice("headphone")) }} className={personalIntrest.device_selected === "headphone" ? "device_selection_box  center p-3 device_selection_box_active primary-shadow border-2-primary border-2-primary-thin column radius-1 df" : "device_selection_box primary-shadow border-2-primary border-2-primary-thin center  column p-3 radius-1 df"}> */}
                    <button onClick={() => { dispatch(setTestMode("ear")) }} className={` df flex-1 p-1 primary-shadow border-2-primary border-2-primary-thin center  column  radius-0 df ${personalIntrest.test_mode === "ear" ? 'bg-2-primary' : ''}`}>
                        {/* <Headphone isSelected={personalIntrest.device_selected === "headphone"} /> */}
                        <span className={`h5 row df font-intern bold-1 mt-3  center ${personalIntrest.test_mode === "ear" ? 'text-2-light' : 'text-2-primary'}`} style={{ marginBottom: "0px" }}>Air
                        </span>
                        
                    </button>
                    <button onClick={() => { dispatch(setTestMode("bone")) }} className={`ml-2 mr-2 df flex-1 p-1 primary-shadow border-2-primary border-2-primary-thin center  column  radius-0 df ${personalIntrest.test_mode === "bone" ? 'bg-2-primary' : ''}`}>
                        {/* <Speaker isSelected={personalIntrest.test_mode === "speaker"} /> */}
                        <span className={`h5 row df font-intern bold-1 mt-3  center ${personalIntrest.test_mode === "bone" ? 'text-2-light' : 'text-2-primary'}`} style={{ marginBottom: "0px" }}>Bone
                        </span>

                    </button>
                    <button onClick={() => { dispatch(setTestMode("both")) }} className={` df flex-1 p-1 primary-shadow border-2-primary border-2-primary-thin center  column  radius-0 df ${personalIntrest.test_mode === "both" ? 'bg-2-primary' : ''}`}>
                        {/* <Speaker isSelected={personalIntrest.test_mode === "speaker"} /> */}
                        <span className={`h5 row df font-intern bold-1 mt-3  center ${personalIntrest.test_mode === "both" ? 'text-2-light' : 'text-2-primary'}`} style={{ marginBottom: "0px" }}>Both
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
                        <CustomButton text={"Next"} disabled={personalIntrest.test_mode === ""} onClick={() => { navigate(rootUrl + "/step/4") }} />
                    </div>
                    {/* <Button variant="contained" disabled={personalIntrest.device_selected === ""} onClick={() => { navigate(rootUrl + "/step/select-mode") }} className="row p-3 m-v-primary" color="secondary" >Next</Button> */}
                </div>
            </div>
            </>
    )
}
export default TestMode