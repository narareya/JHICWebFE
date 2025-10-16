import React from 'react';
import './style.css';

const PKLPage = () => {
  return (
    <div className="pkl-page">
      {/* Hero Section */}
      <section className="pkl-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">KEGIATAN PKL</h1>
            <p className="hero-subtitle">SMK RUS</p>
          </div>
        </div>
      </section>

      {/* About PKL Section */}
      <section className="pkl-about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/images/pkl/PKL.jpg" alt="PKL Activity" />
            </div>
            <div className="about-text">
              <h2 className="section-title">Tentang PKL SMK RUS</h2>
              <p className="about-description">
                PKL adalah program wajib di SMK RUS untuk
                membekali siswa dengan pengalaman kerja
                nyata di dunia industri. Melalui PKL, siswa
                belajar menerapkan ilmu, membentuk karakter
                profesional, dan siap menghadapi dunia kerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tahapan PKL Section */}
      <section className="pkl-stages">
        <div className="container">
          <h2 className="section-title centered">TAHAPAN PELAKSANAAN PKL</h2>
          <p className="section-subtitle">5 Bulan</p>
          
          <div className="stages-container">

            <div className="stages-row top-row">
              <div className="stage-card tahap-1">
                <div className="stage-number">1</div>
                <h3 className="stage-title">TAHAP 1</h3>
                <h4 className="stage-subtitle">PERSIAPAN</h4>
                <p className="stage-description">
                  Briefing, orientasi,
                  dan sosialisasi PKL
                </p>
              </div>

              <div className="stage-card tahap-3">
                <div className="stage-number">3</div>
                <h3 className="stage-title">TAHAP 3</h3>
                <h4 className="stage-subtitle">PELAKSANAAN</h4>
                <p className="stage-description">
                  Pelaksanaan PKL selama
                  3 bulan di industri
                </p>
              </div>

              <div className="stage-card tahap-5">
                <div className="stage-number">5</div>
                <h3 className="stage-title">TAHAP 5</h3>
                <h4 className="stage-subtitle">PELAPORAN</h4>
                <p className="stage-description">
                  Penyusunan dan
                  penyerahan laporan PKL
                </p>
              </div>
            </div>

            <div className="stages-row bottom-row">
              <div className="stage-card tahap-2">
                <div className="stage-number">2</div>
                <h3 className="stage-title">TAHAP 2</h3>
                <h4 className="stage-subtitle">PENEMPATAN</h4>
                <p className="stage-description">
                  Penempatan siswa ke
                  perusahaan mitra
                </p>
              </div>

              <div className="stage-card tahap-4">
                <div className="stage-number">4</div>
                <h3 className="stage-title">TAHAP 4</h3>
                <h4 className="stage-subtitle">EVALUASI</h4>
                <p className="stage-description">
                  Evaluasi dan penilaian
                  hasil PKL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="pkl-detail">
        <div className="container">
          <div className="detail-content">
            <h2 className="detail-title">DETAIL SELENGKAPNYA</h2>
            <a 
              href="https://sites.google.com/smkrus.sch.id/pedoman-pkl-2025" 
              className="detail-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://sites.google.com/smkrus.sch.id/pedoman-pkl-2025
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PKLPage;