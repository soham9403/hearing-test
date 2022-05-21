
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PrintResult from "../pages/PrintResult";
import Result from "../pages/Result"
import {useState} from 'react'
const PdfCreate = () => {
    const [loading,setLoading] = useState(false)
    const printDocument = async() => {
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

                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                // const pdf = new jsPDF();
                // console.log
                // pdf.addImage(imgData, 'JPEG', 0, 0);
                // doc.output('pdfjsnewwindow');
                doc.save("download.pdf");
                setLoading(false)
            }).catch((err)=>{
                alert(err.message)
                setLoading(false)
            })
            
            ;
    }
    return (
        <div className="df column row bg-primary">
            
            {/* <Button variant="contained" color="secondary" className="container-max font-metropolis-bold titles txt-primary" style={{ margin: "auto" }} onClick={() => { printDocument() }}>Download Report</Button> */}
            <Result printDocument={printDocument} loading={loading} />
            <div className="fit-content" style={{ position: "fixed", zIndex: -1,background:"white", top: "0px", left: "0px", overflowY: "scroll" }}>
                <div style={{ width: "1500px" ,margin:"auto"}}>
                    <div className="df row column p-primary" id="pdfCreate"  /*style={{ position: "fixed", top: "0px", left: "0px", zIndex: -1 }} */ >
                        <PrintResult />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default PdfCreate