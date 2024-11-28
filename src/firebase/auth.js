import { auth } from '../firebase/firebase'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, updatePassword, sendEmailVerification } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password) 
};

export const doSigninWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password) 
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signinWithPopup(auth, provider)

    return result
}

export const doSignOut = () => {
    return auth.signOut();
}

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentuser, password);
// }

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentuser,{
//         url: `${window.location.origin}/`
//     })
// }