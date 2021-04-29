import { auth } from "./firebase";
export default function Auth() {
  const provider = new auth.GoogleAuthProvider();

  return auth()
    .signInWithPopup(provider)
    .then((result) => {
      //var credential = result.credential;
      //var token = credential.accessToken;
      //var user = result.user;
    });
}
