import { Button, Grid, InputAdornment, OutlinedInput } from "@mui/material"
import CustomButton from "../components/CustomButton"
import LoaderImg from '../assets/images/v2/listning-loader.png'
const KeyPadTest = (props) => {
    return (
        <>
            {
                props.level === -1 ?
                    <h1 className="h2 font-intern mt-1 bold-1 mb-1">Press Start Button</h1>
                    :
                    <h1 className="h2 font-intern mt-1 bold-1 mb-1">Enter 3 Digits you heard</h1>
            }

            <div className="df  container row flex-wrap-reverese">
                {props.level !== -1 &&
                    <div className="primary-shadow df mb-3 key_pad_container column  radius-0 border-2-primary border-thin" style={{ marginTop: "0px" }}>

                        <div className="pl-1 pr-1 pb-3  bg-2-light-gray df  dial-box-row">
                            <div dangerouslySetInnerHTML={{ __html: props.inputVal.length>0 ?props.inputVal.slice(props.inputVal.length-3, props.inputVal.length-2) :"&nbsp;"}} className="dial-box primary-shadow p-3 bg-2-light text-2-dark bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">

                            </div>
                            <div dangerouslySetInnerHTML={{ __html:props.inputVal.length>0 ?props.inputVal.slice(props.inputVal.length-2, props.inputVal.length-1) :"&nbsp;"}} className="dial-box primary-shadow p-3 bg-2-light text-2-dark bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">

                            </div>
                            <div dangerouslySetInnerHTML={{ __html:  props.inputVal.length>0 ?props.inputVal.slice(props.inputVal.length-1, props.inputVal.length):"&nbsp;" }} className="dial-box primary-shadow p-3 bg-2-light text-2-dark bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">

                            </div>
                        </div>
                        <div className="pl-1 pr-1 pb-3 pt-3 df dial-box-row">
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "1") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                1
                            </button>

                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "2") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                2
                            </button>

                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "3") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                3
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "4") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                4
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "5") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                5
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "6") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                6
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "7") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                7
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "8") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                8
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "9") } }} className="dial-box primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                9
                            </button>
                            <button onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "0") } }} className="dial-box dial-box-long primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1 border-thin-primary radius-1">
                                0
                            </button>

                            <button onClick={() => { props.setInputVal(props.inputVal.slice(0, props.inputVal.length - 1)) }} className="dial-box bg-2-primary primary-shadow p-3 text-2-primary bold-2 h4 font-intern pointer df center flex-1  radius-1" style={{ flex: '1', border: "none" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="backspace-svg" viewBox="0 0 33 23" fill="none">
                                    <path d="M15.0708 7.39863L23.3471 15.6749M12.6459 21.8821H27.4853C28.5828 21.8821 29.6353 21.4462 30.4114 20.6701C31.1874 19.8941 31.6234 18.8415 31.6234 17.744V5.32955C31.6234 4.23205 31.1874 3.17949 30.4114 2.40344C29.6353 1.62739 28.5828 1.19141 27.4853 1.19141H12.6459C11.5484 1.19164 10.4961 1.62778 9.72019 2.40388L2.05013 10.0739C1.66224 10.4619 1.44434 10.9881 1.44434 11.5368C1.44434 12.0854 1.66224 12.6116 2.05013 12.9996L9.72019 20.6697C10.4961 21.4458 11.5484 21.8819 12.6459 21.8821V21.8821ZM15.0708 15.6749L23.3471 7.39863L15.0708 15.6749Z" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                        </div>

                        <div className="pl-1 pt-3 pr-1 row df pb-3">
                            <CustomButton text="Next" disabled={props.inputVal.length < 3} onClick={() => { props.checkTest() }} />
                        </div>

                    </div>}

                {!props.playState &&
                    <div className=" df  mt-1  flex-1 row-center column" >

                        {props.level === -1 && <div className="small_container"><CustomButton variant="contained" style={{ marginLeft: "auto", marginRight: "auto" }} color="secondary" onClick={() => { props.startTest() }} text={'Start'}></CustomButton></div>}
                        {props.level !== -1 && <>


                            <div className="df flex-1 column center">
                                {/* <div className="mb-3">
                                    <button className="pl-2 pr-2 pt-3 df row-center pb-3 bg-2-primary h5 radius-1 text-2-light pointer" onClick={() => { props.replay() }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="reply-svg" viewBox="0 0 30 30" fill="none">
                                            <path d="M2.39999 8.70026V3.30027C2.39999 3.06157 2.49482 2.83265 2.6636 2.66387C2.83238 2.49509 3.0613 2.40027 3.29999 2.40027C3.53869 2.40027 3.76761 2.49509 3.93639 2.66387C4.10517 2.83265 4.19999 3.06157 4.19999 3.30027V5.47287C6.68547 2.64965 10.1794 0.914307 13.9308 0.639866C15.4602 0.523584 16.9984 0.653639 18.4866 1.02507C21.33 1.7355 23.8891 3.29635 25.8222 5.49925C27.7554 7.70215 28.9706 10.4423 29.3057 13.3539C29.6407 16.2655 29.0797 19.2101 27.6975 21.7945C26.3153 24.3789 24.1777 26.4803 21.57 27.8181C19.8095 28.7219 17.8807 29.2508 15.9054 29.3715C12.6019 29.5871 9.32589 28.6507 6.63539 26.7219C5.03595 25.5839 3.68683 24.1301 2.67135 22.4502C1.65588 20.7704 0.995631 18.9001 0.731394 16.9551C0.599704 15.9986 0.564127 15.0314 0.625194 14.0679C0.632758 13.9499 0.663481 13.8346 0.715608 13.7285C0.767735 13.6224 0.840246 13.5277 0.929 13.4496C1.01775 13.3716 1.12101 13.3117 1.23288 13.2736C1.34475 13.2354 1.46304 13.2197 1.58099 13.2273C1.69895 13.2348 1.81426 13.2656 1.92034 13.3177C2.02642 13.3698 2.12119 13.4423 2.19925 13.5311C2.2773 13.6198 2.33711 13.7231 2.37527 13.835C2.41342 13.9468 2.42916 14.0651 2.42159 14.1831C2.40552 14.4552 2.39832 14.7277 2.39999 15.0003C2.39999 20.5803 6.02699 25.3143 11.0544 26.9703C12.8754 27.5694 14.8091 27.7449 16.7082 27.4833C18.1712 27.2848 19.5878 26.8302 20.8932 26.1405C23.4481 24.7845 25.4589 22.5911 26.5883 19.9282C27.7178 17.2654 27.8971 14.2952 27.0962 11.5159C26.2953 8.7365 24.5629 6.31713 22.1897 4.66361C19.8166 3.0101 16.9469 2.22303 14.0622 2.43447C12.8789 2.52467 11.7139 2.77911 10.6008 3.19047C8.19824 4.08842 6.12584 5.69624 4.65899 7.80027H7.79999C8.03869 7.80027 8.26761 7.89509 8.43639 8.06387C8.60517 8.23265 8.69999 8.46157 8.69999 8.70026C8.69999 8.93896 8.60517 9.16788 8.43639 9.33666C8.26761 9.50544 8.03869 9.60027 7.79999 9.60027H3.29999C3.06159 9.59932 2.83322 9.50419 2.66465 9.33561C2.49607 9.16704 2.40094 8.93867 2.39999 8.70026ZM10.5 11.3409C10.5 9.66687 12.264 8.57787 13.7616 9.33027L21.0336 12.9897C22.6842 13.8213 22.6842 16.1793 21.0336 17.0109L13.7616 20.6685C13.4188 20.841 13.0375 20.923 12.6541 20.9067C12.2706 20.8903 11.8977 20.7761 11.5708 20.575C11.244 20.3738 10.974 20.0924 10.7865 19.7575C10.5991 19.4226 10.5005 19.0453 10.5 18.6615V11.3409Z" fill="#FEFEFE" />
                                        </svg>

                                        &nbsp;&nbsp;Replay &nbsp;&nbsp;&nbsp;
                                    </button>
                                </div> */}
                                <div className="mb-3">
                                    <button className="pl-2 pr-2 pt-3 df row-center pb-3 bg-2-primary h5 radius-1 text-2-light pointer" onClick={() => { props.notHeard() }} text="Not heard">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="reply-svg" viewBox="0 0 36 36" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.7045 4.8295C4.14384 4.39017 4.85616 4.39017 5.2955 4.8295L30.0455 29.5795C30.4848 30.0188 30.4848 30.7312 30.0455 31.1705C29.6062 31.6098 28.8938 31.6098 28.4545 31.1705L3.7045 6.4205C3.26517 5.98116 3.26517 5.26884 3.7045 4.8295Z" fill="#FEFEFE" />
                                            <path d="M17.1091 6.95138C16.8284 6.79996 16.5104 6.73158 16.1923 6.75425C15.8742 6.77691 15.5691 6.88967 15.3127 7.07935L15.2662 7.11521L13.2609 8.75701C13.2001 8.80678 13.1504 8.86874 13.115 8.93891C13.0795 9.00908 13.0592 9.0859 13.0553 9.1644C13.0514 9.24291 13.064 9.32136 13.0923 9.3947C13.1205 9.46804 13.1639 9.53464 13.2195 9.59021L17.0395 13.4103C17.1182 13.489 17.2185 13.5427 17.3276 13.5644C17.4368 13.5862 17.55 13.575 17.6528 13.5324C17.7557 13.4898 17.8435 13.4176 17.9053 13.3251C17.9671 13.2325 18.0001 13.1236 18 13.0123V8.47787C18.0032 8.1667 17.922 7.86049 17.7652 7.59172C17.6083 7.32296 17.3816 7.10169 17.1091 6.95138V6.95138ZM17.6716 23.5754L6.79852 12.7051C6.58764 12.494 6.3016 12.3754 6.00328 12.3753H3.9375C3.48995 12.3753 3.06072 12.5531 2.74426 12.8695C2.42779 13.186 2.25 13.6152 2.25 14.0628V21.9378C2.25 22.3853 2.42779 22.8146 2.74426 23.131C3.06072 23.4475 3.48995 23.6253 3.9375 23.6253H8.8425L15.3112 28.9205C15.5709 29.1132 15.8806 29.2269 16.2032 29.248C16.5259 29.2691 16.8477 29.1966 17.1302 29.0393C17.3971 28.8872 17.6184 28.6665 17.7714 28.4001C17.9243 28.1337 18.0032 27.8313 18 27.5241V24.3699C18 24.072 17.882 23.7863 17.6716 23.5754V23.5754ZM24.75 18.0003C24.75 16.2734 24.3415 14.6344 23.502 12.9891C23.4354 12.8565 23.3432 12.7384 23.2308 12.6415C23.1184 12.5447 22.988 12.471 22.847 12.4248C22.706 12.3786 22.5572 12.3607 22.4093 12.3722C22.2613 12.3837 22.1171 12.4244 21.985 12.4918C21.8528 12.5593 21.7353 12.6523 21.6392 12.7653C21.5432 12.8784 21.4704 13.0094 21.4251 13.1507C21.3799 13.292 21.363 13.4408 21.3755 13.5887C21.388 13.7366 21.4297 13.8805 21.498 14.0122C22.1723 15.3326 22.5 16.6376 22.5 18.0003C22.5 18.1878 22.4927 18.3783 22.4782 18.5719C22.4722 18.6526 22.4837 18.7336 22.5118 18.8095C22.54 18.8853 22.5841 18.9542 22.6413 19.0114L23.651 20.0211C23.7239 20.0942 23.8156 20.1458 23.9159 20.1702C24.0162 20.1947 24.1213 20.1911 24.2197 20.1598C24.3181 20.1285 24.406 20.0707 24.4737 19.9928C24.5415 19.9149 24.5864 19.8198 24.6038 19.718C24.7006 19.1506 24.7495 18.5759 24.75 18.0003V18.0003ZM29.25 18.0003C29.25 14.4017 28.3303 12.1018 26.8467 9.55857C26.6944 9.30501 26.4483 9.12167 26.1617 9.04824C25.8751 8.97481 25.5712 9.0172 25.3157 9.16623C25.0601 9.31525 24.8736 9.55893 24.7964 9.8445C24.7192 10.1301 24.7576 10.4345 24.9033 10.692C26.2315 12.9687 27 14.8946 27 18.0003C27 19.6758 26.7687 21.0153 26.3412 22.2647C26.3068 22.3643 26.3011 22.4716 26.3247 22.5743C26.3484 22.677 26.4003 22.7709 26.4748 22.8455L27.3516 23.7237C27.4178 23.7901 27.4997 23.8388 27.5896 23.8655C27.6795 23.8922 27.7747 23.8959 27.8665 23.8764C27.9582 23.8569 28.0436 23.8148 28.1149 23.7539C28.1862 23.6929 28.2412 23.6151 28.2748 23.5275C28.8984 21.9209 29.25 20.1983 29.25 18.0003Z" fill="#FEFEFE" />
                                            <path d="M33.75 17.9999C33.75 12.7792 32.3304 9.48432 30.1985 6.14448C30.0379 5.89273 29.784 5.71507 29.4924 5.65059C29.2009 5.58611 28.8956 5.64009 28.6439 5.80065C28.3921 5.96121 28.2145 6.2152 28.15 6.50674C28.0855 6.79829 28.1395 7.10351 28.3001 7.35526C30.2217 10.3625 31.5 13.3241 31.5 17.9999C31.5 21.2476 30.9073 23.6439 29.9229 25.7715C29.8747 25.8758 29.8595 25.9923 29.8795 26.1054C29.8995 26.2186 29.9537 26.3229 30.0347 26.4043L30.8728 27.2424C30.9362 27.3069 31.0141 27.355 31.1001 27.3829C31.186 27.4108 31.2774 27.4176 31.3665 27.4027C31.4556 27.3878 31.5398 27.3517 31.612 27.2974C31.6842 27.243 31.7423 27.1721 31.7812 27.0906C33.1594 24.2506 33.75 21.4452 33.75 17.9999Z" fill="#FEFEFE" />
                                        </svg>
                                        &nbsp;Not heard
                                    </button>
                                </div>
                            </div>

                        </>}


                    </div>}

                {
                    props.playState && <div className=" df  flex-1 center column" style={{ marginTop: "0px" }}>

                        <img className="lsitening-loader" src={LoaderImg} alt="" />

                        <h1 className="mt-1 h2 text-2-primary font-intern">Listening... </h1>
                    </div>
                }


            </div>
            {/* <h1 className="sub-heading df row center  font-metropolis-bold ">Enter 3 Digits you hear</h1> */}
        </>
    )
}
export default KeyPadTest