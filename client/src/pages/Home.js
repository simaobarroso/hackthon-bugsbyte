import React, { useState } from 'react';
import './Home.css'; // Importar arquivo CSS
import { ReactComponent as PortugalMap } from '../assets/portugal_map.svg'; // Importar arquivo SVG do mapa de Portugal
import { ReactComponent as AveiroSvg } from '../assets/aveiro.svg';
import { ReactComponent as BejaSvg } from '../assets/beja.svg';
import { ReactComponent as BragaSvg } from '../assets/braga.svg';
import { ReactComponent as BragancaSvg } from '../assets/braganca.svg';
import { ReactComponent as CasteloBrancoSvg } from '../assets/castelo branco.svg';
import { ReactComponent as CoimbraSvg } from '../assets/coimbra.svg';
import { ReactComponent as EvoraSvg } from '../assets/evora.svg';
import { ReactComponent as FaroSvg } from '../assets/faro.svg';
import { ReactComponent as GuardaSvg } from '../assets/guarda.svg';
import { ReactComponent as LeiriaSvg } from '../assets/leiria.svg';
import { ReactComponent as LisbonSvg } from '../assets/lisboa.svg';
import { ReactComponent as PortalegreSvg } from '../assets/portalegre.svg';
import { ReactComponent as PortoSvg } from '../assets/porto.svg';
import { ReactComponent as SantaremSvg } from '../assets/santarem.svg';
import { ReactComponent as SetubalSvg } from '../assets/setubal.svg';
import { ReactComponent as VianaDoCasteloSvg } from '../assets/viana do castelo.svg';
import { ReactComponent as VilaRealSvg } from '../assets/vila real.svg';
import { ReactComponent as ViseuSvg } from '../assets/viseu.svg';

