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

function Home() {

  return (
    <>
      <div className="main-section">
        <div className="content-section">
          <h1 className="main-title">A Ruma veio para <span className="highlight">Fortal</span>ecer!</h1>
          <p className='paragraph'>Na Ruma, encontre a seleção premium de produtos exclusivos e criteriosamente avaliados por nossa curadoria.
            <b> Descubra qualidade e singularidade em cada item escolhido a dedo para você.</b></p>
          <button className="main-button">
            <Link to="/produtos" >COMPRE AGORA</Link>
          </button>
        </div>

        <div className='image-section'>
          <img src={'https://images.ctfassets.net/kw4ib93qcl5n/5GWlIZIH6a5Io1Sf2FSitJ/b70e7cff5c9282cddf8df6af5c4a2fa6/imagem-cta1.png'} />
          <img className="image-section-2" src={'https://images.ctfassets.net/kw4ib93qcl5n/1SzcPVKzvewAZII3zkImVm/f290392bdb5b3010171a3193974c05d4/imagem-cta-2.png'} />
        </div>
      </div>
      <div className="partners-section">
        <h2 className="partners-title">Ei, dê uma olhada nos nossos parceiros</h2>
        <div className="partners-list">
          <CardHomeStore
            logo={'https://images.ctfassets.net/kw4ib93qcl5n/7qFb0iwlMoKmbKB13HVmjn/a9c9d093a4dc2b20f4a549a3ea474e8c/parceira1.png'}
            path='lojas/charm-chic'
          />
          <CardHomeStore
            logo={'https://images.ctfassets.net/kw4ib93qcl5n/31VkfU5VHNKSFBcn1bYoPg/f858794a2c6fa83ac6f3efd53fefdde4/parceira2.png'}
            path='lojas/loja-iracema'
          />
          <CardHomeStore
            logo={'https://images.ctfassets.net/kw4ib93qcl5n/2udN5M5wSGz3ybyySfNSJc/e7811a798e989615872d703d094a9de9/parceira3.png'}
            path='lojas/areia-moda'
          />
          <CardHomeStore
            logo={'https://images.ctfassets.net/kw4ib93qcl5n/86kzNUJHutP1rKL02aPpR/3ce3f8a05d7012d5a1a3bbd0517b6bf0/parceira4.png'}
            path='lojas/estilo-fino'
          />
          <CardHomeStore
            logo={'https://images.ctfassets.net/kw4ib93qcl5n/39FZ1Q69YTdVXDvH6ozPok/92d25d56db4cc188d51caa09e3f7f419/parceira5.png'}
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
              title="Conectando pessoas"
              text="Estamos comprometidos em conectar pequenos empresários a compradores online, criando uma ponte sólida entre lojas e clientes. Oferecemos uma plataforma que destaca o melhor das lojas participantes, facilitando conexões genuínas e duradouras."
               />
            <CardHomeInfo
              icon={<FavoriteBorderOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Melhores escolhas"
              text="Descubra na Ruma uma seleção cuidadosa de produtos que são escolhas confiáveis para os clientes. Nossa plataforma se dedica a oferecer itens de qualidade, aprovados por um processo rigoroso, assegurando uma gama diversificada de produtos de alto padrão."
               />
            <CardHomeInfo
              icon={<StarBorderOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Compra confiável"
              text="Na Ruma, prezamos por uma experiência de compra e venda confiável e exclusiva. Tanto para empreendedores quanto para clientes, garantimos transações seguras, um ambiente confiável e uma jornada de compra excepcional em nosso mercado online."
              />
            <CardHomeInfo
              icon={<LocationOnOutlinedIcon style={{ width: '60px', height: '60px' }} />} // Passe o ícone SVG como um componente
              title="Diversidade local"
              text="Fortaleça o mercado local conosco na Ruma! Ao apoiar empreendedores locais, estamos construindo uma comunidade forte e vibrante. Oferecemos uma plataforma que destaca a diversidade dos produtos locais, impulsionando o crescimento e a valorização do comércio regional."
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
