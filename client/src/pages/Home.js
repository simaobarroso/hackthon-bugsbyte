import React, { useState } from 'react';
import './Home.css'; // Importar arquivo CSS
import { ReactComponent as MapSvg } from '../assets/portugal_map.svg'; // Importar arquivo SVG

const Home = () => {
    // Estado para controlar a exibição da mensagem e a classe de animação
    const [message, setMessage] = useState(null);
    const [animationClass, setAnimationClass] = useState('');

    // Função para mostrar a mensagem
    const showMessage = (text) => {
        setMessage(text);
        // Adiciona a classe de animação para deslocar o mapa para a esquerda
        setAnimationClass('slide-left');
    };

    // Função para fechar a mensagem
    const closeMessage = () => {
        setMessage(null);
        // Remove a classe de animação para deslocar o mapa para a direita
        setAnimationClass('slide-right');
    };

    // Função para manipular o clique no contêiner SVG
    const handleSvgClick = (event) => {
        // Verifica se o clique ocorreu em um dos caminhos (paths)
        if (event.target.tagName === 'path') {
            // Obtém o ID do path clicado
            const pathClass = event.target.getAttribute('class');
            // Aqui você pode associar o ID do path a uma mensagem específica
            let messageText = 'Clique em um distrito para ver a mensagem ' + pathClass;
            // Exibe a mensagem correspondente
            showMessage(messageText);
        }
    };

    return (
        <div className="container">
            {/* Mapa à esquerda */}
            <div className={`map-container ${animationClass}`} onClick={handleSvgClick}>
                <MapSvg className="map-svg" width="800px" height="600px" />
            </div>

            {/* Mensagem à direita */}
            
                {message && (
                <div className="semi-container">
                    <div className="message-box">
                        <p>{message}</p>
                        <button onClick={closeMessage}>Fechar</button>
                    </div>
                </div>
                )}
            
        </div>
    );
}

export default Home;
