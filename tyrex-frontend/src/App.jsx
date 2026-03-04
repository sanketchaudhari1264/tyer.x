import Navbar from "./components/Navbar";
import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Admin from "./pages/admin.jsx";
import AdminLogin from "./pages/adminlogin.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import {Routes, Route } from "react-router-dom";



function App() {
 return (
 
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </div>
 
);
}

export default App;
