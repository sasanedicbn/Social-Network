export class Ux {
  renderFriends(friends) {
    friends.forEach((friend) => {
      const friendsList = document.querySelector(".friend__list");

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

  renderComments(posts) {
    const postsContainer = document.querySelector(".posts");
    postsContainer.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.setAttribute("data-id", post.id);

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
                <input type="text" placeholder="Write a comment" class="comment-input"></input>
            </div>
        `;
      postsContainer.appendChild(postElement);

      const commentsContainer = document.createElement("div");
      commentsContainer.classList.add("comments-container");

      post.comments.forEach((comment) => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        commentElement.innerHTML = `
                <div class="comment-info">
                    <img src="${comment.img}" alt="${comment.name}" />
                    <p>${comment.name} ${comment.lastName}</p>
                </div>
                <p class="comment-text">${comment.commentText}</p>
            `;
        commentsContainer.appendChild(commentElement);
      });

      postElement.appendChild(commentsContainer);
      this.toggleComments(postElement);
    });
  }
  toggleComments(postElement) {
    const commentsButtons = postElement.querySelector(".comments");
    commentsButtons.addEventListener("click", function () {
      const containerComments = postElement.querySelector(
        ".comments-container"
      );
      if (
        containerComments.style.display === "none" ||
        containerComments.style.display === ""
      ) {
        containerComments.style.display = "block";
      } else {
        containerComments.style.display = "none";
      }
    });
  }
  searchFriends(list, friends) {
    list.innerHTML = "";
    friends.forEach((friend) => {
      const liFriend = document.createElement("div");
      liFriend.classList.add("show-friends");
      liFriend.innerHTML = `<img src="${friend.img}">
      <p class="person__name">${friend.name} ${friend.lastName}</p>
      `;
      list.appendChild(liFriend);
    });
  }
}
