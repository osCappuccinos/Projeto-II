import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

function FooterEnd() {
  return <footer className="footer-end">
    <div className="footer-end-section">
      <div className="footer-logo">
        <img src="https://images.ctfassets.net/kw4ib93qcl5n/2cCwIYWYTSc9qbXeLJFu0l/e92bc58e8cb7d99c7964db3578d23646/ruma__1_.png" alt="Logo" />
      </div>
      <div className="footer-column">
        <h4>De Fortaleza para você</h4>
        <ul>
          <li><Link to="/parceiros">Conheça nossos parceiros</Link></li>
          <li><Link to="/investidor-anjo">Seja um investidor anjo</Link></li>
          <li><Link to="/inscricao">Se inscreva para o próximo ciclo</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Ruma</h4>
        <ul>
          <li><Link to="/ruma">Sobre nós</Link></li>
          <li><Link to="/trabalhe-conosco">Trabalhe conosco</Link></li>
          <li><Link to="/investimento">Invista no nosso trabalho</Link></li>
          <li><Link to="/contato">Fale conosco</Link></li>
          <li><Link to="/ajuda">Central de ajuda</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Os Cappuccinos</h4>
        <ul>
          <li>Giselle Fonseca</li>
          <li>Jadson Alcântara</li>
          <li>Lucas de Oliveira</li>
          <li>Lucas Xavier</li>
          <li>Sami Nagahama</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Social</h4>
        <ul>
          <li><Link to="www.instagram.com">Instagram</Link></li>
          <li><Link to='www.twitter.com'>Twitter / X</Link></li>
          <li><Link to='www.linkedin.com'>Linkedin</Link></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-logo-2">
        <img src="https://images.ctfassets.net/kw4ib93qcl5n/2cCwIYWYTSc9qbXeLJFu0l/e92bc58e8cb7d99c7964db3578d23646/ruma__1_.png" alt="Logo" />
        by Os Cappuccinos. Todos os direitos reservados.
      </div>

    </div>
  
  </footer>
}

export default FooterEnd