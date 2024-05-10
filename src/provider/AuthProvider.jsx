import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // social media providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  // signing in user
  function signInUser(email, password) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // registering user with email and pass
  function registerWithEmailPass(email, pass) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  // updating user profile
  function updateUserProfile(name, photo) {
    setIsLoading(false);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  }

  // signing with google
  function registerUserWithGoogle() {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // signing with gitHub
  function signInWithGitHub() {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  // signing with facebook
  function signInWithFacebook() {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }
  // sign out user from firebase
  function signOutUser() {
    return signOut(auth);
  }
  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  console.log(user);
  const authInfo = {
    user,
    isLoading,
    signInUser,
    registerWithEmailPass,
    updateUserProfile,
    registerUserWithGoogle,
    signInWithGitHub,
    signInWithFacebook,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
