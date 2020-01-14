class GitHub {

    constructor(){
        this.client_ID = 'd0919d360c50fccf5cd2';
        this.client_secret = 'f3228db6e682e937282a77e4c99980d23c0e5e88';
        this.user = 'bertjkald';
        this.apiUrl = "https://api.github.com/users/";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}