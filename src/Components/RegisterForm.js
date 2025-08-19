
/*
import React, { useState, useEffect } from "react";

function RegisterForm() {
  // Existing states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0); // New state

  // Fetch all users (GET)
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8082/api/users/all");
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
        setMessage("");
      } else {
        setMessage("❌ Failed to load users.");
      }
    } catch (error) {
      setMessage(`❌ Network error: ${error.message}`);
    }
  };

  // Fetch total user count
  const fetchUserCount = async () => {
    try {
      const res = await fetch("http://localhost:8082/api/users/count");
      if (res.ok) {
        const count = await res.json();
        setUserCount(count);
      } else {
        setMessage("❌ Failed to load user count.");
      }
    } catch (error) {
      setMessage(`❌ Network error: ${error.message}`);
    }
  };

  // Fetch users and count on component mount
  useEffect(() => {
    fetchUsers();
    fetchUserCount();
  }, []);

  // Register user handler (unchanged)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8082/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`✅ User registered successfully! ID: ${data.id}`);
        setName("");
        setEmail("");
        setPassword("");
        fetchUsers();
        fetchUserCount();  // refresh count after adding user
      } else {
        const errorData = await response.json();
        setMessage(`❌ Registration failed: ${errorData.message || "Unknown error"}`);
      }
    } catch (error) {
      setMessage(`❌ Network error: ${error.message}`);
    }
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}

      <hr />

      <h3>Registered Users ({userCount})</h3> {/* Display total count */

    /*
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users loaded.</p>
      )}
    </div>
  );
}

export default RegisterForm;

*/