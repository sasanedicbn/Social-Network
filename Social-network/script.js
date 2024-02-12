import { user } from "./data";
import { User } from "./classes/User";
import { GlobalState } from "./classes/GlobalState";
import { Ux } from "./classes/UX";
const app = document.getElementById("app");
const spinner = document.querySelector(".spinner");
const btn = document.querySelector(".nav__btn");
const USER = new User(user);
const UX = new Ux();
const posts = USER.user.posts;
const friends = USER.getFriends();

const globalState = new GlobalState();
// kreirati zasebne fajlove za class

const post = USER.user.posts;

console.log(USER.getComments());
USER.getComments().forEach((com) => {
  console.log(com);
});
const comm = post.map((post) => post.comments);
console.log(comm);
UX.renderComments(comm);

// user unutar njega (getFriends and getPosts)
class Friends {
  constructor(post) {
    this.post = post;
  }
  //   setfrineds (firends) i renderFriends
}

class Like {
  constructor(like) {
    this.like = like;
  }
  addLike(like) {
    this.like.push(like);
  }
}

const POST = new Post();
const FRIENDS = new Friends();
setTimeout(function () {
  UX.renderPosts(posts);
  UX.renderFriends(friends);
  globalState.setToLoaded();
  //   LikeEventListener();
}, 1000);

// function LikeEventListener() {
//   postsContainer.addEventListener("click", function (event) {
//     if (event.target.classList.contains("likes")) {
//       const postElement = event.target.closest(".post");
//       if (!postElement) return;
//       const postId = postElement.dataset.id;
//       console.log(postId);

//       const post = user.posts.find((post) => post.id === postId);
//       if (!post) return;

//       const LIKE = new Like(post.likes);
//       const currentUser = { name: "Sasa", lastName: "Nedic" };
//       const likeIndex = post.likes.findIndex(
//         (like) =>
//           like.name === currentUser.name &&
//           like.lastName === currentUser.lastName
//       );
//       if (likeIndex === -1) {
//         LIKE.addLike(currentUser);
//       } else {
//         post.likes.splice(likeIndex, 1);
//       }
//       console.log(likeIndex);
//       const currentPostArr = post.likes;
//       console.log(currentPostArr);

//       updateLikeDisplay(postElement, post.likes);
//     }
//   });
// }
// function updateLikeDisplay(postElement, likes) {
//   const likesContainer = postElement.querySelector(".likes");
//   const icons = `<span class="like-emoji"><ion-icon name="thumbs-up-outline"></ion-icon></span>`;

//   if (likes.length === 0) {
//     likesContainer.innerHTML = `${icons} No Likes`;
//     return;
//   }
//   let LikeText = `${icons} ${likes.length} `;
//   if (likes.length > 2) {
//     LikeText += `${likes[0].name} ${likes[0].lastName}, ${likes[1].name} ${
//       likes[1].lastName
//     } and ${likes.length - 2} more`;
//   } else {
//     likes.forEach((like) => {
//       if (like.length === 0) {
//         LikeText += `${like.name} ${like.lastName}`;
//       } else {
//         LikeText += `${like.name} ${like.lastName}, `;
//       }
//     });
//   }
//   likesContainer.innerHTML = LikeText;
// }

function checkLoad() {
  if (globalState.Loaded) {
    app.style.opacity = "10";
    spinner.style.display = "none";
  } else {
    setTimeout(checkLoad, 100);
  }
}
checkLoad();
function addComments(postElement) {
  const postid = postElement.dataset.id;
  const userInput = postElement.querySelector(".comment-input").value.trim();
  if (!userInput) return;

  const post = user.posts.find((post) => post.id === postid);

  console.log(post);
  const newComment = {
    img: "./assets/user.png",
    name: "Sasa",
    lastName: "Nedic",
    commentText: userInput,
  };
  post.comments.push(newComment);

  postsContainer.innerHTML = "";
  //   POST.redeneringPosts();
}

btn.addEventListener("click", function () {
  const menu = document.querySelector(".log__out__container ");
  menu.classList.toggle("showMenu");
});
