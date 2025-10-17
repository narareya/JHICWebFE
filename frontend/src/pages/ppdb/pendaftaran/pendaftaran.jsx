import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/formInput";
import PasswordInput from "../../../components/passwordInput";
import Button from "../../../components/button";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import "./style.css";
import API from "../../../api";
import Swal from "sweetalert2";

const PendaftaranPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Nama wajib diisi";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      err.email = "Email tidak valid";
    if (!form.password || form.password.length < 6)
      err.password = "Password minimal 6 karakter";
    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Password tidak sama";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    try {
      // buat akun
      await API.post("/register", {
        username: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword,
      });
  
      // login otomatis setelah register
      const loginRes = await API.post("/login", {
        email: form.email,
        password: form.password,
      });
  
      localStorage.setItem("token", loginRes.data.token);
  
      Swal.fire({
        title: "Berhasil!",
        text: "Akun kamu sudah dibuat dan kamu sudah login.",
        icon: "success",
        confirmButtonText: "Lanjut",
      }).then(() => navigate("/form"));
  
    } catch (error) {
      // tampilkan ke console dulu supaya kita bisa lihat struktur responsnya
      console.error("Register error:", error);
  
      // coba ambil pesan dari berbagai kemungkinan lokasi
      const res = error.response;
      let errMsg = "Terjadi kesalahan.";
  
      if (res) {
        // 422 validation errors
        if (res.status === 422 && res.data?.errors) {
          // gabungkan pesan validation jadi string
          const all = Object.values(res.data.errors).flat().join(" ");
          errMsg = all || "Validasi gagal.";
        } else if (res.data?.message) {
          errMsg = res.data.message;
        } else if (res.data) {
          // fallback: tampilkan isi response data (stringify safe)
          try {
            errMsg = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
          } catch (e) {
            errMsg = "Terjadi kesalahan (tidak bisa parse response).";
          }
        } else {
          errMsg = `Server merespons status ${res.status}`;
        }
      } else if (error.request) {
        // request dikirim tapi tidak ada respon (network / CORS / server mati)
        errMsg = "Tidak mendapat respon dari server. Cek server atau masalah jaringan.";
      } else {
        // error di sisi client
        errMsg = error.message;
      }
  
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: errMsg,
        confirmButtonColor: "#1e3560",
      });
    }
  };
  

  return (
    <div className="reg-page">
      <div className="reg-card">
        <div className="reg-header">
          <h2>Daftar</h2>
        </div>

        <form className="reg-body" onSubmit={handleSubmit} noValidate>
          {/* Nama */}
          <div className="form-row">
            <FormInput
              label="Nama Lengkap"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              icon={<FaUserAlt />}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="form-row">
            <FormInput
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              icon={<FaEnvelope />}
              type="email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="form-row">
            <PasswordInput
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* Konfirmasi Password */}
          <div className="form-row">
            <PasswordInput
              label="Konfirmasi Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Konfirmasi Password"
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Tombol Submit */}
          <div className="submit-section">
            <Button text="DAFTAR" variant="primary" type="submit" />
          </div>

          {/* Link ke login */}
          <div className="register-link">
            Sudah punya akun?{" "}
            <a onClick={() => navigate("/ppdb/login/login")}>Masuk</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PendaftaranPage;
