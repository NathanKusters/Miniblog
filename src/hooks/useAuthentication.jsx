import { db } from "../firebase/config"; 

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"

import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // cleanup
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true);
        setError(null);

        try {

            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);

            return user;
            
        } catch (error) {

            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;
            // por algum motivo não está funcionado
            if(error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            // por algum motivo não está funcionado
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado";
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde ( A senha precisa conter pelos menos 6 caracteres, ou o E-mail já cadastrado)";
            }

            setLoading(false);
            setError(systemErrorMessage);
        }

    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
    };
};