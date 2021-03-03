import reducerProfile, {
  addPostActionCreator,
  deletePost,
} from "./profile_reducer";

let state = {
  postData: [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "Love me", likes: 10 },
    { id: 3, message: "Я хочу найти работу", likes: 14 },
  ],
};

test("length of posts should be incremented", () => {
  let action = addPostActionCreator("lesson 89");

  let newState = reducerProfile(state, action);

  expect(newState.postData.length).toBe(4);
});

test("message of new posts should be correct", () => {
  let action = addPostActionCreator("lesson 89");

  let newState = reducerProfile(state, action);

  expect(newState.postData[3].message).toBe("lesson 89");
});

test("after deleting length of post should be decrement", () => {
  let action = deletePost(1);

  let newState = reducerProfile(state, action);

  expect(newState.postData.length).toBe(2);
});
