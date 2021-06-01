
// import {ADDTOCART, SEARCHITEM, SETITEM} from '../actions/index'
import {ADDTOCART, SEARCHITEM, SETITEM} from '../actions/rakuten'
import {SETITEMTOSAMPLE} from '../actions/firebase'

const initialState = {
    items: [],
    selectedItem: '',
    sampleItem: ''
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
        // add to sample
        case SETITEMTOSAMPLE:
            console.log('set item to sample');
            
            console.log(action)
            console.log(action.newItem)
            return {
                sampleItem: action.newItem
            }
        default:
            return state
    }
}