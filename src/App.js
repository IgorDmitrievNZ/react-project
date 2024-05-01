import React from "react";
import "./App.css";
import axios from "axios";
import Users from "./components/users/Users";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/user-details/UserDetails";
import Error from "./pages/error";

const baseUrl = "https://api.github.com/users?";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Users users={users} />} />
        <Route path="/details/:login" element={<UserDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
