import React, { useState } from "react";
import FirebaseInfo from "../../firebase-config";
import { redirect } from "react-router-dom";
function HomePage() {
  const signout = async () => {
    await FirebaseInfo.auth.signOut();
    redirect("http://localhost:5173/");
  };

  return (
    <button
      onClick={() => {
        signout();
      }}
    >
      hello world
    </button>
  );
}

export default HomePage;
