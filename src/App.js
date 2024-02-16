import React from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/Users';
import { useState, useEffect } from 'react';

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
      <header><h1>HEADER</h1></header>

      <div>
        <Users users={users} />
      </div>

      <footer><h1>FOOTER</h1></footer>
    </div>)
}