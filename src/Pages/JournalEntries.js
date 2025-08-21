import React, { useEffect, useState } from "react";

export default function JournalEntries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/journals/all") // Adjust backend URL
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Journal Entries</h1>
      {entries.length === 0 ? (
        <p>No journal entries found.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              <strong>{entry.title}</strong> - {entry.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
