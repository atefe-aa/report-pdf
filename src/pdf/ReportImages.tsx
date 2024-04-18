



const ReportImages = () => {
  return (
    <div style={{ display: "flex", minHeight: "50mm" }}>
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
          <span style={{ marginRight: "10px" }}>VISUAL</span>{" "}
          <span>RESULTS</span>
        </div>
      </div>

      <div
        style={{
          width: "93%",
          margin: "0 10px",
          border: "2px solid #57BA32",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
      
          <div
            style={{
              width: "45%",
              height: "200px",
              padding: "1%",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1%",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
              }}
              src= "http://localhost:8000/storage/report-images/YrKReqXQVsiNSfuoW4NZwUuQ3QrBcjDOzQcBqXnd.jpg"
            />
          </div>
     
      </div>
    </div>
  );
};
export { ReportImages };
