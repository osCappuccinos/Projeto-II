import React from 'react';
import './Footer.css'; // Este é o arquivo CSS que conterá os estilos
import FooterEnd from './FooterEnd';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-images'>
                <img src={'https://s2-ego.glbimg.com/RAzzhksLz9GbQmxMIkMavJZkMtE=/620x0/s.glbimg.com/jo/eg/f/original/2015/08/22/mg_5632.jpg'} />

            </div>
            <div className='footer-content'>
                <div className='footer-title'>Venha ser <div className='footer-highlight'>Ruma</div></div>
                <div className='footer-text'>Quer aumentar sua presença online de forma simplificada? Então venha fazer parte da Ruma e venda seus produtos com a primeira plataforma voltada para marcas autorais do estado do Ceará.</div>
                <div className='footer-buttons'>
                    <button className='footer-button-1'>Quero fazer parte!</button>
                    <button className='footer-button-2'>Saiba mais</button>
                </div>
            </div>
        </div>

    );
}

export default Footer;
