import { Button, CircularProgress, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import '../assets/css/result.css'
import HearingTestSymbol from '../components/svgs/HearingTestSymbol'
import ResultTabBox from './ResultTabBox'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Dot
} from 'recharts'
import { useEffect, useRef, useState } from 'react'
import CircularProgressBar from '../components/CircularProgressBar'
import Hexagon from '../components/svgs/Heaaxgon'
// import { GoogleSpreadsheet } from 'google-spreadsheet'
import SheetCred from '../config/spreadsheet.json'
import axios from 'axios'
import { getGraphText } from '../components/getGraphText'
const Result = () => {
  const personalDetails = useSelector(state => {
    return state.personalDetails
  })
  const personalIntrest = useSelector(state => {
    return state.personalIntrest
  })
  const [phi, setPhi] = useState(0)
  const language = useSelector(state => {
    return state.language
  })
  const earTestData = useSelector(state => {
    return state.earTest
  })

  const [states, setStates] = useState({ stateL: 1, stateR: 1 })
  const CustomDot = props => {
    const { cx, cy } = props

    return (
      <path
        cx={cx - 10}
        cy={cy - 10}
        style={{
          transform: 'translate(' + (cx - 10) + 'px,' + (cy - 10) + 'px)'
        }}
        xmlns='http://www.w3.org/2000/svg'
        d='M20.5 2.5L18.75 0.75L10.5 9L2.25 0.75L0.5 2.5L8.75 10.75L0.5 19L2.25 20.75L10.5 12.5L18.75 20.75L20.5 19L12.25 10.75L20.5 2.5Z'
        fill='#fff'
      />
    )
  }
  const CustomBoneLEftDot = props => {
    const { cx, cy } = props

    return (
      // <path
      //   cx={cx - 10}
      //   cy={cy - 10}
      //   style={{
      //     transform: 'translate(' + (cx - 10) + 'px,' + (cy - 10) + 'px)'
      //   }}
      //   xmlns='http://www.w3.org/2000/svg'
      //   d='M20.5 2.5L18.75 0.75L10.5 9L2.25      0.5L18.75 20.75L20.5 19L12.25 10.75L20.5 2.5Z'
      //   fill='#fff'
      // />

      <path
        cx={cx - 10}
        cy={cy - 10}
        style={{
          transform: 'translate(' + (cx - 10) + 'px,' + (cy - 11) + 'px)'
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill='#fff'
        d='M 13.83 19 a 1 1 0 0 1 -0.78 -0.37 l -4.83 -6 a 1 1 0 0 1 0 -1.27 l 5 -6 a 1 1 0 0 1 1.54 1.28 L 10.29 12 l 4.32 5.36 a 1 1 0 0 1 -0.78 1.64 Z'
      />
    )
  }
  const CustomBoneRightDot = props => {
    const { cx, cy } = props

    return (
      <path
        cx={cx - 10}
        cy={cy - 10}
        style={{
          transform: 'translate(' + (cx - 15) + 'px,' + (cy - 12) + 'px) '
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill='#fff'
        d='M 15.54 11.29 L 9.88 5.64 a 1 1 0 0 0 -1.42 0 a 1 1 0 0 0 0 1.41 l 4.95 5 L 8.46 17 a 1 1 0 0 0 0 1.41 a 1 1 0 0 0 0.71 0.3 a 1 1 0 0 0 0.71 -0.3 l 5.66 -5.65 A 1 1 0 0 0 15.54 11.29 Z'
      />
    )
  }

  const initialize = () => {
    let comparisonMatrix = [
      [
        13,
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86,
        90
      ],
      [
        13,
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86,
        90
      ],
      [
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86,
        90,
        92
      ],
      [
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86,
        90,
        92
      ],
      [
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86,
        90,
        92
      ],
      [
        13,
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86,
        90
      ],
      [
        12,
        13,
        15,
        18,
        21,
        25,
        27,
        30,
        35,
        39,
        44,
        50,
        55,
        59,
        67,
        74,
        78,
        81,
        84,
        86
      ]
    ]

    let leftAge = 0
    let rightAge = 0
    const leftData =
      personalIntrest.test_mode == 'bone' ? dataBONELeft : dataLeft
    const rightData =
      personalIntrest.test_mode == 'bone' ? dataBONERight : dataRight
    var normalL = 0,
      moderateL = 0,
      severeL = 0
    var normalR = 0,
      moderateR = 0,
      severeR = 0

    for (var i = 0; i < 7; i++) {
      var dbValLeft = leftData[i].uv / 5 - 1
      var dbValRight = rightData[i].uv / 5 - 1
      if (leftData[i].uv < 30) {
        normalL++
      } else if (leftData[i].uv < 70) {
        moderateL++
      } else {
        severeL++
      }

      if (rightData[i].uv < 30) {
        normalR++
      } else if (rightData[i].uv < 70) {
        moderateR++
      } else {
        severeR++
      }

      leftAge += comparisonMatrix[i][dbValLeft]
      rightAge += comparisonMatrix[i][dbValRight]
    }

    let ageLeft = Math.round(leftAge / 7)
    let ageRight = Math.round(rightAge / 7)
    let phiLeft = 60 - (ageLeft - parseInt(personalDetails.age)) * 2
    let phiRight = 60 - (ageRight - parseInt(personalDetails.age)) * 2
    let phitotal = (phiLeft + phiRight) / 2
    let earLossAgeLeft = 64 - (60 - phiLeft) / 2
    let earLossAgeRight = 64 - (60 - phiRight) / 2
    var stateR = 0
    var stateL = 0

    // this.setState({ "setState": "working" })

    if (normalL > moderateL && normalL > severeL) {
      stateL = 1
    } else if (moderateL > normalL && moderateL > severeL) {
      stateL = 2
    } else if (severeL > normalL && severeL > moderateL) {
      stateL = 3
    }

    if (normalR > moderateR && normalR > severeR) {
      stateR = 1
    } else if (moderateR > normalR && moderateR > severeR) {
      stateR = 2
    } else if (severeR > normalR && severeR > moderateR) {
      stateR = 3
    }
    sendReqToaddRow()
    setStates({ stateL: stateL, stateR: stateR })
    setPhi(phitotal)
  }
  const ref = useRef(null)
  const getColor = sideState => {
    switch (sideState) {
      case 1: {
        return 'rgba(21,237,165,0.7)'
      }
      case 2: {
        return 'rgba(224,205,62,0.6)'
      }
      case 3: {
        return 'rgba(237,36,36,0.7)'
      }
    }
  }

  const sendReqToaddRow = async () => {
    const data = {
      snr: earTestData.snr,
      email: personalDetails.email,
      name: personalDetails.name,
      age: personalDetails.age,
      gender: personalDetails.gender,
      device: personalIntrest.device_selected == 'headphone' ? 1 : 0,
      usage: personalIntrest.selected_hours_of_use,
      F1L: earTestData.F1L,
      F1R: earTestData.F1R,
      F2L: earTestData.F2L,
      F2R: earTestData.F2R,
      F3L: earTestData.F3L,
      F3R: earTestData.F3R,
      F4L: earTestData.F4L,
      F4R: earTestData.F4R,
      F5L: earTestData.F5L,
      F5R: earTestData.F5R,
      F6L: earTestData.F6L,
      F6R: earTestData.F6R,
      F7L: earTestData.F7L,
      F7R: earTestData.F7R,
      bone_F1L: earTestData.bone_F1L,
      bone_F1R: earTestData.bone_F1R,
      bone_F2L: earTestData.bone_F2L,
      bone_F2R: earTestData.bone_F2R,
      bone_F3L: earTestData.bone_F3L,
      bone_F3R: earTestData.bone_F3R,
      bone_F4L: earTestData.bone_F4L,
      bone_F4R: earTestData.bone_F4R,
      bone_F5L: earTestData.bone_F5L,
      bone_F5R: earTestData.bone_F5R,
      bone_F6L: earTestData.bone_F6L,
      bone_F6R: earTestData.bone_F6R,
      bone_F7L: earTestData.bone_F7L,
      bone_F7R: earTestData.bone_F7R
    }

    return await axios({
      url:
        'https://lychee-crisp-08059.herokuapp.com/' +
        'api/hearing-test/add-row',
      method: 'post',
      data: data
    })
  }
  const getAverage = (data)=>{
    let count = 0;
    let sum = 0;
    for(let row of data){
      sum = sum + parseFloat(row.uv)
      count++;
    }
    return (sum/count)
  }
  const LeftRightComponent = props => {
    return (
      <>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div
              className='df center fit-content chart-container p-primary'
              style={{ minHeight: '500px', paddingRight: '30px' }}
            >
              {
                <ResponsiveContainer width='100%' height='85%' className='row'>
                  <AreaChart
                    data={props.isLeft ? dataLeft : dataRight}
                    baseValue={100}
                    baseLine={0}
                  >
                    <defs>
                      <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                        <stop
                          offset='5%'
                          stopColor={getColor(
                            props.isLeft ? states.stateL : states.stateR
                          )}
                          stopOpacity={0.8}
                        />
                        <stop
                          offset='95%'
                          stopColor='#FFFFFF'
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke='#FFFFFF' strokeOpacity={0.5} />

                    <XAxis dataKey='name' tickCount='7' stroke='#FFFFFF' />
                    <YAxis
                      reversed='true'
                      ticks={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]}
                      minTickGap={1}
                      tickCount='11'
                      stroke='#FFFFFF'
                    />

                    {(personalIntrest.test_mode == 'ear' ||
                      personalIntrest.test_mode == 'both') && (
                      <Area
                        type={'linear'}
                        dataKey='uv'
                        isAnimationActive={false}
                        stroke='white'
                        fillOpacity={0.8}
                        fill='url(#colorUv)'
                        strokeOpacity={1}
                        dot={props.isLeft ? <CustomDot /> : { r: 5 }}
                      />
                    )}
                    {(personalIntrest.test_mode == 'bone' ||
                      personalIntrest.test_mode == 'both') && (
                      <Area
                        type={'linear'}
                        dataKey='bone_uv'
                        isAnimationActive={false}
                        stroke='white'
                        fillOpacity={0.8}
                        fill='url(#colorUv)'
                        strokeOpacity={1}
                        dot={
                          props.isLeft ? (
                            <CustomBoneLEftDot />
                          ) : (
                            <CustomBoneRightDot />
                          )
                        }
                      />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              }
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='df center fit-content column p-primary'>
              {getGraphText(props.isLeft ? states.stateL : states.stateR)}
              <ul
                style={{ justifyContent: 'flex-start' }}
                className='df  row p-primary '
              >
                {(personalIntrest.test_mode == 'bone' ||
                  personalIntrest.test_mode == 'both') && (
                  <div className='flex-1 df column'>
                    <h3
                      className=' row df center titles font-metropolis-bold txt-primary p-v-primary'
                      style={{}}
                    >
                      Bone Average
                    </h3>
                    <span className='description  row p-v-primary font-metropolis-regular txt-primary'>
                      {getAverage(props.isLeft?dataBONELeft:dataBONERight)}
                    </span>
                  </div>
                )}
                {(personalIntrest.test_mode == 'ear' ||
                  personalIntrest.test_mode == 'both') && (
                  <div className='flex-1 df column'>
                    <h3
                      className=' row df center titles font-metropolis-bold txt-primary p-v-primary'
                      style={{}}
                    >
                      Ear Average
                    </h3>
                    <span className='description  row p-v-primary font-metropolis-regular txt-primary'>
                      {getAverage(props.isLeft?dataLeft :dataRight)}
                    </span>
                  </div>
                )}
              </ul>
            </div>
          </Grid>
          {/* <h1 style={{height:"10px",widht:"10px",background:"red"}} ref={ref}></h1> */}
        </Grid>
      </>
    )
  }

  useEffect(() => {
    initialize()
  }, [])
  const dataLeft = [
    {
      name: '250',
      uv: earTestData.F1L,
      bone_uv: earTestData.bone_F1L
    },
    {
      name: '500',
      uv: earTestData.F2L,
      bone_uv: earTestData.bone_F2L
    },
    {
      name: '1K',
      uv: earTestData.F3L,
      bone_uv: earTestData.bone_F3L
    },
    {
      name: '2K',
      uv: earTestData.F4L,
      bone_uv: earTestData.bone_F4L
    },
    {
      name: '3K',
      uv: earTestData.F5L,
      bone_uv: earTestData.bone_F5L
    },
    {
      name: '5K',
      uv: earTestData.F6L,
      bone_uv: earTestData.bone_F6L
    },
    {
      name: '8K',
      uv: earTestData.F7L,
      bone_uv: earTestData.bone_F7L
    }
  ]

  const dataRight = [
    {
      name: '250',
      uv: earTestData.F1R,
      bone_uv: earTestData.bone_F1R
    },
    {
      name: '500',
      uv: earTestData.F2R,
      bone_uv: earTestData.bone_F2R
    },
    {
      name: '1K',
      uv: earTestData.F3R,
      bone_uv: earTestData.bone_F3R
    },
    {
      name: '2K',
      uv: earTestData.F4R,
      bone_uv: earTestData.bone_F4R
    },
    {
      name: '3K',
      uv: earTestData.F5R,
      bone_uv: earTestData.bone_F5R
    },
    {
      name: '5K',
      uv: earTestData.F6R,
      bone_uv: earTestData.bone_F6R
    },
    {
      name: '8K',
      uv: earTestData.F7R,
      bone_uv: earTestData.bone_F7R
    }
  ]

  const dataBONELeft = [
    {
      name: '250',
      uv: earTestData.bone_F1L
    },
    {
      name: '500',
      uv: earTestData.bone_F2L
    },
    {
      name: '1K',
      uv: earTestData.bone_F3L
    },
    {
      name: '2K',
      uv: earTestData.bone_F4L
    },
    {
      name: '3K',
      uv: earTestData.bone_F5L
    },
    {
      name: '5K',
      uv: earTestData.bone_F6L
    },
    {
      name: '8K',
      uv: earTestData.bone_F7L
    }
  ]

  const dataBONERight = [
    {
      name: '250',
      uv: earTestData.bone_F1R
    },
    {
      name: '500',
      uv: earTestData.bone_F2R
    },
    {
      name: '1K',
      uv: earTestData.bone_F3R
    },
    {
      name: '2K',
      uv: earTestData.bone_F4R
    },
    {
      name: '3K',
      uv: earTestData.bone_F5R
    },
    {
      name: '5K',
      uv: earTestData.bone_F6R
    },
    {
      name: '8K',
      uv: earTestData.bone_F7R
    }
  ]
  return (
    <>
      <div
        className='df bg-primary row column row-center p-primary'
        style={{ minHeight: '100vh' }}
      >
        <div className='row p-primary border-secondary container-max radius-primary m-v-primary'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className='fit-content df center'>
                <HearingTestSymbol isWhite={true} />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container rowSpacing={2} columnSpacing={1}>
                <Grid item xs={12} md={6}>
                  <span className='description font-metropolis-bold txt-primary'>
                    Name:
                  </span>
                  :
                  <span className='description font-metropolis-regular txt-primary'>
                    {personalDetails.name}
                  </span>
                </Grid>
                <Grid item xs={12} md={6}>
                  <span className='description font-metropolis-bold txt-primary'>
                    Gender:
                  </span>
                  :
                  <span className='description font-metropolis-regular txt-primary'>
                    {personalDetails.gender}
                  </span>
                </Grid>
                <Grid item xs={12} md={6}>
                  <span className='description font-metropolis-bold txt-primary'>
                    Age:
                  </span>
                  :
                  <span className='description font-metropolis-regular txt-primary'>
                    {personalDetails.age}
                  </span>
                </Grid>
                <Grid item xs={12} md={6}>
                  <span className='description font-metropolis-bold txt-primary'>
                    Test Mode:
                  </span>
                  :
                  <span className='description font-metropolis-regular txt-primary'>
                    {personalIntrest.device_selected.toUpperCase()}
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div className='row p-primary  container-max radius-primary m-v-primary'>
          <ResultTabBox
            leftComponent={<LeftRightComponent isLeft={true} />}
            rightComponent={<LeftRightComponent />}
          />
        </div>
        <div className='row p-primary  container-max radius-primary m-v-primary'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className='p-primary column df border-secondary row-center fit-content radius-primary'>
                <div className='row df center p-primary'>
                  <CircularProgressBar
                    size='200'
                    progress={Math.round((earTestData.snr * 100) / 12)}
                    strokeWidth={10}
                    circleOneStroke='#606060'
                    circleTwoStroke='#09AD18'
                    text='SNR'
                    marginLeft='auto'
                    marginRight='auto'
                    marginTop='auto'
                  />
                </div>
                <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary'>
                  What is SNR ?
                </h3>
                <p
                  className='description  row font-metropolis-thin txt-primary p-primary df center'
                  style={{ lineHeight: '130%' }}
                >
                  SNR stands for Signal to noise ratio, which shows how well
                  your ears are listening to useful sounds from different level
                  of noises. SNR number ranges from 0 to 100, higher number
                  shows that your ears are better in separating useful sounds
                  from surrounding or White noises. Any number more than 75%
                  shows best response of ears. Number between 50 to 75% shows
                  that your ears needs attention and should minimise usage of
                  earphones. Any number below 50 suggests you need to consult
                  with audiologist and take care of your ears.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='p-primary column df border-secondary fit-content radius-primary df row-center'>
                <Hexagon
                  value={phi}
                  text='PHI'
                  height={200}
                  width={200}
                ></Hexagon>
                <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary'>
                  What is PHI ?
                </h3>
                <p
                  className='description  row font-metropolis-thin txt-primary p-primary df center'
                  style={{ lineHeight: '130%' }}
                >
                  PHI (Personal Hearing Intelligence) is the smart state of the
                  art algorithm that monitors your hearing patterns and gives
                  you very useful insights for your hearing care. This algorithm
                  calculates estimated hearing loss age and your current ear age
                  based on your hearing patterns and also gives you personalized
                  hearing care tips and suggestions and provides complete
                  hearing care package powered by machine learning algorithms.
                </p>
                <div
                  className='df row m-v-secondary'
                  style={{ marginBottom: '0px' }}
                >
                  <Button
                    className='df row'
                    variant='contained'
                    onClick={() => {
                      window.location.href = 'https://www.wehear.in/phi/'
                    }}
                    color='secondary'
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
export default Result
