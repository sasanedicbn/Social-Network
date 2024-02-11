import { user } from "./data";
const friendsList = document.querySelector(".friend__list");
const app = document.getElementById("app");
const spinner = document.querySelector(".spinner");
const postsContainer = document.querySelector(".posts");

export class GlobalState {
  Loaded;
  constructor() {
    this.Loaded = false;
  }
  setToLoaded() {
    this.Loaded = true;
  }
}
const globalState = new GlobalState();

class Friends {
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
class Post {
  constructor(post) {
    this.post = post;
  }

  redeneringPosts() {
    const posts = user.posts;
    posts.forEach((post) => {
      const postId = post.id;
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.setAttribute("data-id", postId);

      postElement.innerHTML = `
    <img src="${post.img}" alt="${post.img}" class="user-img" />
    <div class="user-time">
    <span class="user-profile">Sasa Nedic</span>
    <p class="post-date">${post.postDate}</p>
    </div>
    <p class="post-text">${post.postText}</p>

    <div class="likes-comments-container">
      <p class="likes"><span class="like-emoji"><ion-icon name="thumbs-up-outline"></ion-icon></span> ${post.likes.length} </p>
      <p class="comments">${post.comments.length} Comments</p>
    </div>
    <div class="comment-info current-user">
        <img src="${post.img}" alt="${post.name}" />
        <input type="text" placeholder="Write a comment"class="comment-input"></input>
      </div>
  `;

      const commentInput = postElement.querySelector(".comment-input");

      commentInput.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          addComments(postElement);
        }
      });

      const commentsToggle = postElement.querySelector(".comments");

      commentsToggle.addEventListener("click", function () {
        const comments = postElement.querySelectorAll(".comment");
        comments.forEach((commentInfo) => {
          commentInfo.classList.toggle("hiddenComments");
          addComments(postElement);
        });
      });
      //   console.log(post);
      //   addComments(postElement);

      post.comments.forEach((comment) => {
        // console.log(comment);
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        commentElement.innerHTML = `
      
      <div class="comment-info">
        <img src="${comment.img}" alt="${comment.name}" />
        <p>${comment.name} ${comment.lastName}</p>
      </div> <br>
      <p class="comment-text">${comment.commentText}</p>
    `;

        postElement.appendChild(commentElement);
      });
      updateLikeDisplay(postElement, post.likes);

      postsContainer.appendChild(postElement);
    });
  }
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
  POST.redeneringPosts();
  FRIENDS.redneringFriends();
  globalState.setToLoaded();
  LikeEventListener();
}, 1000);

function LikeEventListener() {
  postsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("likes")) {
      const postElement = event.target.closest(".post");
      if (!postElement) return;
      const postId = postElement.dataset.id;
      console.log(postId);

      const post = user.posts.find((post) => post.id === postId);
      if (!post) return;

      const LIKE = new Like(post.likes);
      const currentUser = { name: "Sasa", lastName: "Nedic" };
      const likeIndex = post.likes.findIndex(
        (like) =>
          like.name === currentUser.name &&
          like.lastName === currentUser.lastName
      );
      if (likeIndex === -1) {
        LIKE.addLike(currentUser);
      } else {
        post.likes.splice(likeIndex, 1);
      }
      console.log(likeIndex);
      const currentPostArr = post.likes;
      console.log(currentPostArr);

      updateLikeDisplay(postElement, post.likes);
    }
  });
}
function updateLikeDisplay(postElement, likes) {
  const likesContainer = postElement.querySelector(".likes");
  const icons = `<span class="like-emoji"><ion-icon name="thumbs-up-outline"></ion-icon></span>`;

  if (likes.length === 0) {
    likesContainer.innerHTML = `${icons} No Likes`;
    return;
  }
  let LikeText = `${icons} ${likes.length} `;
  if (likes.length > 2) {
    LikeText += `${likes[0].name} ${likes[0].lastName}, ${likes[1].name} ${
      likes[1].lastName
    } and ${likes.length - 2} more`;
  } else {
    likes.forEach((like) => {
      if (like.length === 0) {
        LikeText += `${like.name} ${like.lastName}`;
      } else {
        LikeText += `${like.name} ${like.lastName}, `;
      }
    });
  }
  likesContainer.innerHTML = LikeText;
}

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
  POST.redeneringPosts();
}

const btn = document.querySelector(".nav__btn");
btn.addEventListener("click", function () {
  const menu = document.querySelector(".log__out__container ");
  menu.classList.toggle("showMenu");
});
