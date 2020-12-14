import app from "./firebase";

export const loginWithEmailAndPassword = async (payload) => {
  await app.auth().signInWithEmailAndPassword(payload.email, payload.password);
};
