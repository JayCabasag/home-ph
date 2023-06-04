
import { User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { auth, db } from "./firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const UserContext = createContext<{
    user: User | null,
    signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>,
    isAuthenticating: boolean,
    signOut: () => Promise<void>,
    signInWithEmailAndPassword: (email: string, password: string) => Promise<void>
}>({
    user: null,
    signUpWithEmailAndPassword: async () => { },
    isAuthenticating: false,
    signOut: async () => { },
    signInWithEmailAndPassword: async () => { }
});

interface AuthProviderProps {
    children: ReactNode
}

export const FirebaseAuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    const addUserToDatabase = async (email: string | null | undefined, displayName: string | null | undefined) => {
        const name = displayName === null ? email : displayName
        const docRef = await addDoc(collection(db, "users"), {
            name,
            email,
            type: 'users',
            role: 'user',
            createdAt: serverTimestamp()
        }).catch((error) => {

        })
        return docRef
    }

    const signOut = async () => {
        await auth.signOut().then(() => {
            setUser(null)
        })
    }

    const signInWithEmailAndPassword = async (email: string, password: string) => {
        await firebaseSignInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        let unsubscribe;
        const getUserData = async () => {
            unsubscribe = await auth.onAuthStateChanged((currentUser) => {
                setUser(currentUser)
            })
        }
        getUserData()
        return unsubscribe
    }, [])

    const signUpWithEmailAndPassword = async (email: string, password: string) => {
        setIsAuthenticating(true)
        await createUserWithEmailAndPassword(auth, email, password).then((signedUpUser: UserCredential) => {
            const currentUser = signedUpUser.user
            addUserToDatabase(currentUser?.email, currentUser?.displayName).then(() => {
                setUser(signedUpUser.user)
            }).catch((error) => {
                console.log(error)
                setUser(null)
            })
        }).catch(() => {
            setUser(null)
        }).finally(() => {
            setIsAuthenticating(false)
        })
    }

    return (
        <UserContext.Provider value={{ user, signUpWithEmailAndPassword, isAuthenticating, signOut, signInWithEmailAndPassword }}>
            {children}
        </UserContext.Provider>
    )
}
