import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHGJnR975xgRrdFb4oVk13WDl-VwoMFP4",
  authDomain: "my-app-ee028.firebaseapp.com",
  projectId: "my-app-ee028",
  storageBucket: "my-app-ee028.appspot.com",
  messagingSenderId: "247644960707",
  appId: "1:247644960707:web:a3d0287f40e3845feb6f76",
  measurementId: "G-50Z04ELD28",
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
