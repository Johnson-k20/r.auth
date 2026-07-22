import UserRow from "./UserRow";

function UsersTable({ users = [] }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="text-lg font-semibold">User List</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-800 text-sm">
          <thead className="bg-slate-950/70 text-left text-slate-300">
            <tr>
              <th className="px-6 py-3 font-medium">First Name</th>
              <th className="px-6 py-3 font-medium">Last Name</th>
              <th className="px-6 py-3 font-medium">Username</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Phone</th>
              <th className="px-6 py-3 font-medium">DOB</th>
              <th className="px-6 py-3 font-medium">Gender</th>
              <th className="px-6 py-3 font-medium">Created At</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 text-slate-200">
            {users.length > 0 ? (
              users.map((user) => (
                <UserRow key={user.id || user.email} user={user} />
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="px-6 py-4 text-center text-slate-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UsersTable;
