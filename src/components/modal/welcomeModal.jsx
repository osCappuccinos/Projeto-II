import React, { useRef, useEffect } from 'react';
import SignIn from '../../pages/SignIn'; // Ajuste o caminho conforme necessário
import './welcomeModal.css';

const WelcomeModal = ({ isOpen, onClose, userName, imageUrl }) => {
  const modalRef = useRef();

  const closeModalOnOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModalOnOutsideClick);
    return () => {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div className="image-container">
      <img src='https://images.ctfassets.net/kw4ib93qcl5n/55FZRHuY6MpSyS6YSGUrve/752b9ee3241821e18a0defb5538d2d23/container-login.png' />
       </div>
        <div className="text-container">
          {userName ? (
            <p>Bem-vinde de volta, {userName}!</p> 
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
