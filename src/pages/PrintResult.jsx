
import { Button, CircularProgress, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import '../assets/css/result.css'
import Logo from '../assets/images/v2/logo.png'
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
const PrintResult = (props) => {
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

  const [states, setStates] = useState({ stateL: 1, stateR: 1, stateBoneL: 1, stateBoneR: 1 })
  const CustomDot = props => {
    const { cx, cy } = props
    if (props.isCircle)
      return (
        <path cx={cx - 5} cy={cy - 5} opacity={props.opacity ? props.opacity : 1} style={{
          transform: 'translate(' + (cx - 5) + 'px,' + (cy - 5) + 'px)'
        }} xmlns="http://www.w3.org/2000/svg" d="M4.69901 8.76546C3.61918 8.76546 2.58356 8.33657 1.81991 7.5731C1.05625 6.80964 0.627101 5.77413 0.626831 4.6943C0.626561 3.61446 1.05519 2.57873 1.81847 1.81489C2.58174 1.05104 3.61714 0.621634 4.69698 0.621094C5.77681 0.620554 6.81265 1.04893 7.57668 1.81201C8.34072 2.57509 8.77039 3.61039 8.7712 4.69022C8.77201 5.77006 8.34389 6.806 7.581 7.57023C6.81811 8.33445 5.78292 8.76438 4.70309 8.76546H4.69901Z"
          stroke={props.color ? props.color : '#E6234A'}
          strokeWidth={"2"}
          fill="white" />
      )
    return (
      // <path
      //   // cx={cx - 10}
      //   // cy={cy - 10}
      //   style={{
      //     transform: 'translate(' + (cx - 10) + 'px,' + (cy - 10) + 'px)'
      //   }}
      //   xmlns='http://www.w3.org/2000/svg'
      //   d='M20.5 2.5L18.75 0.75L10.5 9L2.25 0.75L0.5 2.5L8.75 10.75L0.5 19L2.25 20.75L10.5 12.5L18.75 20.75L20.5 19L12.25 10.75L20.5 2.5Z'
      //   fill='#A91674'
      // />

      <path cx={cx - 5} cy={cy - 5}  opacity={props.opacity ? props.opacity : 1} style={{
        transform: 'translate(' + (cx - 5) + 'px,' + (cy - 5) + 'px)'
      }} xmlns="http://www.w3.org/2000/svg" d="M7.90499 0.357932L4.99999 3.26309C4.03171 2.29512 3.06312 1.32621 2.09468 0.357932C0.974365 -0.76238 -0.762198 0.974807 0.357177 2.09543C1.32577 3.06309 2.29468 4.03215 3.26218 5.00043C2.29423 5.96916 1.3259 6.93749 0.357177 7.90543C-0.762198 9.02543 0.974521 10.7622 2.09468 9.64293C3.06296 8.67434 4.03155 7.70559 4.99983 6.73762L7.90483 9.64293C9.02515 10.7629 10.7622 9.02559 9.64233 7.90543C8.67374 6.93684 7.70546 5.96856 6.73655 5.00012C7.7053 4.03153 8.67358 3.06293 9.64233 2.09449C10.7623 0.974807 9.0253 -0.76238 7.90483 0.358557"
        fill={props.color ? props.color : "#A91674"} />
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
        opacity={props.opacity}
        style={{
          transform: 'translate(' + (cx - 10) + 'px,' + (cy - 11) + 'px)'
        }}
        xmlns='http://www.w3.org/2000/svg'
        fill={props.color?props.color:'#A91674'}
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
        opacity={props.opacity}
        xmlns='http://www.w3.org/2000/svg'
        fill={props.color?props.color:'#E6234A'}
        d='M 15.54 11.29 L 9.88 5.64 a 1 1 0 0 0 -1.42 0 a 1 1 0 0 0 0 1.41 l 4.95 5 L 8.46 17 a 1 1 0 0 0 0 1.41 a 1 1 0 0 0 0.71 0.3 a 1 1 0 0 0 0.71 -0.3 l 5.66 -5.65 A 1 1 0 0 0 15.54 11.29 Z'
      />
    )
  }

  const initialize = () => {


    const { stateL, stateR, phitotal } = countPhiAndState()
    const BonePhiAndStateval = countPhiAndState(true)
    setStates({ stateL: stateL, stateR: stateR, stateBoneL: BonePhiAndStateval.stateL, stateBoneR: BonePhiAndStateval.stateR })
    setPhi(phitotal)
  }
  const countPhiAndState = (isBone) => {
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
      isBone ? dataBONELeft : dataLeft
    const rightData =
      isBone ? dataBONERight : dataRight
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
    return {
      stateR,
      stateL,
      phitotal
    }
  }
  const ref = useRef(null)
  const getColor = (sideState,isMarker=false) => {
    if(isMarker){
      switch (sideState) {
        case 1: {
          return '#259104' //'rgba(21,237,165,0.7)'
        }
        case 2: {
          return '#b3a909'
        }
        case 3: {
          return '#b30707'
        }
      }
    }
    switch (sideState) {
      case 1: {
        return '#88f567' //'rgba(21,237,165,0.7)'
      }
      case 2: {
        return '#ede334'
      }
      case 3: {
        return '#f76a6a'
      }
    }
  }


  const getAverage = (data) => {
    let count = 0;
    let sum = 0;
    for (let row of data) {
      sum = sum + parseFloat(row.uv)
      count++;
    }
    return (sum / count)
  }
  const LeftRightComponent = props => {
    return (
      <>
        <div className='df column row'>

          <div className='df flex-end row-center pt-2 '>
            {(personalIntrest.test_mode == 'both' || personalIntrest.test_mode == 'ear') && <button className='df pointer row-center pl-3 pr-3 pt-4 pb-4 mr-2 border-2-primary radius-2'  >
              <span style={{ zIndex: "0" }} className='h7 font-intern df mr-3 '>{'AC'}</span>

              {props.isLeft ? <svg style={{ zIndex: "0" }} xmlns="http://www.w3.org/2000/svg" className='notation-svg' viewBox="0 0 10 10" fill="none">
                <path d="M7.90502 0.357932L5.00002 3.26309C4.03174 2.29512 3.06315 1.32621 2.09471 0.357932C0.974395 -0.76238 -0.762168 0.974807 0.357208 2.09543C1.3258 3.06309 2.29471 4.03215 3.26221 5.00043C2.29427 5.96916 1.32593 6.93749 0.357208 7.90543C-0.762168 9.02543 0.974552 10.7622 2.09471 9.64293C3.06299 8.67434 4.03158 7.70559 4.99986 6.73762L7.90487 9.64293C9.02518 10.7629 10.7622 9.02559 9.64237 7.90543C8.67377 6.93684 7.70549 5.96856 6.73658 5.00012C7.70533 4.03153 8.67362 3.06293 9.64237 2.09449C10.7624 0.974807 9.02533 -0.76238 7.90487 0.358557" fill="#A91674" />
              </svg>
                :
                <svg style={{ zIndex: "0" }} xmlns="http://www.w3.org/2000/svg" className='notation-svg' viewBox="0 0 10 10" fill="none">
                  <path d="M4.69901 8.76546C3.61918 8.76546 2.58356 8.33657 1.81991 7.5731C1.05625 6.80964 0.627101 5.77413 0.626831 4.6943C0.626561 3.61446 1.05519 2.57873 1.81847 1.81489C2.58174 1.05104 3.61714 0.621634 4.69698 0.621094C5.77681 0.620554 6.81265 1.04893 7.57668 1.81201C8.34072 2.57509 8.77039 3.61039 8.7712 4.69022C8.77201 5.77006 8.34389 6.806 7.581 7.57023C6.81811 8.33445 5.78292 8.76438 4.70309 8.76546H4.69901Z" stroke='#E6234A'
                    strokeWidth={"1"}
                    fill="white" />
                </svg>
              }    </button>}


            {(personalIntrest.test_mode == 'both' || personalIntrest.test_mode == 'bone') && <button className='df pointer row-center pt-4 pb-4 pl-3 pr-3 mr-1 border-2-primary radius-2'  >
              <span style={{ zIndex: "0" }} className='h7 font-intern df mr-3 '>{'BC'}</span>
              <svg style={{ zIndex: "0" }} className='notation-svg' viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* <CustomDot isCircle={!props.isLeft} cx={12} cy={12} /> */}
                {props.isLeft ?
                  <path d="M11.0608 19.5462C11.342 19.2649 11.5 18.8834 11.5 18.4857C11.5 18.0879 11.342 17.7065 11.0608 17.4252L3.63582 10.0002L11.0608 2.57517C11.3341 2.29227 11.4853 1.91336 11.4818 1.52007C11.4784 1.12677 11.3207 0.750555 11.0425 0.472443C10.7644 0.19433 10.3882 0.0365791 9.99492 0.0331611C9.60163 0.0297431 9.22273 0.180935 8.93982 0.454172L0.454321 8.93967C0.173114 9.22096 0.015141 9.60243 0.015141 10.0002C0.015141 10.3979 0.173114 10.7794 0.454321 11.0607L8.93982 19.5462C9.22111 19.8274 9.60257 19.9854 10.0003 19.9854C10.3981 19.9854 10.7795 19.8274 11.0608 19.5462Z" fill="#A91674" />
                  :

                  <path d="M0.93918 19.5462C0.657973 19.2649 0.5 18.8834 0.5 18.4857C0.5 18.0879 0.657973 17.7065 0.93918 17.4252L8.36418 10.0002L0.939179 2.57517C0.665942 2.29227 0.51475 1.91336 0.518167 1.52007C0.521585 1.12677 0.679339 0.750555 0.957451 0.472443C1.23556 0.19433 1.61178 0.0365791 2.00508 0.0331611C2.39837 0.0297431 2.77727 0.180935 3.06018 0.454172L11.5457 8.93967C11.8269 9.22096 11.9849 9.60243 11.9849 10.0002C11.9849 10.3979 11.8269 10.7794 11.5457 11.0607L3.06018 19.5462C2.77889 19.8274 2.39743 19.9854 1.99968 19.9854C1.60193 19.9854 1.22047 19.8274 0.93918 19.5462Z" fill="#A91674" />
                }
              </svg>
            </button>}

          </div>

          <div
            className='df  center fit-content chart-container p-primary'
            style={{ minHeight: '500px', paddingRight: '2.083vw' }}
          >
            {
              <ResponsiveContainer width='100%' height='85%' className='row'>
                <AreaChart
                  data={props.isLeft ? dataLeft : dataRight}
                  baseValue={100}
                  baseLine={0}
                >
                  <defs>
                    {/* <linearGradient id='colorUv' gradientTransform="rotate(0, 0.5, 0.5)" x1="50%" y1="10%" x2="50%" y2="100%" >
                        <stop stopColor={getColor(
                          props.isLeft ? states.stateL : states.stateR
                        )} stopOpacity="0.9" offset="0%"></stop>
                        <stop stopColor={getColor(
                          props.isLeft ? states.stateL : states.stateR
                        )} stopOpacity="0.1" offset="100%"></stop>
                      </linearGradient> */}

                    {(personalIntrest.test_mode == 'ear' ||
                      personalIntrest.test_mode == 'both') &&
                      <linearGradient id={`colorUv${props.isLeft ? 'left' : 'right'}`} gradientTransform="rotate(0, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" >



                        <stop stopColor={getColor(
                          props.isLeft ? states.stateL : states.stateR
                        )} stopOpacity="0.9" offset="10%"></stop>
                        <stop stopColor={getColor(
                          props.isLeft ? states.stateL : states.stateR
                        )} stopOpacity="0.1" offset="90%"></stop>


                      </linearGradient>}


                   

                  </defs>
                  <defs>
                  {(personalIntrest.test_mode == 'bone' ||
                      personalIntrest.test_mode == 'both') &&
                      <linearGradient id={`colorUvBone${props.isLeft ? 'left' : 'right'}`} gradientTransform="rotate(0, 0.5, 0.5)" x1="50%" y1="10%" x2="50%" y2="90%" >



                        <stop stopColor={getColor(
                          props.isLeft ? states.stateBoneL : states.stateBoneR
                        )} stopOpacity="0.9" offset="10%"></stop>
                        <stop stopColor={getColor(
                          props.isLeft ? states.stateBoneL : states.stateBoneR
                        )} stopOpacity="0.1" offset="100%"></stop>


                      </linearGradient>}
                  </defs>
                  <CartesianGrid stroke='#DEDEDE' strokeOpacity={0.5} />

                  <XAxis dataKey='name' tickCount='7' stroke='#DEDEDE' />
                  <YAxis
                    reversed='true'
                    ticks={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]}
                    minTickGap={1}

                    tickCount='11'
                    stroke='#DEDEDE'
                  />

                  {(personalIntrest.test_mode == 'ear' ||
                    personalIntrest.test_mode == 'both') && (
                      <Area
                        type={'linear'}
                        dataKey='uv'
                        style={{zIndex:"11"}}
                        isAnimationActive={false}
                        stroke={getColor(
                          props.isLeft ? states.stateL : states.stateR
                        )}
                        fillOpacity={0.1}
                        fill={`url(#colorUv${props.isLeft ? 'left' : 'right'})`}
                        strokeOpacity={1}
                        dot={props.isLeft ? <CustomDot  color={getColor(
                          props.isLeft ? states.stateL : states.stateR,true
                        )}/> : <CustomDot isCircle={true}  color={getColor(
                          props.isLeft ? states.stateL : states.stateR,true
                        )} />}
                      />
                    )}
                  {(personalIntrest.test_mode == 'bone' ||
                    personalIntrest.test_mode == 'both') && (
                      <Area
                        type={'linear'}
                        dataKey='bone_uv'
                        isAnimationActive={false}
                        stroke={getColor(
                          props.isLeft ? states.stateBoneL : states.stateBoneR
                        )}
                        
                        fillOpacity={0.1}
                        style={{zIndex:"11"}}
                        fill={`url(#colorUvBone${props.isLeft ? 'left' : 'right'})`}
                        strokeOpacity={1}
                        dot={
                          props.isLeft ? (
                            <CustomBoneLEftDot  color={getColor(
                              props.isLeft ? states.stateBoneL : states.stateBoneR,true
                            )} />
                          ) : (
                            <CustomBoneRightDot  color={getColor(
                              props.isLeft ? states.stateBoneL : states.stateBoneR,true
                            )} />
                          )
                        }
                      />
                    )}
                </AreaChart>
              </ResponsiveContainer>
            }
          </div>


          <div className='df center fit-content column p-primary'>
            {getGraphText(props.isLeft ? states.stateL : states.stateR)}
          </div>
        </div>
        {/* <h1 style={{height:"10px",widht:"10px",background:"red"}} ref={ref}></h1> */}

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

      <div className='df row result-box bg-2-light df column row-center' style={{ overflowX: "hidden" }}>
        <div className='container border-2-primary mt-2 border-2-primary-thin radius-0 pl-1 pr-1 pt-2 pb-2 mb-2'>
          <div className="df row row-center" style={{ flexWrap: "wrap" }}>
            <div className="flex-1  df column row-center">
              <div className='df row row-center mb-3'>
                <span className='text-2-primary font-intern h5 df flex-1 bold-1'>Name : </span><span className='text-2-primary font-intern h5 df flex-2 bold-2'>{personalDetails.name}</span>
              </div>
              <div className='df row row-center mb-3'>
                <span className='text-2-primary font-intern h5 df flex-1 bold-1'>Age : </span><span className='text-2-primary font-intern h5 df flex-2 bold-2'>{personalDetails.age}</span>
              </div>
            </div>
            <div className="flex-1  df column row-center">
              <div className='df row row-center mb-3'>
                <span className='text-2-primary font-intern h5 df flex-1 bold-1'>Gender : </span><span className='text-2-primary font-intern h5 df flex-2 bold-2'>{personalDetails.gender}</span>
              </div>
              <div className='df row row-center mb-3'>
                <span className='text-2-primary font-intern h5 df flex-1 bold-1'>Test&nbsp;Mode&nbsp;:&nbsp; </span><span className='text-2-primary font-intern h5 df flex-2 bold-2'>{personalIntrest.device_selected.toUpperCase()}</span>
              </div>
            </div>

            <div className="flex-1  df column row-center">
              <img src={Logo} className='row' style={{ width: "150px" }} alt="" />
            </div>

          </div>
        </div>

        <div className='container  column df border-2-primary border-2-primary-thin radius-0 pl-1 pr-1 pt-2 pb-2 mb-2'>
          <div className='df row'>
            <div className='df border-2-primary flex-1 column row-center' style={{ borderLeft: "none", borderTop: "none", borderBottom: "none" }}>
              <div className='df  row center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='ear-svg' viewBox="0 0 34 42" fill="none">
                  <path d="M28.25 25.5C28.25 26.8924 27.6969 28.2277 26.7123 29.2123C25.7277 30.1969 24.3924 30.75 23 30.75C21.6076 30.75 20.2723 30.1969 19.2877 29.2123C18.3031 28.2277 17.75 26.8924 17.75 25.5C17.75 22.5562 19.4938 21.0562 20.9 19.8563C22.3063 18.6562 23 17.9813 23 16.5C23 14.9087 22.3679 13.3826 21.2426 12.2574C20.1174 11.1321 18.5913 10.5 17 10.5C15.4087 10.5 13.8826 11.1321 12.7574 12.2574C11.6321 13.3826 11 14.9087 11 16.5C11 16.8978 10.842 17.2794 10.5607 17.5607C10.2794 17.842 9.89782 18 9.5 18C9.10218 18 8.72064 17.842 8.43934 17.5607C8.15804 17.2794 8 16.8978 8 16.5C8 14.1131 8.94821 11.8239 10.636 10.136C12.3239 8.44821 14.6131 7.5 17 7.5C19.3869 7.5 21.6761 8.44821 23.364 10.136C25.0518 11.8239 26 14.1131 26 16.5C26 19.4438 24.2562 20.9438 22.85 22.1438C21.4437 23.3438 20.75 24.0187 20.75 25.5C20.75 26.0967 20.9871 26.669 21.409 27.091C21.831 27.5129 22.4033 27.75 23 27.75C23.5967 27.75 24.169 27.5129 24.591 27.091C25.0129 26.669 25.25 26.0967 25.25 25.5C25.25 25.1022 25.408 24.7206 25.6893 24.4393C25.9706 24.158 26.3522 24 26.75 24C27.1478 24 27.5294 24.158 27.8107 24.4393C28.092 24.7206 28.25 25.1022 28.25 25.5ZM17 0C12.6255 0.00496262 8.43149 1.74494 5.33822 4.83822C2.24494 7.93149 0.504963 12.1255 0.5 16.5C0.5 22.7812 2.84375 25.0312 4.71875 26.85C6.18125 28.2562 7.25 29.2875 7.25 32.25C7.25022 34.2574 7.87008 36.2159 9.02491 37.8579C10.1798 39.4999 11.8133 40.7454 13.7024 41.4244C15.5916 42.1033 17.6442 42.1826 19.5801 41.6513C21.516 41.1201 23.2407 40.0043 24.5188 38.4563C24.769 38.1465 24.8875 37.751 24.849 37.3547C24.8104 36.9584 24.6177 36.5931 24.3125 36.3375C24.1617 36.2118 23.9874 36.1173 23.7997 36.0596C23.612 36.0018 23.4147 35.982 23.2193 36.0012C23.0239 36.0204 22.8343 36.0782 22.6614 36.1714C22.4886 36.2645 22.336 36.3911 22.2125 36.5437C21.3286 37.6181 20.1343 38.3931 18.793 38.7626C17.4518 39.1322 16.0291 39.0783 14.7196 38.6083C13.4102 38.1383 12.278 37.2751 11.4779 36.137C10.6778 34.9988 10.2489 33.6412 10.25 32.25C10.25 28.0125 8.4125 26.25 6.8 24.675C5.1875 23.1 3.5 21.5063 3.5 16.5C3.5 12.9196 4.92232 9.4858 7.45406 6.95406C9.9858 4.42232 13.4196 3 17 3C20.5804 3 24.0142 4.42232 26.5459 6.95406C29.0777 9.4858 30.5 12.9196 30.5 16.5C30.5 16.8978 30.658 17.2794 30.9393 17.5607C31.2206 17.842 31.6022 18 32 18C32.3978 18 32.7794 17.842 33.0607 17.5607C33.342 17.2794 33.5 16.8978 33.5 16.5C33.495 12.1255 31.7551 7.93149 28.6618 4.83822C25.5685 1.74494 21.3745 0.00496262 17 0Z" fill="url(#paint0_linear_69_864)" />
                  <defs>
                    <linearGradient id="paint0_linear_69_864" x1="-3.5" y1="-33" x2="38" y2="59" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A91674" />
                      <stop offset="1" stop-color="#E6234A" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className='center text-2-primary font-intern h5 ml-3 df  bold-2'>Left Ear</h1>
              </div>
              <div className='df column row'>
                <LeftRightComponent isLeft={true} />
              </div>
            </div>
            <div className='df flex-1 column row-center'>
              <div className='df row center'>

                <h1 className='center text-2-primary font-intern h5 df mr-3  bold-2'>Right Ear</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className='ear-svg' viewBox="0 0 34 42" fill="none">
                  <path d="M5.75 25.5C5.75 26.8924 6.30312 28.2277 7.28769 29.2123C8.27225 30.1969 9.60761 30.75 11 30.75C12.3924 30.75 13.7277 30.1969 14.7123 29.2123C15.6969 28.2277 16.25 26.8924 16.25 25.5C16.25 22.5562 14.5062 21.0562 13.1 19.8563C11.6937 18.6562 11 17.9813 11 16.5C11 14.9087 11.6321 13.3826 12.7574 12.2574C13.8826 11.1321 15.4087 10.5 17 10.5C18.5913 10.5 20.1174 11.1321 21.2426 12.2574C22.3679 13.3826 23 14.9087 23 16.5C23 16.8978 23.158 17.2794 23.4393 17.5607C23.7206 17.842 24.1022 18 24.5 18C24.8978 18 25.2794 17.842 25.5607 17.5607C25.842 17.2794 26 16.8978 26 16.5C26 14.1131 25.0518 11.8239 23.364 10.136C21.6761 8.44821 19.3869 7.5 17 7.5C14.6131 7.5 12.3239 8.44821 10.636 10.136C8.94821 11.8239 8 14.1131 8 16.5C8 19.4438 9.74375 20.9438 11.15 22.1438C12.5563 23.3438 13.25 24.0187 13.25 25.5C13.25 26.0967 13.0129 26.669 12.591 27.091C12.169 27.5129 11.5967 27.75 11 27.75C10.4033 27.75 9.83097 27.5129 9.40901 27.091C8.98705 26.669 8.75 26.0967 8.75 25.5C8.75 25.1022 8.59197 24.7206 8.31066 24.4393C8.02936 24.158 7.64783 24 7.25 24C6.85217 24 6.47064 24.158 6.18934 24.4393C5.90803 24.7206 5.75 25.1022 5.75 25.5ZM17 0C21.3745 0.00496262 25.5685 1.74494 28.6618 4.83822C31.7551 7.93149 33.495 12.1255 33.5 16.5C33.5 22.7812 31.1562 25.0312 29.2812 26.85C27.8187 28.2562 26.75 29.2875 26.75 32.25C26.7498 34.2574 26.1299 36.2159 24.9751 37.8579C23.8202 39.4999 22.1867 40.7454 20.2976 41.4244C18.4084 42.1033 16.3558 42.1826 14.4199 41.6513C12.484 41.1201 10.7593 40.0043 9.48125 38.4563C9.23105 38.1465 9.11247 37.751 9.15104 37.3547C9.18962 36.9584 9.38226 36.5931 9.6875 36.3375C9.83833 36.2118 10.0126 36.1173 10.2003 36.0596C10.388 36.0018 10.5853 35.982 10.7807 36.0012C10.9761 36.0204 11.1657 36.0782 11.3386 36.1714C11.5114 36.2645 11.664 36.3911 11.7875 36.5437C12.6714 37.6181 13.8657 38.3931 15.207 38.7626C16.5482 39.1322 17.9709 39.0783 19.2804 38.6083C20.5898 38.1383 21.722 37.2751 22.5221 36.137C23.3222 34.9988 23.7511 33.6412 23.75 32.25C23.75 28.0125 25.5875 26.25 27.2 24.675C28.8125 23.1 30.5 21.5063 30.5 16.5C30.5 12.9196 29.0777 9.4858 26.5459 6.95406C24.0142 4.42232 20.5804 3 17 3C13.4196 3 9.9858 4.42232 7.45406 6.95406C4.92232 9.4858 3.5 12.9196 3.5 16.5C3.5 16.8978 3.34197 17.2794 3.06066 17.5607C2.77936 17.842 2.39783 18 2 18C1.60217 18 1.22064 17.842 0.939339 17.5607C0.658035 17.2794 0.5 16.8978 0.5 16.5C0.504963 12.1255 2.24494 7.93149 5.33822 4.83822C8.43149 1.74494 12.6255 0.00496262 17 0Z" fill="url(#paint0_linear_69_860)" />
                  <defs>
                    <linearGradient id="paint0_linear_69_860" x1="37.5" y1="-33" x2="-4" y2="59" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#A91674" />
                      <stop offset="1" stop-color="#E6234A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className='df column row'>
                <LeftRightComponent />
              </div>
            </div>
          </div>




        </div>
        {(personalIntrest.test_mode == 'ear' ||
          personalIntrest.test_mode == 'both') &&
          <div className='container center column df  border-2-primary border-2-primary-thin radius-0 pl-1 pr-1 pt-2 pb-2 mb-2'>
            <h3 className='h4 font-intern text-2-primary mb-2'>AC Hearing Analysis</h3>

            <div className='df row' style={{ flexWrap: "wrap" }} >


              <div className='df flex-1 center  '>
                <div className='circle-avg-box df center border-2-primary column '>
                  <h3 className='h5 font-intern text-2-primary'>LEFT EAR</h3>
                  <span className='h6 font-intern text-2-primary'>{Math.round(getAverage(dataLeft))}dB</span>
                </div>
              </div>
              <div className='df flex-1 center  ml-2 mr-2 '>
                <div className='circle-avg-box df center border-2-primary column '>
                  <h3 className='h5 font-intern text-2-primary'>AVERAGE</h3>
                  <span className='h6 font-intern text-2-primary'>{Math.round((getAverage(dataLeft) + getAverage(dataRight)) / 2)}dB</span>
                </div>
              </div>
              <div className='df flex-1 center  '>
                <div className='circle-avg-box df center border-2-primary column '>
                  <h3 className='h5 font-intern text-2-primary'>RIGHT EAR</h3>
                  <span className='h6 font-intern text-2-primary'>{Math.round(getAverage(dataRight))}dB</span>
                </div>
              </div>
            </div>
          </div>}

        {(personalIntrest.test_mode == 'bone' ||
          personalIntrest.test_mode == 'both') && <div className='container center column df border-2-primary border-2-primary-thin radius-0 pl-1 pr-1 pt-2 pb-2 mb-2'>
            <h3 className='h4 font-intern text-2-primary mb-2'>BC Hearing Analysis</h3>

            <div className='df row' style={{ flexWrap: "wrap" }}>
              <div className='df flex-1 center  '>
                <div className='circle-avg-box df center border-2-primary column '>
                  <h3 className='h5 font-intern text-2-primary'>LEFT EAR</h3>
                  <span className='h6 font-intern text-2-primary'>{Math.round(getAverage(dataBONELeft))}dB</span>
                </div>
              </div>
              <div className='df flex-1 center  ml-2 mr-2 '>
                <div className='circle-avg-box df center border-2-primary column '>
                  <h3 className='h5 font-intern text-2-primary'>AVERAGE</h3>
                  <span className='h6 font-intern text-2-primary'>{Math.round((getAverage(dataBONELeft) + getAverage(dataBONERight)) / 2)}dB</span>
                </div>
              </div>
              <div className='df flex-1 center  '>
                <div className='circle-avg-box df center border-2-primary column '>
                  <h3 className='h5 font-intern text-2-primary'>RIGHT EAR</h3>
                  <span className='h6 font-intern text-2-primary'>{Math.round(getAverage(dataBONERight))}dB</span>
                </div>
              </div>
            </div>

          </div>}



        <div className='container row row-center  df  border-2-primary border-2-primary-thin radius-0 pl-1 pr-1 pt-2 pb-2 mb-2'>
          <div className='df pr-1 center' style={{ minWidth: '260px' }}>
            <CircularProgressBar
              size={'230'}
              progress={Math.round((earTestData.snr * 100) / 12)}
              //earTestData.snr
              strokeWidth={'15'}
              circleOneStroke='#F4F4F4'
              circleTwoStroke='#09AD18'
              text='SNR'
              marginLeft='auto'
              marginRight='auto'
              marginTop='auto'
            />
          </div>
          <div className='df flex-2 column'>
            <h1 className='borderd-text mb-3 pb-3 df row text-2-primary h2 bold-1 font-intern'>What is SNR ?</h1>
            <p className='text-2-dark h7 bold-3 font-intern' style={{ textAlign: "justify" }}>SNR stands for Signal to noise ratio, which shows how well your ears are listening to useful sounds from different level of noises. SNR number ranges from 0 to 100, higher number shows that your ears are better in separating useful sounds from surrounding or White noises. Any number more than 75% shows best response of ears. Number between 50 to 75% shows that your ears needs attention and should minimise usage of earphones. Any number below 50 suggests you need to consult with audiologist and take care of your ears.</p>

          </div>
        </div>

      </div>

      <div>


      </div>
    </>
  )
}
export default PrintResult

