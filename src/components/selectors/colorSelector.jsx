import React from 'react';
import { H4 } from '../title/titles'; // Ajuste o caminho conforme necessário
import './colorSelector.css';

const colorTranslations = {
  'Vermelho': 'crimson',
  'Laranja': 'darkOrange',
  'Amarelo': 'gold',
  'Verde': 'forestGreen',
  'Azul': 'cornflowerBlue',
  'Roxo': 'darkViolet',
  'Rosa': 'deepPink',
  'Branco': 'whiteSmoke',
  'Cinza': 'gray',
  'Preto': 'black',
  'Marrom': 'sienna',
  'Bege': 'wheat'
};

const ColorSelector = ({ options, selectedOption, handleOptionSelected }) => {
  return (
    <div className="color-selector">
      {/* ... */}
      <div className="color-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`color-option ${selectedOption === option ? 'selected' : ''}`}
            style={{ backgroundColor: colorTranslations[option] }}
            onClick={() => handleOptionSelected(option)}
          ></div>
        ))}
      </div>
      {selectedOption && <p className="selected-color-message">Cor selecionada: {selectedOption}</p>}
    </div>
  );
};


export default ColorSelector;
