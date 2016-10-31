<template>
<div>
  <div>{{ data }}</div>
  <div class="counter" @click="$store.dispatch('incrementAsync')">
    {{ count }}
  </div>
  <div class="counter" @click="$store.dispatch('incrementAsync')">
    {{doubleCount}}
  </div>
  <div class="counter" @click="$store.dispatch('incrementAsync')">
    {{threeCount}}
  </div>
</div>  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    count() {
      return this.$store.state.count
    },
    data(){
      return this.$store.state.data
    },
     ...mapGetters([
      'doubleCount',
      'threeCount'
    ])
    
  }
}
</script>

<style>
.counter {
  cursor: pointer;
  margin: 100px auto;
  border-radius: 3px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
  background-color: #f0f0f0;
  user-select: none;
}
</style>
