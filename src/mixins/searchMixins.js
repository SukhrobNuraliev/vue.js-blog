export default {
    computed: {
    filteredBlogs: function(){
        return this.blogs.filter((blog) => blog.title.match(this.search))
    }
}
}