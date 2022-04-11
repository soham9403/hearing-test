export const getGraphText = (stateValue, fromPdf = false) => {

    if (stateValue === 1) {
        return (
            <>
                <ul style={{ justifyContent: "flex-start" }} className="df  row p-primary column">
                    <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary' style={fromPdf ? { color: "#000" } : {}}>HEARING EVALUATION</h3>
                    <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                        Normal Hearing for all frequencies

                    </li>
                    <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                        No need for urgent attention

                    </li>
                    <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                        Try minimising usage of earphones for longer period of time.
                    </li>
                </ul>
            </>
        )
    } else if (stateValue === 2) {
        return (
            <ul style={{ justifyContent: "flex-start" }} className="df  row p-primary column">
                <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary' style={fromPdf ? { color: "#000" } : {}}>HEARING EVALUATION</h3>
                <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                    Mild to moderate hearing issues for mid and higher frequencies.
                </li>
                <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                    Advice to decrease usage of earphones immediately.
                </li>
                <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                    Consult an audiologist and start practicing hearing care.
                </li>
            </ul>
        )
    } else {
        return (
            <ul style={{ justifyContent: "flex-start" }} className="df  row p-primary column">
                <h3 className=' row df center titles font-metropolis-bold txt-primary p-v-primary' style={fromPdf ? { color: "#000" } : {}}>HEARING EVALUATION</h3>
                <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                    Severe hearing loss in ear.
                </li>
                <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                    Urgent need for audiologist consultation.

                </li>
                <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left",marginLeft:"20px", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='description  row p-v-primary font-metropolis-regular txt-primary'>
                    Use hearing aids if needed.

                </li>
            </ul>
        )

    }

}