// import { Button, CircularProgress, Grid } from '@mui/material'
// import { useSelector } from 'react-redux'
// import '../assets/css/result.css'
// import HearingTestSymbol from '../components/svgs/HearingTestSymbol'
// import ResultTabBox from './ResultTabBox'
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LabelList,
//   Dot
// } from 'recharts'
// import { useEffect, useRef, useState } from 'react'
// import CircularProgressBar from '../components/CircularProgressBar'
// import Hexagon from '../components/svgs/Heaaxgon'
// // import { GoogleSpreadsheet } from 'google-spreadsheet'
// import SheetCred from '../config/spreadsheet.json'
// import { getGraphText } from '../components/getGraphText'
// import Logo from '../components/Logo'
// import { getTodaysDate } from '../commonfunctions/helper'

// const PrintResult = () => {
//   const personalDetails = useSelector(state => {
//     return state.personalDetails
//   })
//   const personalIntrest = useSelector(state => {
//     return state.personalIntrest
//   })
//   const [phi, setPhi] = useState(0)
//   const language = useSelector(state => {
//     return state.language
//   })
//   const earTestData = useSelector(state => {
//     return state.earTest
//   })

//   const [states, setStates] = useState({ stateL: 1, stateR: 1 })
//   const CustomDot = props => {
//     const { cx, cy } = props

