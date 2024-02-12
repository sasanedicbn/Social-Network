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

setTimeout(function () {
  UX.renderPosts(posts);
  UX.renderFriends(friends);
  globalState.setToLoaded();
  //   LikeEventListener();
}, 1000);

function checkLoad() {
  if (globalState.Loaded) {
    app.style.opacity = "10";
    spinner.style.display = "none";
  } else {
    setTimeout(checkLoad, 100);
  }
}
checkLoad();
// function addComments(postElement) {
//   const postid = postElement.dataset.id;
//   const userInput = postElement.querySelector(".comment-input").value.trim();
//   if (!userInput) return;

//   const post = user.posts.find((post) => post.id === postid);

//   console.log(post);
//   const newComment = {
//     img: "./assets/user.png",
//     name: "Sasa",
//     lastName: "Nedic",
//     commentText: userInput,
//   };
//   post.comments.push(newComment);

//   postsContainer.innerHTML = "";
//   //   POST.redeneringPosts();
// }

btn.addEventListener("click", function () {
  const menu = document.querySelector(".log__out__container ");
  menu.classList.toggle("showMenu");
});
