import speakerDarkImg from '../../assets/images/v2/speaker_dark.png'
import speakerLightImg from '../../assets/images/v2/speaker_light.png'
const Speaker = ({ isSelected, ...props }) => {
    return (
        <img className='df ' style={{ width: props.width ? props.width : "60%" }} src={isSelected ? speakerLightImg : speakerDarkImg} alt="" />
    )
}
export default Speaker