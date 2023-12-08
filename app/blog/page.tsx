"use client"
import { Navigation } from "../page1/navigation";
import { FirstText } from "./firsttext";
import { Box } from "./box";
import { Footer } from "../page2/footer";

import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import { initializeApp } from "firebase/app";
import { app } from "../firebase";

export default function Home() {
    const [value, loading, error] = useCollection(
        collection(getFirestore(app), 'blog'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );


    return (
        <main>
            <div style={{
                height: "100vh",
                backgroundSize: "cover",
                backgroundColor: "#F5F7FA",
            }}>
                <Navigation />
                <FirstText />
                {value && (
                    <span style={{ display: "flex" }}>
                        Collection:{' '}
                        {value.docs.map((doc) => (
                            <div
                                key={doc.id}>
                                <Box
                                    image={doc.data().image}
                                    title={doc.data().title}
                                    description={doc.data().description}
                                    avatar={doc.data().avatar}
                                    name={doc.data().name}
                                    date={doc.data().date} />
                            </div>
                        ))}
                    </span>
                )}
                <Footer />
            </div>

        </main>
    );
}






