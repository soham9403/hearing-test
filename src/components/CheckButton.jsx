

const CheckButton = (props) => {
    return (
        <>
            
            <button style={props.disabled ? { backgroundColor: "lightgray", color: "gray",cursor:"not-allowed" } : {}} onClick={props.disabled ? () => { } : () => { props.onClick() }} className={`df radius-1 pl-1 pr-1 pt-2 pb-2 h4 bold-2 primary-shadow border-2-primary border-2-primary-thin ${props.selected?'bg-2-primary text-2-light':'bg-2-light text-2-primary'}`}>
                {props.title}
            </button>
        </>
    )
}
export default CheckButton