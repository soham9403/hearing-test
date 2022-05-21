import { Button, Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useOutlet } from "react-router";
import { toast } from "react-toastify";
import { changeAge, changeEmail, changeGender, changeName } from "../actions/personaldetailsAction";
import { rootUrl } from "../routes/RouteIndex";
import Gradient from '../assets/images/v2/rightgradient.png'
import LightLogo from '../assets/images/v2/lowopacitylogo.png'
import MobileViewStep1 from '../assets/images/v2/mobile-view-step-1.png'
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
const PerSonalDetailsForm = (props) => {


    const navigate = useNavigate()
    const dispatch = useDispatch();
    const personalDetails = useSelector((state) => { return state.personalDetails });

    const validate = (e) => {
        e.preventDefault()
        if (!personalDetails.name || personalDetails.name === "") {
            toast.error("Please Enter Your Name")
            return false
        }
        if (!personalDetails.email || personalDetails.email === "") {
            toast.error("Please Enter Your Email Id")
            return false
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(personalDetails.email)) {
            toast.error("Please Enter Correct Email Id")
            return false
        }
        if (!personalDetails.age || personalDetails.age === "" || isNaN(parseInt(personalDetails.age))) {
            toast.error("Please Enter Your Age")
            return false
        }
        if (!personalDetails.gender || personalDetails.gender === "") {
            toast.error("Please Select Your Gender")
            return false
        }

        navigate(rootUrl + "/step/2")
    }
    const genderdropdown = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
        {
            value: 'Other',
            label: 'Other',
        }
    ];
    return <>
        {/* <div className="small_container df column">
            <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">Take the Test !</h1>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField value={personalDetails.name} onInput={(e) => { dispatch(changeName(e.target.value)) }} id="outlined-basic" className="row" label="Name" name="name" placeholder="Enter your name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField value={personalDetails.email} onInput={(e) => { dispatch(changeEmail(e.target.value)) }} id="outlined-email" className="row" label="Email Id" name="email" placeholder="Enter your Email Id" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField value={personalDetails.age} onInput={(e) => { dispatch(changeAge(e.target.value)) }} id="outlined-number" type="number" className="row" label="Age" name="age" placeholder="Enter your age" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            placeholder="select"
                            label="Gender"
                            value={personalDetails.gender}
                            onChange={(e) => { dispatch(changeGender(e.target.value)) }}
                            className="row"
                        >
                            {genderdropdown.map((option) => (
                                <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={() => { validate(); }} color="secondary" className="row" variant="contained">Next</Button>
                </Grid>
            </Grid>


        </div> */}

        <div className="df row space-between windowsize p-relative">
            <div className="logo-ight-img">
                <img src={LightLogo} className="row" alt="" />
            </div>
            <div className="df column personal-details-left">
                <img src={MobileViewStep1} className="df row mobile-view-step-1 mb-1" alt="" />
                <div className="form-area pl-1 row column flex-1 df">
                    <h2 className="h1 font-intern bold-1">Take your</h2>
                    <h1 className="body-1 font-intern text-2-primary bold-1 ">Hearing Test</h1>

                    <form onSubmit={validate} className="df row column mt-2 flex-1" style={{ overflowY: "scroll" }}>
                        <div className="form-field mb-3 df row">
                            <CustomInput type={"text"}  value={personalDetails.name} onInput={(e) => { dispatch(changeName(e.target.value)) }}  placeholder="Enter your name" />
                        </div>

                        <div className="form-field mb-3 df row">
                            <CustomInput type={"text"} value={personalDetails.email} onInput={(e) => { dispatch(changeEmail(e.target.value)) }} placeholder="Enter your email" />
                        </div>
                        <div className="df row space-between mb-2">
                            <div className="form-field  df flex-1">
                                <CustomInput type={"number"} value={personalDetails.age} onInput={(e) => { dispatch(changeAge(e.target.value)) }} placeholder="Age" />
                            </div>
                            <div className="form-field  ml-3 df " style={{ flex: 2 }}>
                                <CustomInput
                                    type={"select"}
                                    value={personalDetails.gender}
                                    onChange={(val) => { dispatch(changeGender(val)) }}
                                    options={genderdropdown} placeholder="Age" />
                            </div>
                        </div>

                        <div className="df row ">
                            <CustomButton text="Next" />
                        </div>


                    </form>
                </div>
            </div>
            <div className="df column personal-details-right">
                <img src={Gradient} style={{ height: "100vh", width: "100%", objectFit: "cover" }} alt="" />
            </div>
        </div>
    </>
}
export default PerSonalDetailsForm