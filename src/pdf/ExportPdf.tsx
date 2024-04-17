import { useRef, useEffect, useState } from "react";
import html2pdf from "html2pdf.js";
import { report } from "../assets/constatnts";
import { ReportHeader } from "./ReportHeader";
import { ReportPatient } from "./ReportPatient";
import { ReportFooter } from "./ReportFooter";
import { ReportSignature } from "./ReportSignature";
import { PrintableReport } from "./PrintableReport";
import { ReportImages } from "./ReportImages";

import "../assets/fonts/fonts.css";
import { ReportComments } from "./ReportComments";

const ExportPdf = () => {
  const pdfRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Wait for the component to mount before setting contentVisible to true
    setContentVisible(true);
  }, []);

  const handlePdf = () => {
    const element = pdfRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: "report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };
  const commentsSection = report.sections.find((section) => {
    const hasCommentsOption = section.groups.some((group) =>
      group.options.some((option) => option.label === "Comments")
    );
    return hasCommentsOption || section.sectionTitle === "Comments";
  });
  console.log(commentsSection);

  const commentsValue = commentsSection
    ? commentsSection.groups[0].options[0].value.toString()
    : "";
  return (
    <>
      <div className="bg-light text-end">
        <button className="btn btn-primary me-5 " onClick={handlePdf}>
          Download
        </button>
      </div>

      <div
        ref={pdfRef}
        id="pdf-content"
        style={{
          overflow: "scroll",
          color: "black",
          display: "flex",
          justifyContent: "center",
          fontFamily: "IranSans",
          minHeight: "100vh", // Ensure the content takes up at least the full viewport height
        }}
      >
        {contentVisible && (
          <div>
            <div
              className="bg-white text-black "
              style={{ width: "210mm", height: "280mm", position: "relative" }}
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
                style={{
                  width: "210mm",
                  height: "275mm",
                  position: "relative",
                  marginTop: "10px",
                }}
              >
                <ReportHeader />
                <ReportPatient test={report.test} />
                {commentsValue.length > 0 && (
                  <ReportComments comment={commentsValue} />
                )}

                <ReportImages />
                <ReportSignature />
                <ReportFooter />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { ExportPdf };
