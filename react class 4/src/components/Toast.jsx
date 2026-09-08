function Toast({ toast }) {
  if (!toast.show) {
    return null;
  }

  const isError = toast.type === "error";

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <div
        className={`flex items-center gap-3 rounded-2xl border px-5 py-4 shadow-2xl backdrop-blur-xl ${
          isError
            ? "border-red-400/20 bg-red-500/10 text-red-300"
            : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
        }`}
      >

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">

          {isError ? "!" : "✓"}

        </div>

        <p className="text-sm font-medium">
          {toast.message}
        </p>

      </div>

    </div>
  );
}

export default Toast;