import React from 'react';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = "https://reqres.in/api/users/1"

export default function App() {

  const [picture, setPicture] = useState("");

  axios.get(baseUrl).then((server_response) => {
    console.log(server_response.data.data.avatar);
    setPicture(server_response.data.data.avatar);
  });

  return (
    <div>
      <header><h1>HEADER</h1></header>
      <img className="avatar_img" src={picture} />
    </div>)
}