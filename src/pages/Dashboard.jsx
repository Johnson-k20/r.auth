import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, logout } from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await getUsers();

      console.log(response);

      // Handles both API response formats
      if (Array.isArray(response)) {
        setUsers(response);
      } else {
        setUsers(response.users || []);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }

    navigate("/login");
  };

  // Calculate users this month
  const usersThisMonth = users.filter((user) => {
    if (!user.createdAt) return false;

    const created = new Date(user.createdAt);
    const today = new Date();

    return (
      created.getMonth() === today.getMonth() &&
      created.getFullYear() === today.getFullYear()
    );
  }).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">

        {/* Header */}

        <header className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-4 shadow-lg shadow-cyan-950/20">

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Admin panel
            </p>

            <h1 className="text-xl font-semibold">
              User dashboard
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-white"
          >
            Logout
          </button>

        </header>

        {/* Error */}

        {errorMessage && (
          <p className="mt-6 text-red-500">
            {errorMessage}
          </p>
        )}

        {/* Stats */}

        <section className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Total Users
            </p>

            <p className="mt-3 text-4xl font-semibold text-white">
              {loading ? "..." : users.length}
            </p>

          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">

            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Users this month
            </p>

            <p className="mt-3 text-4xl font-semibold text-white">
              {loading ? "..." : usersThisMonth}
            </p>

          </div>

        </section>

        {/* Table */}

        <section className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">

          <div className="border-b border-slate-800 px-6 py-4">
            <h2 className="text-lg font-semibold">
              User list
            </h2>
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

                {loading ? (

                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-6 text-center"
                    >
                      Loading...
                    </td>
                  </tr>

                ) : users.length === 0 ? (

                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-6 text-center"
                    >
                      No users found.
                    </td>
                  </tr>

                ) : (

                  users.map((user) => (

                    <tr key={user._id}>

                      <td className="px-6 py-4">
                        {user.firstName}
                      </td>

                      <td className="px-6 py-4">
                        {user.lastName}
                      </td>

                      <td className="px-6 py-4">
                        {user.username}
                      </td>

                      <td className="px-6 py-4">
                        {user.email}
                      </td>

                      <td className="px-6 py-4">
                        {user.phone}
                      </td>

                      <td className="px-6 py-4">
                        {user.dob}
                      </td>

                      <td className="px-6 py-4">
                        {user.gender}
                      </td>

                      <td className="px-6 py-4">
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleDateString()
                          : "-"}
                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </section>

      </div>
    </div>
  );
}

export default Dashboard;