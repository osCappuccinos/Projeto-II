import React from 'react';
import { H4 } from '../title/titles';

import './sizeSelector.css';

const SizeSelector = ({ options, selectedOption, handleOptionSelected }) => {
  return (
    <div className="size-selector">
      <H4 text={"Escolha o tamanho:"} />
      <div className="size-options">
        {options.map((size, index) => (
          <div
            key={index}
            className={`size-option ${selectedOption === size ? 'selected' : ''}`}
            onClick={() => handleOptionSelected(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
