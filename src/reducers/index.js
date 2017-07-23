import count from './people-reducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  count
})

export default rootReducer
