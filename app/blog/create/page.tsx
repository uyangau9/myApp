"use client";
import { app } from "@/app/firebase";
import TextField from "@mui/material/TextField";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import backgroundImage from "../create/back.jpg";
import styled from "@mui/material/styles";
import button from "@mui/material/Button";
import * as React from "react";
import { Logo } from "@/app/page1/logo";


const storage = getStorage(app);
const db = getFirestore(app);


export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File>();
  const [avatar, setAvatar] = useState<File>();
  const saveImage = async () => {
    const imageRef = ref(storage, image?.name);
    await uploadBytes(imageRef, image as Blob);
    const imageurl = await getDownloadURL(imageRef);
    const avatarRef = ref(storage, avatar?.name);
    await uploadBytes(avatarRef, avatar as Blob);
    const avatarurl = await getDownloadURL(avatarRef);
    await addDoc(collection(db, "blog"), {
      name: name,
      date: date,
      title: title,
      description: description,
      avatar: avatarurl,
      image: imageurl

    });
  };

  return (
    <main>
      <div style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover"
      }}>
        <div style={{ paddingTop: "24px", paddingLeft: "100px" }} >
          <a href="/">
            <Logo />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "100px"
          }}
        >

          <TextField
            style={{
              marginTop: "200px",
              color: "white",
              width: "360px",
              lineHeight: "20px"
            }}
            label="title"
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            style={{
              marginTop: "15px",
              color: "white",
              width: "360px",
              lineHeight: "20px"
            }}
            label="name"
            variant="outlined"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            style={{
              marginTop: "15px",
              color: "white",
              width: "360px",
              lineHeight: "20px"
            }}
            label="date"
            variant="outlined"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
            style={{
              marginTop: "15px",
              color: "white",
              width: "360px",
              lineHeight: "20px"
            }}
            label="description"
            variant="outlined"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {/* <div style={{ */}
          {/* // display: "flex",
            paddingTop: "15px" */}
          {/* }}> */}

          <input style={{
            marginTop: "15px",
          }}
            type="file"
            onChange={(e) => {
              if (!e.target.files) return;
              setImage(e.target.files[0]);
            }}
          ></input>
          <input style={{
            width: "200px",
            marginTop: "15px",
          }}
            type="file"
            onChange={(e) => {
              if (!e.target.files) return;
              setAvatar(e.target.files[0]);
            }}
          ></input>
          {/* </div> */}
          <button
            style={{
              // clip: 'rect(0 0 0 0)',
              // clipPath: 'inset(50%)',
              height: "100",
              // overflow: 'hidden',
              // position: 'absolute',
              bottom: 0,
              left: 0,
              whiteSpace: 'nowrap',
              width: "200px",
              marginTop: "15px",
              marginLeft: "75px"
            }}
            onClick={saveImage}>save</button>
        </div>
      </div>
    </main>
  );
}
