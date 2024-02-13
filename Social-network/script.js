import { user } from "./data";
import { User } from "./classes/User";
import { GlobalState } from "./classes/GlobalState";
import { Ux } from "./classes/UX";
const app = document.getElementById("app");
const spinner = document.querySelector(".spinner");
const btn = document.querySelector(".nav__btn");

const globalState = new GlobalState();
const USER = new User(user);
const UX = new Ux();

const posts = USER.user.posts;
const friends = USER.getFriends();

const comments = USER.getComments();

UX.renderComments(comments);

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
