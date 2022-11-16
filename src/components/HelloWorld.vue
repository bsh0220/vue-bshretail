<template>
  <div>我是helloWorld，{{ name + age + info}}</div>
</template>

<script>
// import { toRefs } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HelloWorld',
  setup(){
    const store = useStore();
    // const name = store.state.name;
    // const age = store.state.age;
    // const info = store.state.info;
    // const name, age ,info = ...toRefs(useStore().state);
    const {name, age ,info} = store.state;
    return{
      name,age,info
    }
  },
  data(){

  }
}
</script>

<style scoped>

</style>
