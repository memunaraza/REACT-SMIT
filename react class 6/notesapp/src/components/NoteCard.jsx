import React from 'react';

export default function NoteCard({ note, handleEdit, handleDelete }) {
  return (
    <div className="group relative bg-neutral-900/40 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 shadow-lg">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300">
            {note.category}
          </span>
          <span className="text-xs text-neutral-500">{note.date}</span>
        </div>
        <h3 className="text-base font-medium text-white mb-1.5 tracking-tight">{note.title}</h3>
        <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">{note.content}</p>
      </div>

      <div className="flex items-center justify-end gap-2 mt-6 pt-3 border-t border-white/5 opacity-80 group-hover:opacity-100 transition">
        <button 
          onClick={() => handleEdit(note)}
          className="text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-white/5 transition"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDelete(note.id)}
          className="text-xs text-red-400 hover:text-red-300 px-2.5 py-1 rounded-lg hover:bg-red-500/10 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
