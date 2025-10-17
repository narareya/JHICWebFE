import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import CardPpdb from "../../components/card-ppdb";
import panduanPPDB from "../../assets/images/panduanPpdb.png";
import Button from "../../components/button";
import { syaratPendaftaran, berkasPendaftaran } from "../../data/ppdb";

const PPDBPage =()=>{
  const navigate = useNavigate();

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