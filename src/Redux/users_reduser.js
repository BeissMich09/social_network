const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
    //   followed: true,
    //   fullName: { name: "Sergey", surname: "Tsivilev" },
    //   status: "I'm fine!",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
    //   followed: false,
    //   fullName: { name: "Fedya", surname: "Kopyrin" },
    //   status: "I'm dreaming.",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
    //   followed: true,
    //   fullName: { name: "Nastya", surname: "Nazarova" },
    //   status: "Anderer Fehler sind gute Lehrer.",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 4,
    //   photoUrl: "https://www.freeiconspng.com/uploads/man-icon-png-29.png",
    //   followed: false,
    //   fullName: { name: "Valery", surname: "Nazarov" },
    //   status: "Go to home.",
    //   location: { city: "Kaliningrad", country: "Russia" },
    // },
  ],
};

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          console.log("user.id", user.id);
          console.log("action.userId", typeof action.userId);
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export default reducerUsers;
