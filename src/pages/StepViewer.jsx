import { Button, Step, StepLabel, Stepper } from '@mui/material'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import CustomStepper from '../components/CustomStepper'
import { rootUrl } from '../routes/RouteIndex'
import Step1 from '../assets/images/v2/step-1-active.png'
import Step2 from '../assets/images/v2/step-2.png'
import Step2Active from '../assets/images/v2/step-2-active.png'
import Step3 from '../assets/images/v2/step-3.png'
import Step3Active from '../assets/images/v2/step-3-active.png'
import CustomButton from '../components/CustomButton'

const StepViewer = () => {
  // const steps = ['SOUND TEST', 'SPEECH TEST', 'RESULTS']
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
  const location = useLocation()
  const { personalIntrest } = useSelector(state => state)
  const step = location.pathname.split('/')[
    location.pathname.split('/').length - 1
  ]
  const navigate = useNavigate()
  return (
    <>
      <div className='small_container'>
        <div className='df row mt-1 '>
          {/* <Stepper
            activeStep={step == 4 ? 0 : 1}
            className={'row'}
            alternativeLabel
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}

          <CustomStepper steps={steps} activeStep={step == 4 ? 0 : 1} />
        </div>
      </div>
      {step == 4 ? (
        <>
          <h1 className='h2 container center font-intern mt-1 mb-1'>
            SOUND FREQUENCY TEST
          </h1>
        </>
      ) : (
        <h1 className='h2 container center font-intern mt-1 mb-1'>
          SOUND SPEECH TEST
        </h1>
      )}
      <div className='container mb-1' style={{ marginTop: '0px' }}>
        {step == 4 ? (
          <p
            className='h4 bold-2 text-2-primary center font-intern'
            style={{ lineHeight: '120%' }}
          >
            In next test different frequencies will be played, you have to
            <br />click  on Yes or No based on weather you are able to hear sound or not. 
            <br  />
            {/* you have to set the
            volume from bar when you can hear the sound/ tones barely.  */}
            <div className="mt-3">


            This test
            will calculate how your ears respond to different frequencies.
            </div>
          </p>
        ) : (
          <p
            className='h4 bold-2 text-2-primary center font-intern'
            style={{ lineHeight: '120%' }}
          >
            In the next test you will hear combination of 3 numbers along <br />
             with
            the background noise, you have to write those numbers in box.
            
            <span className='df mt-3 center'> This
            will test your ear’s ability to hear human speech in noisy
            environment.</span> 
          </p>
        )}
      </div>
      <div className='small_container m-v-secondary'>
        {step == 4 ? (
          <CustomButton
            text={'Start'}
            onClick={() => {
              personalIntrest.test_mode == 'bone'
                ? navigate(rootUrl + '/step/bone/5')
                : navigate(rootUrl + '/step/5')
            }}

            color='secondary'
          >
            Start
          </CustomButton>
        ) : (
          <>
            <div className='df row mt-3'>
              <div className='df flex-1 mr-3'>
                <CustomButton
                  text={'Start'}
                  onClick={() => {
                    navigate(rootUrl + '/step/7')
                  }}

                  color='secondary'
                >
                  Start
                </CustomButton>
              </div>
              <div className='df flex-1 mr-3'>
                <CustomButton
                  text={'Skip'}
                  onClick={() => {
                    navigate(rootUrl + '/step/result')
                  }}

                  color='secondary'
                />

              </div>






            </div>
          </>
        )}
      </div>
    </>
  )
}
export default StepViewer
