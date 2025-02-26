import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";


const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, [])


    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Успешный выход из аккаунта')
        }).catch(error => console.log(error))
    }


}

export default AuthDetails;