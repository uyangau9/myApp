// export const ReviewBox = () =>{
//     return(
<div id="box" style={{ height: "100px", width: "100px", backgroundColor: "white" }}></div>
import { Star } from "../page1"
export default function Home1() {
    const people = ["dasda", "dasdf", "fdsdvd"];
    const array = [1, 2, 3, 4];
    const listItems = people.map(person =>
        <li>{person}</li>);

    return (

        <div style={{
            display: "flex",
            gap: "20px",
        }}>
            {array.map((value) => {
                return (
                    <div
                        style={{ backgroundColor: "red", height: "100px", width: "100px" }}
                        key={value} />
                );ß
            })}
            <ul>{listItems}</ul>
            <Star />
        </div>
    )
}

