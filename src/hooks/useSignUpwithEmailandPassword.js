import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase.js";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast.js";
import useAuthStore from "../store/authStore.js";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    console.log(inputs); // Log inputs to check their values
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.contact ||
      !inputs.fullName ||
      !inputs.category
    ) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }

    const usersRef = collection(firestore, "users");

    const q = query(usersRef, where("email", "==", inputs.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          contact: inputs.contact,
          fullName: inputs.fullName,
          catergory: inputs.category,
          profilePicURL: "",
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        
      }
    } catch (error) {
      console.log(error)
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
