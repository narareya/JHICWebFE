import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Homepage from './pages/homepage';
import GalleryPage from './pages/gallery';
import FacilitiesPage from './pages/gallery/facility';
import ActivitiesPage from './pages/gallery/activites/activity';
import BlogPage from './pages/blog/blog';
import ProgramKeahlianPage from './pages/ProgramKeahlian';
import InformasiBiayaPage from './pages/informasi/biaya';
import KosPage from './pages/informasi/kos';
import KaldikPage from './pages/informasi/kaldik';
import PPDBPage from './pages/ppdb/ppdb';
import PKLPage from './pages/pkl';
import PendaftaranPage from "./pages/ppdb/pendaftaran/pendaftaran";
import LoginPage from './pages/ppdb/login/login';
import FormPage from './pages/form';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/fasilitas" element={<FacilitiesPage />} />
          <Route path="/kegiatan" element={<ActivitiesPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/informasi" element={<InformasiBiayaPage />} />
          <Route path="/informasi/biaya" element={<InformasiBiayaPage />} />
          <Route path="/informasi/kos" element={<KosPage />} />
          <Route path="/informasi/kaldik" element={<KaldikPage />} />
          <Route path="/ppdb" element={<PPDBPage/>} />
          <Route path="/pkl" element={<PKLPage />} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/program-keahlian" element={<Navigate to="/program-keahlian/Animasi%203D" replace />} />
          <Route path="/program-keahlian/:namaJurusan" element={<ProgramKeahlianPage/>}/>
          <Route path="/ppdb/pendaftaran/pendaftaran" element={<PendaftaranPage />} />
          <Route path="/ppdb/login/login" element={<LoginPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;