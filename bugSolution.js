import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();
let unsubscribe;

const authStateChangeHandler = (user) => {
  if (user) {
    // User is signed in
    console.log("User signed in:", user.uid);
  } else {
    // User is signed out
    console.log("User signed out");
  }
};

const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    authStateChangeHandler(user);
  });
};

const cleanupAuthListener = () => {
  if (unsubscribe) {
    try {
      unsubscribe();
      console.log("Successfully unsubscribed from auth state changes");
    } catch (error) {
      console.error("Error unsubscribing from auth state changes:", error);
    }
  }
};

export {setupAuthListener, cleanupAuthListener};