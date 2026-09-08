function PostCard({
  post,
  index,
  handleLike,
  handleEdit,
  handleDelete,
}) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.06]">

      {/* Top */}
      <div className="mb-5 flex items-start justify-between gap-4">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-lg">
            ✦
          </div>

          <div>
            <p className="text-xs text-slate-500">
              Community Post
            </p>

            <p className="text-xs text-slate-600">
              Post #{index + 1}
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex gap-2">

          <button
            onClick={() => handleEdit(index)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400 transition hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            ✏️
          </button>

          <button
            onClick={() => handleDelete(index)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400 transition hover:border-red-400/20 hover:bg-red-400/10 hover:text-red-300"
          >
            🗑️
          </button>

        </div>

      </div>

      {/* Content */}
      <div>

        <h3 className="mb-3 text-xl font-bold text-white">
          {post.title}
        </h3>

        <p className="whitespace-pre-wrap text-sm leading-7 text-slate-400">
          {post.description}
        </p>

      </div>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

        <button
          onClick={() => handleLike(index)}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
            post.liked
              ? "bg-pink-500/10 text-pink-400"
              : "bg-white/5 text-slate-400 hover:bg-white/10"
          }`}
        >
          <span>
            {post.liked ? "❤️" : "🤍"}
          </span>

          <span>
            {post.likes}
          </span>

          <span className="hidden sm:inline">
            {post.likes === 1 ? "Like" : "Likes"}
          </span>

        </button>

        <span className="text-xs text-slate-600">
          Just now
        </span>

      </div>

    </article>
  );
}

export default PostCard;