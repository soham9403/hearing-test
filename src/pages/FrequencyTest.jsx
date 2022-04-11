import Loader from "../components/Loader"
import ProgreeBar from "../components/ProgreeBar"
import CantHeardIt from "../components/svgs/CantHerdIt"
import HeadPhoneLeft from "../components/svgs/HeadPhoneLeft"
import HeadphoneRight from "../components/svgs/HeadphoneRight"
import HeardIt from "../components/svgs/HeardIt"
import Speaker from "../components/svgs/Speaker"

const FrequencyTest = (props) => {
    return (<>
        <div className="df column small_container row-center">
            <div className="df center shadow-box-outer m-v-secondary ">
                <div className="shadow-box-inner df center column">
                    {props.panMode === 0 && <Speaker width={"60%"} height={"60%"} />}
                    {props.panMode === 1 && <HeadphoneRight width={"50%"} height={"60%"} />}
                    {props.panMode === -1 && <HeadPhoneLeft width={"50%"} height={"60%"} />}
                    <h1 className="titles row center df font-metropolis-bold">{props.getFrequencyName(props.frequncyList[props.level - 1])}</h1>
                </div>
            </div>
            <span className="m-v-secondary heading row center font-metropolis-regular df">{props.dbValue + 100}DB</span>
            <ProgreeBar value={(props.level * 100) / props.totalFrquenctTest} />
            {!props.playState ? <div className="df row center m-v-primary">
                <button className="df p-primary" onClick={() => { props.canHear() }}>
                    <HeardIt width={96} height={133} />
                </button>
                <button className="df p-primary" onClick={() => { props.cantHear() }}>
                    <CantHeardIt width={96} height={133} />
                </button>

            </div> :
                <Loader />}
        </div>
    </>)
}
export default FrequencyTest