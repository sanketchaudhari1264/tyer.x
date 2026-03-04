import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login success");
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 text-center">
          <img src={logo} alt="TyreX Logo" className="h-16 mx-auto mb-2 bg-white rounded-full p-2" />
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <p className="text-gray-100 text-sm mt-1">Restricted Access</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Admin Email
              </label>
              <input
                type="email"
                placeholder="Enter admin email"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
            >
              Admin Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              🔒 This area is for authorized personnel only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;

