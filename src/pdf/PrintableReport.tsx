export interface OptionModel {
  id: number;
  type: string;
  className: string;
  label: string;
  value: string | boolean;
}

interface GroupModel {
  title: string;
  className: string;
  options: OptionModel[];
}
interface SectionModel {
  id: number;
  sectionTitle: string;
  groups: GroupModel[];
}
type Props = {
  sections: SectionModel[];
};

const PrintableReport: React.FC<Props> = ({ sections }) => {
  return (
    <div style={{ display: "flex", fontSize: "13px", lineHeight: "14px" }}>
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
        <span
          style={{
            display: "inline-block",
            transform: "rotate(-90deg)",
            fontWeight: "bold",
            color: "#57BA32",
            fontSize: "16px",
          }}
        >
          RESULTS
        </span>
      </div>
      <div
        style={{
          width: "93%",
          padding: "0 10px",
          height: "225mm",
          border: "2px solid #57BA32",
          margin: " 0 10px",
        }}
      >
        {sections.length > 0 &&
          sections.map((section) => {
            if (section.sectionTitle !== "Comments")
              return (
                <div
                  key={section.id}
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
                >
                  <div
                    style={{
                      // marginTop: "8px",
                      marginTop: "5px",
                      // fontSize: "12px",
                      fontWeight: 800,
                      // color:"#57BA32"
                    }}
                  >
                    <span>{section.sectionTitle}</span>
                  </div>

                  {section.groups &&
                    section.groups.length > 0 &&
                    section.groups.map((group, index) => {
                      return (
                        <div
                          key={group.title + index}
                          style={{
                            paddingRight: 5,
                            display: "flex",
                            flexDirection: "row",
                            paddingLeft: `${
                              group.className &&
                              group.className.length > 0 &&
                              group.className.includes("border")
                                ? "5px"
                                : ""
                            }`,
                            width: "max-content",
                            border: `${
                              group.className &&
                              group.className.length > 0 &&
                              group.className.includes("border")
                                ? "1px solid #57BA32"
                                : ""
                            }`,
                          }}
                        >
                          {group.title && group.title.length > 0 && (
                            <span style={{ marginTop: 1, marginRight: "10px" }}>
                              {group.title}:
                            </span>
                          )}
                          {group.options &&
                            group.options.length > 0 &&
                            group.options.map((option) => {
                              if (option.type === "checkbox")
                                return (
                                  <div
                                    key={option.id}
                                    style={{
                                      marginRight: "10px",
                                      marginTop: 1,
                                    }}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        defaultChecked={Boolean(option.value)}
                                      />
                                      <div style={{ marginLeft: "5px" }}>
                                        <span>{option.label}</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              if (option.type === "textArea")
                                return (
                                  <div
                                    key={option.id}
                                    style={{
                                      minHeight: "80px",
                                      maxWidth: "170mm",
                                    }}
                                  >
                                    <div
                                      style={{
                                        // marginTop: "10px",
                                        // fontSize: "12px",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      <span>{option.label}</span>
                                    </div>

                                    <span
                                      style={{
                                        color: `${
                                          option.label === "Comments" ||
                                          section.sectionTitle === "Comments"
                                            ? "red"
                                            : "inheret"
                                        }`,
                                      }}
                                    >
                                      {option.value}
                                    </span>
                                  </div>
                                );
                            })}
                        </div>
                      );
                    })}
                </div>
              );
          })}
      </div>
    </div>
  );
};

export { PrintableReport };
