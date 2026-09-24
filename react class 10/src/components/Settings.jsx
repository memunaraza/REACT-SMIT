import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="mx-auto max-w-5xl px-6 pb-10">
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-slate-800">
          Settings
        </h2>

        <p className="mb-5 text-slate-600">
          Current Theme:{" "}
          <span className="font-semibold capitalize">
            {theme}
          </span>
        </p>

        <button
          onClick={toggleTheme}
          className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white transition hover:bg-slate-700"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Settings;