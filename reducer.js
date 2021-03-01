import { combineReducers } from "redux";

export const AUTHENTICATED = "AUTHENTICATED";
export const GOT_ROOMS = "GOT_ROOMS";
export const BOOK_ROOM = "BOOK_ROOM";



const userReducer = (state = {}, action) => {
  switch(action.type) {
    case AUTHENTICATED:
      return action.payload
    case BOOK_ROOM:
      return { ...state, bookedRoom: action.roomId }
    default:
      return state
  }
}

const roomsReducer = (state = [], action) => {
  switch(action.type) {
    case GOT_ROOMS:
      return action.payload
    case BOOK_ROOM:
      const updatedRooms = state.map(room =>
        (room.id === action.roomId) ? { ...room, booked: true } : room)
      return updatedRooms
    default:
      return state
  }
}


const reducer = combineReducers({
  user: userReducer,
  rooms: roomsReducer
})


export default reducer;
