import { user } from "./data";
const friendsList = document.querySelector(".friend__list");

class Post {
  constructor(post) {
    this.post = post;
  }
  redneringFriends() {
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
  }
}
class Friends {
  constructor() {}
}

// console.log(friends);

// class Post {
//   constructor(post) {
//     this.post = post;
//   }
//   likePost(like) {
//     this.post.likes.push(like);
//   }
// }
// const POST = new Post(user);
// console.log(POST.likePost());
// console.log(POST.post.posts);
// const likes = document.querySelector(".likes");
// const postsAll = POST.post.posts;
// likes.addEventListener("click", function (event) {
//   postsAll.forEach((post) => console.log(post));
//   console.log("ziv");
// });

// classa user
//kad prodje setTim priakzati
//class visitingprofile fname lname
//
