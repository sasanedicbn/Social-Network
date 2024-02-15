export class Comments {
  constructor(post) {
    this.post = post;
  }

  addComment(comment) {
    this.post.comments.push(comment);
  }
}
