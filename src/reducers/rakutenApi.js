
// import {ADDTOCART, SEARCHITEM, SETITEM} from '../actions/index'
import {ADDTOCART, SEARCHITEM, SETITEM} from '../actions/rakuten'

const initialState = {
    items: [],
    selectedItem: ''
}

export const rakutenApi = (state=initialState, action) => {
    switch(action.type){
        case SEARCHITEM:
            console.log(action)
            return {
                items: action.items
            }
        case SETITEM:
            console.log(action)
            console.log(action.newItem)
            return {
                selectedItem: action.newItem
            }
        case ADDTOCART:
            console.log(action)
            console.log(action.newItem)
            return {
                selectedItem: action.newItem
            }
        default:
            return state
    }
}