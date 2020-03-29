<template>
  <div id="show-blogs">
      <Header/>

      <h1>All Blogs Here</h1>
      <input type="text" v-model="search" placeholder="search box">
      <div v-for="blogg in filteredBlogs" :key="blogg" class="single-blog">
          <router-link v-bind:to="'/blog/' + blogg.id"><h2>{{ blogg.title | to-uppercase }}</h2></router-link>
          <article>{{ blogg.content | snipped }}</article>
      </div>

  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixins'
import Header from './Header'

export default {
  name: 'ShowBlogs',
  components: {
      Header
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
        this.$http.get('https://vue-project-blogs.firebaseio.com/posts.json')
        .then((data)=>{
            return data.json()
        }).then((data) => {
            var blogsArray = [];
            for (let key in data){
                data[key].id =key
                blogsArray.push(data[key])
            }
            this.blogs = blogsArray;
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
