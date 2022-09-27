<template>
  <div 
    class="fill-height d-flex justify-center align-center">
    <v-card
      class="ma-5 background"
      flat>
      <v-card-title class="justify-center">
        <v-img
          max-height="100"
          max-width="150"
          src="@/assets/logo.png">
        </v-img>
      </v-card-title>

      <v-tabs
        v-model="tab"
        grow
        class="mb-2">
        <v-tab
          href="#login">
          Log in
        </v-tab>
        <v-tab
          href="#signup">
          Sign up
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          value="login">
          <v-card
            color="basil"
            flat>
            <v-card-text>
              <v-text-field
                class=""
                v-model="account"
                label="Account"
                outlined>
              </v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                outlined>
              </v-text-field>
              <div
                class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  class="pa-5"
                  color="primary"
                  @click="login">
                  Login
                </v-btn>
              </div>
              
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item
          value="signup">
          <v-card
            color="basil"
            flat>
            <v-card-text>
              <v-text-field
                class="mt-2"
                v-model="account"
                label="Account"
                outlined>
              </v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                outlined>
              </v-text-field>
              <v-text-field
                class="mt-2"
                v-model="name"
                label="Name"
                outlined>
              </v-text-field>
              <div
                class="d-flex">
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  class="pa-5"
                  color="primary"
                  @click="register">
                  Sign up
                </v-btn>
              </div>
              
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import authentication from '@/services/authentication'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginView',
  components: {
  },
  setup(){

  },
  data() {
    return {
      tab: 'login',
      account:'',
      password:'',
      name:''
    }
  },
  methods: {
    async register(){
      try {
        const response = await authentication.register({
          account: this.account,
          password: this.password,
          name: this.name
        })
      }catch(error){
        console.log(error)
      }
    },
    async login(){
      const url = window.location.href
      try {
        const response = await authentication.login({
          account: this.account,
          password: this.password
        })

        if(url.includes('?')){
          const linkToken = url.split('?')[1].split('&')[0].split('=')[1]
          console.log(linkToken)
          location.assign("https://access.line.me/dialog/bot/accountLink?linkToken="+linkToken+"&nonce="+response.data)
        }else{
          this.$store.dispatch('setToken', response.data)
          this.$store.dispatch('setUser', this.account)
          this.$router.push({
            name: 'homeView'
          })
        }
        console.log('hi')

      }catch(error){
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.background{
  width: 95%;
  /* border: 3px solid green; */
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
  max-width: 600px;
}
</style>