//     return (
//       <path
//         cx={cx - 10}
//         cy={cy - 10}
//         style={{
//           transform: 'translate(' + (cx - 10) + 'px,' + (cy - 10) + 'px)'
//         }}
//         xmlns='http://www.w3.org/2000/svg'
//         d='M20.5 2.5L18.75 0.75L10.5 9L2.25 0.75L0.5 2.5L8.75 10.75L0.5 19L2.25 20.75L10.5 12.5L18.75 20.75L20.5 19L12.25 10.75L20.5 2.5Z'
//         fill={'rgba(0,0,0,.5)'}
//       />
//     )
//   }
//   const CustomBoneLEftDot = props => {
//     const { cx, cy } = props

//     return (
//       <path
//         cx={cx - 10}
//         cy={cy - 10}
//         style={{
//           transform: 'translate(' + (cx - 10) + 'px,' + (cy - 11) + 'px)'
//         }}
//         xmlns='http://www.w3.org/2000/svg'
//         fill='#000'
//         d='M 13.83 19 a 1 1 0 0 1 -0.78 -0.37 l -4.83 -6 a 1 1 0 0 1 0 -1.27 l 5 -6 a 1 1 0 0 1 1.54 1.28 L 10.29 12 l 4.32 5.36 a 1 1 0 0 1 -0.78 1.64 Z'
//       />
//     )
//   }
//   const CustomBoneRightDot = props => {
//     const { cx, cy } = props

