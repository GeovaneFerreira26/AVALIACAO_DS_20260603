import React from 'react';
import { motion } from 'framer-motion';
import './style.css';
import todos01 from '../../assets/todos01.png';
import video1 from '../../assets/mille01.mp4';
import trabalho01 from '../../assets/trabalho01.mp4';
import todos02 from '../../assets/todos02.mp4';
import lupita1 from '../../assets/lupita_video01.mp4';

export default function Gallery() {
  const photos = [
    { id: 1, url: todos01, title: 'Conspiração de Rua' },  // ✅ Imagem local funcionando
    { id: 2, url: video1, type: 'video', title: 'Primeira Corrida de Muitas' }, // ✅ Adicionado tipo para renderizar a tag <video>
    { id: 3, url: trabalho01, type: 'video', title: 'Trabalho CLT On' }, // ✅ Adicionado tipo para renderizar a tag <video>
    { id: 4, url: todos02, type: 'video', title: 'Cárdio da Tarde' }, // ✅ Adicionado tipo para renderizar a tag <video>
    { id: 5, url: lupita1, type: 'video', title: 'Lupita e Sua Caminhada' }, // ✅ Adicionado tipo para renderizar a tag <video>
  ];

  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Mural de Memórias</h2>
          <p>Nossos momentos favoritos registrados em fotos e vídeos</p>
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
                {/* Condicional para verificar se o arquivo atual é um vídeo local */}
                {photo.type === 'video' ? (
                  <video 
                    src={photo.url} 
                    className="gallery-img" 
                    muted 
                    playsInline
                    onMouseOver={(e) => e.target.play()} 
                    onMouseOut={(e) => e.target.pause()}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                ) : (
                  <img src={photo.url} alt={photo.title} className="gallery-img" />
                )}
              </div>
              <p className="gallery-card-title">{photo.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}