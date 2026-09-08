import { useState } from "react";

import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Toast from "./components/Toast";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [posts, setPosts] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // Toast
  const showToast = (message, type = "success") => {
    setToast({
      show: true,
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "success",
      });
    }, 2500);
  };

  // Create / Update Post
  const handlePost = () => {
    if (!title.trim() || !description.trim()) {
      showToast("Please fill in both fields", "error");
      return;
    }

    // Update Post
    if (editIndex !== null) {
      const updatedPosts = posts.map((post, index) => {
        if (index === editIndex) {
          return {
            ...post,
            title: title,
            description: description,
          };
        }

        return post;
      });

      setPosts(updatedPosts);
      setEditIndex(null);

      showToast("Post updated successfully ✨");
    }

    // Create Post
    else {
      const newPost = {
        title: title,
        description: description,
        likes: 0,
        liked: false,
      };

      setPosts([...posts, newPost]);

      showToast("Post published successfully 🚀");
    }

    setTitle("");
    setDescription("");
  };

  // Edit
  const handleEdit = (index) => {
    setTitle(posts[index].title);
    setDescription(posts[index].description);

    setEditIndex(index);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete
  const handleDelete = (index) => {
    const filteredPosts = posts.filter((_, postIndex) => {
      return postIndex !== index;
    });

    setPosts(filteredPosts);

    if (editIndex === index) {
      setEditIndex(null);
      setTitle("");
      setDescription("");
    }

    showToast("Post deleted successfully", "error");
  };

  // Like / Unlike
  const handleLike = (index) => {
    const updatedPosts = posts.map((post, postIndex) => {
      if (postIndex === index) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked,
        };
      }

      return post;
    });

    setPosts(updatedPosts);
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditIndex(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Your Creative Space
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Share your
              <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                {" "}thoughts.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
              Create beautiful posts, share your ideas and interact with
              your community.
            </p>
          </div>

        </div>
      </section>

      {/* Main */}
      <main className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[380px_1fr]">

        {/* Form */}
        <PostForm
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          handlePost={handlePost}
          editIndex={editIndex}
          cancelEdit={cancelEdit}
        />

        {/* Posts */}
        <PostList
          posts={posts}
          handleLike={handleLike}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

      </main>

      {/* Toast */}
      <Toast
        toast={toast}
      />

    </div>
  );
}

export default App;