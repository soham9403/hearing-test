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
            <div className="df center radius-0 primary-shadow pl-1 pr-1 pt-2 pb-2 df column shadow mt-1 mb-3">

                {props.panMode === 0 && <Speaker width={"80%"} height={"60%"} />}
                {props.panMode === 1 && <HeadphoneRight />}
                {props.panMode === -1 && <HeadPhoneLeft />}
                <div className=" df row mt-3 center" style={{ alignItems: "flex-end" }}>
                    <span className="df  font-intern body-3 bold-1 text-2-secondary line-100" >{props.getFrequencyName(props.frequncyList[props.level - 1])}</span>
                    <span className="font-intern h4 bold-1 text-2-secondary" style={{ lineHeight: "150%" }}>&nbsp;HZ</span>
                </div>

            </div>
            <span className="df row font-intern body-2 center mt-1 text-2-primary line-100 mb-2">{props.dbValue + 100}DB</span>
            <ProgreeBar value={(props.level * 100) / props.totalFrquenctTest} />
            {!props.playState ? <div className="df row center m-v-primary">
                <button className="df radius-0 p-2 center mr-1 decision-box bg-2-success" onClick={() => { props.canHear() }}>
                    <HeardIt width={96} height={133} />
                </button>
                <button className="df radius-0 p-2 center decision-box bg-2-secondary" onClick={() => { props.cantHear() }}>
                    <CantHeardIt width={96} height={133} />
                </button>

            </div> :
                <Loader />}
        </div>
    </>)
}
export default FrequencyTest