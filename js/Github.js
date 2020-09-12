class Github {
  constructor() {
    this.client_id = "3c40bdf6b44d98324f14";
    this.client_secret = "12dcd64f203af8b77d0cbbc0fa3a528da63ca80e";
  }

  // Get user by name
  getUser(name) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      )
        .then((res) => res.json())
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }
}
