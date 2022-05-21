import '../assets/css/slider.css'
const CustomInput = (props) => {
    switch (props.type) {

        case "checkbox": return <div onClick={props.onChange} className={`custom-input h-100 df  row radius-1 pointer border-2-primary p-3 mr-3 df flex-1 body-4  row-center font-intern ${props.selected ? 'bg-2-primary text-2-light' : 'bg-2-light text-2-primary'}`}>
           <span className='checkboc-check df center border-2-primary radius-2'>
               {
                   props.selected && <svg xmlns="http://www.w3.org/2000/svg" className='check-svg' viewBox="0 0 12 8" fill="none">
                   <path d="M10.6666 0.791748L4.24998 7.20842L1.33331 4.29175" stroke="#A91674" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
               }
               </span> <span className={`h5 df font-intern`} style={{color:"inherit"}}>{props.text}</span>
        </div>
        case "select": return <div className="custom-input df text-2-primary  pl-3 pt-4 pb-4 row radius-1 border-2-primary ">
            {props.options.map((option, index) => {
                return <div onClick={() => { props.onChange(option.value) }} key={index} className={`radius-1 pointer border-2-primary p-4 mr-3 df flex-1 body-4  center font-intern ${props.value == option.value ? 'bg-2-primary text-2-light' : 'bg-2-light text-2-primary'}`}>
                    {option.label}
                </div>
            })}
        </div>
        default: return <input type="text" {...props} className="custom-input text-2-primary  font-intern p-3 row radius-1 border-2-primary h5" />
    }

}
export default CustomInput