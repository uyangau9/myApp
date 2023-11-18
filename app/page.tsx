import BackgroundImage from "../public/brooke.png";
import { InvitationBox } from "./components/invitation-box";
import { Navigation } from "./components/navigation";

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
          height: "100vh",
          backgroundColor: "red",
          backgroundSize: "cover",
        }}
      >
        <div >
          <Navigation />
        </div>
        <InvitationBox />
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
