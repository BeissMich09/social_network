let initialState = {
  arrayBest: [
    { id: 1, name: "Nastya" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Sanya" },
  ],
  allFriend: [
    { id: 1, name: "Nastya" },
    { id: 2, name: "Sergey" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Fedos" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Marina" },
    { id: 7, name: "Vasya" },
    { id: 8, name: "Ira" },
    { id: 9, name: "Inna" },
    { id: 10, name: "Kirill" },
  ],
};

const reduerFriends = (state = initialState, action) => {
  return state;
};

export default reduerFriends;
