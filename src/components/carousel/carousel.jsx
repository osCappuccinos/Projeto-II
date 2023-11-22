import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
      }, 3000); // Muda a imagem a cada 3 segundos
  
      return () => clearInterval(timer); // Limpa o intervalo quando o componente é desmontado
    }, [currentIndex, images.length]);
    
  
    return (
        <div className="carousel-container">
          <img 
            src={images[currentIndex].url} 
            alt={`Slide ${currentIndex}`} 
            className="carousel-image"
          />
         <div
  className="carousel-caption"
  style={{
    position: 'absolute', // Posiciona o caption sobre a imagem
    top: '15%', 
    left: '15%',
    width: '400px',
    color:'white',
    fontSize: '2.5em',
    fontWeight: '700', 
    textAlign: 'start'}}
>
            {images[currentIndex].caption}
          </div>
        </div>
      );
    };

export default Carousel;
