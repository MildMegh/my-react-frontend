export default function UsersRegistered({ users }) {
  return (
    <div className="p-6 bg-gray-50 shadow-lg rounded-2xl w-full">
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center p-3 text-gray-500">No users yet</td>
            </tr>
          ) : (
            users.map((user, idx) => (
              <tr key={idx}>
                <td className="border p-2">{user.username}</td>
                <td className="border p-2">{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
