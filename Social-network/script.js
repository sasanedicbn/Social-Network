import { user } from "./data";
import { User } from "./classes/User";
import { GlobalState } from "./classes/GlobalState";
import { Comments } from "./classes/Comments";
import { Ux } from "./classes/UX";
const app = document.getElementById("app");
const spinner = document.querySelector(".spinner");
const btn = document.querySelector(".nav__btn");

const globalState = new GlobalState();
const USER = new User(user);
const UX = new Ux();
const COMMENTS = new Comments(user);

// console.log("comments", COMMENTS);
const friends = USER.getFriends();

const comments = USER.getComments();

UX.renderComments(comments);
// const addComment = COMMENTS
// console.log(COMMENTS.post.posts);
console.log(USER.getLikes());

class Friends {
  constructor(post) {
    this.post = post;
  }
  //   setfrineds (firends) i renderFriends
}

function addComments() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const postElement = event.target.closest(".post");
      if (postElement) {
        const postId = postElement.dataset.id;
        const userInput = postElement
          .querySelector(".comment-input")
          .value.trim();
        const newComment = {
          img: "./assets/user.png",
          name: "Sasa",
          lastName: "Nedic",
          commentText: userInput,
        };

        USER.addComment(newComment, postId);

        UX.renderComments(USER.getComments());
      }
    }
  });
}
function addLikes() {
  document.addEventListener("click", function (event) {
    const likeButton = event.target.closest(".like-emoji");
  });
}
addLikes();
addComments();
console.log(comments);

setTimeout(function () {
  // UX.renderPosts(posts);
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
