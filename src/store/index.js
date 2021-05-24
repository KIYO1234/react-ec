// ここでstoreを作る

import {applyMiddleware, createStore} from 'redux'
// 非同期処理をするためthunkをimport
import thunk from 'redux-thunk'
import firebase from 'firebase'


// ここがstoreのstateになる
// components/App.jsでimport{useSelector} した後の
// const ~~ = useSelector(state => state.~~（今回だとitems）)のstateになる
const initialState = {
    items: [],
    itemId: 1,
    loginUser: ''
}

// reducer(第一引数：state（初期値）, 第二引数：action（actionから渡ってくるもの）)
const ItemsReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'SENDITEM':
            // console.log(state)
            // console.log(action)
            // console.log(state.items)
            return {
                items: action.items
            }
        case 'LOGIN':
            // firebase.auth().onAuthStateChanged(user => 
            //     console.log(user.id)
            // )
            // console.log(state)
            // console.log(action)
            return {
                loginUser: state
            }
        case 'SETUSER':
            console.log(state)
            console.log(action)
            return {
                loginUser: action.loginUser
            }
        default:
            return state
    }
}
// thunkをstoreに引数として追加
const store = createStore(ItemsReducer, applyMiddleware(thunk))

export default store
// storeをimportする必要があるのは src/index.js
// index.js でimport => <Provider></Provider>のpropsに指定して子供に渡す