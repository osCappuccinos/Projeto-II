import React, { useEffect, useState } from 'react';
import CardHomeStore from '../components/cards/cardHome/cardHomeStore';
import CardHomeInfo from '../components/cards/cardHome/cardHomeInfo';
import './Home.css'; // Importa o arquivo CSS
import { Link } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TopRatedProducts from '../components/algorithm/TopRatedProducts';
import Footer from '../components/footer/Footer';
import FooterEnd from '../components/footer/FooterEnd';

function Home() {

  return (
    <>
      <div className="main-section">
        <div className="content-section">
          <h1 className="main-title">A Ruma veio para <span className="highlight">Fortal</span>ecer!</h1>
          <p>Na Ruma, encontre a seleção premium de produtos exclusivos e criteriosamente avaliados por nossa curadoria.
            <b> Descubra qualidade e singularidade em cada item escolhido a dedo para você.</b></p>
          <button className="main-button">
            <Link to="/produtos">COMPRE AGORA</Link>
          </button>
        </div>

        <div className='image-section'>
          <img src={'https://s2-ego.glbimg.com/RAzzhksLz9GbQmxMIkMavJZkMtE=/620x0/s.glbimg.com/jo/eg/f/original/2015/08/22/mg_5632.jpg'} />
        </div>
      </div>
      <div className="partners-section">
        <h2 className="partners-title">Ei, dê uma olhada nos nossos parceiros</h2>
        <div className="partners-list">
          <CardHomeStore
            logo={'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png'}
            path='lojas/charm-chic'
          />
          <CardHomeStore
            logo={'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png'}
            path='lojas/loja-iracema'
          />
          <CardHomeStore
            logo={'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png'}
            path='lojas/areia-moda'
          />
          <CardHomeStore
            logo={'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png'}
            path='lojas/estilo-fino'
          />
          <CardHomeStore
            logo={'https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png'}
            path='lojas/bem-te-ver'
          />
        </div>

        <div className='info-section'>
          <div className='info-title'><p>Trabalhando com a Ruma</p></div>
          <div className='info-text-title'><p>O melhor de Fortaleza para você</p></div>
          <div className='info-text'><p>Na Ruma, exploramos um universo de produtos exclusivos, todos cuidadosamente selecionados por nossa curadoria, garantindo uma experiência única e diversificada para nossos clientes</p></div>
          <div className='info-cards'>
            <CardHomeInfo
              icon={<PeopleAltOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Lorem Ipsum"
              text="Estamos comprometidos em conectar pequenos empresários a compradores online, criando uma ponte sólida entre lojas e clientes. Oferecemos uma plataforma que destaca o melhor das lojas participantes, facilitando conexões genuínas e duradouras."
            />
            <CardHomeInfo
              icon={<FavoriteBorderOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Lorem Ipsum"
              text="Descubra na Ruma uma seleção cuidadosa de produtos que são escolhas confiáveis para os clientes. Nossa plataforma se dedica a oferecer itens de qualidade, aprovados por um processo rigoroso, assegurando uma gama diversificada de produtos de alto padrão."
            />
            <CardHomeInfo
              icon={<StarBorderOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Lorem Ipsum"
              text="Na Ruma, prezamos por uma experiência de compra e venda confiável e exclusiva. Tanto para empreendedores quanto para clientes, garantimos transações seguras, um ambiente confiável e uma jornada de compra excepcional em nosso mercado online."
            />
            <CardHomeInfo
              icon={<LocationOnOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Lorem Ipsum"
              text="Fortaleça o mercado local conosco na Ruma! Ao apoiar empreendedores locais, estamos construindo uma comunidade forte e vibrante. Oferecemos uma plataforma que destaca o talento e a diversidade dos produtos locais, impulsionando o crescimento e a valorização do comércio da região."
            />
          </div>
        </div>

        <div className='exclusive-section'>
          <div className='exclusive-title'>
            <p>Exclusivos Ruma</p>
          </div>
          <div className='exclusive-text'>
            <p>Conheça alguns dos mais queridinhos. Você vai se apaixonar!</p>
          </div>
          <div className='exclusive-cards'>
            <TopRatedProducts />
          </div>
        </div >
        <div className='footer'>
          <Footer />
        </div>
          
      </div >
    </>
  );
}

export default Home;
