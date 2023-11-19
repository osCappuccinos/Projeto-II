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
    <div className="modal-backdrop">
      <div className="modal-content" ref={modalRef}>
        {userName ? (
          <>
            <div className="image-container">
              <img src={imageUrl} alt="Imagem" />
            </div>
            <div className="text-container">
              <h2>Bem-vinde de volta, {userName}!</h2>
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
};

export default WelcomeModal;