//     return (
//       <path
//         cx={cx - 10}
//         cy={cy - 10}
//         style={{
//           transform: 'translate(' + (cx - 15) + 'px,' + (cy - 12) + 'px) '
//         }}
//         xmlns='http://www.w3.org/2000/svg'
//         fill='#000'
//         d='M 15.54 11.29 L 9.88 5.64 a 1 1 0 0 0 -1.42 0 a 1 1 0 0 0 0 1.41 l 4.95 5 L 8.46 17 a 1 1 0 0 0 0 1.41 a 1 1 0 0 0 0.71 0.3 a 1 1 0 0 0 0.71 -0.3 l 5.66 -5.65 A 1 1 0 0 0 15.54 11.29 Z'
//       />
//     )
//   }

//   const initialize = () => {
//     let comparisonMatrix = [
//       [
//         13,
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86,
//         90
//       ],
//       [
//         13,
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86,
//         90
//       ],
//       [
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86,
//         90,
//         92
//       ],
//       [
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86,
//         90,
//         92
//       ],
//       [
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86,
//         90,
//         92
//       ],
//       [
//         13,
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86,
//         90
//       ],
//       [
//         12,
//         13,
//         15,
//         18,
//         21,
//         25,
//         27,
//         30,
//         35,
//         39,
//         44,
//         50,
//         55,
//         59,
//         67,
//         74,
//         78,
//         81,
//         84,
//         86
//       ]
//     ]

