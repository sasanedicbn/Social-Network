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
}
