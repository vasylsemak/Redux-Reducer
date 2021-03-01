export const AUTHENTICATED = "AUTHENTICATED";
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

export default userReducer