//     let leftAge = 0
//     let rightAge = 0
//     const leftData =
//       personalIntrest.test_mode == 'bone' ? dataBONELeft : dataLeft
//     const rightData =
//       personalIntrest.test_mode == 'bone' ? dataBONERight : dataRight
//     var normalL = 0,
//       moderateL = 0,
//       severeL = 0
//     var normalR = 0,
//       moderateR = 0,
//       severeR = 0

//     for (var i = 0; i < 7; i++) {
//       var dbValLeft = leftData[i].uv / 5 - 1
//       var dbValRight = rightData[i].uv / 5 - 1
//       if (leftData[i].uv < 30) {
//         normalL++
//       } else if (leftData[i].uv < 70) {
//         moderateL++
//       } else {
//         severeL++
//       }

//       if (rightData[i].uv < 30) {
//         normalR++
//       } else if (rightData[i].uv < 70) {
//         moderateR++
//       } else {
//         severeR++
//       }

//       leftAge += comparisonMatrix[i][dbValLeft]
//       rightAge += comparisonMatrix[i][dbValRight]
//     }

//     let ageLeft = Math.round(leftAge / 7)
//     let ageRight = Math.round(rightAge / 7)
//     let phiLeft = 60 - (ageLeft - parseInt(personalDetails.age)) * 2
//     let phiRight = 60 - (ageRight - parseInt(personalDetails.age)) * 2
//     let phitotal = (phiLeft + phiRight) / 2
//     let earLossAgeLeft = 64 - (60 - phiLeft) / 2
//     let earLossAgeRight = 64 - (60 - phiRight) / 2
//     var stateR = 0
//     var stateL = 0

