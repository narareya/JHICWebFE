import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import GalleryPage from './pages/gallery';
import FacilitiesPage from './pages/gallery/facility';
import ActivitiesPage from './pages/gallery/activites/activity';
import BlogPage from './pages/blog/blog';
import ProgramKeahlianPage from './pages/ProgramKeahlian';
import InformasiBiayaPage from './pages/informasi/biaya';
import KosPage from './pages/informasi/kos';
import KaldikPage from './pages/informasi/kaldik';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/fasilitas" element={<FacilitiesPage />} />
          <Route path="/kegiatan" element={<ActivitiesPage />} />
          <Route path="/" element={
            <div style={{padding: '40px 20px', textAlign: 'center'}}></div>
          } />
          <Route path="/informasi" element={<InformasiBiayaPage />} />
          <Route path="/informasi/biaya" element={<InformasiBiayaPage />} />
          <Route path="/informasi/kos" element={<KosPage />} />
          <Route path="/informasi/kaldik" element={<KaldikPage />} />
          <Route path="/ppdb" element={<div style={{padding: '20px'}}>Halaman PPDB - Coming Soon</div>} />
          <Route path="/pkl" element={<div style={{padding: '20px'}}>Halaman PKL - Coming Soon</div>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/program-keahlian" element={<Navigate to="/program-keahlian/Animasi%203D" replace />} />
          <Route path="/program-keahlian/:namaJurusan" element={<ProgramKeahlianPage/>}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;