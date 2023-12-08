"use client";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [hometown, setHometown] = useState("");
    const [hobby, setHobby] = useState("");
    const [favoritecolor, setFavoritecolor] = useState("");
    return (
        <main>
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
                        setName(e.target.value);
                    }}
                />
                <TextField
                    label="favoritecolor"
                    variant="outlined"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                
        </main>
    )
}