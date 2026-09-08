function PostForm({
  title,
  description,
  setTitle,
  setDescription,
  handlePost,
  editIndex,
  cancelEdit,
}) {
  return (
    <div className="h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:sticky lg:top-6">

      {/* Heading */}
      <div className="mb-6">

        <div className="mb-3 flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
            {editIndex !== null ? "✏️" : "✨"}
          </div>

          <div>
            <h2 className="font-bold text-white">
              {editIndex !== null
                ? "Edit Post"
                : "Create a Post"}
            </h2>

            <p className="text-xs text-slate-500">
              {editIndex !== null
                ? "Update your post"
                : "Share something with the world"}
            </p>
          </div>

        </div>

      </div>

      {/* Title */}
      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Post Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your post title..."
          className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
        />

      </div>

      {/* Description */}
      <div className="mb-2">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write something interesting..."
          rows="7"
          maxLength="500"
          className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
        />

      </div>

      {/* Character Count */}
      <div className="mb-5 flex justify-end">

        <span className="text-xs text-slate-600">
          {description.length}/500
        </span>

      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        <button
          onClick={handlePost}
          className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98]"
        >
          {editIndex !== null
            ? "Update Post"
            : "Publish Post"}
        </button>

        {editIndex !== null && (
          <button
            onClick={cancelEdit}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-slate-300 transition hover:bg-white/10"
          >
            Cancel
          </button>
        )}

      </div>

    </div>
  );
}

export default PostForm;