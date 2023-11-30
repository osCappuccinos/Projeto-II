import React from 'react';
import './Footer.css'; 
import footerPhotos from '../images/footerPhotos.svg';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-images'>
                <img src={footerPhotos} alt="" />
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