//     // this.setState({ "setState": "working" })

//     if (normalL > moderateL && normalL > severeL) {
//       stateL = 1
//     } else if (moderateL > normalL && moderateL > severeL) {
//       stateL = 2
//     } else if (severeL > normalL && severeL > moderateL) {
//       stateL = 3
//     }

//     if (normalR > moderateR && normalR > severeR) {
//       stateR = 1
//     } else if (moderateR > normalR && moderateR > severeR) {
//       stateR = 2
//     } else if (severeR > normalR && severeR > moderateR) {
//       stateR = 3
//     }
//     setStates({ stateL: stateL, stateR: stateR })
//     setPhi(phitotal)
//   }
//   const ref = useRef(null)
//   const getColor = sideState => {
//     switch (sideState) {
//       case 1: {
//         return 'rgba(21,237,165,0.7)'
//       }
//       case 2: {
//         return 'rgba(224,205,62,0.6)'
//       }
//       case 3: {
//         return 'rgba(237,36,36,0.7)'
//       }
//     }
//   }
//   useEffect(() => {
//     console.log(ref.current)
//   }, [ref])

//   const LeftRightComponent = props => {
//     return (
//       <>
//         <div
//           className='df row m-v-primary'
//           style={{ height: '500px', paddingRight: '20px' }}
//         >
//           <ResponsiveContainer width='100%' height='85%' className='row'>
//             <AreaChart
//               data={props.isLeft ? dataLeft : dataRight}
//               baseValue={100}
//               baseLine={0}
//             >
//               <defs>
//                 <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
//                   <stop
//                     offset='5%'
//                     stopColor={getColor(
//                       props.isLeft ? states.stateL : states.stateR
//                     )}
//                     stopOpacity={0.8}
//                   />
//                   <stop
//                     offset='95%'
//                     stopColor={getColor(
//                       props.isLeft ? states.stateL : states.stateR
//                     )}
//                     stopOpacity={0.8}
//                   />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid stroke='#000' strokeOpacity={0.5} />

