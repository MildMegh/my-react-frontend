<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JournalEntries from "./Pages/JournalEntries";
import Register from "./Pages/Register";
import RegisteredUsers from "./Pages/RegisteredUsers";
import JournalsInput from "./Pages/JournalsInput";
=======
import logo from './logo.svg';
import './App.css';
import Fetching from './Connectionends/Fetchingdata';
import Register from './Components/RegisterForm';
import SignIn from './Components/SignIn';
import UsersRegistered from './Components/UsersRegistered';
>>>>>>> 9799678eeed5e11d9ac5dc429a94c11ecedbbdc2

export default function App() {
  return (
<<<<<<< HEAD
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Journal Entries</Link>
        <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
        <Link to="/users">Registered Users</Link>
        <Link to="/journalsinput">Journals Input</Link>
      </nav>

      <Routes>
        <Route path="/" element={<JournalEntries />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<RegisteredUsers />} />
         <Route path="/journalsinput" element={<JournalsInput />} />
      </Routes>
    </Router>
=======
    <>
    <Fetching/>
    <Register/>
    <SignIn/>
    <UsersRegistered/>
    </>
>>>>>>> 9799678eeed5e11d9ac5dc429a94c11ecedbbdc2
  );
}
