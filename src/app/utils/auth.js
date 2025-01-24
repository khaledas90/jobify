import { onAuthStateChanged , signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const checkUserAuth = (callback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is signed in:", user);
            callback(user); 
        } else {
            console.log("No user is signed in.");
            callback(null); 
        }
    });
};

export { checkUserAuth };


export const Logout = async () => {
    try {
        await signOut(auth);
        console.log("Logout successful");
    } catch (error) {
        console.error("Logout error:", error.message);
    }
}