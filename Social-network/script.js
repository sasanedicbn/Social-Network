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
