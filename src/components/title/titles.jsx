import React from 'react';
import './titles.css';

const H1 = ({ text, id }) => (
  <h1 id={id} className="h1">{text}</h1>
);

const H2 = ({ text, id }) => (
  <h2 id={id} className="h2">{text}</h2>
);

const H3 = ({ text, id }) => (
  <h3 id={id} className="h3">{text}</h3>
);

const H4 = ({ text, id }) => (
  <p id={id} className="h4">{text}</p>
);

export { H1, H2, H3, H4 };