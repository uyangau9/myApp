"use client";
import { Navigation } from "../page1/navigation";
import { Footer } from "../page2/footer";
import { Box } from "./box";
import { FirstText } from "./firsttext";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase";

export default function Home() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <main>
      <div
        style={{
          backgroundSize: "cover",
          backgroundColor: "#F5F7FA",
        }}
      >
        <Navigation />
        <FirstText />
        {value && (
          <span style={{ display: "flex", flexWrap: "wrap" }}>
            {value.docs.map((doc) => (
              <div key={doc.id}>
                <Box
                  image={doc.data().image}
                  title={doc.data().title}
                  description={doc.data().description}
                  avatar={doc.data().avatar}
                  name={doc.data().name}
                  date={doc.data().date}
                />
              </div>
            ))}
          </span>
        )}
      </div>
      <Footer />
    </main>
  );
}
