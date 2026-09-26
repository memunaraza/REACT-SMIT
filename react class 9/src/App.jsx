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
  { id: 1, name: "Classic Fit Shirt", category: "Shirts", price: 2500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKfYgpWnqiDt2B0_6ldRPzJZ1BUPa7j9lpTCn_SX0KQ&s" },
  { id: 2, name: "Slim Fit Jeans", category: "Jeans", price: 3200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQb_ZmLY2tpLshEZgoGu5M-j8urWLs_pOromU_mGApSA&s=10" },
  { id: 3, name: "Leather Jacket", category: "Jackets", price: 8900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1PlseYQ7jUZYXDzIbvxl3JDGmCPybHx4Yv4ZGqRA3Q&s=10" },
  { id: 4, name: "Casual Sneakers", category: "Footwear", price: 4500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUUI0pZCowyKcwAjV3UPx-MmPDU7OUHWPPm_8klYb1Q&s=10" },
];

const womenCollection = [
  { id: 1, name: "Floral Summer Dress", category: "Dresses", price: 3400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7PHCsOqb7M_ZX5nS9VM1ErZX6a6k992SNIPJdyaw8w&s=10" },
  { id: 2, name: "High Waist Trousers", category: "Trousers", price: 2800, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZn-1vRSwl5B4NEaOqn4RBWuHGU6Zltg6vu89PCkVNZw&s=10" },
  { id: 3, name: "Embroidered Kurti", category: "Kurtis", price: 3100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvyrgRZQz5FTKHKzOwmvZjP44TtIfICk4vFFg_IKgvQ&s=10" },
  { id: 4, name: "Heeled Sandals", category: "Footwear", price: 3900, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWt3f97eVlUz7QSMqSngWRASqSaQTnwhkewHZ3XYOJ0Q&s=10" },
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