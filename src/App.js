import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import JournalEntries from "./Pages/JournalEntries";
import Register from "./Pages/Register";
import RegisteredUsers from "./Pages/RegisteredUsers";
import JournalsInput from "./Pages/JournalsInput";

export default function App() {
  return (
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
  );
}