const Home = () => {
    // Estado para controlar a exibição da mensagem, a classe de animação e o SVG do distrito
    const [message, setMessage] = useState(null);
    const [messageSearch, setMessageSearch] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedConcelho, setSelectedConcelho] = useState(null);
    const [selectedCategoria, setSelectedCategoria] = useState('Todas');

    // Mapeamento de nomes de distritos para SVGs correspondentes
    const districtMap = {
        Aveiro: <div className="district-container"><h2>Aveiro</h2><AveiroSvg className="district-svg" /></div>,
        Beja: <div className="district-container"><h2>Beja</h2><BejaSvg className="district-svg"/></div>,
        Braga: <div className="district-container"><h2>Braga</h2><BragaSvg className="district-svg"/></div>,
        Bragança: <div className="district-container"><h2>Bragança</h2><BragancaSvg className="district-svg"/></div>,
        CasteloBranco: <div className="district-container"><h2>Castelo Branco</h2><CasteloBrancoSvg className="district-svg"/></div>,
        Coimbra: <div className="district-container"><h2>Coimbra</h2><CoimbraSvg className="district-svg"/></div>,
        Évora: <div className="district-container"><h2>Évora</h2><EvoraSvg className="district-svg"/></div>,
        Faro:<div className="district-container"><h2>Faro</h2><FaroSvg className="district-svg"/></div>,
        Guarda: <div className="district-container"><h2>Guarda</h2><GuardaSvg className="district-svg"/></div>,
        Leiria: <div className="district-container"><h2>Leiria</h2><LeiriaSvg className="district-svg"/></div>,
        Lisboa: <div className="district-container"><h2>Lisboa</h2><LisbonSvg className="district-svg"/></div>,
        Portalegre: <div className="district-container"><h2>Portalegre</h2><PortalegreSvg className="district-svg"/></div>,
        Porto: <div className="district-container"><h2>Porto</h2><PortoSvg className="district-svg"/></div>,
        Santarém: <div className="district-container"><h2>Santarém</h2><SantaremSvg className="district-svg"/></div>,
        Setúbal: <div className="district-container"><h2>Setúbal</h2><SetubalSvg className="district-svg"/></div>,
        VianadoCastelo: <div className="district-container"><h2>Viana do Castelo</h2><VianaDoCasteloSvg className="district-svg"/></div>,
        VilaReal: <div className="district-container"><h2>Vila Real</h2><VilaRealSvg className="district-svg"/></div>,
        Viseu: <div className="district-container"><h2>Viseu</h2><ViseuSvg className="district-svg"/></div>
    };

    // Função para mostrar a mensagem e atualizar o distrito selecionado
    const showMessage = (text, district) => {
        setMessage(text);
        district = district.replace(/\s+/g, '');
        console.log(district)
        setSelectedDistrict(district);
    };

    // Função para fechar a mensagem
    const closeMessage = () => {
        setMessage(null);
        setSelectedDistrict(null);
        setSelectedConcelho(null);
        setMessageSearch(null);
        setSelectedCategoria('Todas');
    };

    // Função para decodificar uma string contendo sequências de escape Unicode
    const decodeUnicodeEscape = (str) => {
        return str.replace(/\\x([0-9A-Fa-f]{2})/g, (match, p1) => {
            return String.fromCharCode(parseInt(p1, 16));
        });
    };

    // Função para manipular o clique no contêiner SVG
    const handleSvgClick = (event) => {
        // Verifica se o clique ocorreu em um dos caminhos (paths)
        if (event.target.tagName === 'path') {
            if (!selectedDistrict){
                // Obtém o ID do path clicado (que corresponde ao nome do distrito)
                let districtEncoded = event.target.getAttribute('class');
                // Decodifica o nome do distrito
                let district = decodeUnicodeEscape(districtEncoded);
                // Constrói a mensagem com o nome do concelho
                let messageText = `${district} (Distrito) selecionado!`;
            
                // Exibe a mensagem correspondente e atualiza o distrito selecionado
                showMessage(messageText, district);
            }
            else {
                let messageText = ""
                if (!event.target.classList.contains("selected")){
                    let concelhoEncoded = event.target.getAttribute('class');
                    let concelho = decodeUnicodeEscape(concelhoEncoded);
                    messageText = `${selectedDistrict} (Distrito) e ${concelho} (Concelho) selecionado!`;
                    console.log(concelho)
                
                    if (selectedConcelho){
                        selectedConcelho.classList.remove('selected')
                    }
                    event.target.classList.add('selected');
                    setSelectedConcelho(event.target)
                }
                else {
                    event.target.classList.remove('selected')
                    setSelectedConcelho(null);
                    messageText = `${selectedDistrict} (Distrito) selecionado!`;
                }
                setMessage(messageText);
            }
        }
    };

    const search = () => {
        let searchInput = document.getElementById('searchInput');
        setMessageSearch(`search: ${searchInput.value}`);
    };

    const selectCategoria = (categoria) => {

        let previousCategoria = document.getElementById(selectedCategoria);
        previousCategoria.classList.remove('selectedCategoria')
        
        let newCategoria = document.getElementById(categoria);
        newCategoria.classList.add('selectedCategoria')
        setSelectedCategoria(categoria);
        console.log("Categoria selecionada:", categoria);
        // Aqui você pode fazer o que precisa com a categoria selecionada
    }

    return (
        <div className="container">
            {/* Mapa à esquerda */}
            <div className="map-container" onClick={handleSvgClick}>
                {selectedDistrict ? (
                    districtMap[selectedDistrict]
                ) : (
                    <PortugalMap className="map-svg" width="800px" height="600px" />
                )}
            </div>

            {/* Mensagem à direita caso distrito esteja selecionado*/}
            {selectedDistrict && (
                <div className="semi-container">
                    <div class="search-container">
                        <input type="text" id="searchInput" onChange={search} placeholder="Digite sua pesquisa aqui..."/>
                    </div>
                    <button id="Todas" class="selectedCategoria" onClick={() => selectCategoria('Todas')}>Todas</button>
                    <button id="Desporto" onClick={() => selectCategoria('Desporto')}>Desporto</button>
                    <button id="Entretenimento" onClick={() => selectCategoria('Entretenimento')}>Entretenimento</button>
                    <p>{message}</p>
                    <p>{messageSearch}</p>
                    <p>{selectedCategoria}</p>
                    <button onClick={closeMessage}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default Home;
