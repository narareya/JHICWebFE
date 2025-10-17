import React from "react"
import jurusan from "../../data/jurusan"
import "./progkeahlian.css"
import { useParams } from "react-router-dom"
import ScrollReveal from './ScrollReveal';
import Slider from "../../components/Slider/Slider";
import Carousel from "../../components/carousel";
import Timeline from "../../components/Timeline/Timeline";
import CareerCard from "../../components/CareerCard";


const ProgramKeahlianPage = () => {
    const {namaJurusan} = useParams();
    const data = jurusan[namaJurusan];
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    }

    if (!data) return <p>Jurusan tidak ditemukan</p>

    return (
        <div className="progkeahlian">
            {/* Hero Section */}
            <section className="hero" style={{backgroundImage: `url(${data.image})`}}>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <Slider/>
                        <h1>{namaJurusan}</h1>
                    </div>
                </div>
            </section>

            {/* Visi Misi Section */}
            <section className="visi-misi-section">
                <div className="container">
                    <div className="visi-misi-content">
                        <div className="visi">
                            <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                                <h2>Visi</h2>
                            </ScrollReveal>
                            <p>{data.visi}</p>
                        </div>
                        <div className="misi">
                            <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                                <h2>Misi</h2>
                            </ScrollReveal>
                            <p>{data.misi}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Carousel Foto & Yang Dipelajari */}
            <section className="content-section">
                <div className="container">
                    <div className="content-grid">
                        <div className="carousel-section">
                            <Carousel 
                                images={data.gallery ? data.gallery.map((src, index) => ({
                                    src: src,
                                    alt: `${namaJurusan} Gallery ${index + 1}`
                                })) : []}
                                autoSlide={true}
                                interval={3000}
                                showIndicators={true}
                                height="250px"
                                className="facility-carousel"
                            />
                        </div>
                        <div className="learning-section">
                            <h3>Yang Dipelajari</h3>
                            <ul className="learning-list">
                                {data.yangDipelajari ? data.yangDipelajari.map((item, index) => (
                                    <li key={index}>{item}</li>
                                )) : <li>Data tidak tersedia</li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Majors/Future Job */}
            <section className="future-job-section">
                <div className="container">
                    <h2>Prospek Karir</h2>
                    <div className="career-grid">
                        {data.detailKarir && data.detailKarir.length > 0 ? data.detailKarir.map((career, index) => (
                            <CareerCard 
                                key={index}
                                career={career}
                            />
                        )) : (
                            <p>Data karir tidak tersedia</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Timeline KBM */}
            <section className="timeline-section-wrapper">
                <div className="container">
                    <Timeline 
                        timeline={data.timeline} 
                        title="Timeline Skema KBM"
                    />
                </div>
            </section>
        </div>
    )
}

export default ProgramKeahlianPage;