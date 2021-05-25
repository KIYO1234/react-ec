
// 大文字（type名）でimportする：action.typeで条件分岐させたいから
// reducerではメソッド（キャメルケース）を取ってくるわけではない
// import {SETUSER, DELETEUSER} from '../actions/index'
import {SETUSER, DELETEUSER} from '../actions/firebase'

const initialState = {
    loginUser: '',
}

export const firebase = (state=initialState, action) => {
    switch(action.type){
        case SETUSER:
            console.log(action)
            return {
                loginUser: action.loginUser
            }
        case DELETEUSER:
            // console.log(state);
            console.log(action)
            console.log('deleted')
            return {
                loginUser: ''
            }
        // case LOGOUTACTION:
        //     return {
        //         loginUser: ''
        //     }
        
        default:
            return state
    }
}