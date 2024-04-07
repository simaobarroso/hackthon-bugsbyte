import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './w3.css'

function EventPage() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    // Função para buscar detalhes do evento na API
    const fetchEvento = async () => {
      try {
        // Faz a requisição para a API (substitua URL_API pelo endpoint correto)
        const response = await fetch(`../../api/eventos/outros?id=${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar evento');
        }
        const data = await response.json();
        console.log(data);
        setEvento(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchEvento();
  }, [id]);

  // Se o evento ainda não foi carregado, exiba uma mensagem de carregamento
  if (!evento) {
    return <div>Carregando...</div>;
  }

  // Extrai os detalhes do evento
  const { titulo, subtitulo, data, distrito, concelho, bilheteira, fotos, meteorologia, descricao, lotacao, duracao, freguesia, casaEspetaculo, morada, promotor } = evento[0];
  const foto = "https://alumni.uminho.pt/pt/news/PublishingImages/universidade-do-minho-1140x641.jpg"
  
  console.log(evento[0].titulo)
  return (
    <div className="w3-container">
      <h1 className="w3-center">{titulo}</h1>
      <h3 className="w3-center">{subtitulo}</h3>
      <div className="w3-row">
        <div className="w3-half">
          <p><strong>Data:</strong> {data.diaDaSemana}, {data.dia} de {data.mes} de {data.ano}, às {data.hora}</p>
          <p><strong>Localização:</strong> {distrito}, {concelho}</p>
          <p><strong>Bilheteira:</strong> {bilheteira}</p>
          <p><strong>Meteorologia:</strong> {meteorologia}</p>
          <p><strong>Descrição:</strong> {descricao}</p>
        </div>
        <div className="w3-half">
          <p><strong>Lotação:</strong> {lotacao}</p>
          <p><strong>Duração:</strong> {duracao}</p>
          <p><strong>Freguesia:</strong> {freguesia}</p>
          <p><strong>Casa de Espetáculo:</strong> {casaEspetaculo}</p>
          <p><strong>Morada:</strong> {morada}</p>
          <p><strong>Promotor:</strong> {promotor}</p>
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-half">
          <img src={foto} alt="Foto" className="w3-image" />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
