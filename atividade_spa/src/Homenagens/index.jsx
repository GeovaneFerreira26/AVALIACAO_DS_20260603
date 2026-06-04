import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

export default function Homenagens() {
  // Estado para armazenar os inputs do formulário de envio rápido
  const [formData, setFormData] = useState({ nome: '', texto: '' });
  
  /* MURAL DE HOMENAGENS FIXAS (Cadastradas manualmente por você)
    Para adicionar uma nova, copie de um '{' até o '},' cole no topo da lista e altere os textos.
  */
  const [mensagens, setMensagens] = useState([
   
    { 
      id: 4, 
      nome: 'Juli', 
      texto: 'Aqui é a minha família favorita! Amo vocês! ❤️', 
      dataHora: '04/06/2026 às 18:15' 
    },
    { 
      id: 1, 
      nome: 'Jamille Valente', 
      texto: 'Ô Amor.... Te amo tanto! E como é maravilhoso compartilhar a vida com você! Eu amo a nossa família ❤️🐶✨', 
      dataHora: '04/06/2026 às 17:40' 
    },
    { 
      id: 3, 
      nome: 'Pai', 
      texto: 'Ver suas conquistas de perto enche meu coração de alegria. Continue sempre focado!', 
      dataHora: '04/06/2026 às 15:05' 
    },
    { 
      id: 2, 
      nome: 'Mãe', 
      texto: 'Você é o nosso maior orgulho, Geovane! Te amamos muito.', 
      dataHora: '04/06/2026 às 14:20' 
    }
  ]);

  // Atualiza os valores dos inputs enquanto o usuário digita no formulário local
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Executado quando o usuário testa o botão "Enviar" em tempo real
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.texto.trim()) return;

    // Captura automática caso usem o formulário online
    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString('pt-BR');
    const horaFormatada = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const dataHoraString = `${dataFormatada} às ${horaFormatada}`;

    const novaHomenagem = {
      id: Date.now(), 
      nome: formData.nome,
      texto: formData.texto,
      dataHora: dataHoraString // Gera a string dinamicamente na hora do teste
    };

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

        {/* Formulário temporário/demonstrativo para o usuário interagir */}
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

        {/* Grid de Exibição de tudo que está salvo na array acima */}
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
                
                <div className="homenagem-footer">
                  <h4 className="homenagem-autor">— Por: <span>{msg.nome}</span></h4>
                  <span className="homenagem-data">{msg.dataHora}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}