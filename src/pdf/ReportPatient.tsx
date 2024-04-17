import { TextAlign } from "chart.js";
import { TestsModel } from "../../tests/core/_models";
import { ReportTestModel } from "../core/_model";

type Props = {
  test: ReportTestModel | TestsModel;
};

const ReportPatient: React.FC<Props> = ({ test }) => {
  const styles = {
    td: {
      display:"flex",
      fontSize:"13px",
      alignItems:"center",
      justifyContent:"center",
      border: "1px solid #57BA32",
      padding: "2px",
      textAlign: "center" as TextAlign,
      
    },
    thead: {
      fontWeight: "bolder",
      color: "#585757",
      width:"100%"
    },
    tr:{display:"flex",minHeight:"10mm",maxHeight:"13mm" }
  };
  return (
    <div style={{ display: "flex",marginBottom:"5px" }}>
      <div
        style={{
          width: "7%",
          marginLeft: "10px",
          border: "2px solid #57BA32",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight:"20mm"
        }}
      >
        <span
          style={{
            display: "inline-block",
            transform: "rotate(-90deg)",
            fontWeight: "bold",
            color: "#57BA32",
          }}
        >
          PATIENT
        </span>
      </div>
      <div style={{ width: "93%", margin: "0 10px",minHeight:"18mm"  }}>
        <div style={styles.thead}>
          <div style={styles.tr}>
            <div style={{...styles.td,width:"12%"}}>Admit No.</div>
            <div  style={{...styles.td,width:"30%"}}>NAME</div>
            <div  style={{...styles.td,width:"18%"}}>AGE & GENDER</div>
            <div  style={{...styles.td,width:"25%"}}>DOCTOR</div>
            <div  style={{...styles.td,width:"20%"}}>DATE & TIME</div>
          </div>
        </div>
        <div>
          <div style={styles.tr}>
            <div  style={{...styles.td,width:"12%"}}>
              {test.senderRegistrationCode || test.id}
            </div>
            <div  style={{...styles.td,width:"30%"}}>{test.name}</div>
            <div  style={{...styles.td,width:"18%"}}>
              {test.age} {test.ageUnit}, {test.gender}
            </div>
            <div  style={{...styles.td,width:"25%"}}>{test.doctorName}</div>
            <div  style={{...styles.td,width:"20%"}}>{test.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ReportPatient };
