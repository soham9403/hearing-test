import { Button} from '@mui/material'

import {  useNavigate } from 'react-router'
import { rootUrl } from '../routes/RouteIndex'

const EarTestFinishAndBoneStart = () => {
  
  
  
  
  const navigate = useNavigate()
  return (
    <>
      <div className='small_container'>
        <div className='df row m-v-secondary'></div>
      </div>
      <h1 className='sub-heading df p-h-primary row center  font-metropolis-bold m-v-primary'>
        YOUR EAR TEST IS FINISHED
      </h1>
      <div className='container-max m-v-secondary' style={{ marginTop: '0px' }}>
        <p
          className='titles row df font-metropolis-regular m-v-primary  center'
          style={{ lineHeight: '120%' }}
        >
          Click On Start Button to start BONE TEST
        </p>
      </div>
      <Button
        variant='contained'
        onClick={() => {
          navigate(rootUrl + '/step/bone/5')
        }}
        className='row p-primary'
        color='secondary'
      >
        Start
      </Button>
    </>
  )
}
export default EarTestFinishAndBoneStart
