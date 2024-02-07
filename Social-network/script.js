import { user } from "./data";
const friendsList = document.querySelector(".friend__list");
const friends = user.friends;
friends.forEach((friend) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
  
    <div class="friends-data">
      <img src="${friend.img}" alt="${friend.name}"/>
      <p class="friends-name">
        ${friend.name}  ${friend.lastName}
      </p>
    </div>
  `;
  friendsList.appendChild(listItem);
});
console.log(friends);
