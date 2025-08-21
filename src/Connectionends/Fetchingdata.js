import React, { useEffect, useState } from "react";
import axios from "axios";

function Fetching() {
    const [message, setMessage] = useState("");
    const [entries, setEntries] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        // Health check
        axios.get("http://localhost:8082/journals/")
            .then(res => setMessage(res.data))
            .catch(err => setError("Error fetching /journals/"));

        // Fetch all journal entries
        axios.get("http://localhost:8082/journals/all")
            .then(res => setEntries(res.data))
            .catch(err => setError("Error fetching /journals/all"));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <h2>Journal Entries:</h2>
            <ul>
                {entries.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.title}</strong>: {entry.content} ({entry.date})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fetching;
