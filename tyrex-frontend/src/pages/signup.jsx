import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Add your signup API call here
    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8f] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#1e3a5f] px-8 py-6 text-center">
          <img src={logo} alt="TyreX Logo" className="h-16 mx-auto mb-2" />
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <p className="text-gray-300 text-sm mt-1">Join TyreX today</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#1e3a5f] transition-colors"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            <div className="flex items-start text-sm text-gray-600">
              <input type="checkbox" className="mr-2 mt-1" required />
              <span>
                I agree to the{" "}
                <a href="#" className="text-[#1e3a5f] hover:underline font-medium">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#1e3a5f] hover:underline font-medium">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a5f] text-white py-3 rounded-lg font-semibold hover:bg-[#2d5a8f] transition-colors shadow-lg"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-[#1e3a5f] font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
