<template>
  <v-app>
    <v-main>
      <router-view
        class="overflow-y-auto absolute"/>
    </v-main>
    
  </v-app>
</template>

<script>
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'App',
  components: { BottomNav },
  data: () => ({
    //
  })
}
</script>

<style>
*{
  padding:0;
  margin:0;
}


.v-main__wrap{
  background: #F2F2F2;
}
</style>