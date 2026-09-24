import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const user = useContext(UserContext);

  return (
    <nav className="flex items-center justify-between bg-slate-900 px-8 py-5 text-white shadow-lg">
      <h2 className="text-xl font-bold">Student Dashboard</h2>

      <div className="text-right">
        <p className="text-sm">
          Welcome, <span className="font-semibold">{user.name}</span>
        </p>
        <p className="text-xs text-slate-300">
          Role: {user.role}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;