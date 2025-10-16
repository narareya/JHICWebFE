import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../components/formInput";
import PasswordInput from "../../../components/passwordInput";
import Button from "../../../components/button";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";
import "./style.css";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // contoh pengiriman data
    console.log("Data dikirim:", form);

    // tampilkan pop-up berhasil daftar
    Swal.fire({
        title: "Berhasil!",
        text: "Akun kamu sudah berhasil dibuat.",
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        // setelah klik OK, pindah ke halaman home
        navigate("/");
    });
};

  return (
    <div className="reg-page">
      <div className="reg-card">
        <div className="reg-header">Daftar</div>
        <form className="reg-body" onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Nama Lengkap"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Lengkap"
            icon={<FaUserAlt />}
          />
          {errors.name && <p className="error">{errors.name}</p>}

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

          <PasswordInput
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <p className="error">{errors.password}</p>}

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

          <div style={{ textAlign: "center", marginTop: 18 }}>
            <Button 
            text="DAFTAR"
            type="submit"
            variant="primary"
            fullWidth
            />
          </div>

          <p className="login-link">
            Sudah punya akun? <a href="/ppdb/login/login">Masuk</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PendaftaranPage;