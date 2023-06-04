import { FirebaseError } from "firebase/app"

export const getFirebaseErrorMessage = (error: FirebaseError): string => {
    let message = 'An error occured, please try again later.'

    const errorCode = error.code

    switch (errorCode) {
        case 'auth/email-already-exists':
            message = 'This email is already exists.'
            break;
        case 'auth/email-already-in-use':
            message = 'This email is already used.'
            break;
        case 'auth/internal-error':
            message = 'Internal server error.'
            break;

        case 'auth/invalid-email':
            message = 'Input email is invalid'
            break;

        case 'auth/user-not-found':
            message = 'User not found'
            break;
        default:
            message = ('An error occured, please try again later.');
            break;
    }
    return message
}