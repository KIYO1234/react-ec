
// import React from 'react'
import axios from 'axios'
import firebase from 'firebase'

export const ACYNCSEARCHITEM = 'asyncSearchItem'
export const SEARCHITEM = 'searchItem'
export const asyncSearchItem = e => dispatch => {
    axios.get('https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?' , {
      params: {
        applicationId: '1002332757402892625',
        keyword: e.target.previousElementSibling.value
      }
    })
    .then(res => {
        const items = res.data.Items
        console.log(items)
        dispatch({type: SEARCHITEM, items: items})
    })
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