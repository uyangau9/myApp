import { ReactNode } from "react";

export const Button = ({ text, type }) => {
  if (type == "getaccess") {
    return <button style={{
      border: "solid", color: "white", }
    } > { text || "Get access"}</ button >;
  }
      if (type == "emailinput") {
    return <button placeholder="email" style={{
        border: "solid 1px",
        width: "316.92px",
        height: "56px",
      }}>email</button>;

  }
      return (
      <button style={{
        border: "solid",
        width: "163.41px",
        height: "56px",
        borderRadius: "4px",
        backgroundColor: "#0BBEF2",
        color: "white",
        fontFamily: "mulish",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "24px",
        paddingLeft: "13,8px"

      }} >{text || "Get early access"}</button>
      );

}
