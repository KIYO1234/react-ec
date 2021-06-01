
import firebase from 'firebase'

export const LOGIN = 'login'
export const login = () => {
    const google_auth_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(google_auth_provider);    
}

export const SETUSER = 'setUser'
export const asyncSetUser = () => dispatch => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            dispatch({type: SETUSER, loginUser: user})
        }
        else {
          dispatch({type: DELETEUSER})
        }
    })
}

export const LOGOUT = 'logout'
export const DELETEUSER = 'deleteUser'
export const logout = () => dispatch => {
    console.log('logout')
    firebase.auth().signOut()
}

export const SETITEM = 'setItem'
export const setItem = (newItem, uid) => ({
    type: SETITEM, newItem: newItem, uid: uid
})

export const ADDTOCART = 'addToCart'
export const addToCart = (newItem, uid) => dispatch => {
    console.log(newItem);
    console.log(uid);
    console.log('added');
    firebase.firestore().collection(`users/${uid}/cart`).add(newItem).then(() => {
        console.log('done');
        dispatch({
            type: SETITEM,
            newItem: newItem,
            uid: uid
        })
    })
}


// sample
export const SETITEMTOSAMPLE = 'setItemToSample'
export const setItemToSample = (newItem) => ({
    type: SETITEMTOSAMPLE, 
    newItem: newItem
})
export const ADDTOSAMPLE = 'addToSample'
export const addToSample = (newItem) => dispatch => {
    console.log(newItem);
    console.log('added to sample');
    firebase.firestore().collection(`samples`).add(newItem).then(() => {
        console.log('done to sample');
        dispatch({
            type: SETITEMTOSAMPLE,
            newItem: newItem,
        })
    })
}