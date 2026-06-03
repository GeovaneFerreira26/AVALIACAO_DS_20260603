import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

export default function AboutMae() {
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
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600" 
            alt="Mãe" 
            className="digital-frame-img"
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