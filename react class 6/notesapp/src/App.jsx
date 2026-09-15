import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('obsidian_notes');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Project Roadmap', content: 'Define core deliverables and setup Tailwind v4 configuration.', category: 'Work', date: 'Sep 12, 2026' },
      { id: 2, title: 'Grocery & Supplies', content: 'Coffee beans, oat milk, dark chocolate, and notebooks.', category: 'Personal', date: 'Sep 10, 2026' }
    ];
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Work');
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem('obsidian_notes', JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      setNotes(notes.map(note =>
        note.id === editingId ? { ...note, title, content, category } : note
      ));
      setEditingId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title,
        content,
        category,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };
      setNotes([newNote, ...notes]);
    }
    setTitle('');
    setContent('');
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const cancelEdit = () => {
    setEditingId(null);
    setTitle('');
    setContent('');
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        <Navbar search={search} setSearch={setSearch} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-1">
            <NoteForm
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
              category={category}
              setCategory={setCategory}
              handleSubmit={handleSubmit}
              editingId={editingId}
              cancelEdit={cancelEdit}
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            {filteredNotes.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 bg-neutral-900/30 border border-dashed border-white/10 rounded-2xl text-center">
                <p className="text-neutral-400 text-sm">No notes found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredNotes.map((note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}