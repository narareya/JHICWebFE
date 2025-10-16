import React from "react";
import "./style.css";

const CardPpdb=({title, items})=>{
    return (
        <section className="ppdb-card">
            <h2 className="card-title">{title}</h2>
            <ul className="card-list">
                {items.map((item,i)=>(
                    <li key={i} className="card-item">{item}</li>
                ))}
            </ul>
        </section>
    );
};

export default CardPpdb;