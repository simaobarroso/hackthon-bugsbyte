import React from 'react';
import { RiCalendarEventFill, RiMapPin2Fill, RiImageAddLine, RiSunCloudyLine, RiTicket2Fill } from 'react-icons/ri'; // Import React Icons
import './CulturalEvent.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

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
        d = `${data.hora}, 0${data.dia}\/${month}\/${data.ano} (${data.diaDaSemana})`
    }
    else {
        d = `${data.hora}, ${data.dia}\/${month}\/${data.ano} (${data.diaDaSemana})`
    }

    const foto = "https://alumni.uminho.pt/pt/news/PublishingImages/universidade-do-minho-1140x641.jpg"

    return (
      <Link to={`/evento/${event._id}`}>
      <div class="event-card">
        <div class="photo" style={{ backgroundImage: `url(${foto})` }}></div>
        <div class="content">
            <div class="header">
                <h2>{titulo}</h2>
                <h7>{subtitulo}</h7>
            </div>
            <table class="info-table">
                <tbody>
                    <tr>
                        <td class="info-icon"><RiCalendarEventFill size={20} /></td>
                        <td>{d}</td>
                    </tr>
                    <tr>
                        <td class="info-icon"><RiMapPin2Fill size={20} /></td>
                        <td>{concelho}, {distrito}</td>
                    </tr>
                    <tr>
                        <td class="info-icon"><RiSunCloudyLine size={20} /></td>
                        <td>{meteorologia}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</Link>
      );
};

export default CulturalEvent;
