import { BOOK_ROOM } from './userReducer'

export const GOT_ROOMS = "GOT_ROOMS";

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

export default roomsReducer
