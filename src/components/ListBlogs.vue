<template>
  <div id="show-blogs">
      <h1>All Blogs Here</h1>
      <input type="text" v-model="search" placeholder="search box">
      <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
          <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </div>

  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixins'
export default {
  name: 'ListBlogs',
  components: {
  },
  data() {
    return {
        blogs: [],
        search: ''
  }
  },
  methods: {
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>{
            this.blogs = data.body.slice(0,10)
        })
    },
    computed: {
    },
    filters: {
        'to-uppercase': function(value){
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
        }
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
