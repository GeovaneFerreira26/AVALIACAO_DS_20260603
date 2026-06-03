import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';

// Importe as imagens locais
import fazer01 from '../../assets/fazer01.png';
import geo01 from '../../assets/geo01.png';
import geo02 from '../../assets/geo02.png';

const images = [fazer01, geo01, geo02];

export default function AboutPai() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() =>{
  const interval = setInterval(() => {
    setCurrentImage(prev => (prev + 1)% images.length)
  }, 10000);
  return () => clearInterval(interval);
},  []);


  return (
    <section id="pai" className="section-pai">
      <div className="pai-grid">

  {/* Lado da Imagem com Moldura Digital */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="frame-wrapper"
      >
        <div className="digital-frame-bg"></div>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          alt="Pai"
          className="digital-frame-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
        
        {/* Texto primeiro no Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="pai-text-box"
        >
          <h2 className="pai-title">O Pai: [Nome Dele]</h2>
          <p className="pai-p">
            Insira aqui o texto sobre o pai. Suas brincadeiras favoritas com o pet, as características mais marcantes e o carinho dele pela família.
          </p>
        </motion.div>

        {/* Foto depois */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="frame-wrapper-pai"
        >
      
        </motion.div>

      </div>
    </section>
  );
}