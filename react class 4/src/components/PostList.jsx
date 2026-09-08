import PostCard from "./PostCard";

function PostList({
  posts,
  handleLike,
  handleEdit,
  handleDelete,
}) {
  return (
    <section>

      {/* Header */}
      <div className="mb-6 flex items-end justify-between">

        <div>
          <p className="mb-1 text-sm text-cyan-400">
            Community Feed
          </p>

          <h2 className="text-2xl font-bold">
            Latest Posts
          </h2>
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
          {posts.length}{" "}
          {posts.length === 1 ? "Post" : "Posts"}
        </span>

      </div>

      {/* Empty State */}
      {posts.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-4xl">
            📝
          </div>

          <h3 className="text-xl font-bold">
            No posts yet
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Your feed is waiting for something amazing.
            Create your first post and let your ideas shine.
          </p>

        </div>
      ) : (
        <div className="space-y-5">

          {posts.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              index={index}
              handleLike={handleLike}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default PostList;