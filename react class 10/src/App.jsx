import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "min-h-screen bg-slate-950 text-white"
          : "min-h-screen bg-slate-100 text-slate-900"
      }
    >
      <Navbar />
      <Dashboard />
      <Settings />
    </div>
  );
};

export default App;