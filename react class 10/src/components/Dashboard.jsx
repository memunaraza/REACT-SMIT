import Profile from "./Profile";

const Dashboard = () => {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        Dashboard
      </h1>

      <Profile />
    </main>
  );
};

export default Dashboard;