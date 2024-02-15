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
    if (likeButton) {
      const postElement = likeButton.closest(".post");
      const postId = postElement.dataset.id;
      console.log(postElement);

      let isLiked = postElement.classList.contains("liked");
      console.log(isLiked);

      if (isLiked) {
        postElement.classList.remove("liked");
        USER.removeLike(postId);
      } else {
        postElement.classList.add("liked");
        USER.addLike({ name: "Sasa", lastname: "Nedic" }, postId);
      }

      console.log(postElement);

      UX.renderComments(USER.getComments());
    }
  });
}
addLikes();
addComments();
console.log(comments);

setTimeout(function () {
  UX.renderFriends(friends);
  globalState.setToLoaded();
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

btn.addEventListener("click", function () {
  const menu = document.querySelector(".log__out__container ");
  menu.classList.toggle("showMenu");
});
