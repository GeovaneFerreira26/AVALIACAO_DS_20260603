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
          <h2 className="pai-title">Geovane: Determinação, Conquistas e Essência</h2>
          <p className="pai-p">
            Ele é uma pessoa incrível, focada, esforçada e muito determinada. Mesmo nos dias em que o cansaço aperta, ele continua correndo atrás dos seus objetivos, pois aprendeu desde cedo a nunca esperar por ninguém para conquistar o que é seu. Sabe perfeitamente o valor do próprio suor, e duas das suas maiores vitórias e motivos de orgulho foram conquistar a habilitação e a casa própria — tudo fruto de muito trabalho e dedicação.
            </p>
            <p className="pai-p">
            Quem o conhece sabe que ele tem um lado maravilhoso, mas também reconhece que, às vezes, ele consegue ser um pouquinho chato (o que faz parte do pacote!). Ele não é fã de receber ordens e não funciona muito bem sob pressão ou com cobranças excessivas na cabeça.
            </p>
            <p className="pai-p">
            No fim das contas, ele possui uma personalidade forte, é fiel aos seus princípios e nunca deixa de lutar por aquilo em que acredita.
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