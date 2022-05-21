

import Grid from '@mui/material/Grid'
import { useEffect, useState, useRef } from 'react';
import EarLogo from '../components/svgs/EarLogo';
import NeonButton from '../components/NeonButton';

import Audiogram from "../assets/images/Audiogram.svg";
import EarAge from "../assets/images/EarAge.svg";
import SNR from "../assets/images/SNR.svg";
import PHI from "../assets/images/PHI.svg";
import Card from '../components/Card';
import { useLocation, useNavigate, useRoutes, useHref } from 'react-router';
import NavBar from '../components/NavBar';
import '../assets/css/spacing.css'
import '../assets/css/theme.css'
import '../assets/css/typography.css'
import '../assets/css/page.css'
const Index = () => {
    const navigate = useNavigate()
    const link = useHref("")
    const [windowSize, setWindowSize] = useState({ height: window.innerHeight, width: window.innerWidth })
    const onResize = () => {
        setWindowSize({ height: window.innerHeight, width: window.innerWidth })
    }
    // const onscroll=()=>{
    //     const scrollPosition = window.screenTop;

    // }
    const container1Ref = useRef(null)
    const container2Ref = useRef(null)
    const container3Ref = useRef(null)

    // useEffect(() => {
    //     window.addEventListener('scroll', onscroll)
    //     return () => {
    //         return window.removeEventListener('scroll', onscroll)
    //     }
    // })

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            return window.removeEventListener('resize', onResize)
        }
    })
    return (
        <NavBar>
            <div className="row df column bg-primary">
                <div className="row p-primary" style={{ minHeight: windowSize.height - 80 + "px" }} ref={container1Ref}>
                    <Grid container className='fit-content column-reverse-small' spacing={0}>
                        {windowSize.width < 900 && <Grid item xs={12} md={4} className='df hide-small center column m-v-primary'>
                            <EarLogo width={'60%'} />
                        </Grid>}

                        <Grid item xs={12} md={8} className='df center column' >
                            <h1 className='txt-primary df  font-azonix heading'>
                                DO YOU KNOW
                                <br />
                                YOUR EAR AGE ?
                            </h1>
                            <div className='m-v-secondary'>
                                <NeonButton title={"Here's how you can find out !"} onClick={() => {
                                    if (container3Ref) {
                                        window.scrollTo({
                                            behavior: "smooth",
                                            top: container3Ref.current.offsetTop
                                        })
                                    }
                                }} />
                            </div>

                        </Grid>
                        {windowSize.width >= 900 && <Grid item xs={12} md={4} className='df hide-small center column m-v-primary'>
                            <EarLogo width={'60%'} />
                        </Grid>}

                    </Grid>
                </div>
                <div className="row p-h-primary container-full df column" ref={container2Ref} style={{ minHeight: windowSize.height - 80 + "px" }}>
                    <h1 className='sub-heading df row center txt-primary font-metropolis-bold m-v-primary'>Why Hearing Test</h1>
                    <Grid container className='flex-1  ' spacing={3}>

                        <Grid item xs={12} md={6} className='df center column' >
                            <p style={{ lineHeight: "150%" }} className='description txt-primary font-metropolis-thin'>466 million people worldwide are suffering from some level of hearing loss, and this number is raising by 60% in young adults aged between 16-45 years. With the raise in smartphones and telecom technology, consumption of personalised audio is increased by 2000%. Main reason for hearing loss in young adults is excess usage of earphones and not taking care enough about hearing health.</p>
                            <p style={{ lineHeight: "150%" }} className='description txt-primary font-metropolis-thin m-v-primary'>The WeHear online hearing test is a quick way to gauge how well you’re hearing. In only 3 minutes, you can test your ear’s ability to respond to all the hearing frequencies and also to respond distinguish certain words and numbers in a noisy environment.</p>
                        </Grid>
                        <Grid item xs={12} md={6} className='df center column p-h-primary' >
                            <iframe width="100%" className='radius-primary border-primary' height="350" src="https://www.youtube.com/embed/Lcfg2rUTviU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid>

                    </Grid>
                </div>

                <div className=" p-h-primary df column row-center space-between" ref={container3Ref} style={{ minHeight: windowSize.height - 80 + "px" }}>
                    <h1 className='sub-heading df row center txt-primary font-metropolis-bold m-v-secondary'>What will you get after the test ?</h1>
                    <div className='container-full '>
                        <Grid container className='df m-v-primary' style={{}} spacing={1}>
                            <Grid item xs={12} sm={6} md={3} style={{ justifyContent: "flex-start" }} className='df center column' >
                                <Card title={"Your Audiogram"} description={"your both ears detailed audiogram report with suggestions"} img={Audiogram} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} style={{ justifyContent: "flex-start" }} className='df center column' >
                                <Card title={"Ear Age"} description={"Your ear’s current age and hearing loss age"} img={EarAge} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} style={{ justifyContent: "flex-start" }} className='df center column' >
                                <Card title={'SNR'} description={"Your ear’s ability to listen to sound in noisy environment"} img={SNR} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} className='df center column' >
                                <Card title={'Personal Hearing Index'} description={"Your personal hearing index - which shows how ear-health friendly your hearing habits are."} img={PHI} />
                            </Grid>

                        </Grid>
                    </div>

                    <div className='m-v-secondary'>
                        <NeonButton title={"TAKE THE TEST !"} onClick={() => { navigate(link + "/step/1") }} />
                    </div>

                </div>
            </div>
        </NavBar>
    )
}
export default Index;