export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs animate-pulse flex flex-col items-center">
      <div className="self-end w-8 h-4 bg-slate-200 rounded-md mb-2"></div>
      <div className="w-36 h-36 bg-slate-100 rounded-2xl my-2"></div>
      <div className="w-24 h-6 bg-slate-200 rounded-md mt-2"></div>
      <div className="flex gap-2 mt-3">
        <div className="w-16 h-6 bg-slate-100 rounded-full"></div>
        <div className="w-16 h-6 bg-slate-100 rounded-full"></div>
      </div>
    </div>
  );
}