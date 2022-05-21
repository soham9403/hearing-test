import { Button} from '@mui/material'

import {  useNavigate } from 'react-router'
import CustomButton from '../components/CustomButton'
import { rootUrl } from '../routes/RouteIndex'

const EarTestFinishAndBoneStart = () => {
  
  
  
  
  const navigate = useNavigate()
  return (
    <>
      <div className='small_container'>
        
      </div>
      <h1 className='sub-heading mt-1 df h2 bold-2 row center font-intern'>
        YOUR EAR TEST IS FINISHED
      </h1>
      
      <h1 className='sub-heading mt-1 df h4 text-2-primary mb-1 bold-2 row center font-intern'>
      Click On Start Button to start BONE TEST
      </h1>
     
      <div className='small_container'>
      <CustomButton
        
        onClick={() => {
          navigate(rootUrl + '/step/bone/5')
        }}
       
        
        text="Start"
      >
        
      </CustomButton>
      </div>
    </>
  )
}
export default EarTestFinishAndBoneStart
