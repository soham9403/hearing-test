import { Button } from "@mui/material"
import { useNavigate } from "react-router"
import { rootUrl } from "../routes/RouteIndex"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>  
            <div className="df column row center">
                <h1 className="heading df row center txt-gray font-metropolis-bold m-v-primary">Error 404</h1>
                <h1 className="sub-heading df txt-gray row center  font-metropolis-bold m-v-primary">Page Not Found</h1>
                <Button onClick={() => { navigate(rootUrl) }} variant="contained" color="secondary">Go To Home </Button>
            </div>

        </>
    )
}
export default NotFound