export const getGraphText = (avg, fromPdf = false) => {
  if (avg < 30) {
    return (
      <ul
        style={{ justifyContent: 'flex-start' }}
        className='df  row p-primary column'
      >
        <h3
          className=' row df center titles font-metropolis-bold text-2-primary mb-2'
          style={fromPdf ? { color: '#000' } : {}}
        >
          HEARING EVALUATION
        </h3>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Normal Hearing for all frequencies
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          No need for urgent attention
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Try minimising usage of earphones to keep your ears healthy.
        </li>
      </ul>
    )
  } else if (avg >= 30 && avg < 50) {
    return (
      <ul
        style={{ justifyContent: 'flex-start' }}
        className='df  row p-primary column'
      >
        <h3
          className=' row df center titles font-metropolis-bold text-2-primary mb-2'
          style={fromPdf ? { color: '#000' } : {}}
        >
          HEARING EVALUATION
        </h3>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Mild to moderate hearing issues for mid and higher frequencies.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Need to use hearing aid for better listening.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Advice to decrease usage of earphones immediately.
        </li>
      </ul>
    )
  } else if (avg >= 50 && avg < 65) {
    return (
      <ul
        style={{ justifyContent: 'flex-start' }}
        className='df  row p-primary column'
      >
        <h3
          className=' row df center titles font-metropolis-bold text-2-primary mb-2'
          style={fromPdf ? { color: '#000' } : {}}
        >
          HEARING EVALUATION
        </h3>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Moderate hearing loss.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Usage of hearing aid is required.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Stop consuming audio from earphones.
        </li>
      </ul>
    )
  } else if (avg >= 65 && avg < 85) {
    return (
      <ul
        style={{ justifyContent: 'flex-start' }}
        className='df  row p-primary column'
      >
        <h3
          className=' row df center titles font-metropolis-bold text-2-primary mb-2'
          style={fromPdf ? { color: '#000' } : {}}
        >
          HEARING EVALUATION
        </h3>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Severe hearing loss in ear.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Urgent need for audiologist consultation.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Use Bone-conduction or RIC hearing aids.
        </li>
      </ul>
    )
  } else {
    return (
      <ul
        style={{ justifyContent: 'flex-start' }}
        className='df  row p-primary column'
      >
        <h3
          className=' row df center titles font-metropolis-bold text-2-primary mb-2'
          style={fromPdf ? { color: '#000' } : {}}
        >
          HEARING EVALUATION
        </h3>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Profound hearing loss.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Irreversible hearing loss, consult to ENT.
        </li>
        <li
          style={
            fromPdf
              ? {
                  justifyContent: 'flex-start',
                  textAlign: 'left',
                  color: '#000'
                }
              : { justifyContent: 'flex-start', textAlign: 'left' }
          }
          className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'
        >
          Use Bone-conduction hearing aids.
        </li>
      </ul>
    )
  }
  // if (stateValue === 1) {
  //     return (
  //         <>
  //             <ul style={{ justifyContent: "flex-start" }} className="df  row p-primary column">
  //                 <h3 className=' row df center titles font-metropolis-bold text-2-primary mb-2' style={fromPdf ? { color: "#000" } : {}}>HEARING EVALUATION</h3>
  //                 <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                     Normal Hearing for all frequencies

  //                 </li>
  //                 <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                     No need for urgent attention

  //                 </li>
  //                 <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                     Try minimising usage of earphones for longer period of time.
  //                 </li>
  //             </ul>
  //         </>
  //     )
  // } else if (stateValue === 2) {
  //     return (
  //         <ul style={{ justifyContent: "flex-start" }} className="df  row p-primary column">
  //             <h3 className=' row df  h5 font-intern text-2-primary text-2-primary mb-2' style={fromPdf ? { color: "#000" } : {}}>HEARING EVALUATION</h3>
  //             <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                 Mild to moderate hearing issues for mid and higher frequencies.
  //             </li>
  //             <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                 Advice to decrease usage of earphones immediately.
  //             </li>
  //             <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                 Consult an audiologist and start practicing hearing care.
  //             </li>
  //         </ul>
  //     )
  // } else {
  //     return (
  //         <ul style={{ justifyContent: "flex-start" }} className="df  row p-primary column">
  //             <h3 className=' row df  h5 font-intern text-2-primary text-2-primary mb-2' style={fromPdf ? { color: "#000" } : {}}>HEARING EVALUATION</h3>
  //             <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                 Severe hearing loss in ear.
  //             </li>
  //             <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                 Urgent need for audiologist consultation.

  //             </li>
  //             <li style={fromPdf ? { justifyContent: "flex-start", textAlign: "left", color: "#000" } : { justifyContent: "flex-start", textAlign: "left" }} className='h6 ml-1 pb-3   font-intern bold-2 text-2-primary'>
  //                 Use hearing aids if needed.

  //             </li>
  //         </ul>
  //     )

  // }
}
