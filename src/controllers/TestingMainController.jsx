import { useEffect, useState, useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import HearingTestSymbol from "../components/svgs/HearingTestSymbol";
import { rootUrl } from "../routes/RouteIndex";
import { detect } from 'detect-browser'
import NotSupportError from "../components/NotSupportError";
const TestingMainController = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    useEffect(() => {
        const pathArr = location.pathname.split("/")
        const stepNo = pathArr[pathArr.length - 1]
        if (stepNo !== 1) {
            navigate(rootUrl + "/step/1")
        }
        

        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            const context = new AudioContext();
           
        }
        catch (e) {
            const browser = detect()
            // if (browser.name === "safari") {
                
            setError('Web Audio API is not supported in ' + browser.name + ' browser')
            // }                
        }
    }, [])

    if (error !== "") {
        return(
           <NotSupportError />
        )
    } else {
        return (
            <div className="df column row">
                <div className="row m-v-primary">
                    <HearingTestSymbol />
                </div>

                <Outlet />
            </div>
        )
    }

}
export default TestingMainController;