//               <XAxis dataKey='name' tickCount='7' stroke='#000' />
//               <YAxis
//                 reversed='true'
//                 ticks={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]}
//                 minTickGap={1}
//                 tickCount='11'
//                 stroke='#000'
//               />

//               <Area
//                 type={'linear'}
//                 dataKey='uv'
//                 isAnimationActive={false}
//                 stroke='white'
//                 fillOpacity={0.8}
//                 fill='url(#colorUv)'
//                 strokeOpacity={1}
//                 dot={props.isLeft ? <CustomDot /> : { r: 5 }}
//               />
//               <Area
//                 type={'linear'}
//                 dataKey='bone_uv'
//                 isAnimationActive={false}
//                 stroke='white'
//                 fillOpacity={0.8}
//                 fill='url(#colorUv)'
//                 strokeOpacity={1}
//                 dot={
//                   props.isLeft ? <CustomBoneLEftDot /> : <CustomBoneRightDot />
//                 }
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>
//       </>
//     )
//   }

//   useEffect(() => {
//     initialize()
//   }, [])
//   const dataLeft = [
//     {
//       name: '250',
//       uv: earTestData.F1L,
//       bone_uv: earTestData.bone_F1L
//     },
//     {
//       name: '500',
//       uv: earTestData.F2L,
//       bone_uv: earTestData.bone_F2L
//     },
//     {
//       name: '1K',
//       uv: earTestData.F3L,
//       bone_uv: earTestData.bone_F3L
//     },
//     {
//       name: '2K',
//       uv: earTestData.F4L,
//       bone_uv: earTestData.bone_F4L
//     },
//     {
//       name: '3K',
//       uv: earTestData.F5L,
//       bone_uv: earTestData.bone_F5L
//     },
//     {
//       name: '5K',
//       uv: earTestData.F6L,
//       bone_uv: earTestData.bone_F6L
//     },
//     {
//       name: '8K',
//       uv: earTestData.F7L,
//       bone_uv: earTestData.bone_F7L
//     }
//   ]

//   const dataRight = [
//     {
//       name: '250',
//       uv: earTestData.F1R,
//       bone_uv: earTestData.bone_F1R
//     },
//     {
//       name: '500',
//       uv: earTestData.F2R,
//       bone_uv: earTestData.bone_F2R
//     },
//     {
//       name: '1K',
//       uv: earTestData.F3R,
//       bone_uv: earTestData.bone_F3R
//     },
//     {
//       name: '2K',
//       uv: earTestData.F4R,
//       bone_uv: earTestData.bone_F4R
//     },
//     {
//       name: '3K',
//       uv: earTestData.F5R,
//       bone_uv: earTestData.bone_F5R
//     },
//     {
//       name: '5K',
//       uv: earTestData.F6R,
//       bone_uv: earTestData.bone_F6R
//     },
//     {
//       name: '8K',
//       uv: earTestData.F7R,
//       bone_uv: earTestData.bone_F7R
//     }
//   ]

//   const dataBONELeft = [
//     {
//       name: '250',
//       uv: earTestData.bone_F1L
//     },
//     {
//       name: '500',
//       uv: earTestData.bone_F2L
//     },
//     {
//       name: '1K',
//       uv: earTestData.bone_F3L
//     },
//     {
//       name: '2K',
//       uv: earTestData.bone_F4L
//     },
//     {
//       name: '3K',
//       uv: earTestData.bone_F5L
//     },
//     {
//       name: '5K',
//       uv: earTestData.bone_F6L
//     },
//     {
//       name: '8K',
//       uv: earTestData.bone_F7L
//     }
//   ]

//   const dataBONERight = [
//     {
//       name: '250',
//       uv: earTestData.bone_F1R
//     },
//     {
//       name: '500',
//       uv: earTestData.bone_F2R
//     },
//     {
//       name: '1K',
//       uv: earTestData.bone_F3R
//     },
//     {
//       name: '2K',
//       uv: earTestData.bone_F4R
//     },
//     {
//       name: '3K',
//       uv: earTestData.bone_F5R
//     },
//     {
//       name: '5K',
//       uv: earTestData.bone_F6R
//     },
//     {
//       name: '8K',
//       uv: earTestData.bone_F7R
//     }
//   ]
//   const getAverage = data => {
//     let count = 0
//     let sum = 0
//     for (let row of data) {
//       sum = sum + parseFloat(row.uv)
//       count++
//     }
//     return sum / count
//   }
//   return (
//     <>
//       <div
//         className='df row column row-center p-primary radius-primary border-page'
//         style={{ minHeight: '100vh' }}
//       >
//         <div className='df row center'>
//           <HearingTestSymbol png={true} isWhite={false} />
//         </div>
//         <div
//           className='row p-primary m-v-primary'
//           style={{
//             borderTop: '1px solid black',
//             borderBottom: '1px solid black'
//           }}
//         >
//           <div className='df ' style={{ flexWrap: 'wrap' }}>
//             <div className='col-50 df  p-v-primary'>
//               <span className='description font-metropolis-bold'>Name:</span>
//               &nbsp;
//               <span className='description font-metropolis-regular'>
//                 {personalDetails.name}
//               </span>
//             </div>
//             <div className='col-50 df  p-v-primary'>
//               <span className='description font-metropolis-bold'>Age:</span>
//               &nbsp;
//               <span className='description font-metropolis-regular'>
//                 {personalDetails.age}
//               </span>
//             </div>
//             <div className='col-50 df  p-v-primary'>
//               <span className='description font-metropolis-bold'>Gender:</span>
//               &nbsp;
//               <span className='description font-metropolis-regular'>
//                 {personalDetails.gender}
//               </span>
//             </div>
//             <div className='col-50 df  p-v-primary'>
//               <span className='description font-metropolis-bold'>
//                 Test Mode:
//               </span>
//               &nbsp;
//               <span className='description font-metropolis-regular'>
//                 {personalIntrest.device_selected.toUpperCase()}
//               </span>
//             </div>
//             <div className='col-50 df  p-v-primary'>
//               <span className='description font-metropolis-bold'>Date:</span>
//               &nbsp;
//               <span className='description font-metropolis-regular'>
//                 {getTodaysDate()}
//               </span>
//             </div>
//           </div>
//         </div>
//         <h1 className='df center font-metropolis-bold titles'>
//           Detailed Audiogram
//         </h1>
//         <div
//           className='row df  m-v-primary'
//           style={{ border: '1px solid black' }}
//         >
//           <div
//             className='col-50 p-primary df column'
//             style={{ borderRight: '1px solid black' }}
//           >
//             <h1 className='df center font-metropolis-bold titles'>LEFT EAR</h1>
//             <LeftRightComponent isLeft={true} />
//             <div className='df row'>{getGraphText(states.stateL, true)}</div>

