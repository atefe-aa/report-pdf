
type Props = {
  comment:string
};
const ReportComments: React.FC<Props> = ({ comment }) => {
  

  return (
    <div style={{ display: "flex", minHeight: "30mm", marginBottom: "8px" }}>
      <div
        style={{
          width: "7%",
          marginLeft: "10px",
          border: "2px solid #57BA32",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: "rotate(-90deg)",
            fontWeight: "bold",
            color: "#57BA32",
          }}
        >
          <span>Comments</span>
        </div>
      </div>

      <div
        style={{
          width: "93%",
          margin: "0 10px",
          border: "2px solid #57BA32",
        }}
      >
        <div
          style={{
            padding: "10px",
          }}
        >
          {comment}
        </div>
      </div>
    </div>
  );
};
export { ReportComments };
