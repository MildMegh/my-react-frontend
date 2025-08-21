/*

import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetching() {
    const [message, setMessage] = useState("");
    const [entries, setEntries] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
    axios.get("http://localhost:8082/journals/welcome")
        .then(res => setMessage(res.data))
        .catch(() => setError("Error fetching /journals/welcome"));

    axios.get("http://localhost:8082/journals/all")
        .then(res => setEntries(res.data))
        .catch(() => setError("Error fetching /journals/all"));
}, []);

    return (
        <div>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <h1>{message || "Journal App"}</h1>

            <h2>Journal Entries:</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.title}</strong>: {entry.content} ({entry.date || "No date"})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fetching;

*/
