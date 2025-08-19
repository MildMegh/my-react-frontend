import React, { useState, useEffect } from "react";

export default function RegisteredUsers() {
  const [users, setUsers] = useState([]); // ✅ Start with empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8082/api/users/all")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // ✅ Ensure we only set an array
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data && Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          setUsers([]); // fallback
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Registered Users</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id || user.email}>
            <strong>{user.name}</strong> — {user.email}
          </div>
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
