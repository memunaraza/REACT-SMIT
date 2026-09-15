import React from 'react';

const ImageCard = ({ img, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(img)}
      className="group relative bg-slate-900/40 border border-slate-800/80 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md cursor-pointer hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="aspect-square overflow-hidden bg-slate-900">
        <img
          src={img.download_url}
          alt={img.author}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end">
        <span className="text-sm font-medium text-slate-200 truncate">
          Photo by {img.author}
        </span>
        <span className="text-xs text-cyan-400 font-semibold bg-cyan-950/60 px-2 py-1 rounded-md border border-cyan-800/50">
          View
        </span>
      </div>
    </div>
  );
};

export default ImageCard;