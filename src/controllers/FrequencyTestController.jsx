import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { setFrequencyVal } from '../actions/EarTestAction'
import NotSupportError from '../components/NotSupportError'
import FrequencyTest from '../pages/FrequencyTest'
import { rootUrl } from '../routes/RouteIndex'

const FrequencyTestController = props => {
  const device = useSelector(state => {
    if (state.personalIntrest.device_selected === '') {
      return 'speaker'
    }
    return state.personalIntrest.device_selected
  })
  const { personalIntrest } = useSelector(state => state)
  const testData = useSelector(state => {
    return state.earTest
  })
  const mode = props.boneTest ? 'bone' : 'ear'
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const DECRISING_COUNT = 10
  const frequncyList = testData.frequencyList
  const [playState, setPlayState] = useState(false)
  const [error, setError] = useState('')
  const [logicCounts, setLogicCounts] = useState({
    dbValue: testData.defaultDb,
    level: 1,
    wrongCounts: 0,
    panMode: device === 'headphone' ? -1 : 0
  })

  const playTune = () => {
    setPlayState(true)
    try {
      var audioCtx = new AudioContext()
      var gain = audioCtx.createGain()
      var ocs = audioCtx.createOscillator()
      ocs.frequency.value = frequncyList[logicCounts.level - 1]

      gain.gain.value = dBFSToGain(logicCounts.dbValue)
      var panNode = audioCtx.createStereoPanner()
      panNode.pan.value = logicCounts.panMode
      gain.connect(panNode)
      panNode.connect(audioCtx.destination)
      ocs.connect(gain)
      ocs.start()
      ocs.stop(audioCtx.currentTime + 2)
      ocs.onended = () => {
        setPlayState(false)
      }
    } catch (e) {
      console.log(e.message)
      setError(
        'This device/browser is not supporting our test. please use another device/browser '
      )
    }

    // ocs.on
  }
  const finishTest = () => {
    if (mode == 'ear' && personalIntrest.test_mode == 'ear') {
      navigate(rootUrl + '/step/6')
    } else if (mode == 'ear' && personalIntrest.test_mode == 'both') {
      navigate(rootUrl + '/step/ear-finish/5/')
    } else {
      navigate(rootUrl + '/step/6')
    }
  }
  const canHear = () => {
    const counts = { ...logicCounts }
    var value = counts.dbValue
    var level = counts.level
    const valueOfFrequency = {}
    if (value === -95 || logicCounts.wrongCounts > 0) {
      let finishState = 0
      if (logicCounts.panMode === -1) {
        setLogicCounts({
          ...logicCounts,
          wrongCounts: 0,
          dbValue: testData.defaultDb,
          panMode: logicCounts.panMode * -1
        })
        mode == 'bone'
          ? (valueOfFrequency['bone_F' + level + 'L'] = value + 100)
          : (valueOfFrequency['F' + level + 'L'] = value + 100)
      } else if (logicCounts.panMode === 1) {
        setLogicCounts({
          ...logicCounts,
          level: level + 1,
          wrongCounts: 0,
          dbValue: testData.defaultDb,
          panMode: logicCounts.panMode * -1
        })
        mode == 'bone'
          ? (valueOfFrequency['bone_F' + level + 'R'] = value + 100)
          : (valueOfFrequency['F' + level + 'R'] = value + 100)
        if (level === 7) finishState = 1
      }
      if (logicCounts.panMode === 0) {
        setLogicCounts({
          ...logicCounts,
          level: level + 1,
          wrongCounts: 0,
          dbValue: testData.defaultDb,
          panMode: logicCounts.panMode * -1
        })
        mode == 'bone'
          ? (valueOfFrequency['bone_F' + level + 'L'] = value + 100)
          : (valueOfFrequency['F' + level + 'L'] = value + 100)
        mode == 'bone'
          ? (valueOfFrequency['bone_F' + level + 'R'] = value + 100)
          : (valueOfFrequency['F' + level + 'R'] = value + 100)
        if (level === 7) finishState = 1
      }
      dispatch(setFrequencyVal(valueOfFrequency))
      if (finishState === 1) {
        finishTest()
      }
    } else {
      setLogicCounts({
        ...logicCounts,
        dbValue: logicCounts.dbValue - DECRISING_COUNT
      })
      // this.setState({ dbValue: value - 10, toogleState: 0 }, () => this.initialiseTest())
    }
  }

  const cantHear = () => {
    const counts = { ...logicCounts }
    var value = counts.dbValue
    var wrongCountVal = counts.wrongCounts
    setLogicCounts({
      ...logicCounts,
      wrongCounts: wrongCountVal + 1,
      dbValue: logicCounts.dbValue + parseInt(DECRISING_COUNT / 2)
    })
  }
  useEffect(() => {
    playTune()
    //console.log(logicCounts)
  }, [logicCounts])

  const dBFSToGain = dbfs => {
    return Math.pow(10, dbfs / 20)
  }
  const getFrequencyName = frquencyVal => {
    switch (frquencyVal) {
      case 250:
        return '250'
      case 500:
        return '500'
      case 1000:
        return '1K'
      case 2000:
        return '2K'
      case 3000:
        return '3K'
      case 5000:
        return '5K'
      case 8000:
        return '8K'
      default:
        return frquencyVal
    }
  }
  if (error !== '') {
    return <NotSupportError />
  } else {
    return (
      <>
        {/* <div className='df row center'>
          <div
            style={{ padding: '10px', background: '#F63649', color: 'white' }}
          >
            Mode: {mode.toUpperCase()}
          </div>
        </div> */}
        <div className='df p-absolute row center'>
          <div
          className='h6 font-intern p-3 bg-2-primary text-2-light'
            style={{ position:"fixed",top:"0px",right:"0px" }}
          >
            Mode: {mode=='ear'?"Air":mode.toUpperCase()}
          </div>
        </div>
        <FrequencyTest
          frequncyList={frequncyList}
          getFrequencyName={getFrequencyName}
          level={logicCounts.level}
          panMode={logicCounts.panMode}
          totalFrquenctTest={frequncyList.length}
          dbValue={logicCounts.dbValue}
          playState={playState}
          cantHear={cantHear}
          canHear={canHear}
          mode={mode}
        />
      </>
    )
  }
}
export default FrequencyTestController
