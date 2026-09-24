import React from "react";
import { Routes, Route } from "react-router-dom";

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
  { id: 1, name: "Classic Fit Shirt", category: "Shirts", price: 2500, image: "https://picsum.photos/seed/men1/600/750" },
  { id: 2, name: "Slim Fit Jeans", category: "Jeans", price: 3200, image: "https://picsum.photos/seed/men2/600/750" },
  { id: 3, name: "Leather Jacket", category: "Jackets", price: 8900, image: "https://picsum.photos/seed/men3/600/750" },
  { id: 4, name: "Casual Sneakers", category: "Footwear", price: 4500, image: "https://picsum.photos/seed/men4/600/750" },
];

const womenCollection = [
  { id: 1, name: "Floral Summer Dress", category: "Dresses", price: 3400, image: "https://picsum.photos/seed/women1/600/750" },
  { id: 2, name: "High Waist Trousers", category: "Trousers", price: 2800, image: "https://picsum.photos/seed/women2/600/750" },
  { id: 3, name: "Embroidered Kurti", category: "Kurtis", price: 3100, image: "https://picsum.photos/seed/women3/600/750" },
  { id: 4, name: "Heeled Sandals", category: "Footwear", price: 3900, image: "https://picsum.photos/seed/women4/600/750" },
];

function App() {
  return (
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
  );
}

export default App;