import React from 'react';
import "./Ruma.css"
import CardHomeInfo from '../components/cards/cardHome/cardHomeInfo';
import CardRuma from '../components/cards/cardRuma/cardRuma';

const Ruma = () => {
    return (
        <div className="ruma">
            <div className="container1">
                banner
            </div>
            <div className="container2">
                <div className="image">
                    imagem
                </div>
                <div className="text">
                    <div className='title'>Saiba mais sobre a nossa proposta</div>
                    <div className='big-title'>O nosso Rumo</div>
                    <div className='description'>Lorem ipsum dolor sit amet consectetur. Ut adipiscing mauris et etiam sed. Commodo odio ut porta vitae libero vitae lectus justo enim. Et sit ornare id turpis fringilla nunc. Pellentesque pellentesque nullam amet sit et at id pharetra. Justo et quis sem at fames. Augue nullam non pellentesque iaculis convallis aliquam tortor quam rhoncus.</div>
                </div>
            </div>
            <div className="container3">
                <div className='title'>Equipe Os Cappuccinos</div>
                <div className='big-title'>Conheça os Rumers</div>
                <div className='description'>Na Ruma, exploramos um universo de produtos exclusivos, todos cuidadosamente selecionados por nossa curadoria, garantindo uma experiência única e diversificada para nossos clientes</div>
                <div className='cards'>
                    <CardRuma
                        img="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
                        title="Cappuccino"
                        description="Team Lead"
                    />
                    <CardRuma
                        img="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
                        title="Giselle Fonseca"
                        description="Product Manager"
                    />
                    <CardRuma
                        img="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
                        title="Jadson Alcântara"
                        description="UI/UX Designer"
                    />
                    <CardRuma
                        img="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
                        title="Lucas de Oliveira"
                        description="Desenvolvedor"
                    />
                    <CardRuma
                        img="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
                        title="Lucas Xavier"
                        description="Desenvolvedor"
                    />
                    <CardRuma
                        img="https://www.petz.com.br/blog//wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"
                        title="Sami Nagahama"
                        description="Desenvolvedora"
                    />
                </div>
            </div>
        </div>
    );
};

export default Ruma;