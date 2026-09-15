import React from 'react';

const ImageModal = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-lg flex justify-center items-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-slate-800/80 hover:bg-slate-700 text-slate-300 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
        >
          ✕
        </button>
        <div className="max-h-[75vh] overflow-hidden rounded-2xl bg-slate-950 flex justify-center items-center">
          <img
            src={selectedImage.download_url}
            alt={selectedImage.author}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>
        <div className="mt-4 flex justify-between items-center px-2">
          <div>
            <h3 className="text-lg font-semibold text-slate-100">
              Author: {selectedImage.author}
            </h3>
            <p className="text-xs text-slate-400">
              Original ID: {selectedImage.id}
            </p>
          </div>
          <a
            href={selectedImage.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-sm rounded-xl shadow-lg transition-all"
          >
            Original Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;