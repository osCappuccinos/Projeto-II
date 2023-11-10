import React from 'react';
import { H4 } from '../title/titles';

import './colorSelector.css';

const colorTranslations = {
  'Vermelho': 'crimson ',
  'Laranja': 'darkOrange ',
  'Amarelo': 'gold',
  'Verde': 'forestGreen',
  'Azul': 'cornflowerBlue',
  'Roxo': 'darkViolet',
  'Rosa': 'deepPink',
  'Branco': 'whiteSmoke ',
  'Cinza': 'gray',
  'Preto': 'black',
  'Marrom': 'sienna',
  'Bege': 'wheat'
};

const ColorSelector = ({ options, selectedOption, handleOptionSelected }) => {
  return (
    <div className="color-selector">
      <H4 text={"Escolha a cor:"} />
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
    </div>
  );
};

export default ColorSelector;
