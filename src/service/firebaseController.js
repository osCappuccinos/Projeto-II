import { db } from "./firebase-config";
import { ref, set } from "firebase/database"

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