import React from 'react';

export default function NoteForm({ title, setTitle, content, setContent, category, setCategory, handleSubmit, editingId, cancelEdit }) {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
      <h2 className="text-lg font-medium text-white mb-4">
        {editingId ? 'Edit Note' : 'Create Note'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note title..."
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Ideas">Ideas</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1.5">Content</label>
          <textarea 
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your thoughts..."
            className="w-full bg-neutral-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition resize-none"
          ></textarea>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button 
            type="submit"
            className="flex-1 bg-white text-neutral-950 font-medium py-2.5 px-4 rounded-xl text-sm hover:bg-neutral-200 transition active:scale-[0.98]"
          >
            {editingId ? 'Update Note' : 'Add Note'}
          </button>
          {editingId && (
            <button 
              type="button"
              onClick={cancelEdit}
              className="bg-neutral-800 text-neutral-300 py-2.5 px-4 rounded-xl text-sm hover:bg-neutral-700 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}