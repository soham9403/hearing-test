import { Button } from '@mui/material'

import { useNavigate } from 'react-router'
import CustomButton from '../components/CustomButton'
import CustomStepper from '../components/CustomStepper'
import { rootUrl } from '../routes/RouteIndex'
import Step1 from '../assets/images/v2/step-1-active.png'
import Step2 from '../assets/images/v2/step-2.png'
import Step2Active from '../assets/images/v2/step-2-active.png'
import Step3 from '../assets/images/v2/step-3.png'
import Step3Active from '../assets/images/v2/step-3-active.png'

const EarTestFinishAndBoneStart = () => {


  const steps = [{
    img: Step1,
    activeImg: Step1,
    text: 'SOUND&nbsp;TEST'
  }, {
    img: Step2,
    activeImg: Step2Active,
    text: 'SPEECH&nbsp;TEST'
  }, {
    img: Step3,
    activeImg: Step3Active,
    text: '&nbsp;&nbsp;&nbsp;&nbsp;RESULTS&nbsp;&nbsp;&nbsp;&nbsp;'
  }]

  const navigate = useNavigate()
  return (
    <>
      <div className='small_container'>
        <div className='df row mt-1 '>
          

          <CustomStepper steps={steps} activeStep={0} />
        </div>
      </div>
      <h1 className='sub-heading mt-1 df h2 bold-2 row center font-intern'>
        YOUR EAR TEST IS FINISHED
      </h1>

      <h1 className='sub-heading  mt-1 df h4 text-2-primary mb-1 bold-1 row center font-intern'>
        Now wear the Bone Conduction Device and <br /> press start button to begin BC test
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
