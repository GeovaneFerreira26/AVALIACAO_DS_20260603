import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

export default function Videos() {
  const videoList = [
    { id: 1, title: 'Dedicatória da Mãe', src: 'caminho-do-video-mae.mp4' },
    { id: 2, title: 'Dedicatória do Pai', src: 'caminho-do-video-pai.mp4' },
  ];

  return (
    <section id="videos" className="videos-section">
      <div className="videos-container">
        <div className="videos-header">
          <h2>Dedicatórias em Vídeo</h2>
          <p>Mensagens de amor gravadas para guardar para sempre</p>
        </div>

        <div className="videos-grid">
          {videoList.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="video-card"
            >
              <h3 className="video-card-title">{video.title}</h3>
              <div className="video-wrapper">
                <video src={video.src} controls className="video-player">
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}