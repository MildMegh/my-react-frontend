import { useState } from "react";

export default function JournalsInput() {
  const [inputData, setInputData] = useState({
    id: "",
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8082/api/journals/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Failed to send journal entries");
      }

      await res.json();
      alert("Journal Entries sent successfully!");
      setInputData({ id: "", title: "", content: "" });
    } catch (err) {
      console.error("Journal Entries input error:", err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Journals Input</h1>

      {/* Journal Input Template */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Id:</label><br />
          <input
            type="text"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, id: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={inputData.title}
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Content:</label><br />
          <input
            type="text"
            value={inputData.content}
            onChange={(e) =>
              setInputData({ ...inputData, content: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Send
        </button>
      </form>
    </div>
  );
}
