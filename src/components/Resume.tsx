import resume from "../files/Yi-Hsuan_Chen_Resume.pdf"
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdfworker.js'

function Resume(){
    return(
        <>
            <div className="resume">
                <h2>Resume</h2>
                <Document 
                    file={resume}
                    onLoadError={console.error}>
                        <Page pageIndex={0}/>
                </Document>
            </div>
        </>
    )
}

export default Resume;