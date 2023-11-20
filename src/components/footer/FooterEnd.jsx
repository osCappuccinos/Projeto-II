import React from "react";
import "./Footer.css"
function FooterEnd() {
    return <footer className="footer-end">
    <div className="footer-end-section">
      <div className="footer-logo">
        {/* Aqui você colocaria o seu logo, como um <img> ou um SVG */}
        <img src="path-to-your-logo.svg" alt="Logo" />
        <div className="footer-logo-text">logoipsum</div>
      </div>
      <div className="footer-column">
        <h4>De Fortaleza para você</h4>
        <ul>
          <li>Conheça nossos parceiros</li>
          <li>Seja um investidor anjo</li>
          <li>Se inscreva para o próximo ciclo</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Ruma</h4>
        <ul>
          <li>Sobre nós</li>
          <li>Trabalhe conosco</li>
          <li>Invista no nosso trabalho</li>
          <li>Fale conosco</li>
          <li>Central de ajuda</li>
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
          <li>Instagram</li>
          <li>Twitter / X</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-logo">
        {/* Repita o logo aqui, se necessário */}
        <img src="path-to-your-logo.svg" alt="Logo" />
        <div className="footer-logo-text">logoipsum</div>
      </div>

    </div>
    <div className="footer-rights">
      by Os Cappuccinos. Todos os direitos reservados.
    </div>
  </footer>
}

export default FooterEnd