import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import todos01 from '../../assets/todos01.png';

export default function Gallery() {
  const photos = [
    { id: 1, url: todos01, title: 'Conspiração de Rua' },  // ✅ variável, sem aspas
    { id: 2, url: 'https://images.unsplash.com/photo-1516624683217-bf02fc6b6b7c?w=500', title: 'Passeio no parque' },
    { id: 3, url: 'https://images.unsplash.com/photo-1537151625747-768eb64226fd?w=500', title: 'Domingo de preguiça' },
    { id: 4, url: 'https://images.unsplash.com/photo-1544378382-506fa5141868?w=500', title: 'Aniversário' },
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Mural de Memórias</h2>
          <p>Nossos momentos favoritos registrados em fotos</p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="gallery-card"
            >
              <div className="gallery-img-container">
                <img src={photo.url} alt={photo.title} className="gallery-img" />
              </div>
              <p className="gallery-card-title">{photo.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}