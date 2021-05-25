
// // import React from 'react'
// import axios from 'axios'
// import firebase from 'firebase'

// // typeに入るのは文字列ではなく変数にするべき（扱いやすい）
// export const ACYNCSEARCHITEM = 'asyncSearchItem'
// // actionオブジェクトではなく「内部でアクションをdispatchする関数」を返す
// // (dispatch) => {} という関数を返すようにする
// // この中で dispatch(action) をすればよい
// export const SEARCHITEM = 'searchItem'
// // API通信用とdispatch用の関数が必要
// // ここのdispatchにdispatch関数が入る（名前は揃ってればなんでも大丈夫）
// export const asyncSearchItem = e => dispatch => {
//     // console.log(dispatch)
//     axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?' , {
//       params: {
//         applicationId: '1002332757402892625',
//         keyword: e.target.previousElementSibling.value
//       }
//     })
//     // ここがreturnのようなもの
//     .then(res => {
//         const items = res.data.Items
//         console.log(items)
//         dispatch({type: SEARCHITEM, items: items})
//     })
// }

// export const LOGIN = 'login'
// export const login = () => {
//     const google_auth_provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(google_auth_provider);    
// }


// export const SETUSER = 'setUser'
// // dispatchにはstore.dispatch()メソッドが入る（名前は揃ってればいい）
// export const asyncSetUser = () => dispatch => {
//     firebase.auth().onAuthStateChanged(user => {
//         // console.log(user);
//         if(user){
//             dispatch({type: SETUSER, loginUser: user})
//         }
//         else {
//           dispatch({type: DELETEUSER})
//         }
//     })
// }

// export const LOGOUT = 'logout'
// export const DELETEUSER = 'deleteUser'
// export const logout = () => dispatch => {
//     console.log('logout')
//     firebase.auth().signOut()
//     // dispatch({type: DELETEUSER})
// }

// export const SETITEM = 'setItem'
// export const setItem = (newItem, uid) => ({
//     type: SETITEM, newItem: newItem, uid: uid
// })

// export const ADDTOCART = 'addToCart'
// export const addToCart = (newItem, uid) => dispatch => {
//     console.log(newItem);
//     console.log(uid);
//     console.log('added');
//     firebase.firestore().collection(`users/${uid}/cart`).add(newItem).then(() => {
//         console.log('done');
//         dispatch({
//             type: SETITEM,
//             newItem: newItem,
//             uid: uid
//         })
//     })
// }

// // export const deleteUser = () => ({type: DELETEUSER})

// // export const logout = () => {
// //     console.log('called');
// //     return async (dispatch) => {
// //         console.log('logout')
// //         await firebase.auth().signOut()
// //         dispatch(logoutAction())
// //     }
// // } 


// // dispatch => {
// //     console.log('logout')
// //     firebase.auth().signOut()
// //     dispatch({type: DELETEUSER})
// // }



// // export const LOGOUTACTION = 'LOGOUTACTION'
// // export const logoutAction = () => {
// //     return {type: LOGOUTACTION}
// // }