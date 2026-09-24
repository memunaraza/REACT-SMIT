import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateBtns() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4">
      <button onClick={() => navigate("/men")} className="px-8 py-3 rounded-md bg-ink text-white text-sm hover:bg-accent-dark transition-colors">
        Men
      </button>
      <button onClick={() => navigate("/women")} className="px-8 py-3 rounded-md border border-black/15 text-ink text-sm hover:border-ink transition-colors">
        Women
      </button>
    </div>
  );
}

export default NavigateBtns;