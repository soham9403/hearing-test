

const CheckButton = (props) => {
    return (
        <>
            <div className="df p-relative pointer check-btn" onClick={props.disabled ? () => { } : () => { props.onClick() }} style={props.disabled ? { backgroundColor: "rgba(0,0,0,0.01)", border: "1px solid transparent" } : {}}>
                <div style={{ transform: props.selected ? "scale(1)" : "scale(0)" }} className="checked_bg bg-secondary fit-content">

                </div>
                <button style={props.disabled ? { backgroundColor: "rgba(0,0,0,.1)", color: "rgba(0,0,0,.25)", border: "1px solid transparent" } : props.selected ? { color: "white" } : {}} className="btn p-primary description fit-content" >{props.title}</button>
            </div>
        </>
    )
}
export default CheckButton