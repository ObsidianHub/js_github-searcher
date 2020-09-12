class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.search_container = document.querySelector(".searchContainer");
    this.loader = document.querySelector(".loader");
  }

  // Display profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row justify-content-sm-center justify-content-center">
          <div class="col-md-3 col-sm-4 col-sm-auto col-7 col-auto">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${
              user.html_url
            }" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9 col-sm-12">
            <div class="user-info-header mb-3">
              <span class="badge badge-primary mb-1">Public Repos: ${
                user.public_repos
              }</span>
              <span class="badge badge-secondary mb-1">Public Gists: ${
                user.public_gists
              }</span>
              <span class="badge badge-success mb-1">Followers: ${
                user.followers
              }</span>
              <span class="badge badge-info mb-1">Following: ${
                user.following
              }</span>
            </div>
            <ul class="list-group">
              <li class="list-group-item">Company: ${
                user.company ? user.company : "N/A"
              }</li>
              <li class="list-group-item">Website/Blog: ${
                user.blog ? user.blog : "N/A"
              }</li>
              <li class="list-group-item">Location: ${
                user.location ? user.location : "N/A"
              }</li>
              <li class="list-group-item">Member Since: ${
                user.created_at ? user.created_at : "N/A"
              }</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
}
