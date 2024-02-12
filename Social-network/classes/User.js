export class User {
  constructor(user) {
    this.user = user;
  }
  getFriends() {
    return this.user.friends;
    //   ovo treba prosijediti u UX renderFriends
  }
  getPosts() {
    return this.user.posts;
    //   ovo treba prosijediti u UX redenerPosts
  }
  getComments() {
    return this.user.posts;
  }
}
