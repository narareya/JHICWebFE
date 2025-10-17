import React, { useState, useEffect } from 'react';
import { User, School, Phone, MapPin, CreditCard, Users } from 'lucide-react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import API from '../../api';
import Swal from 'sweetalert2';

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_siswa: '',
    jurusan: '',
    nama_walmur: '',
    nohp_walmur: '',
    nik: '',
    alamat: ''
  });

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/ppdb/login/login");
  } else {
    // Ambil data user dari backend
    API.get("/profile", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setFormData(prev => ({
        ...prev,
        account_id: res.data.account_id || prev.account_id
      }));
    });
    
  }
}, []);


  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Daftar jurusan yang tersedia
  const jurusanOptions = [
    { value: '', label: 'Pilih Jurusan' },
    { value: 'Animasi 2D', label: 'Animasi 2D' },
    { value: 'Animasi 3D', label: 'Animasi 3D' },
    { value: 'Desain Grafis', label: 'Desain Grafis' },
    { value: 'Teknik Grafika', label: 'Teknik Grafika' },
    { value: 'Pengembangan Perangkat Lunak dan Gim', label: 'Pengembangan Perangkat Lunak dan Gim' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validasi Nama Siswa
    if (!formData.nama_siswa.trim()) {
      newErrors.nama_siswa = 'Nama siswa wajib diisi';
    } else if (formData.nama_siswa.trim().length < 2) {
      newErrors.nama_siswa = 'Nama siswa minimal 2 karakter';
    }

    // Validasi Jurusan
    if (!formData.jurusan) {
      newErrors.jurusan = 'Jurusan wajib dipilih';
    }

    // Validasi Nama Wali
    if (!formData.nama_walmur.trim()) {
      newErrors.nama_walmur = 'Nama wali wajib diisi';
    } else if (formData.nama_walmur.trim().length < 2) {
      newErrors.nama_walmur = 'Nama wali minimal 2 karakter';
    }

    // Validasi No HP Wali
    if (!formData.nohp_walmur.trim()) {
      newErrors.nohp_walmur = 'No HP wali wajib diisi';
    } else if (!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(formData.nohp_walmur)) {
      newErrors.nohp_walmur = 'Format no HP tidak valid (contoh: 08123456789)';
    }

    // Validasi NIK
    if (!formData.nik.trim()) {
      newErrors.nik = 'NIK wajib diisi';
    } else if (!/^\d{16}$/.test(formData.nik)) {
      newErrors.nik = 'NIK harus 16 digit angka';
    }

    // Validasi Alamat
    if (!formData.alamat.trim()) {
      newErrors.alamat = 'Alamat wajib diisi';
    } else if (formData.alamat.trim().length < 10) {
      newErrors.alamat = 'Alamat minimal 10 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      // POST data pendaftaran
      const res = await API.post("/registers", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
  
      // Setelah berhasil daftar, update status menjadi "terdaftar"
      await API.patch(`/registers/${res.data.register.id}/status`, 
        { status: 'terdaftar' }, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
  
      Swal.fire({
        icon: 'success',
        title: 'Berhasil!',
        text: 'Data pendaftaran tersimpan dan status akun menjadi terdaftar.'
      });
  
      setFormData({
        nama_siswa: '',
        jurusan: '',
        nama_walmur: '',
        nohp_walmur: '',
        nik: '',
        alamat: ''
      });
  
      navigate('/ppdb/profile'); // opsional, redirect ke halaman profil
  
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: err.response?.data?.message || 'Terjadi kesalahan'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-header">
          <h1>Form Pendaftaran Siswa</h1>
          <p>Lengkapi data berikut untuk pendaftaran siswa baru</p>
        </div>

        <form className="student-form" onSubmit={handleSubmit}>
          {/* Nama Siswa */}
          <div className="form-group">
            <label htmlFor="nama_siswa" className="form-label">
              <User size={18} />
              Nama Siswa
            </label>
            <input
              type="text"
              id="nama_siswa"
              name="nama_siswa"
              value={formData.nama_siswa}
              onChange={handleInputChange}
              className={`form-input ${errors.nama_siswa ? 'error' : ''}`}
              placeholder="Masukkan nama lengkap siswa"
            />
            {errors.nama_siswa && <span className="error-message">{errors.nama_siswa}</span>}
          </div>

          {/* Jurusan */}
          <div className="form-group">
            <label htmlFor="jurusan" className="form-label">
              <School size={18} />
              Jurusan
            </label>
            <select
              id="jurusan"
              name="jurusan"
              value={formData.jurusan}
              onChange={handleInputChange}
              className={`form-select ${errors.jurusan ? 'error' : ''}`}
            >
              {jurusanOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.jurusan && <span className="error-message">{errors.jurusan}</span>}
          </div>

          {/* Nama Wali */}
          <div className="form-group">
            <label htmlFor="nama_walmur" className="form-label">
              <Users size={18} />
              Nama Wali
            </label>
            <input
              type="text"
              id="nama_walmur"
              name="nama_walmur"
              value={formData.nama_walmur}
              onChange={handleInputChange}
              className={`form-input ${errors.nama_walmur ? 'error' : ''}`}
              placeholder="Masukkan nama wali/orang tua"
            />
            {errors.nama_walmur && <span className="error-message">{errors.nama_walmur}</span>}
          </div>

          {/* No HP Wali */}
          <div className="form-group">
            <label htmlFor="nohp_walmur" className="form-label">
              <Phone size={18} />
              No HP Wali
            </label>
            <input
              type="tel"
              id="nohp_walmur"
              name="nohp_walmur"
              value={formData.nohp_walmur}
              onChange={handleInputChange}
              className={`form-input ${errors.nohp_walmur ? 'error' : ''}`}
              placeholder="08123456789"
            />
            {errors.nohp_walmur && <span className="error-message">{errors.nohp_walmur}</span>}
          </div>

          {/* NIK */}
          <div className="form-group">
            <label htmlFor="nik" className="form-label">
              <CreditCard size={18} />
              NIK (Nomor Induk Kependudukan)
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleInputChange}
              className={`form-input ${errors.nik ? 'error' : ''}`}
              placeholder="1234567890123456"
              maxLength="16"
            />
            {errors.nik && <span className="error-message">{errors.nik}</span>}
          </div>

          {/* Alamat */}
          <div className="form-group">
            <label htmlFor="alamat" className="form-label">
              <MapPin size={18} />
              Alamat Lengkap
            </label>
            <textarea
              id="alamat"
              name="alamat"
              value={formData.alamat}
              onChange={handleInputChange}
              className={`form-textarea ${errors.alamat ? 'error' : ''}`}
              placeholder="Masukkan alamat lengkap (jalan, RT/RW, kelurahan, kecamatan, kota/kabupaten)"
              rows="4"
            />
            {errors.alamat && <span className="error-message">{errors.alamat}</span>}
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Menyimpan Data</span>
                </>
              ) : (
                <>
                  <span>Simpan Data</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft: '8px', display: 'inline-block'}}>
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
