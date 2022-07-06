
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PrintResult from "../pages/PrintResult";
import Result from "../pages/Result"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from "axios";

const PdfCreate = () => {
    const [loading, setLoading] = useState(false)

    const { personalDetails, personalIntrest, earTest } = useSelector((state) => state)
    const sendReqToaddRow = async (file) => {
        const data = {
            snr: earTest.snr,
            email: personalDetails.email,
            name: personalDetails.name,
            age: personalDetails.age,
            gender: personalDetails.gender,
            device: personalIntrest.device_selected == 'headphone' ? 1 : 0,
            usage: personalIntrest.selected_hours_of_use,
            ...earTest
            //   F1L: earTest.F1L,
            //   F1R: earTest.F1R,
            //   F2L: earTest.F2L,
            //   F2R: earTest.F2R,
            //   F3L: earTest.F3L,
            //   F3R: earTest.F3R,
            //   F4L: earTest.F4L,
            //   F4R: earTest.F4R,
            //   F5L: earTest.F5L,
            //   F5R: earTest.F5R,
            //   F6L: earTest.F6L,
            //   F6R: earTest.F6R,
            //   F7L: earTest.F7L,
            //   F7R: earTest.F7R,
            //   bone_F1L: earTest.bone_F1L,
            //   bone_F1R: earTest.bone_F1R,
            //   bone_F2L: earTest.bone_F2L,
            //   bone_F2R: earTest.bone_F2R,
            //   bone_F3L: earTest.bone_F3L,
            //   bone_F3R: earTest.bone_F3R,
            //   bone_F4L: earTest.bone_F4L,
            //   bone_F4R: earTest.bone_F4R,
            //   bone_F5L: earTest.bone_F5L,
            //   bone_F5R: earTest.bone_F5R,
            //   bone_F6L: earTest.bone_F6L,
            //   bone_F6R: earTest.bone_F6R,
            //   bone_F7L: earTest.bone_F7L,
            //   bone_F7R: earTest.bone_F7R
        }

        const formData = new FormData();
        for (let key of Object.keys(data)) {
            formData.append(key, data[key])
        }
        formData.append('report', file)
        return await axios({
            url:
                // 'https://lychee-crisp-08059.herokuapp.com/' +
                'http://localhost:8000/' +

                // "https://crm-admin-wehear.herokuapp.com/" +
                'api/hearing-test/add-row',

            method: 'post',
            data: formData
        })
    }
    const printDocument = async ({ isSend = false }) => {
        setLoading(true)
        const input = document.getElementById('pdfCreate');

        return await html2canvas(input)
            .then((canvas) => {
                // canvas.style = 
                const imgData = canvas.toDataURL('image/png');


                var imgWidth = 210;
                var pageHeight = 295;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                var doc = new jsPDF('p', 'mm');
                var position = 0;

                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
                    heightLeft -= pageHeight;
                }
                // const pdf = new jsPDF();
                // console.log
                // pdf.addImage(imgData, 'JPEG', 0, 0);
                // doc.output('pdfjsnewwindow');
                if (isSend) {

                    const output = doc.output('blob')
                    sendReqToaddRow(output)
                } else {
                    doc.save(personalDetails.name + ".pdf");
                }

                setLoading(false)
            }).catch((err) => {
                alert(err.message)
                setLoading(false)
            })

            ;
    }

    useEffect(() => {

        // (async () => { setTimeout(async () => { await printDocument({ isSend: true }) }, 2000) })()
    }, [])
    return (
        <div className="df column row bg-primary">

            
            <Result printDocument={printDocument} loading={loading} />
            <div className="fit-content" style={{ position: "fixed", zIndex: -1, background: "white", top: "0px", left: "0px", overflowY: "scroll" }}>
                <div style={{ width: "1500px", margin: "auto" }}>
                    <div className="df row column p-primary" id="pdfCreate"  /*style={{ position: "fixed", top: "0px", left: "0px", zIndex: -1 }} */ >
                        <PrintResult />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default PdfCreate