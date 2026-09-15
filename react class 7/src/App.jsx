import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ImageCard from './components/ImageCard';
import ImageModal from './components/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // API Fetching using useEffect
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=1&limit=12`
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Navbar Component */}
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          /* Image Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <ImageCard 
                key={img.id} 
                img={img} 
                onSelect={(image) => setSelectedImage(image)} 
              />
            ))}
          </div>
        )}

        {/* Modal Component */}
        <ImageModal 
          selectedImage={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />

      </div>
    </div>
  );
};

export default App;