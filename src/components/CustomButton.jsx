const CustomButton = (props) => {
    switch (props.type) {
        
        default: return <button className={"custom-button df pt-4 pb-4 pl-1 pr-1 row radius-1 df center text-2-light h5 bg-gradient pointer"} {...props}>{props.text}</button>
    }

}
export default CustomButton