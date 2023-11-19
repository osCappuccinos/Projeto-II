import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail  } from 'firebase/auth';
import { getDatabase, ref, set, update, remove, get, onValue } from 'firebase/database';
import { db } from './firebase-config';



export function createUser(email, password, name) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const userId = userCredential.user.uid;
          const userRef = ref(getDatabase(), 'users/' + userId);
          set(userRef, {
              username: name,
              email: email
          });
      })
      .catch((error) => {
          console.error("Error creating user:", error);
      });
}

export function loginUser(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          console.log("User logged in:", userCredential.user);
      })
      .catch((error) => {
          console.error("Error logging in:", error);
      });
}


export function readUser(userId, callback) {
  const userRef = ref(getDatabase(), 'users/' + userId);
  get(userRef)
      .then((snapshot) => {
          if (snapshot.exists()) {
              callback(null, snapshot.val());
          } else {
              callback("User not found");
          }
      })
      .catch((error) => {
          callback(error);
      });
}

// CLIENTS
// create a client
export function createClient(name, email, password, callback) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const clientId = userCredential.user.uid;
          const clientRef = ref(getDatabase(), 'clients/' + clientId);
          set(clientRef, {
              clientName: name,
              clientEmail: email
              // Não armazene a senha no banco de dados
          }).then(() => {
              callback(null, 'Client created successfully');
          }).catch((error) => {
              callback(error);
          });
      })
      .catch((error) => {
          callback(error);
      });
}


// read all clients
export function readAllClients() {
  const clientsRef = ref(db, 'clients');
  onValue(clientsRef, (snapshot) => {
    const clients = snapshot.val();
    // Handle the list of clients
  });
}

// READ a client
export function readClient(clientId, callback) {
  const clientRef = ref(getDatabase(), 'clients/' + clientId);
  get(clientRef)
      .then((snapshot) => {
          if (snapshot.exists()) {
              const clientData = snapshot.val();
              callback(null, clientData);
          } else {
              callback("Client not found");
          }
      })
      .catch((error) => {
          callback(error);
      });
}


// UPDATE a client
export function updateClient(clientId, clientData) {
  const clientRef = ref(db, `clients/${clientId}`);
  update(clientRef, clientData);
}

// DELETE a client
export function deleteClient(clientId) {
  const clientRef = ref(db, `clients/${clientId}`);
  remove(clientRef);
}

export function resetClientPassword(email) {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent successfully");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
      });
  }
  