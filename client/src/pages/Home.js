import React, { useState } from 'react';
import './Home.css'; // Import CSS file
import { ReactComponent as MapSvg } from '../assets/portugal_map.svg'; // Import SVG file

const Home = () => {
    // Estado para controlar a exibição da mensagem
    const [message, setMessage] = useState(null);

    // Função para mostrar a mensagem
    const showMessage = (text) => {
        setMessage(text);
    };

    // Função para fechar a mensagem
    const closeMessage = () => {
        setMessage(null);
    };

    // Função para manipular o clique no contêiner SVG
    const handleSvgClick = (event) => {
        // Verifica se o clique ocorreu em um dos caminhos (paths)
        if (event.target.tagName === 'path') {
            // Obtém o ID do path clicado
            const pathClass = event.target.getAttribute('class');
            // Aqui você pode associar o ID do path a uma mensagem específica
            let messageText = '';
            switch (pathClass) {
                case 'z z31':
                    messageText = 'Texto para Path 31';
                    break;
                case 'z z32':
                    messageText = 'Texto para Path 32';
                    break;
                // Adicione mais casos conforme necessário para outros paths
                default:
                    messageText = 'Clique em um distrito para ver a mensagem' + pathClass;
            }
            // Exibe a mensagem correspondente
            showMessage(messageText);
        }
    };

    return (
        <div className="map-container" onClick={handleSvgClick}>
            {/* SVG Component */}
            <MapSvg className="map-svg" />

            {/* Exibir a mensagem */}
            {message && (
                <div className="message-box">
                    <p>{message}</p>
                    <button onClick={closeMessage}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default Home;
