import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./login.css";
import API from "../../../api.js";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/form"); // kalau sudah login langsung ke FormPage
  }, []);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    // Validasi sederhana
    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Email dan password wajib diisi!",
        confirmButtonColor: "#1e3560",
      });
      return;
    }

    // Jika berhasil login
    try {
      const response = await API.post("/login", formData);
      localStorage.setItem("token", response.data.token);

      Swal.fire({
        icon: "success",
        title: "Login Berhasil!",
        text: "Selamat datang kembali 👋",
        confirmButtonColor: "#1e3560",
        timer: 1800,
        showConfirmButton: false,
      }).then(() => navigate("/form"));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.response?.data?.message || "Cek email & password",
        confirmButtonColor: "#1e3560",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>Masuk</h2>
        </div>

        <div className="login-body">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="form-row">
              <label className="form-label">Email</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-row">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <FaLock />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Tombol */}
            <div className="form-row" style={{ marginTop: "20px" }}>
              <button type="submit" className="btn">
                MASUK
              </button>
            </div>
          </form>

          <div className="login-link">
            Belum punya akun?
            <a onClick={() => navigate("/ppdb/pendaftaran/pendaftaran")}>
              Daftar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;