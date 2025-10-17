import React, { useEffect, useState } from "react";
import API from "../../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './profile.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setProfile(res.data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Gagal mengambil data",
        text: err.response?.data?.message || "Cek token atau login ulang",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // hapus token
    Swal.fire({
      icon: "success",
      title: "Logout berhasil",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/ppdb/login/login"); // arahkan ke login
    });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-page">
      <h2>Profil Saya</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>

      {profile.register ? (
        <>
          <h3>Data Pendaftaran</h3>
          <p>Nama Siswa: {profile.register.nama_siswa}</p>
          <p>Jurusan: {profile.register.jurusan}</p>
          <p>Nama Walmur: {profile.register.nama_walmur}</p>
          <p>No HP Walmur: {profile.register.nohp_walmur}</p>
          <p>NIK: {profile.register.nik}</p>
          <p>Alamat: {profile.register.alamat}</p>
        </>
      ) : (
        <p>Belum mendaftar.</p>
      )}

      <button 
        onClick={handleLogout} 
        className="logout-button"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
