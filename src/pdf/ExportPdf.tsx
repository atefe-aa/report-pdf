import { ReportHeader } from "./ReportHeader";
import { ReportPatient } from "./ReportPatient";
import { ReportFooter } from "./ReportFooter";
import { ReportSignature } from "./ReportSignature";
import { PrintableReport } from "./PrintableReport";

import "../assets/fonts/fonts.css";
import { useRef } from "react";
import { ReportImages } from "./ReportImages";
import { report } from "../assets/constatnts";

const ExportPdf = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printRef.current) {
      const printWindow = window.open(
        "",
        "PRINT",
        "height=650,width=900,top=100,left=150"
      );

      // Ensure the window opened
      if (printWindow && printWindow.document) {
        printWindow.document.write(
          `<html><head><title>${report.test.name}-${
            report.test.senderRegistrationCode || report.test.id
          }</title>`
        );
        // Optionally, add any required styles here
        printWindow.document.write("</head><body>");
        printWindow.document.write(printRef.current.innerHTML);
        printWindow.document.write("</body></html>");

        printWindow.document.close(); // necessary for IE >= 10

        printWindow.focus(); // necessary for IE >= 10*/

        setTimeout(() => {
          // Delay to ensure QR code is fully rendered
          printWindow.print();
          printWindow.close();
        }, 1000); // Adjust time as necessar
      }

      return true;
    }
  };

  return (
    <>
      <div className="bg-light text-end">
        <button className="btn btn-primary me-5 " onClick={handlePrint}>
          Download
        </button>
      </div>

      <div
        ref={printRef}
        id="pdf-content"
        style={{
          overflow: "scroll",
          height: "100vh",
          display: "flex",
          // flexDirection:"column",
          justifyContent: "center",
          fontFamily: "IranSans",
        }}
      >
        <div style={{height:"100%"}}>
          <div
            className="bg-white text-black "
            style={{ width: "210mm", height: "297mm", position: "relative" }}
          >
            <ReportHeader />
            <ReportPatient test={report.test} />
            <PrintableReport sections={report.sections} />
            <ReportSignature />
            <ReportFooter />
          </div>
          {report.test.images.length > 0 && (
            <div
              className="bg-white text-black  "
              //  style={{
              //   marginTop: `${
              //     section.sectionTitle === "GLANDULAR CELLS"
              //       ? "170px"
              //       : "auto"
              //   }`,
              //   pageBreakBefore: `${
              //     section.sectionTitle === "GLANDULAR CELLS"
              //       ? "always"
              //       : "auto"
              //   }`,
              // }}
              style={{
                width: "210mm",
                height: "297mm",
                position: "relative",
                marginTop: "10px",
                pageBreakBefore: "always",
              }}
            >
              <ReportHeader />
              <ReportPatient test={report.test} />
              <ReportImages  />
              <ReportSignature />
              <ReportFooter />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { ExportPdf };
