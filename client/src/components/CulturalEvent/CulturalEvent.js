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

    return (
        <div className="event-container">
            <div className="left-container">
                <div className="title-container">
                    <h2>{titulo}</h2>
                    <h3>{subtitulo}</h3>
                </div>
                <div className="details-container">
                    <div className="detail">
                        <RiCalendarEventFill size={20} />
                        <span>{data}</span>
                    </div>
                    <div className="detail">
                        <RiMapPin2Fill size={20} />
                        <span>{distrito}, {concelho}</span>
                    </div>
                    <div className="detail">
                        <RiTicket2Fill size={20} />
                        <span>{bilheteira}</span>
                    </div>
                    <div className="detail">
                        <RiSunCloudyLine size={20} />
                        <span>{meteorologia}</span>
                    </div>
                    <div className="additional-info-container">
                        <p>Lotação: {lotacao}</p>
                        <p>Duração: {duracao}</p>
                        <p>Freguesia: {freguesia}</p>
                        <p>Casa de Espetáculo: {casaEspetaculo}</p>
                        <p>Morada: {morada}</p>
                        <p>Promotor: {promotor}</p>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <img src={fotos} alt="Fotografia do evento" className="photo" />
            </div>
            <div className="description-container">
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default CulturalEvent;
