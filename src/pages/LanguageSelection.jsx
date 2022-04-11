import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import CheckButton from "../components/CheckButton"
import { rootUrl } from "../routes/RouteIndex"

const LanguageSelection = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <h1 className="sub-heading df row center  font-metropolis-bold  m-v-primary">SELECT YOUR UNDERSTANDABLE LANGUAGE</h1>
            <div className="small_container m-v-secondary df column">
                <div className="df row column">

                    {props.data && props.data.length > 0 && props.data.map((data, index) => {
                        return (
                            <div className="row" style={{margin:"5px auto"}}>
                                <CheckButton disabled={!data.available} selected={data.name === props.selectedLang} key={index} title={data.name.toUpperCase()} onClick={() => { props.selectLan(data.name) }} />
                            </div>
                        )
                    })}

                </div>
                <div className="row m-v-secondary">
                <Button variant="contained"
                    disabled={props.selectedLang === ""}
                    onClick={() => { 
                        navigate(rootUrl+"/step/8/"+props.selectedLang)
                    }}
                    className="row p-primary " color="secondary"
                >
                    Next
                </Button>
                </div>
                
            </div>
        </>
    )
}
export default LanguageSelection