import React from "react";
import "./App.css";
import Users from "./components/users/Users";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/user-details/UserDetails";
import Error from "./pages/error";
import { BaseURL } from "./consts/consts";
import { ROOT } from "./consts/consts";
import { DETAILS } from "./consts/consts";

const userListUrl = `${BaseURL}/users?`;

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
    return () => console.log("response OK");
  }, []);

  async function getUser() {
    try {
      await fetch(userListUrl)
        .then((response) => response.json())
        .then((users) => setUsers(users));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Routes>
        <Route path={ROOT} element={<Users users={users} />} />
        <Route path={DETAILS} element={<UserDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
