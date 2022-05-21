import { Grid } from "@mui/material"
import { useState } from "react"

const ResultTabBox = (props) => {
    const [active, setActive] = useState("left")
    return (
        <>
            <div className="container ">
                <div className="df row ">
                    <Grid container spacing={0} >
                        <Grid item xs={6} md={6} >
                            <button style={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} onClick={() => { setActive("left") }} className={active === "left" ? "df bg-2-primary font-intern h5 bols-1 radius-0 p-2 text-2-light center fit-content" : "df  font-intern h5 bols-1 radius-0 p-2  text-2-primary center fit-content"}>
                                LEFT EAR
                            </button>
                        </Grid>
                        <Grid item xs={6} md={6} >
                            <button style={{ borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }} onClick={() => { setActive("right") }} className={active === "right" ? "df bg-2-primary font-intern h5 bols-1 radius-0 p-2 text-2-light center fit-content" : "df  font-intern h5 bols-1 radius-0 p-2 text-2-primary center fit-content"}>
                                Right EAR
                            </button>
                        </Grid>
                    </Grid>

                </div>
                <div className="df flex-1 border-2-primary radius-0" style={{ borderTopLeftRadius:"0px",borderTopRightRadius:"0px"}}>
                    <div className="df row" style={{overflow:"hidden"}}>
                    {active==="left" && props.leftComponent}
                    {active==="right" && props.rightComponent}
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default ResultTabBox