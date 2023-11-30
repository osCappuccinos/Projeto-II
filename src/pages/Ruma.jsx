import React from 'react';
import "./Ruma.css"
import CardHomeInfo from '../components/cards/cardHome/cardHomeInfo';
import CardRuma from '../components/cards/cardRuma/cardRuma';
import bottomImage from '../components/images/bottomImage.svg';
import logoRuma from '../components/images/logoRuma.svg';

const Ruma = () => {
    return (
        <div className="ruma">
            <div className="container1">
                <img src ='https://images.ctfassets.net/kw4ib93qcl5n/7ELhYwratjOs3Ql0ay6XFa/3621649787ee2ca00e317e82e7a7b3cf/banner-ruma.png' />
            </div>
            <div className="container2">
                <div className="image">
                    <div className="bottomImage" style={{ backgroundImage: `url(${bottomImage})` }}>
                        <div className="topImage" style={{ backgroundImage: `url(${logoRuma})` }}></div>
                    </div>
                </div>
                <div className="text">
                    <div className='title'><p>Saiba mais sobre a nossa proposta</p></div>
                    <div className='big-title'>O nosso Rumo</div>
                    <div className='description'>A Ruma é uma plataforma que destaca marcas autorais e talentosos produtores locais. Valorizamos cada item como uma expressão de arte e dedicação, conectando consumidores a peças exclusivas e com histórias inspiradoras. Ao escolher a Ruma, os clientes não apenas adquirem produtos de alta qualidade, mas também apoiam o crescimento sustentável da economia local.</div>
                </div>
            </div>
            <div className="container3">
                <div className='title'>Equipe Os Cappuccinos</div>
                <div className='big-title'>Conheça os Rumers</div>
                <div className='description'>Na Ruma, exploramos um universo de produtos exclusivos, todos cuidadosamente selecionados por nossa curadoria, garantindo uma experiência única e diversificada para nossos clientes</div>
                <div className='cards'>
                    <CardRuma
                        img="https://images.ctfassets.net/kw4ib93qcl5n/4vzKBCskSad9ycjW0V59i/6564bc6ca996eb132f39746007652573/membro6.png"
                        title="Cappuccino"
                        description="Team Lead"
                    />
                    <CardRuma
                        img="https://images.ctfassets.net/kw4ib93qcl5n/3hoOAQCzdx7Lwhq3oVp1hz/e822f13b1f13381cddd7e207ecee0224/membro4.png"
                        title="Giselle Fonseca"
                        description="Product Manager"
                    />
                    <CardRuma
                        img="https://images.ctfassets.net/kw4ib93qcl5n/2E8UllgsShYWkdyyjH6nAi/cd50e23e8793027741bae25be6db6968/membro2.png"
                        title="Jadson Alcântara"
                        description="UI/UX Designer"
                    />
                    <CardRuma
                        img="https://images.ctfassets.net/kw4ib93qcl5n/7kXZzUmmNEPbKT6gZhcLvM/443190077b3912c0acbf50e47dc7a41c/membro3.png"
                        title="Lucas de Oliveira"
                        description="Desenvolvedor"
                    />
                    <CardRuma
                        img="https://images.ctfassets.net/kw4ib93qcl5n/4nwZIlDGBslj0VDJMfxNzT/9067816aaf1d6b4b7f2151e32e0ec91c/membro5.png"
                        title="Lucas Xavier"
                        description="Desenvolvedor"
                    />
                    <CardRuma
                        img="https://images.ctfassets.net/kw4ib93qcl5n/3F5gZD8HovP1GKkbXKVLYI/6daadae1c611141dfb20dbb1eadfd390/membro1.png"
                        title="Sami Nagahama"
                        description="Desenvolvedora"
                    />
                </div>
            </div>
        </div>
    );
};

export default Ruma;