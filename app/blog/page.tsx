import { Navigation } from "../page1/navigation";
import { FirstText } from "./firsttext";
import { Box } from "./box";

export default function Home() {
    return (
        <main>
            <div style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundColor: "#F5F7FA",
            }}>
                <Navigation />
                <FirstText/>
                <Box/>
            </div>

        </main>
    );
}






