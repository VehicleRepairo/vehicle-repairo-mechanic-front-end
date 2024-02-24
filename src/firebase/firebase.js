import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAJJz3i1CPU6GHSdCpeBWUJy5xa9-AxU4",
  authDomain: "vehicle-repairo.firebaseapp.com",
  projectId: "vehicle-repairo",
  storageBucket: "vehicle-repairo.appspot.com",
  messagingSenderId: "953480365288",
  appId: "1:953480365288:web:213f5028e280338324755d",
  measurementId: "G-LBVLD01JSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export{app,auth,firestore,storage};