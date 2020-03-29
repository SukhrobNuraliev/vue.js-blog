<template>
    <div>
        <ul>
            <li v-for="ninja in ninjas" :key="ninja" v-on:click="ninja.show = !ninja.show">
                <h3>{{ ninja.name }}</h3>
                <h4 v-show="ninja.show">{{ ninja.speciality }}</h4>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
</template>

<script>

export default {
  name: 'Ninjas',
  props: {
      ninjas: {
          type: Array
      }
  },
  components: {
  },
  data() {
    return {
        
}
  },
  methods: {
      deleteNinja: function(){
          this.ninjas.pop()
      },
    },
    beforeCreate(){
        alert('before')
    },
    created(){ alert('created')},
    mounted(){ alert('mounterererere')}
  }

</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
