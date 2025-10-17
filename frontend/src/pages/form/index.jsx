import React, { useState } from 'react';
import { User, School, Phone, MapPin, CreditCard, Users } from 'lucide-react';
import './style.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    account_id: '',
    nama_siswa: '',
    jurusan: '',
    nama_wali: '',
    nohp_wali: '',
    nik: '',
    alamat: ''
  });

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

    // Validasi Account ID
    if (!formData.account_id.trim()) {
      newErrors.account_id = 'Account ID wajib diisi';
    }

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
    if (!formData.nama_wali.trim()) {
      newErrors.nama_wali = 'Nama wali wajib diisi';
    } else if (formData.nama_wali.trim().length < 2) {
      newErrors.nama_wali = 'Nama wali minimal 2 karakter';
    }

    // Validasi No HP Wali
    if (!formData.nohp_wali.trim()) {
      newErrors.nohp_wali = 'No HP wali wajib diisi';
    } else if (!/^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(formData.nohp_wali)) {
      newErrors.nohp_wali = 'Format no HP tidak valid (contoh: 08123456789)';
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
      // Simulasi API call
      console.log('Form Data Submitted:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('Data berhasil disimpan!');
      
      // Reset form
      setFormData({
        account_id: '',
        nama_siswa: '',
        jurusan: '',
        nama_wali: '',
        nohp_wali: '',
        nik: '',
        alamat: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Terjadi kesalahan saat menyimpan data');
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
          {/* Account ID */}
          <div className="form-group">
            <label htmlFor="account_id" className="form-label">
              <User size={18} />
              Account ID
            </label>
            <input
              type="text"
              id="account_id"
              name="account_id"
              value={formData.account_id}
              onChange={handleInputChange}
              className={`form-input ${errors.account_id ? 'error' : ''}`}
              placeholder="Masukkan Account ID"
            />
            {errors.account_id && <span className="error-message">{errors.account_id}</span>}
          </div>

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
            <label htmlFor="nama_wali" className="form-label">
              <Users size={18} />
              Nama Wali
            </label>
            <input
              type="text"
              id="nama_wali"
              name="nama_wali"
              value={formData.nama_wali}
              onChange={handleInputChange}
              className={`form-input ${errors.nama_wali ? 'error' : ''}`}
              placeholder="Masukkan nama wali/orang tua"
            />
            {errors.nama_wali && <span className="error-message">{errors.nama_wali}</span>}
          </div>

          {/* No HP Wali */}
          <div className="form-group">
            <label htmlFor="nohp_wali" className="form-label">
              <Phone size={18} />
              No HP Wali
            </label>
            <input
              type="tel"
              id="nohp_wali"
              name="nohp_wali"
              value={formData.nohp_wali}
              onChange={handleInputChange}
              className={`form-input ${errors.nohp_wali ? 'error' : ''}`}
              placeholder="08123456789"
            />
            {errors.nohp_wali && <span className="error-message">{errors.nohp_wali}</span>}
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
