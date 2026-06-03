import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

export default function AboutPai() {
  return (
    <section id="pai" className="section-pai">
      <div className="pai-grid">
        
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
          <div className="digital-frame-bg-pai"></div>
          <img 
            src="src/assets/fazer01.png" 
            alt="Pai" 
            className="digital-frame-img-pai"
          />
        </motion.div>

      </div>
    </section>
  );
}