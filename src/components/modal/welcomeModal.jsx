import React from 'react';
import './welcomeModal.css'; // Certifique-se de criar este arquivo CSS

const WelcomeModal = ({ isOpen, onClose, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Bem-vindo de volta, {userName}!</h2>
        <button onClick={onClose} className="close-modal-button">Fechar</button>
      </div>
    </div>
  );
};

export default WelcomeModal;


/** 
 PARA IMPLEMENTAR O MODAL:
const [showModal, setShowModal] = useState(false);
    const [userName, setUserName] = useState('');
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Define o nome do usuário e mostra o modal
                setUserName(user.displayName || user.email);
                setShowModal(true);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const handleCloseModal = () => {
        setShowModal(false);
    };



    e o componente:
  <WelcomeModal 
                isOpen={showModal}
                onClose={handleCloseModal}
                userName={userName}
            />






};




 */
