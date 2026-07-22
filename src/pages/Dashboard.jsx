import Navbar from "../layout/Navbar";
import UsersTable from "../Dashboard/UserTable";
import StatsCard from "../components/ui/StatsCard";

function Dashboard() {
  const mockUsers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john@example.com",
      phone: "+1234567890",
      dob: "1990-01-15",
      gender: "male",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith",
      email: "jane@example.com",
      phone: "+0987654321",
      dob: "1992-03-20",
      gender: "female",
      createdAt: "2024-01-02",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      username: "alice",
      email: "alice@example.com",
      phone: "+1122334455",
      dob: "1988-05-10",
      gender: "female",
      createdAt: "2024-01-03",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
        <Navbar />

        <section className="py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold">Admin Dashboard</h1>
            <p className="mt-2 text-slate-400">Manage and monitor all users</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4 mb-8">
            <StatsCard title="Total Users" value={mockUsers.length} />
            <StatsCard title="Active" value={mockUsers.length} />
            <StatsCard title="This Month" value={mockUsers.length} />
            <StatsCard title="Growth" value="+12%" />
          </div>

          <UsersTable users={mockUsers} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
