"use client";
import React, { useState, useEffect } from "react";
import { initFirebase } from "./FirebaseApp";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { ButtonAuth, DivAuth, DivSignIn } from "@/app/styles/Firebase/firebase";
import { useRouter } from "next/navigation";
import FeedLayout from "../layouts/FeedLayout";

interface AuthenticationProps {}

const Authentication: React.FC<AuthenticationProps> = () => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {user ? (
        <>
          <FeedLayout handleSignOut={handleSignOut} />
        </>
      ) : (
        <>
          <DivSignIn>Please sign in to continue...</DivSignIn>
          <ButtonAuth onClick={handleSignIn}>Sign In with Google</ButtonAuth>
        </>
      )}
    </div>
  );
};

export default Authentication;
