import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import CheckButton from "../components/CheckButton"
import CustomButton from "../components/CustomButton"
import { rootUrl } from "../routes/RouteIndex"

const LanguageSelection = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="h2 font-intern mt-1 mb-1 container">SELECT YOUR UNDERSTANDABLE LANGUAGE</h1>

            <div className="container df column mt-1">
                    <div className="df row center mt-1" style={{flexWrap:"wrap"}}>

                    {props.data && props.data.length > 0 && props.data.map((data, index) => {
                        return (
                            <div className="df mb-1 mr-1">
                                <CheckButton disabled={!data.available} selected={data.name === props.selectedLang} key={index} title={data.name.toUpperCase()} onClick={() => { props.selectLan(data.name) }} />
                            </div>
                        )
                    })}

                </div>
                <div className="row df small_container mt-1">

                    <CustomButton variant="contained"
                        disabled={props.selectedLang === ""}
                        onClick={() => {
                            navigate(rootUrl + "/step/8/" + props.selectedLang)
                        }}
                        
                        text={'Start'}
                    >

                    </CustomButton>
                </div>

            </div>
        </>
    )
}
export default LanguageSelection