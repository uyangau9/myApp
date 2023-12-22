"use client";
import { app } from "@/app/firebase";
import TextField from "@mui/material/TextField";
import { getDownloadURL, getStorage } from "firebase/storage";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

export default function Home() {
    const [name, setName] = useState("");
    const [hometown, setHometown] = useState("");
    const [hobby, setHobby] = useState("");
    const [favoritecolor, setFavoritecolor] = useState("");
    const [image, setImage] = useState(null);
    const [avatar, setAvatar] = useState(null);
    const saveImage = async () => {
        const imageRef = ref(storage, image?.name);
        await uploadBytes(imageRef, image)
        const imageurl = await getDownloadURL(imageRef)

        const avatarRef = ref(storage, avatar?.name);
        await uploadBytes(avatarRef, avatar)
        const avatarurl = await getDownloadURL(avatarRef)
        console.log(avatarurl)
        console.log(imageurl)
    };




    return (
        <main>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>

                <h1>hello</h1>
                <div style={{
                    gap: "10px"
                }}>
                    {JSON.stringify({
                        name: name,
                        hometown: hometown,
                        hobby: hobby,
                        favoritecolor: favoritecolor,

                    })}

                </div>
                <TextField
                    label="Name"
                    variant="outlined"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <TextField
                    label="hometown"
                    variant="outlined"
                    onChange={(e) => {
                        setHometown(e.target.value);
                    }}
                />
                <TextField
                    label="hobby"
                    variant="outlined"
                    onChange={(e) => {
                        setHobby(e.target.value);
                    }}
                />
                <TextField
                    label="favoritecolor"
                    variant="outlined"
                    onChange={(e) => {
                        setFavoritecolor(e.target.value);
                    }}

                />
                <input type="file"
                    onChange={(e) => {
                        setImage(e.target.files[0]);
                    }}></input>
                <input type="file"
                    onChange={(e) => {
                        setAvatar(e.target.files[0]);
                    }}></input>
                <button
                    onClick={saveImage}
                >save</button>
            </div>
        </main>
    )
}