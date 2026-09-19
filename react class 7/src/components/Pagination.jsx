export default function Pagination({ offset, limit, totalCount, onPageChange }) {
  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="flex justify-center items-center gap-4 mt-12 mb-6">
      <button
        onClick={() => onPageChange(offset - limit)}
        disabled={offset === 0}
        className="px-5 py-2.5 rounded-xl font-medium bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        ← Previous
      </button>
      
      <span className="text-sm font-semibold text-slate-600 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(offset + limit)}
        disabled={offset + limit >= totalCount}
        className="px-5 py-2.5 rounded-xl font-medium bg-white border border-slate-200 text-slate-700 shadow-xs hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Next →
      </button>
    </div>
  );
}