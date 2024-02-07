import { user } from "./data";
const friendsList = document.querySelector(".friend__list");
const friends = user.friends;
friends.forEach((friend) => {
  const listItem = document.createElement("li");
});
console.log(friends);
