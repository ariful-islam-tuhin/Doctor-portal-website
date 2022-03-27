import { useEffect, useState } from 'react';
import initializeFirebase from '../compunents/Login/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  onAuthStateChanged, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// initialize firebase app
initializeFirebase();


const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();  
  const googleProvider = new GoogleAuthProvider();

  // register work
  const registerUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setAuthError('');
        // ...
      })
      .catch((error) => {       
        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  }


  // ====login user ======
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        setAuthError('');
        // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // sign is using google

  const signInWithGoogle = (location,history) => {
    setIsLoading(true);
    signInWithPopup(auth,googleProvider)
    .then((result) => {
      const user =result.user;
      setAuthError('');
    }).catch ((error) =>{
      setAuthError(error.message);
    }).finally(() => setIsLoading(false));
  }


  // ovserve user state so use useEffect 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)

      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribe

  }, [])



  // logout work
  const logout = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(() => setIsLoading(false));
  }







  return {
    user,
    registerUser,
    logout,
    isLoading,
    authError,
    loginUser,
    signInWithGoogle,
  };
};

export default UseFirebase;