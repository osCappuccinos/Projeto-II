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
{/* Coloque aqui sua imagem */} 
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
