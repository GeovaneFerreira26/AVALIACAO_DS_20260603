import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero-container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <span className="hero-subtitle">Bem-vindo à nossa história</span>
        <h1 className="hero-title">Dois corações, quatro patas e uma vida inteira.</h1>
        <p className="hero-text">Somos um casal que, ao longo dos anos, aprendeu o verdadeiro significado de parceria. Vencemos grandes batalhas — tanto individualmente quanto lado a lado —, e cada desafio só nos uniu ainda mais.
        </p>
        <p className="hero-text">
        No meio dessa caminhada, a nossa família ganhou um toque especial: a chegada da Lupita, nossa cachorra. Já se passaram mais de 10 anos desde que ela entrou em nossas vidas, trazendo uma rotina repleta de alegrias, algumas surpresas e sustos, e um amor que transformou tudo ao redor.
        </p>
        <p className="hero-text">
        Com o tempo, mudamos nossos hábitos e evoluímos juntos. Nossos gostos se transformaram e a prática de atividade física se tornou parte essencial da nossa identidade. O que começou com simples caminhadas se expandiu para o pedal e, hoje, desbravamos até a canoagem.
        </p>
        <p className="hero-text">
        Olhar para trás é ver uma trajetória de superação, movimento e companheirismo, sempre com a Lupita ao nosso lado.</p>
        <a href="#mae" className="hero-btn">Conhecer Nossa História</a>
      </motion.div>
    </section>
  );
}