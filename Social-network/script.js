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
      <p class="likes">${post.likes.length} Likes</p>
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
