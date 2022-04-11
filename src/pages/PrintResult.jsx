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

} from "recharts";
import { useEffect, useRef, useState } from 'react'
import CircularProgressBar from '../components/CircularProgressBar'
import Hexagon from '../components/svgs/Heaaxgon'
// import { GoogleSpreadsheet } from 'google-spreadsheet'
import SheetCred from '../config/spreadsheet.json'
import { getGraphText } from '../components/getGraphText'
import Logo from '../components/Logo'
import { getTodaysDate } from '../commonfunctions/helper'

const PrintResult = () => {
    const personalDetails = useSelector((state) => { return state.personalDetails })
    const personalIntrest = useSelector((state) => { return state.personalIntrest })
    const [phi, setPhi] = useState(0)
    const language = useSelector((state) => { return state.language })
    const earTestData = useSelector((state) => { return state.earTest })
    //console.log(personalDetails)
    //console.log(personalIntrest)
    //console.log(earTestData)
    const [states, setStates] = useState({ stateL: 1, stateR: 1 })
    const CustomDot = (props) => {
        const { cx, cy } = props;

        return (

            <path cx={cx - 10} cy={cy - 10} style={{ transform: "translate(" + (cx - 10) + "px," + (cy - 10) + "px)" }} xmlns="http://www.w3.org/2000/svg" d="M20.5 2.5L18.75 0.75L10.5 9L2.25 0.75L0.5 2.5L8.75 10.75L0.5 19L2.25 20.75L10.5 12.5L18.75 20.75L20.5 19L12.25 10.75L20.5 2.5Z" fill={"rgba(0,0,0,.5)"} />
        );
    }

    const initialize = () => {
        let comparisonMatrix = [
            [13, 15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86, 90],
            [13, 15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86, 90],
            [15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86, 90, 92],
            [15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86, 90, 92],
            [15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86, 90, 92],
            [13, 15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86, 90],
            [12, 13, 15, 18, 21, 25, 27, 30, 35, 39, 44, 50, 55, 59, 67, 74, 78, 81, 84, 86]
        ]

        let leftAge = 0;
        let rightAge = 0;
        const leftData = dataLeft
        const rightData = dataRight
        var normalL = 0, moderateL = 0, severeL = 0;
        var normalR = 0, moderateR = 0, severeR = 0;

        for (var i = 0; i < 7; i++) {
            var dbValLeft = (leftData[i].uv / 5) - 1;
            var dbValRight = (rightData[i].uv / 5) - 1;
            if (leftData[i].uv < 30) {
                normalL++;
            }
            else if (leftData[i].uv < 70) {
                moderateL++;
            }
            else {
                severeL++;
            }

            if (rightData[i].uv < 30) {
                normalR++;
            }
            else if (rightData[i].uv < 70) {
                moderateR++;
            }
            else {
                severeR++;
            }

            leftAge += comparisonMatrix[i][dbValLeft];
            rightAge += comparisonMatrix[i][dbValRight];
        }


        let ageLeft = Math.round((leftAge) / 7);
        let ageRight = Math.round((rightAge) / 7);
        let phiLeft = 60 - (ageLeft - parseInt(personalDetails.age)) * 2;
        let phiRight = 60 - (ageRight - parseInt(personalDetails.age)) * 2;
        let phitotal = (phiLeft + phiRight) / 2
        let earLossAgeLeft = 64 - ((60 - phiLeft) / 2);
        let earLossAgeRight = 64 - ((60 - phiRight) / 2);
        var stateR = 0;
        var stateL = 0;

        // this.setState({ "setState": "working" })

        if (normalL > moderateL && normalL > severeL) {
            stateL = 1;
        }

        else if (moderateL > normalL && moderateL > severeL) {
            stateL = 2;
        }

        else if (severeL > normalL && severeL > moderateL) {
            stateL = 3;
        }


        if (normalR > moderateR && normalR > severeR) {

            stateR = 1
        }

        else if (moderateR > normalR && moderateR > severeR) {
            stateR = 2
        }

        else if (severeR > normalR && severeR > moderateR) {
            stateR = 3
        }
        setStates({ stateL: stateL, stateR: stateR })
        setPhi(phitotal)
    }
    const ref = useRef(null)
    const getColor = (sideState) => {
        switch (sideState) {
            case 1: {
                return "rgba(21,237,165,0.7)"
            }
            case 2:
                {
                    return "rgba(224,205,62,0.6)"
                }
            case 3:
                {
                    return "rgba(237,36,36,0.7)"
                }
        }
    }
    useEffect(() => {
        console.log(ref.current)
    }, [ref])
    const LeftRightComponent = (props) => {
        return <>
            <div className='df row m-v-primary' style={{ height: "500px", paddingRight: "20px" }}>
                <ResponsiveContainer width="100%" height="85%" className="row">
                    <AreaChart

                        data={props.isLeft ? dataLeft : dataRight}

                        baseValue={100}
                        baseLine={0}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={getColor(props.isLeft ? states.stateL : states.stateR)} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={getColor(props.isLeft ? states.stateL : states.stateR)} stopOpacity={0.8} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#000" strokeOpacity={0.5} />

                        <XAxis dataKey="name" tickCount="7" stroke="#000" />
                        <YAxis reversed="true" ticks={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]} minTickGap={1} tickCount="11" stroke="#000" />

                        <Area type={"linear"} dataKey="uv" isAnimationActive={false} stroke='white' fillOpacity={0.8} fill="url(#colorUv)" strokeOpacity={1} dot={props.isLeft ? <CustomDot /> : { r: 5, color: "#000", stroke: "#000", fill: "#fff" }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    }


    useEffect(() => {
        initialize()
    }, [])
    const dataLeft = [

        {
            name: "250",
            uv: earTestData.F1L,

        },
        {
            name: "500",
            uv: earTestData.F2L,

        },
        {
            name: "1K",
            uv: earTestData.F3L,

        },
        {
            name: "2K",
            uv: earTestData.F4L,

        },
        {
            name: "3K",
            uv: earTestData.F5L,

        },
        {
            name: "5K",
            uv: earTestData.F6L,

        },
        {
            name: "8K",
            uv: earTestData.F7L,

        }
    ]

    const dataRight = [

        {
            name: "250",
            uv: earTestData.F1R,

        },
        {
            name: "500",
            uv: earTestData.F2R,

        },
        {
            name: "1K",
            uv: earTestData.F3R,

        },
        {
            name: "2K",
            uv: earTestData.F4R,

        },
        {
            name: "3K",
            uv: earTestData.F5R,

        },
        {
            name: "5K",
            uv: earTestData.F6R,

        },
        {
            name: "8K",
            uv: earTestData.F7R,

        }
    ]
    // return (
    //     <>
    //         <div className="df bg-primary row column row-center p-primary" style={{ minHeight: "100vh" }}>
    //             <div className='row p-primary border-secondary container-max radius-primary m-v-primary'>
    //                 <Grid container spacing={2} >
    //                     <Grid item xs={12} md={6} >
    //                         <div className='fit-content df center'>
    //                             <HearingTestSymbol isWhite={true} />
    //                         </div>

    //                     </Grid>
    //                     <Grid item xs={12} md={6} >
    //                         <Grid container rowSpacing={2} columnSpacing={1} >
    //                             <Grid item xs={12} md={6} >
    //                                 <span className='description font-metropolis-bold txt-primary'>Name:</span>:<span className='description font-metropolis-regular txt-primary'>{personalDetails.name}</span>
    //                             </Grid>
    //                             <Grid item xs={12} md={6} >
    //                                 <span className='description font-metropolis-bold txt-primary'>Gender:</span>:<span className='description font-metropolis-regular txt-primary'>{personalDetails.gender}</span>
    //                             </Grid>
    //                             <Grid item xs={12} md={6} >
    //                                 <span className='description font-metropolis-bold txt-primary'>Age:</span>:<span className='description font-metropolis-regular txt-primary'>{personalDetails.age}</span>
    //                             </Grid>
    //                             <Grid item xs={12} md={6} >
    //                                 <span className='description font-metropolis-bold txt-primary'>Test Mode:</span>:<span className='description font-metropolis-regular txt-primary'>{personalIntrest.device_selected.toUpperCase()}</span>
    //                             </Grid>
    //                         </Grid>
    //                     </Grid>

    //                 </Grid>
    //             </div>
    //             <div className='row p-primary  container-max radius-primary m-v-primary'>
    //                 <ResultTabBox

    //                     leftComponent={<LeftRightComponent isLeft={true} />}
    //                     rightComponent={<LeftRightComponent />}
    //                 />
    //             </div>
    //             <div className='row p-primary  container-max radius-primary m-v-primary'>
    //                 <Grid container spacing={2} >
    //                     <Grid item xs={12} md={6} >
    //                         <div className='p-primary column df border-secondary row-center fit-content radius-primary'>
    //                             <div className='row df center p-primary' >
    //                                 <CircularProgressBar size="200" progress={Math.round((earTestData.snr * 100) / 12)} strokeWidth={10} circleOneStroke="#606060" circleTwoStroke="#09AD18" text="SNR" marginLeft="auto" marginRight="auto" marginTop="auto" />
    //                             </div>
    //                             <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary'>What is SNR ?</h3>
    //                             <p className='description  row font-metropolis-thin txt-primary p-primary df center' style={{ lineHeight: "130%" }}>
    //                                 SNR stands for Signal to noise ratio, which shows how well your ears are listening to useful sounds from different level of noises.
    //                                 SNR number ranges from 0 to 100, higher number shows that your ears are better in separating useful sounds from surrounding or White noises. Any number more than 75% shows best response of ears. Number between 50 to 75% shows that your ears needs attention and should minimise usage of earphones. Any number below 50 suggests you need to consult with audiologist and take care of your ears.
    //                             </p>
    //                         </div>
    //                     </Grid>
    //                     <Grid item xs={12} md={6} >
    //                         <div className='p-primary column df border-secondary fit-content radius-primary df row-center'>
    //                             <Hexagon value={phi} text="PHI" height={200} width={200}></Hexagon>
    //                             <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary'>What is PHI ?</h3>
    //                             <p className='description  row font-metropolis-thin txt-primary p-primary df center' style={{ lineHeight: "130%" }}>
    //                                 PHI (Personal Hearing Intelligence) is the smart state of the art algorithm that monitors your hearing patterns and gives you very useful insights for your hearing care.
    //                                 This algorithm calculates estimated hearing loss age and your current ear age based on your hearing patterns and also gives you personalized hearing care tips and suggestions and provides complete hearing care package powered by machine learning algorithms.
    //                             </p>
    //                             <div className='df row m-v-secondary' style={{ marginBottom: '0px' }}>
    //                                 <Button className='df row' variant='contained' onClick={() => { window.location.href = "https://www.wehear.in/phi/" }} color='secondary' >Know More</Button>
    //                             </div>

    //                         </div>
    //                     </Grid>
    //                 </Grid>
    //             </div>

    //         </div>
    //     </>
    // )
    return (
        <>
            <div className="df row column row-center p-primary radius-primary border-page" style={{ minHeight: "100vh" }}>
                <div className='df row center'>
                    <HearingTestSymbol isWhite={false} />
                </div>
                <div className='row p-primary m-v-primary' style={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}>
                    <div className='df ' style={{ flexWrap: "wrap" }}>
                        <div className='col-50 df  p-v-primary'>
                            <span className='description font-metropolis-bold'>Name:</span>&nbsp;<span className='description font-metropolis-regular'>{personalDetails.name}</span>
                        </div>
                        <div className='col-50 df  p-v-primary'>
                            <span className='description font-metropolis-bold'>Age:</span>&nbsp;<span className='description font-metropolis-regular'>{personalDetails.age}</span>
                        </div>
                        <div className='col-50 df  p-v-primary'>
                            <span className='description font-metropolis-bold'>Gender:</span>&nbsp;<span className='description font-metropolis-regular'>{personalDetails.gender}</span>
                        </div>
                        <div className='col-50 df  p-v-primary'>
                            <span className='description font-metropolis-bold'>Test Mode:</span>&nbsp;<span className='description font-metropolis-regular'>{personalIntrest.device_selected.toUpperCase()}</span>
                        </div>
                        <div className='col-50 df  p-v-primary'>
                            <span className='description font-metropolis-bold'>Date:</span>&nbsp;<span className='description font-metropolis-regular'>{getTodaysDate()}</span>
                        </div>
                    </div>
                </div>
                <h1 className='df center font-metropolis-bold titles'>
                    Detailed Audiogram
                </h1>
                <div className='row df  m-v-primary' style={{ border: "1px solid black" }}>
                    <div className='col-50 p-primary df column' style={{ borderRight: "1px solid black" }}>
                        <h1 className='df center font-metropolis-bold titles'>
                            LEFT EAR
                        </h1>
                        <LeftRightComponent isLeft={true} />
                        <div className='df row'>
                            {getGraphText(states.stateL, true)}
                        </div>
                    </div>
                    <div className='col-50 p-primary df column'>
                        <h1 className='df center font-metropolis-bold titles'>
                            RIGHT EAR
                        </h1>
                        <LeftRightComponent />
                        <div className='df row'>
                            {getGraphText(states.stateR, true)}
                        </div>
                    </div>
                </div>

                <div className='row df  m-v-primary' style={{ border: "1px solid black" }}>
                    <div className='col-50 p-primary df column' style={{ borderRight: "1px solid black" }}>
                        <h1 className='m-v-primary font-metropolis-bold titles'>
                            {((earTestData.snr * 100) / 12)}%
                        </h1>
                        <h1 className='m-v-primary font-metropolis-bold titles'>
                            SNR
                        </h1>
                        <h1 className='m-v-primary font-metropolis-bold titles'>
                            What is  SNR?
                        </h1>
                        <p className='description  row font-metropolis-regular  p-primary df center' style={{ color: "#000", lineHeight: "130%" }}>
                            SNR stands for Signal to noise ratio, which shows how well your ears are listening to useful sounds from different level of noises.<br />
                            SNR number ranges from 0 to 100, higher number shows that your ears are better in separating useful sounds from surrounding or White noises. Any number more than 75% shows best response of ears. Number between 50 to 75% shows that your ears needs attention and should minimise usage of earphones. Any number below 50 suggests you need to consult with audiologist and take care of your ears.
                        </p>
                    </div>
                    <div className='col-50 p-primary df column' >
                        <h1 className='m-v-primary font-metropolis-bold titles'>
                            {phi}
                        </h1>
                        <h1 className='m-v-primary font-metropolis-bold titles'>
                            PHI
                        </h1>
                        <h1 className='m-v-primary font-metropolis-bold titles'>
                            What is  PHI?
                        </h1>
                        <p className='description  row font-metropolis-regular  p-primary df center' style={{ color: "#000", lineHeight: "130%" }}>
                            PHI (Personal Hearing Intelligence) is the smart state of the art algorithm that monitors your hearing patterns and gives you very useful insights for your hearing care.<br />
                            This algorithm calculates estimated hearing loss age and your current ear age based on your hearing patterns and also gives you personalized hearing care tips and suggestions and provides complete hearing care package powered by machine learning algorithms.
                        </p>
                    </div>
                </div>
                <p className='description  row font-metropolis-regular m-v-primary  p-primary df ' style={{ color: "#000", lineHeight: "110%" ,marginBottom:"0px"}}>
                    This test gives you audiogram of both ears based on enviroment you are giving test in. The result may vary upto 8-10% from audiogram taken in proffesional enviroment.if you are having trouble in hearing or discomfort in ears.
                    we hear provides you access to wehear audio experts.use your personal offer code and get 30% discount on audiologist consultation.use your promo code at reception and hear from our audio experts.
                </p>
            </div>
        </>
    )
}
export default PrintResult