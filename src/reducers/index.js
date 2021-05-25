
import {combineReducers} from 'redux'
import {rakutenApi} from './rakutenApi'
import {firebase} from './firebase'

export default combineReducers({rakutenApi, firebase})