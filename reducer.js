import { combineReducers } from "redux"
import userReducer from './userReducer'
import roomsReducer from './roomsReducer'

const reducer = combineReducers({
  user: userReducer,
  rooms: roomsReducer
})

export default reducer;
