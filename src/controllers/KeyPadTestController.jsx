import { Button } from "@mui/material";
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setSnr } from "../actions/EarTestAction";
import Loader from "../components/Loader";
import db from "../config/firebaseConfig";
import KeyPadTest from "../pages/KeyPadTest"
import { rootUrl } from "../routes/RouteIndex";

const KeyPadTestController = () => {
    const MAXIMUM_INDEX_ALLOWED = 26;
    const MAXIMUM_LEVEL_ALLOWED = 12;
    const params = useParams()
    const language = params.language
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [playState, setPlayState] = useState(false)
    const [listOfAudioFiles, setListOfAudioFiles] = useState({})
    //for getting input from user
    const [inputVal, setInputVal] = useState("")
    //for setting current audio
    const [currentAudioValues, setCurrentAudioValues] = useState({
        link: "",
        digits: ""
    })
    //
    const [logicCounts, setLogicCounts] = useState({
        level: -1,
        index: Math.floor(Math.random() * MAXIMUM_INDEX_ALLOWED),
        lastWrong: -1,
        lastRight: -1
    })



    const getData = async () => {
        setLoading(true)
        const querySnapshot = await getDocs(collection(db, language + "-audio-files"));
        const arr = {}

        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                arr[doc.id] = doc.data()
            });
            setListOfAudioFiles(arr)
        }
        setLoading(false)



    }
    const startTest = () => {
        setLogicCounts({
            ...logicCounts,
            level: 0,

        })
    }
    const setTest = () => {

        if (logicCounts.level <= MAXIMUM_LEVEL_ALLOWED && logicCounts.index <= MAXIMUM_INDEX_ALLOWED) {
            const data = listOfAudioFiles[logicCounts.index + "-" + logicCounts.level]
            setInputVal("")
            const link = data.link;
            const digits = data.digits;

            setCurrentAudioValues({
                link: link,
                digits: digits
            })

            playAudio(link)
        }
    }
    const finsihTest = () => {
        dispatch(setSnr(logicCounts.level))
        navigate(rootUrl + "/result")
    }

    const checkTest = () => {
        if (inputVal === currentAudioValues.digits) {
            if (logicCounts.level >= MAXIMUM_LEVEL_ALLOWED) {
                finsihTest()
            } else {
                setLogicCounts({
                    ...logicCounts,
                    level: logicCounts.level === MAXIMUM_LEVEL_ALLOWED - 1 ? logicCounts.level + 1 : logicCounts.level + 2,
                    index: Math.floor(Math.random() * MAXIMUM_INDEX_ALLOWED),
                    lastRight: logicCounts.level

                })
            }
        } else {
            notHeard();
        }
    }
    const notHeard = () => {
        logicCounts.lastRight === logicCounts.level - 1 ? finsihTest() : setLogicCounts({
            ...logicCounts,
            level: logicCounts.level - 1,
            index: Math.floor(Math.random() * MAXIMUM_INDEX_ALLOWED),
            lastWrong: logicCounts.level,

        })
    }
    const replay = () => {
        playAudio(currentAudioValues.link)
    }
    const playAudio = (url) => {
        const audioRef = new Audio(url)
        setLoading(true)
        audioRef.addEventListener('canplaythrough',
            () => {
                setPlayState(true);
                setLoading(false)
                audioRef.play()
            }
            , false);
        audioRef.addEventListener('ended',
            () => {
                setPlayState(false)
            }
            , false);

    }
    useEffect(() => {
        (async () => { await getData() })()
    }, [])

    useEffect(() => {

        if (logicCounts.level > -1) {
            setTest()
        }

    }, [logicCounts.level])



    if (loading) {
        return <Loader />
    } else {
        if (Object.keys(listOfAudioFiles).length > 0) {
            return (
                <>
                    <KeyPadTest
                        notHeard={notHeard}
                        startTest={startTest}
                        checkTest={checkTest}
                        replay={replay}
                        playState={playState}
                        inputVal={inputVal}
                        level={logicCounts.level}
                        setInputVal={setInputVal}

                    />
                </>
            )
        } else {
            return <>
                <h1 className="sub-heading df row center  font-metropolis-bold  m-v-primary">"{language.toUpperCase()}" &nbsp; is not supported please go back And Select from Available Languages</h1>
                <div className="small_container df column">
                    <Button variant="contained" onClick={() => { navigate(-1) }} color="secondary">Go Back</Button>
                </div>

            </>
        }

    }

}
export default KeyPadTestController