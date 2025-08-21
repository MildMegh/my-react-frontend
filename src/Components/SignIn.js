import { useState } from "react";

export default function SignIn({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl w-96">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="email" name="email" value={formData.email} onChange={handleChange}
          placeholder="Email" className="p-2 border rounded" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange}
          placeholder="Password" className="p-2 border rounded" required />
        <button type="submit" className="bg-green-500 text-white py-2 rounded">Sign In</button>
      </form>
    </div>
  );
}
