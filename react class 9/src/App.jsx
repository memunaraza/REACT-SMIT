import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Product from "./pages/Product";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

const menCollection = [
  { id: 1, name: "Classic Fit Shirt", category: "Shirts", price: 2500, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600" },
  { id: 2, name: "Slim Fit Jeans", category: "Jeans", price: 3200, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" },
  { id: 3, name: "Leather Jacket", category: "Jackets", price: 8900, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },
  { id: 4, name: "Casual Sneakers", category: "Footwear", price: 4500, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600" },
];

const womenCollection = [
  { id: 1, name: "Floral Summer Dress", category: "Dresses", price: 3400, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600" },
  { id: 2, name: "High Waist Trousers", category: "Trousers", price: 2800, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600" },
  { id: 3, name: "Embroidered Kurti", category: "Kurtis", price: 3100, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600" },
  { id: 4, name: "Heeled Sandals", category: "Footwear", price: 3900, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="app-shell__main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men products={menCollection} />} />
            <Route path="/women" element={<Women products={womenCollection} />} />
            <Route path="/men/:id" element={<Product products={menCollection} />} />
            <Route path="/women/:id" element={<Product products={womenCollection} />} />
            <Route path="/courses" element={<Courses />}>
              <Route path=":id" element={<CourseDetails />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;