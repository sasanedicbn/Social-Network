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
  renderPosts(posts) {
    const postsContainer = document.querySelector(".posts");
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
      postsContainer.appendChild(postElement);
    });
  }
  renderComments(users) {
    const commentElement = document.createElement("div");
    console.log(users);
    const commentsId = users.dateset.id;
    console.log(commentsId);
    commentElement.setAttribute("data-id", commentsId);

    const postid = postElement.dataset.id;

    const Unique = users.find((user) => console.log(commentsId));
    console.log(Unique);

    users.forEach((comm) => {
      console.log(comm.id);
      comm.comments.forEach((comment) => {
        // console.log(comment);
        const commentElement = document.createElement("div");

        const parentEL = document.querySelector(".posts");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
          <div class="comment-info">
            <img src="${comment.img}" alt="${comment.name}" />
            <p>${comment.name} ${comment.lastName}</p>
          </div> <br>
          <p class="comment-text">${comment.commentText}</p>
        `;
        parentEL.appendChild(commentElement);
      });
    });
  }
}
