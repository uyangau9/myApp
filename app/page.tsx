import { Button } from "./components/button";
import { Logo } from "./components/logo";
import { MainText } from "./components/maintext";
import { Navigation } from "./components/navigation";
import { NavigationItem } from "./components/navigation-item";
import BackgroundImage from "../public/brooke.png";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundSize: "cover",
      }}
    >
      <Navigation />
      <div style={{ paddingLeft: "139px" }}>
        <Logo />
      </div>
      <div
        id="navigationitems1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "4px",
          paddingLeft: "124px",
          paddingRight: "140px",
        }}
      >
        <NavigationItem href="/products">Products</NavigationItem>
        <NavigationItem href="/products">Services</NavigationItem>
        <NavigationItem href="/products">Contact</NavigationItem>
        <NavigationItem href="/products">Log In</NavigationItem>
        <div id="navigationitems2" style={{ display: "flex" }}>
          <Button type={"getaccess"} />
        </div>
        <div></div>
      </div>
      <MainText></MainText>
      <div
        id="EmailInputandBlueButton"
        style={{
          display: "flex",
          paddingTop: "70px",
          paddingLeft: "139px",
        }}
      >
        <Button type={"emailinput"} />
        <div
          style={{
            paddingLeft: "13,8",
          }}
        >
          <Button />
        </div>
      </div>
    </main>
  );
}

// <div id="box" style={{height:"100px", width:"100px", backgroundColor:"red"}}></div>
// import {Star} from "./components/star"
// export default function Home1() {
//   const people = ["dasda", "dasdf", "fdsdvd"];
//   const array = [1, 2, 3, 4];
//   const listItems = people.map(person =>
//     <li>{person}</li>);

//     return (

//       <div style={{
//         display: "flex",
//         gap: "20px",
//       }}>
//       {array.map((value) => {
//         return (
//           <div
//           style={{ backgroundColor: "red", height: "100px", width: "100px" }}
//           key={value} />
//           );
//         })}
//       <ul>{listItems}</ul>
//         <Star/>
//     </div>
//   )
// }
