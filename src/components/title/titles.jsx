import React from 'react';
import './titles.css';

const H1 = ({ text }) => (
  <h1 className="h1">{text}</h1>
);

const H2 = ({ text }) => (
  <h2 className="h2">{text}</h2>
);

const H3 = ({ text }) => (
  <h3 className="h3">{text}</h3>
);

const H4 = ({ text }) => (
  <p className="h4">{text}</p>
);

export { H1, H2, H3, H4 };