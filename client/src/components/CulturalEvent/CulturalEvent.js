import React from 'react';
import { RiCalendarEventFill, RiMapPin2Fill, RiImageAddLine, RiSunCloudyLine, RiTicket2Fill } from 'react-icons/ri'; // Import React Icons
import './CulturalEvent.css'; // Import CSS file for styling

const CulturalEvent = ({ event }) => {
    // Valores padrão para os parâmetros do evento, caso não estejam presentes
    const {
        titulo = "Título não disponível",
        subtitulo = "Subtítulo não disponível",
        data = "Data não disponível",
        distrito = "Distrito não disponível",
        concelho = "Concelho não disponível",
        bilheteira = "Bilheteira não disponível",
        fotos = "Fotos não disponíveis",
        meteorologia = "Meteorologia não disponível",
        descricao = "Descrição não disponível",
        lotacao = "Lotação não disponível",
        duracao = "Duração não disponível",
        freguesia = "Freguesia não disponível",
        casaEspetaculo = "Casa de Espetáculo não disponível",
        morada = "Morada não disponível",
        promotor = "Promotor não disponível"
    } = event;

    const monthsToNumber = {
        'Janeiro' : "01",
        'Fevereiro' : "02",
        'Março' : "03",
        'Abril' : "04",
        'Maio' : "05",
        'Junho' : "06",
        'Julho' : "07",
        'Agosto' : "08",
        'Setembro' : "09",
        'Outubro' : "10",
        'Novembro' : "11",
        'Dezembro' : "12"
    }

    const month = monthsToNumber[data.mes]

    let d;
    if (data.dia < 10){
        d = `0${data.dia}\\${month}\\${data.ano} (${data.diaDaSemana})`
    }
    else {
        d = `${data.dia}\\${month}\\${data.ano} (${data.diaDaSemana})`
    }

    const foto = "https://upload.wikimedia.org/wikipedia/commons/1/12/Museum_Benfica_dome.JPG"

    return (
        <div className="event-card" style={{ backgroundImage: `url(${foto})` }}>
          <div className="content">
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <div className="info-icons">
              <div className="info-icon">
                <RiCalendarEventFill size={20} />
                <span>{d}</span>
              </div>
              <div className="info-icon">
                <RiMapPin2Fill size={20} />
                <span>{distrito}, {concelho}</span>
              </div>
              <div className="info-icon">
                <RiTicket2Fill size={20} />
                <span>{bilheteira}</span>
              </div>
              <div className="info-icon">
                <RiSunCloudyLine size={20} />
                <span>{meteorologia}</span>
              </div>
            </div>
            <p>Lotação: {lotacao}</p>
            <p>Duração: {duracao}</p>
            <p>Freguesia: {freguesia}</p>
            <p>Casa de Espetáculo: {casaEspetaculo}</p>
            <p>Morada: {morada}</p>
            <p>Promotor: {promotor}</p>
          </div>
        </div>
      );
};

export default CulturalEvent;
