import React from "react";
import { CalendarDays } from "lucide-react"; 
import "./style.css";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      image: "/src/images/halalBihalal1.jpg",
      title: "Halal Bihalal Pererat Silaturahmi Ciptakan Harmoni di SMK Raden Umar Said",
      description:
        "Kudus – Rabu, 9 April 2025, SMK Raden Umar Said Kudus mengadakan kegiatan halal bihalal sebagai bentuk rasa syukur dan...",
      date: "29 April 2025",
      featured: true,
    },
    {
      id: 2,
      image: "/src/assets/images/kartini.webp",
      title:
        "Semangat Kartini di SMK Raden Umar Said Meriahkan Hari Kartini dengan Kreativitas dan Budaya",
      description:
        "Kudus – Senin, 21 April 2025. Suasana di sekolah terasa lebih berbeda saat SMK Raden Umar Said menggelar festival tumpeng...",
      date: "28 April 2025",
      featured: false,
    },
    {
      id: 3,
      image: "/src/assets/images/pemilu.webp",
      title:
        "Pemilihan Ketua OSIS dan MPK 2025/2026",
      description:
        "Kudus – Sabtu, 4 Oktober 2025, SMK Raden Umar Said mengadakan pemilihan Ketua OSIS dan MPK 2025/2026. Pemilihan dilaksanakan di...",
      date: "28 April 2025",
      featured: false,
    },
    
    { 
      id: 4,
      image: "/src/assets/images/hut.webp",
      title:
        "Kemeriahan Event HUT RI 80 di SMK Raden Umar Said",
      description:
        "Kudus—Kamis, 14 Agustus 2025, SMK Raden Umar Said Kudus memeriahkan HUT RI yang ke-80 tahun dengan mengadakan berbagai lomba yang berlangsung...",
      date: "28 April 2025",
      featured: false,
    },
    
    { 
      id: 4,
      image: "/src/images/assets/hut.webp",
      title:
        "Kemeriahan Event HUT RI 80 di SMK Raden Umar Said",
      description:
        "Kudus—Kamis, 14 Agustus 2025, SMK Raden Umar Said Kudus memeriahkan HUT RI yang ke-80 tahun dengan mengadakan berbagai lomba yang berlangsung...",
      date: "28 April 2025",
      featured: false,
    },
  ];

  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured);

  return (
    <div className="blog-page">
   <div className="featured-container">
  <div className="blog-card featured">
    <img src={featured.image} alt={featured.title} className="featured-image" />
    <div className="blog-content featured-content">
      <h2>{featured.title}</h2>
      <p>{featured.description}</p>
      <div className="blog-date">
        <CalendarDays size={14} />
        <span>{featured.date}</span>
      </div>
    </div>
  </div>
</div>


      <div className="blog-grid">
        {others.map((item) => (
          <div key={item.id} className="blog-card">
            <img src={item.image} alt={item.title} />
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="blog-date">
                <CalendarDays size={14} />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; // ini COmment

export default BlogPage;
