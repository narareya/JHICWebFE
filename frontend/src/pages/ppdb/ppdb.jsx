import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import CardPpdb from "../../components/card-ppdb";
import panduanPPDB from "../../assets/images/panduanPpdb.png";
import Button from "../../components/button";

const PPDBPage =()=>{
  const navigate = useNavigate();
    const syaratPendaftaran = [
        "Keluarga mengisi data calon peserta didik di form keluarga (KK).",
        "Usia maksimal 21 tahun pada tanggal 1 Juli 2025.",
        "Lulus dari SMP atau sederajat.",
        "Menyerahkan berkas sesuai ketentuan."
    ];

    const berkasPendaftaran = [
        "Fotokopi Kartu Keluarga (KK) & Akta Kelahiran.",
        "Fotokopi rapor semester 1–5.",
        "Fotokopi ijazah SMP/sederajat.",
        "Pas foto terbaru ukuran 3x4 (3 lembar)."
    ];

    return (
    <div className="ppdb-container">
      {/* <header className="ppdb-header">
        <h1>PPDB</h1>
        <p>Penerimaan Peserta Didik Baru<br />SMK RADEN UMAR SAID</p>
      </header> */}

      <div className="ppdb-guide">
        <img src={panduanPPDB} alt="Panduan PPDB SMK RUS" />
      </div>

      <CardPpdb title="Syarat Pendaftaran" items={syaratPendaftaran} />
      <CardPpdb title="Berkas Pendaftaran" items={berkasPendaftaran} />

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button 
          text="Daftar Sekarang"
          variant="primary"
          onClick={() => navigate("/ppdb/pendaftaran/pendaftaran")}
        />
      </div>
    </div>
    );
}

export default PPDBPage;