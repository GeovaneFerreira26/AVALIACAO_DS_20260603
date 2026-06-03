import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';

// Importe as imagens locais
import mille02 from '../../assets/mille02.png';
import mille03 from '../../assets/mille03.png';
import mille01 from '../../assets/mille01.png';

const images = [mille01, mille02, mille03];

export default function AboutMae() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Limpa ao desmontar
  }, []);

  return (
    <section id="mae" className="section-mae">
      <div className="mae-grid">
        
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
            alt="Mãe"
            className="digital-frame-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Lado do Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mae-text-box"
        >
          <h2 className="mae-title">Jamille: Força, Transformação e Propósito</h2>
          <p className="mae-p">
            Jamille é uma mulher incrível e de gênio forte — afinal, vindo de uma ariana, não poderia ser diferente. Sonhadora e determinada, hoje ela canaliza toda essa energia na faculdade de Educação Física, com o objetivo claro de se tornar Personal Trainer.
          </p>
          <p className="mae-p">
            Essa escolha profissional não veio por acaso; nasceu de uma reviravolta real em sua própria vida. Ao se ver pesando mais de 80 kg, Jamille decidiu mudar drasticamente de postura. Foi através da prática consistente de atividades físicas que ela venceu a luta contra a balança, conquistando a marca atual na casa dos 50 kg. Muito além do peso, ela resgatou uma vida mais alegre, saudável e empoderada. Agora, seu grande propósito é usar a Educação Física para proporcionar essa mesma transformação na vida de outras mulheres.
          </p>

          <p className='mae-p'>
            No plano pessoal, Jamille é completamente louca pelo marido e pelo pet da família. E embora perca a paciência com certa facilidade, aprendeu a lidar com o jeito do parceiro. Ela mesma reconhece que a convivência não seria a mesma se as coisas fossem diferentes; no fundo, ela aprecia até mesmo o lado "chato" dele, entendendo que são as peculiaridades que tornam a união deles única.
          </p>
        </motion.div>

      </div>
    </section>
  );
}