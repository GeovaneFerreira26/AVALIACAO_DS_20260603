import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './style.css';

// Importe as imagens locais
import fazer01 from '../../assets/fazer01.png';
import geo01 from '../../assets/geo01.png';
import geo02 from '../../assets/geo02.png';

const images = [fazer01, geo01, geo02];

export default function AboutPai() {
  const [currentImage, setCurrentImage] = useState(0);
  const timerRef = useRef(null); // Guarda a referência do timer para resetá-lo no clique

  // Função isolada para avançar a imagem
  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  // Função que gerencia o clique do usuário na foto do Geovane
  const handleImageClick = () => {
    nextImage(); // Muda a imagem imediatamente
    
    // Reseta o temporizador de 10 segundos para não pular rápido demais
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(nextImage, 10000);
    }
  };

  useEffect(() => {
    // Inicia o efeito automático de 10 segundos (mantendo o padrão original do Pai)
    timerRef.current = setInterval(nextImage, 10000);

    // Limpa o timer quando o componente sai da tela
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="eu" className="section-pai">
      <div className="pai-grid">
        
        {/* Lado da Imagem com Moldura Digital */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="frame-wrapper-pai"
        >
          <div className="digital-frame-bg-pai"></div>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Pai"
            className="digital-frame-img-pai"
            onClick={handleImageClick} /* <-- Adicionado o comando de clique aqui */
            style={{ cursor: 'pointer' }} /* Adiciona a mãozinha indicando que é clicável */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
        
        {/* Lado do Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="pai-text-box"
        >
          <h2 className="pai-title">Geovane: Determinação, Conquistas e Essência</h2>
          <p className="pai-p">
            Geovane é uma pessoa incrível, focada, esforçada e muito determinada. Mesmo nos dias em que o cansaço aperta, ele continua correndo atrás dos seus objetivos, pois aprendeu desde cedo a nunca esperar por ninguém para conquistar o que é seu. Sabe perfeitamente o valor do próprio suor, e duas das suas maiores vitórias e motivos de orgulho foram conquistar a habilitação e a casa própria — tudo fruto de muito trabalho e dedicação.
          </p>
          <p className="pai-p">
            Quem o conhece sabe que ele tem um lado maravilhoso, mas também reconhece que, às vezes, ele consegue ser um pouquinho chato (o que faz parte do pacote!). Ele não é fã de receber ordens e não funciona muito bem sob pressão ou com cobranças excessiveis na cabeça.
          </p>
          <p className="pai-p">
            No fim das contas, ele possui uma personalidade forte, é fiel aos seus princípios e nunca deixa de lutar por aquilo em que acredita.
          </p>
        </motion.div>

      </div>
    </section>
  );
}