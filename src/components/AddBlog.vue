<template>
  <div id="add-blog">
      <Header/>
    <h2>Add anew Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog-Title:</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label for="">Blog Content</label>
        <textarea name="" id="" cols="30" v-model.lazy="blog.content" rows="10"></textarea>
               <div id="checkboxes">
            <label for="">Ninjas</label>
            <input type="checkbox" name="" value="ninjas" v-model="blog.categories" id="">
            <label for="">Humans</label>
            <input type="checkbox" name="" value="hunans" v-model="blog.categories" id="">
            <label for="">Alians</label>
            <input type="checkbox" name="" value="alians" v-model="blog.categories" id="">
            <label for="">Jins</label>
            <input type="checkbox" name="" value="jins" v-model="blog.categories" id="">
        </div>
        <select v-model="blog.author" name="" id="">
            <option v-for="auther in authors" :key="auther">{{ auther }}</option>
        </select>
        <p>Author: {{ blog.author }}</p>
        <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div id="preview">
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content </p>
            <p>{{blog.content}}</p>
            
            <p>Blog categories</p>
            <ul>
            <li v-for="cat in blog.categories" :key="cat">{{ cat }}</li>
            </ul>
        </div>
    <div v-if="submitted">
        <h3>thanks for addign a blog</h3>
    </div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'AddBlog',
  components: {
      Header
  },
  data() {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
            author: ''
        },
        authors: ['sukhrob', 'the net ninja', 'traversy media'],
        submitted: false
  }
  },
  methods: {
      post: function(){
          this.$http.post('https://vue-project-blogs.firebaseio.com/posts.json',this.blog)
          .then((data)=> {
              console.log(data);
              this.submitted =true 
              })
      }
    }
  
}

</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
