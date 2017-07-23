import count from './countReducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  count
})

export default rootReducer
