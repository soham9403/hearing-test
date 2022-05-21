import { Button, Checkbox, Grid } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import CheckButton from "../components/CheckButton"
import { rootUrl } from "../routes/RouteIndex"
import { useDispatch, useSelector } from "react-redux";
import { changeUseOfHours, setPurpose } from "../actions/persoalIntrestAction"
import CustomSlider from "../components/CustomSlider"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
const PersonalIntrestForm = () => {

    const navigate = useNavigate()
    const personalIntrest = useSelector((state) => { return state.personalIntrest });

    const dispatch = useDispatch();

    return (
        // <>
        //     <h1 className="sub-heading df row center  font-metropolis-bold  m-v-primary">TELL US ABOUT YOUR AUDIO USAGE</h1>
        //     <div className="container-full  m-v-secondary" >
        //         <Grid container spacing={5}>
        //             <Grid item xs={12} md={6} >
        //                 <div className="df column row" style={{ height: "100%" }}>
        //                     <span className="titles row df font-metropolis-regular m-v-primary ">How many hours do you use your earphone/headphones?</span>
        //                     <div className="row df m-v-primary">
        //                         <Grid container spacing={4} >
        //                             {personalIntrest.hours_of_use && personalIntrest.hours_of_use.map((ele, index) => {
        //                                 return (
        //                                     <Grid item xs={6} md={4} >
        //                                         <CheckButton selected={index === personalIntrest.selected_hours_of_use} key={index} title={ele} onClick={() => { dispatch(changeUseOfHours(index)) }} />
        //                                     </Grid>
        //                                 )
        //                             })}
        //                         </Grid>
        //                     </div>
        //                 </div>


        //             </Grid>
        //             <Grid item xs={12} md={6} >
        //                 <div className="df column row" style={{ height: "100%" }}>
        //                     <span className="titles row df font-metropolis-regular m-v-primary">For what purpose do you use them?</span>

        //                     <div className="row df m-v-primary">
        //                         <Grid container spacing={2}>

        //                             {personalIntrest.purpose_list && personalIntrest.purpose_list.map((ele, index) => {
        //                                 return (
        //                                     <Grid item xs={6} key={index}>
        //                                         <div className="row df row-center">
        //                                             <Checkbox
        //                                                 checked={ele.value}
        //                                                 color="secondary"
        //                                                 onChange={() => { dispatch(setPurpose(index)) }}
        //                                                 inputProps={{ 'aria-label': 'controlled' }}
        //                                             />
        //                                             <span className="description df font-metropolis-regular">{ele.label}</span>
        //                                         </div>
        //                                     </Grid>
        //                                 )
        //                             })}
        //                         </Grid>
        //                     </div>
        //                 </div>
        //             </Grid>
        //         </Grid>
        //     </div>
        //     <div className="small_container m-v-secondary">
        //         <Button variant="contained"
        //             disabled={personalIntrest.selected_hours_of_use === -1}
        //             onClick={personalIntrest.selected_hours_of_use === -1 ? () => { } : () => { navigate(rootUrl + "/step/3") }}
        //             className="row p-primary m-v-primary" color="secondary"
        //         >
        //             Next
        //         </Button>
        //     </div>


        // </>

        <div className="df windowsize column row-center ">
            <div className="df flex-1 container column row-center">
                <h2 className="h2 font-intern mt-1 mb-1">Tell us about your audio usage</h2>
                <div className="p-2 primary-shadow border-2-primary border-2-primary-thin radius-0 row" >
                    <h3 className="h4 text-2-primary mb-2 font-intern bold-2">How many hours do you use your earphone / headphones ?</h3>
                    <div className="df row mb-3 column">
                        <CustomSlider value={personalIntrest.hours_of_use.indexOf(personalIntrest.selected_hours_of_use)} options={personalIntrest.hours_of_use.map((option, index) => { return { label: personalIntrest.hours_of_use[index], value: index } })}
                            onChange={(val) => {
                                dispatch(changeUseOfHours(personalIntrest.hours_of_use[val]))
                            }} />
                    </div>


                </div>
                <h3 className="h4 row mt-2 text-2-primary mb-2 font-intern bold-2">
                    For what purpose do you use them?
                </h3>
                <div className="df row mb-3 column">
                    <div className="flex-grid df flex-1">


                        {
                            personalIntrest.purpose_list && personalIntrest.purpose_list.map((ele, index) => {
                                return <div className="flex-item-4" key={index}> <CustomInput onChange={() => { dispatch(setPurpose(index)) }} type={"checkbox"} text={ele.label} selected={ele.value} /></div>
                            })
                        }
                    </div>

                </div>
                <div className="df row flex-end mt-2">
                    <div>
                        <CustomButton text={"Next"} onClick={() => { navigate(rootUrl + "/step/3") }} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default PersonalIntrestForm