const blogPosts = {
    posts: [],

    getAll() {
        return this.posts;
    },

    getPost(id) {
        return this.posts[id];
    },

    add(post) {
        this.posts.push(post);
    }
};

module.exports = blogPosts;
