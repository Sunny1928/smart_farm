<template>
    <div 
      v-if="!$store.state.isUserLoggedIn"
      class="text-center">
      You have not login in yet
    </div>
    
    <div v-else>
      <slot>
        No slot content defined.
      </slot>
      <BottomNav/>
    </div>
  
</template>
  
<script>
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'Interface',
  components: {
    BottomNav
},
  data() {
    return {
    }  
  }
}
</script>

<style scoped>
.background{
  margin: 10px;
  padding: 5px;
  padding-top: 60px;
  background-color: #fff;
  border-radius: 15px;
  /* width:100%; */
  max-width: 600px;
}
</style>
