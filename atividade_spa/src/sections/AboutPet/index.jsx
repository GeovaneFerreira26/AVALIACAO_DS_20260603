import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';

import lupita01 from '../../assets/lupita01.png';
import lupita02 from '../../assets/lupita02.png';
import lupita03 from '../../assets/lupita03.png';

const images = [lupita02, lupita01, lupita03];

export default function AboutPet() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="pet" className="section-pet">
      <div className="pet-grid">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pet-frame-wrapper"
        >
          <div className="pet-circle-bg"></div>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Pet"
            className="pet-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="pet-title">Lupita: Pequena no Porte, Gigante no Coração 🐾</h2>
          <p className="pet-p">
            A Lupita é uma pinscher de porte pequeno (daquelas que dizem ser "número 1"), com seus charmosos 30 centímetros de altura. No dia a dia, ela é uma verdadeira dorminhoca, mas não se engane: de vez em quando, ela dá os seus "estampidos", sai correndo, brinca e late para qualquer movimento que chame sua atenção.
          </p>
          <p className="pet-p">
            Dizer que ela é mimada é apelido! Lupita tem passe livre por toda a casa, pelas áreas externas e, claro, pelos estofados. Ela dorme na cama com os tutores, mas também tem o seu próprio luxo: uma minicama feita com um travesseiro usado. No cardápio, além da ração devidamente pesada duas vezes ao dia, entram suas grandes paixões gastronômicas: cenoura, banana-chips e pipoca.
          </p>
          <p className="pet-p">
            Essa pequena ousada tem uma vida de dar inveja: conta com plano de saúde e até microchip de identificação. Mas o maior privilégio da Lupita é o amor que a cerca; ela é uma cachorrinha extremamente querida e bem cuidada.
          </p>
          <p className="pet-p">
            Ah, e tem um detalhe: a alegria dela atinge o nível máximo quando ela vê o Geovane... e a Mãe? A Mãe pira com esse favoritismo!
          </p>
        </motion.div>

      </div>
    </section>
  );
}