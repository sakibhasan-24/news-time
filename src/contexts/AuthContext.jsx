import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthProvider = createContext(null);

export default function AuthContext({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  //   createUserWithEmailAndPasswird
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogOut = () => {
    return signOut(auth);
  };
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const clearMemory = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("observed not user");
      }
      setUser(currentUser);
      console.log(currentUser.email + " found");
    });
    return () => {
      clearMemory();
    };
  }, []);
  const authValue = { user, createUser, userLogOut, userSignIn };
  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
}
