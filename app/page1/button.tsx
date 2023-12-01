

export const Button = ({ text, type }) => {
  if (type == "getaccess") {
    return (
      <button
        style={{
          border: "1px solid white",
          borderRadius: "4px",
          color: "white",
          width: "128px",
          height: "56px",
          fontSize: "14px",
          lineHeight: "24px",
          alignItems: "center",
          backgroundColor: "transparent"


        }}
      >
        {text || "Get access"}
      </button>
    );
  }


  return (
    <button
      style={{
        border: "solid",
        borderRadius: "4px",
        backgroundColor: "#0BBEF2",
        color: "white",
        fontSize: "16px",
        lineHeight: "24px",
        marginLeft: "13.8px",
        padding: "16px 19px",
      }}
    >
      {text || "Get early access"}
    </button>
  );
};
