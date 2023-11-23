import React, { useEffect, useState } from 'react';
import './Partners.css'; 
import { Link } from 'react-router-dom';
import '../themes.css'
import StoreBanner from '../components/storeBanner/storeBanner';
import backgroundCharmChic from '../components/images/charmchic.svg';
import logoCharmChic from '../components/images/charmchiclogo.svg';
import backgroundIracema from '../components/images/lojairacema.svg';
import logoIracema from '../components/images/lojairacemalogo.svg';
import backgroundAreiaeModa from '../components/images/areiaemoda.svg';
import logoAreiaeModa from '../components/images/areiaemodalogo.svg';
import backgroundEstiloFino from '../components/images/estilofino.svg';
import logoEstiloFino from '../components/images/estilofinologo.svg';
import Footer from '../components/footer/Footer';
import FooterEnd from '../components/footer/FooterEnd';

function Partners() {

  return (
    <>
      <div className="partners-main-section">
        <div className="partners-banner">
            <div className="banner-info">
                <h1 className="partners-title">Ruma é <span className="yellow-highlight">parceria</span></h1>
                <p><b>Quer aumentar sua presença online de forma simplificada? Então venha fazer parte da Ruma e venda seus produtos com a primeira plataforma voltada para marcas autorais do estado do Ceará.</b></p>
                <button className="btn1">
                    <Link to="/produtos">Quero fazer parte!</Link>
                </button>
            </div>
        </div>
        <StoreBanner
        linkPath={'/lojas/charm-chic'}
        backgroundImage={backgroundCharmChic}
        logoImage={logoCharmChic}
        category={'Moda feminina'}
        title={'CharmChic'}
        text={'Seja cativado pela autenticidade das peças exclusivas na CharmChic, uma loja que captura a essência da simplicidade e elegância. Explore nossa coleção que celebra o minimalismo com um toque de artesanato refinado. Cada criação é única, refletindo a arte e a dedicação das mãos talentosas por trás de cada produto.'}
        />
        <StoreBanner
        linkPath={'/lojas/loja-iracema'}
        backgroundImage={backgroundIracema}
        logoImage={logoIracema}
        category={'Moda e acessórios'}
        title={'Loja Iracema'}
        text={'Conheça o requinte artesanal na Iracema, loja que oferece peças exclusivas de couro meticulosamente confeccionadas à mão por artesãos locais, produtos de alta durabilidade e design único que ecoam a excelência e identidade regional.'}
        reverseOrder
        />
        <StoreBanner
        linkPath={'/lojas/areia-moda'}
        backgroundImage={backgroundAreiaeModa}
        logoImage={logoAreiaeModa}
        category={'Moda praia'}
        title={'Areia&Moda'}
        text={'Descubra a elegância à beira-mar na Areia&Moda. Nossas peças de moda praia, com estampas exclusivas, unem o luxo ao conforto, oferecendo proteção UV sem comprometer o estilo. Criações que refletem a sofisticação, qualidade e design exclusivo. Envolva-se na aura de exclusividade e glamour com cada peça que carrega a assinatura da Areia&Moda.'}
        />
        <StoreBanner
        linkPath={'/lojas/estilo-fino'}
        backgroundImage={backgroundEstiloFino}
        logoImage={logoEstiloFino}
        category={'Moda para todes'}
        title={'Estilo Fino'}
        text={'A revolução na moda com a Estilo Fino. Nossa coleção agênero, idealizada por talentosos estilistas em ascensão no Brasil e internacionalmente, redefine o conceito de estilo. Orgulhosamente nascida em Fortaleza, nossa produção representa a inovação e a diversidade, rompendo fronteiras e elevando a moda a um novo patamar.'}
        reverseOrder
        />
        <div className='footer'>
          <Footer />
        </div>
      </div >
    </>
  );
}

export default Partners;
