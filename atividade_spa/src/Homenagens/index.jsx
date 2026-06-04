import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

export default function Homenagens() {
  // Estado para armazenar os inputs do formulário
  const [formData, setFormData] = useState({ nome: '', texto: '' });
  
  // Estado para armazenar as mensagens enviadas (inicia com duas de exemplo)
  const [mensagens, setMensagens] = useState([
    { id: 1, nome: 'Mãe', texto: 'Você é o nosso maior orgulho, Geovane! Te amamos muito.' },
    { id: 2, nome: 'Pai', texto: 'Ver suas conquistas de perto enche meu coração de alegria. Continue sempre focado!' }
  ]);

  // Atualiza os valores dos inputs enquanto o usuário digita
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Executado quando o usuário clica no botão "Enviar"
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validação simples para não enviar campos vazios
    if (!formData.nome.trim() || !formData.texto.trim()) return;

    // Cria a nova homenagem
    const novaHomenagem = {
      id: Date.now(), // Gera um ID único baseado no tempo atual
      nome: formData.nome,
      texto: formData.texto
    };

    // Adiciona a nova homenagem no topo da lista e limpa o formulário
    setMensagens(prev => [novaHomenagem, ...prev]);
    setFormData({ nome: '', texto: '' });
  };

  return (
    <section id="homenagens" className="homenagens-section">
      <div className="homenagens-container">
        
        <div className="homenagens-header">
          <h2>Deixe sua Mensagem de Afeto e Carinho ✍️</h2>
          <p>Escreva uma mensagem especial para registrar o seu carinho</p>
        </div>

        {/* Formulário para Inserção de Homenagens */}
        <form onSubmit={handleFormSubmit} className="homenagem-form">
          <div className="form-group">
            <label htmlFor="nome">Seu Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo ou apelido..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="texto">Sua Mensagem de Homenagem:</label>
            <textarea
              id="texto"
              name="texto"
              value={formData.texto}
              onChange={handleInputChange}
              placeholder="Escreva aqui as suas palavras de carinho..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar-homenagem">
            Enviar Homenagem
          </button>
        </form>

        <hr className="divider-homenagens" />

        {/* Grid de Exibição das Homenagens */}
        <div className="homenagens-grid">
          <AnimatePresence>
            {mensagens.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="homenagem-card"
              >
                <p className="homenagem-texto">"{msg.texto}"</p>
                <h4 className="homenagem-autor">— Por: <span>{msg.nome}</span></h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}