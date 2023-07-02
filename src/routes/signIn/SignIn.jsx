import React from "react";
import { SignInWithGooglePopup } from "../../utils/Firebase/FirebaseUtils";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await SignInWithGooglePopup();
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
