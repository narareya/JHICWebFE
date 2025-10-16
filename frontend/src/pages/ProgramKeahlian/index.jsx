import React from "react"
import jurusan from "../../data/jurusan"
import "./progkeahlian.css"
import { useParams } from "react-router-dom"
import ScrollReveal from './ScrollReveal';
import BlurText from "./BlurText";
import Slider from "../../components/Slider/Slider";

const ProgramKeahlianPage = () => {
    const {namaJurusan} = useParams();
    const data = jurusan[namaJurusan];
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    }

    if (!data) return <p>Jurusan tidak ditemukan</p>

    return (
        <div className="progkeahlian">
            <section className="hero" style={{backgroundImage: `url(${data.image})`}}>
                <div>
                    <h1>{namaJurusan}</h1>
                </div>
            </section>

            <Slider/>

            <section className="content">
                <div className="visi">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}><h2>Visi</h2></ScrollReveal>
                    <p>{data.visi}</p>
                </div>
                <div className="misi">
                    <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}><h2>Misi</h2></ScrollReveal>
                    <p>{data.misi}</p>
                </div>
            </section>
        </div>
    )
}

export default ProgramKeahlianPage;