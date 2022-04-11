const NeonButton = (props)=>{
    return(<>
        <button className="button_neon" onClick={()=>{props.onClick()}}>{props.title}</button>
    </>)
}
export default NeonButton