export class User {
  constructor(user) {
    this.user = user;
  }
  getFriends() {
    return this.user.friends;
  }
  getPosts() {
    return this.user.posts;
  }
  getComments() {
    return this.user.posts;
  }
  addComment(comment, id) {
    const currentPost = this.getPosts().find((post) => post.id === id);
    if (!currentPost) return;
    currentPost.comments.push(comment);
  }
  getLikes() {
    return this.user.posts;
  }
  addLike(like, id) {
    const currentLike = this.getLikes().find((like) => like.id === id);
    if (!currentLike) return;
    currentLike.likes.push(like);
  }
  removeLike(id) {
    console.log(id);
    const currentLike = this.getLikes().find((like) => like.id === id);
    if (!currentLike) return;
    currentLike.likes.pop();
  }
}
