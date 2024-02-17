import { user } from "./data";
import { User } from "./classes/User";
import { GlobalState } from "./classes/GlobalState";
import { Ux } from "./classes/UX";
const app = document.getElementById("app");
const spinner = document.querySelector(".spinner");
const btn = document.querySelector(".nav__btn");
const searchInput = document.querySelector(".search__bar__input");
const resultFriends = document.querySelector(".search__results");

const globalState = new GlobalState();
const USER = new User(user);
const UX = new Ux();

const friends = USER.getFriends();

const comments = USER.getComments();

UX.renderComments(comments);

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
      const isLikedByCurrentUser = postElement.classList.contains("liked");
      //ako imma id svoj  onda lajk ako ne onda dislike
      // const likedUser = USER.getLikes().forEach((like) => like.id);

      if (!postId) {
        console.log("da");
        postElement.classList.add("liked");
        USER.addLike({ name: "Sasa", lastname: "Nedic", id: postId }, postId);
      } else {
        console.log("ne");
      }

      // if (USER.addLike().includes())
      // if (isLikedByCurrentUser) {
      //   postElement.classList.remove("liked");
      //   USER.removeLike(postId);
      // } else {
      //   postElement.classList.add("liked");
      //   USER.addLike({ name: "Sasa", lastname: "Nedic", id: }, postId);
      // }

      // console.log(USER.getLikes());
      UX.renderComments(USER.getComments());
    }
  });
}

setTimeout(function () {
  UX.renderFriends(friends);
  globalState.setToLoaded();
  addLikes();
  addComments();
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
searchInput.addEventListener("input", function () {
  const friends = USER.getFriends();
  const searchBar = searchInput.value.toLowerCase();
  const friend = friends.filter(({ name, lastName }) => {
    const fullName = `${name} ${lastName}`.toLowerCase();
    return fullName.toLowerCase().includes(searchBar);
  });
  if (friend) {
    UX.searchFriends(resultFriends, friend);
    resultFriends.style.display = "block";
  }
  if (searchInput.value.length === 0) {
    resultFriends.style.display = "none";
  }
});

// visina i sirina sa transform scale (i paddding)
// sve to mora biti absolute
