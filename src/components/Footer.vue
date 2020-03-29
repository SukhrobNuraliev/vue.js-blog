<template>

      <footer>
          <p>{{ copyright }} Designed by {{ title }}</p>
      </footer>

</template>

<script>
import { bus } from '../main'
export default {
  name: 'Footer',
  props: {
      title: String
  },
  components: { 
  },
  data() {
    return {
        copyright: "Copyright 2020 | Sukhrob Nuraliev"
    }
  },
  methods: {

    },
    created(){
        bus.$on('titleChange',(data) => this.title =data)
    }
  }

</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgray;
    text-align: center;
}
</style>
