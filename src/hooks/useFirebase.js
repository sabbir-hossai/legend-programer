import initializeFirebase from "../Components/Login/Firebase/firebase.init";

import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const auth = getAuth();

    const registerUser = (email, password , name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

    const loginUser = (email, password) => {
                    signInWithEmailAndPassword(auth, email, password)
                            .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // ...
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                            });
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            // setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logout = () => {
        // setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            // .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        logout,
        
        
    }

}
export default useFirebase;