//             <ul
//               style={{ justifyContent: 'flex-start' }}
//               className='df  row p-primary '
//             >
//               {(personalIntrest.test_mode == 'bone' ||
//                 personalIntrest.test_mode == 'both') && (
//                 <div className='flex-1 df column'>
//                   <h3
//                     className=' row df center titles font-metropolis-bold txt-primary p-v-primary'
//                     style={{color:"#000"}}
//                   >
//                     Bone Average
//                   </h3>
//                   <span  style={{color:"#000"}} className='description df center  row p-v-primary font-metropolis-regular txt-primary'>
//                     {getAverage(dataBONELeft)}
//                   </span>
//                 </div>
//               )}
//               {(personalIntrest.test_mode == 'ear' ||
//                 personalIntrest.test_mode == 'both') && (
//                 <div className='flex-1 df column'>
//                   <h3
//                     className=' row df center titles font-metropolis-bold txt-primary p-v-primary'
//                     style={{color:"#000"}}
//                   >
//                     Ear Average
//                   </h3>
//                   <span  style={{color:"#000"}} className='description df center  row p-v-primary font-metropolis-regular txt-primary'>
//                     {getAverage(dataLeft)}
//                   </span>
//                 </div>
//               )}
//             </ul>
//           </div>
//           <div className='col-50 p-primary df column'>
//             <h1 className='df center font-metropolis-bold titles'>RIGHT EAR</h1>
//             <LeftRightComponent />
//             <div className='df row'>{getGraphText(states.stateR, true)}</div>

//             <ul
//               style={{ justifyContent: 'flex-start' }}
//               className='df  row p-primary '
//             >
//               {(personalIntrest.test_mode == 'bone' ||
//                 personalIntrest.test_mode == 'both') && (
//                 <div className='flex-1 df column'>
//                   <h3
//                     className=' row df center titles font-metropolis-bold txt-primary p-v-primary'
//                     style={{color:"#000"}}
//                   >
//                     Bone Average
//                   </h3>
//                   <span  style={{color:"#000"}} className='description df center  row p-v-primary font-metropolis-regular txt-primary'>
//                     {getAverage(dataBONERight)}
//                   </span>
//                 </div>
//               )}
//               {(personalIntrest.test_mode == 'ear' ||
//                 personalIntrest.test_mode == 'both') && (
//                 <div className='flex-1 df column'>
//                   <h3
//                     className=' row df center titles font-metropolis-bold txt-primary p-v-primary'
//                     style={{color:"#000"}}
//                   >
//                     Ear Average
//                   </h3>
//                   <span  style={{color:"#000"}} className='description  df center row p-v-primary font-metropolis-regular txt-primary'>
//                     {getAverage(dataRight)}
//                   </span>
//                 </div>
//               )}
//             </ul>
//           </div>
//         </div>

//         <div
//           className='row df  m-v-primary'
//           style={{ border: '1px solid black' }}
//         >
//           <div
//             className='col-50 p-primary df column'
//             style={{ borderRight: '1px solid black' }}
//           >
//             <h1 className='m-v-primary font-metropolis-bold titles'>
//               {(earTestData.snr * 100) / 12}%
//             </h1>
//             <h1 className='m-v-primary font-metropolis-bold titles'>SNR</h1>
//             <h1 className='m-v-primary font-metropolis-bold titles'>
//               What is SNR?
//             </h1>
//             <p
//               className='description  row font-metropolis-regular  p-primary df center'
//               style={{ color: '#000', lineHeight: '130%' }}
//             >
//               SNR stands for Signal to noise ratio, which shows how well your
//               ears are listening to useful sounds from different level of
//               noises.
//               <br />
//               SNR number ranges from 0 to 100, higher number shows that your
//               ears are better in separating useful sounds from surrounding or
//               White noises. Any number more than 75% shows best response of
//               ears. Number between 50 to 75% shows that your ears needs
//               attention and should minimise usage of earphones. Any number below
//               50 suggests you need to consult with audiologist and take care of
//               your ears.
//             </p>
//           </div>
//           <div className='col-50 p-primary df column'>
//             <h1 className='m-v-primary font-metropolis-bold titles'>{phi}</h1>
//             <h1 className='m-v-primary font-metropolis-bold titles'>PHI</h1>
//             <h1 className='m-v-primary font-metropolis-bold titles'>
//               What is PHI?
//             </h1>
//             <p
//               className='description  row font-metropolis-regular  p-primary df center'
//               style={{ color: '#000', lineHeight: '130%' }}
//             >
//               PHI (Personal Hearing Intelligence) is the smart state of the art
//               algorithm that monitors your hearing patterns and gives you very
//               useful insights for your hearing care.
//               <br />
//               This algorithm calculates estimated hearing loss age and your
//               current ear age based on your hearing patterns and also gives you
//               personalized hearing care tips and suggestions and provides
//               complete hearing care package powered by machine learning
//               algorithms.
//             </p>
//           </div>
//         </div>
//         <p
//           className='description  row font-metropolis-regular m-v-primary  p-primary df '
//           style={{ color: '#000', lineHeight: '110%', marginBottom: '0px' }}
//         >
//           This test gives you audiogram of both ears based on enviroment you are
//           giving test in. The result may vary upto 8-10% from audiogram taken in
//           proffesional enviroment.if you are having trouble in hearing or
//           discomfort in ears. we hear provides you access to wehear audio
//           experts.use your personal offer code and get 30% discount on
//           audiologist consultation.use your promo code at reception and hear
//           from our audio experts.
//         </p>
//       </div>
//     </>
//   )
// }
// export default PrintResult
