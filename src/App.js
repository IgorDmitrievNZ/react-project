import React from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users/Users';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDetails from './components/user-details/UserDetails';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const baseUrl = "https://api.github.com/users?"

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
    <div>
      <header><Header /></header>

      {/* <div>
        <Users users={users} />
      </div> */}

      <Routes>
        <Route path="/" element={<Users users={users} />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>

      <footer><Footer /></footer>
    </div>)
}