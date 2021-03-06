import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import notSUpportImg from '../assets/images/browser_not_supported.png'
import { rootUrl } from '../routes/RouteIndex'

const NotSupportError = ({error}) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="df fit-content center column">
                <img src={notSUpportImg} className="radius-primary row m-v-primary" style={{ maxWidth: "400px" }} alt="" />
                <h1 className='sub-heading m-v-primary font-metropolis-bold'>{error?error:"Please try another browser/device"}</h1>
                <Button variant='contained' color='secondary' onClick={() => { navigate('/step/1') }}>
                    Go to Home
                </Button>
            </div>
        </>
    )
}
export default NotSupportError