import BackgroundImage from "../public/brooke.png";
import { InvitationBox } from "./page1/invitation-box";
import { Navigation } from "./page1/navigation";
import { Text1 } from "./page2/text1";
import { Text2 } from "./page2/text2";
import { Meetings } from "./page2/pictures";
import { FirstSection } from "./page2/first-section";
import { SecondSection } from "./page2/second-section";
import { ThirdSection } from "./page2/third-section";
import { Text4 } from "./page2/text4";
import { Star } from "./page1/star";


export default function Home() {
  return (
    <main>

      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
        }}
      >
        <div >
          <Navigation />
        </div>
        <InvitationBox />
      </div>

      <div
        style={{
          height: "",
          backgroundColor: "#F5F7FA",
          backgroundSize: "cover",

        }}
      >
        <div>
          <FirstSection/>
          <SecondSection/>
          <ThirdSection/>
          <Text4/>
          <Star/>



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
