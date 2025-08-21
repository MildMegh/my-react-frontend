import { useState } from "react";

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData); // send data to parent
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl w-96">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="username" value={formData.username} onChange={handleChange}
          placeholder="Username" className="p-2 border rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange}
          placeholder="Email" className="p-2 border rounded" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange}
          placeholder="Password" className="p-2 border rounded" required />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Register</button>
      </form>
    </div>
  );
}
