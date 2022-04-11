import { Grid } from "@mui/material"
import { useState } from "react"

const ResultTabBox = (props) => {
    const [active, setActive] = useState("left")
    return (
        <>
            <div className="df row column">
                <div className="df row ">
                    <Grid container spacing={0} >
                        <Grid item xs={6} md={6} >
                            <button style={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} onClick={() => { setActive("left") }} className={active === "left" ? "df bg-secondary font-metropolis-bold titles radius-primary p-secondary txt-primary center fit-content" : "df  font-metropolis-bold titles radius-primary p-secondary txt-primary center fit-content"}>
                                LEFT EAR
                            </button>
                        </Grid>
                        <Grid item xs={6} md={6} >
                            <button style={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} onClick={() => { setActive("right") }} className={active === "right" ? "df bg-secondary font-metropolis-bold titles radius-primary p-secondary txt-primary center fit-content" : "df  font-metropolis-bold titles radius-primary p-secondary txt-primary center fit-content"}>
                                Right EAR
                            </button>
                        </Grid>
                    </Grid>

                </div>
                <div className="df row border-secondary radius-primary" style={{borderTopLeftRadius:"0px",borderTopRightRadius:"0px"}}>
                    {active==="left" && props.leftComponent}
                    {active==="right" && props.rightComponent}
                </div>
            </div>
        </>
    )
}
export default ResultTabBox