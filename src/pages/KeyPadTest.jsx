import { Button, Grid, InputAdornment, OutlinedInput } from "@mui/material"

const KeyPadTest = (props) => {
    return (
        <>
            {props.playState ? <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">Playing..</h1>
                : props.level === -1 ?
                    <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">Press Start Button</h1>
                    :
                    <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">Enter 3 Digits you hear</h1>
            }
            
            <div className="df column small_container">
                {props.level !== -1 && <div className="key_pad row p-primary m-v-primary radius-primary border-gray" style={{ marginTop: "0px" }}>
                    <Grid container spacing={0}>
                        <Grid item xs={4} className="border-bottom-numpad border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "1") } }}><span className="font-metropolis-bold titles  txt-gray">1</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "2") } }}><span className="font-metropolis-bold titles  txt-gray">2</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "3") } }}><span className="font-metropolis-bold titles  txt-gray">3</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "4") } }}><span className="font-metropolis-bold titles  txt-gray">4</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "5") } }}><span className="font-metropolis-bold titles  txt-gray">5</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "6") } }}><span className="font-metropolis-bold titles  txt-gray">6</span></Button>
                        </Grid>

                        <Grid item xs={4} className="border-bottom-numpad border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "7") } }}><span className="font-metropolis-bold titles  txt-gray">7</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "8") } }}><span className="font-metropolis-bold titles  txt-gray">8</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-bottom-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "9") } }}><span className="font-metropolis-bold titles  txt-gray">9</span></Button>
                        </Grid>

                        <Grid item xs={4} className="border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row " ><span className="font-metropolis-bold titles  txt-gray">&nbsp;</span></Button>
                        </Grid>
                        <Grid item xs={4} className="border-right-numpad">
                            <Button disabled={props.playState} className="number_pad_btn row" onClick={() => { if (props.inputVal.length < 3) { props.setInputVal(props.inputVal.toString() + "0") } }}><span className="font-metropolis-bold titles  txt-gray">0</span></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button disabled={props.playState} className="number_pad_btn row" onClick={() => { props.setInputVal(props.inputVal.slice(0, props.inputVal.length - 1)) }}><span className="font-metropolis-bold titles  txt-gray"> {"<"} </span></Button>
                        </Grid>
                    </Grid>
                </div>}
                
                {!props.playState && <div className=" df m-v-primary row row-center column" style={{ marginTop: "0px" }}>

                    {props.level === -1 && <Button variant="contained" style={{ marginLeft: "auto", marginRight: "auto" }} color="secondary" className="row  key_pad" onClick={() => { props.startTest() }}>Start</Button>}
                    {props.level !== -1 && <>
                        <OutlinedInput
                            disabled={true}
                            color="secondary"
                            className="key_pad key_pad_input_ele row sub-heading df font-metropolis-bold"
                            id="outlined-adornment-weight"
                            value={props.inputVal}
                            onChange={() => { }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button color="secondary" variant="contained" disabled={props.inputVal.length < 3} onClick={() => { props.checkTest() }}>Next </Button>
                                </InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }} />


                        <div className="key_pad m-v-primary">

                            <Grid container spacing={2}>
                                <Grid item xs={6} >
                                    <Button variant="contained" style={{ marginLeft: "auto", marginRight: "auto" }} color="secondary" className="row  " onClick={() => { props.replay() }}>Re-Play</Button>
                                </Grid>
                                <Grid item xs={6} >
                                    <Button variant="contained" style={{ marginLeft: "auto", marginRight: "auto" }} color="secondary" className="row  " onClick={() => { props.notHeard() }}>not heard</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </>}


                </div>}


            </div>
            {/* <h1 className="sub-heading df row center  font-metropolis-bold m-v-primary">Enter 3 Digits you hear</h1> */}
        </>
    )
}
export default KeyPadTest