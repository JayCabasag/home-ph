
import { User, UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { Snackbar, Alert } from '@mui/material'

export const UserContext = createContext<{
    user: User | null,
    signUpWithEmailAndPassword: (email: string, password: string) => Promise<void>,
    isAuthenticating: boolean
}>({
    user: null,
    signUpWithEmailAndPassword: async () => { },
    isAuthenticating: false
});

interface AuthProviderProps {
    children: ReactNode
}

export const FirebaseAuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser)
        })
        return unsubscribe
    }, [])

    const signUpWithEmailAndPassword = async (email: string, password: string) => {
        setIsAuthenticating(true)
        await createUserWithEmailAndPassword(auth, email, password).then((signedUpUser: UserCredential) => {
            console.log(signedUpUser)
        }).catch(() => {
            setUser(null)
        }).finally(() => {
            setIsAuthenticating(false)
        })
    }

    return (
        <UserContext.Provider value={{ user, signUpWithEmailAndPassword, isAuthenticating }}>
            {children}
        </UserContext.Provider>
    )
}
