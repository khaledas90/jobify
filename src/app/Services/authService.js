import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/app/utils/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

export const RegisterUser = async (email, password, additionalData = {}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const userDocRef = doc(db, "users", user.uid);

        await setDoc(userDocRef, {
            email: user.email,
            uid: user.uid,
            name: additionalData.name || "",
            phone: additionalData.phone || "",
            address: additionalData.address || "",
        });

        toast.success("Registration successful!");
        return user;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.error("This email is already registered.");
            toast.error("This email is already registered. Please try logging in.");
            throw new Error("This email is already registered. Please try logging in.");
        } else {
            console.error("Registration error:", error.message);
            toast.error("Registration failed. Please try again later.");
            throw error;
        }
    }
};

export const Login = async (email, password) => {
    try {
        const loginUser = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful:", loginUser.user);
        toast.success("Login successful!");
        return loginUser.user;
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            console.error("No user found with this email.");
            toast.error("No user found with this email. Please register first.");
            throw new Error("No user found with this email. Please register first.");
        } else if (error.code === 'auth/wrong-password') {
            console.error("Incorrect password.");
            toast.error("Incorrect password. Please try again.");
            throw new Error("Incorrect password. Please try again.");
        } else if (error.code === 'auth/invalid-email') {
            console.error("Invalid email format.");
            toast.error("Invalid email format. Please enter a valid email.");
            throw new Error("Invalid email format. Please enter a valid email.");
        } else {
            console.error("Login error:", error.message);
            toast.error("Login failed. Please try again later.");
            throw new Error("Login failed. Please try again later.");
        }
    }
};

export const checkUserLoggedIn = (callback) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('User is logged in:', user);
            callback(true, user);
        } else {
            console.log('No user is logged in.');
            callback(false, null);
        }
    });
};

export const Logout = async () => {
    try {
        await signOut(auth);
        console.log("Logout successful");
        toast.success("You have been logged out successfully.");
    } catch (error) {
        console.error("Logout error:", error.message);
        toast.error("Logout failed. Please try again.");
    }
};
