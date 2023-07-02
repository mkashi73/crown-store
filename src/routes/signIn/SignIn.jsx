import React from "react";
import { signInWithGooglePopup } from "../../utils/Firebase/FirebaseUtils";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
}

export default SignIn;
