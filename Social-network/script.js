import { user } from "./data";
const friendsList = document.querySelector(".friend__list");
const app = document.getElementById("app");
const spinner = document.querySelector(".spinner");

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
  constructor() {}
  redeneringPosts() {
    const postsContainer = document.querySelector(".posts");
    const posts = user.posts;

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      postElement.innerHTML = `
    <img src="${post.img}" alt="${post.img}" class="user-img" />
    <div class="user-time">
    <span class="user-profile">Sasa Nedic</span>
    <p class="post-date">${post.postDate}</p>
    </div>
    <p class="post-text">${post.postText}</p>

    <div class="likes-comments-container">
      <p class="likes"><span class="like-emoji"><ion-icon name="thumbs-up-outline"></ion-icon></span> ${post.likes.length} Likes</p>
      <p class="comments">${post.comments.length} Comments</p>
    </div>
  `;

      post.comments.forEach((comment) => {
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

      postsContainer.appendChild(postElement);
    });
  }
}
const POST = new Post();
const FRIENDS = new Friends();
setTimeout(function () {
  POST.redeneringPosts();
  FRIENDS.redneringFriends();
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
