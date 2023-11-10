import { child, get, getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import { db } from "./firebase-config";


export function createUser(userId, name, email, password, callback) {
    const reference = ref(db, 'user/' + userId);
    set(reference, 
        {
            username: name,
            email: email,
            password: password
        }
    );
}

// CLIENTS
// create a client
export function createClient(clientId, name, email, password, callback) {
    const reference = ref(db, 'clients/' + clientId);
    set(reference,
      {
        clientName: name,
        clientEmail: email,
        clientPassword: password
      }
      ) 
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
    const clientRef = ref(db, 'clients/' + clientId);
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