let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi, how are you?", likes: 15 },
      { id: 2, message: "Love me", likes: 10 },
      { id: 3, message: "Я люблю Сережу", likes: 45 },
      { id: 4, message: "Я хочу найти работу", likes: 14 }
    ]
  },
  dialoguesPage: {
    userArr: [
      { id: 1, name: "Nastya" },
      { id: 2, name: "Sergey" },
      { id: 3, name: "Sanya" },
      { id: 4, name: "Fedos" },
      { id: 5, name: "Valera" }
    ],
    messageArr: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I'm fine" },
      { id: 4, message: "Go home" },
      { id: 5, message: "I go" }
    ]
  }
};

export default state;
