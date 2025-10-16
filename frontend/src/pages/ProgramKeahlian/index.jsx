import React from "react"
import jurusan from "../../data/jurusan"
import "./progkeahlian.css"
import { useParams } from "react-router-dom"

const ProgramKeahlianPage = () => {
    const {namaJurusan} = useParams();
    const data = jurusan[namaJurusan];

    if (!data) return <p>Jurusan tidak ditemukan</p>

    return (
        <div>
            <section className="hero" style={{backgroundImage: `url(${data.image})`}}>
                <h1>{namaJurusan}</h1>
                <img src={data.logo} alt="jurusan-logo" />
            </section>

            <section className="content">
                <div className="visi">
                    <h2>Visi</h2>
                    <p>{data.visi}</p>
                </div>
                <div className="misi">
                    <h2>Misi</h2>
                    <p>{data.misi}</p>
                </div>
            </section>
        </div>
    )
}

export default ProgramKeahlianPage;