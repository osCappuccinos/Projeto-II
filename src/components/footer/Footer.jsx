import React from 'react';
import './Footer.css'; // Este é o arquivo CSS que conterá os estilos

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-images'>
                <img src="https://images.ctfassets.net/kw4ib93qcl5n/3umWQjDlsEKJaSIcAKCPCp/fdde899a18863d77af874d749610b556/container-parceria-footer1.png" alt="Imagem 1" className="imagem-de-fundo" />
                    <img src="https://images.ctfassets.net/kw4ib93qcl5n/7kbnGx9IK7bR6TmRACJfEG/b2bec7d9cc594320c4bb97acf0722d8e/container-parceria-footer2.png" alt="Imagem 2" className="imagem-sobreposta"/>
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
