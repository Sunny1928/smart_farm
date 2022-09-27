<template>
  <Interface>
      <div class="background">
        <v-list-item two-line>
          <v-list-item-avatar
            size="80"
            color="grey">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{user.name}}
            </v-list-item-title>
            <v-list-item-subtitle>          
              {{user.permission}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-row
          class="ma-2">
          <v-col>
          <v-btn
            width="100%"
            color="grey lighten-1"
            dark>
            Edit
          </v-btn>
        </v-col>
      <v-col>
          <v-btn
            width="100%"
            color="primary"
            @click="logout">
            Log Out
          </v-btn>
        </v-col>
        </v-row>
      </div>
      <div class="background">
        <div class=" pa-3 d-flex justify-center align-center">
          <h2 class="ma-0"><b>Manage Users</b></h2>
          <v-spacer></v-spacer>
          <!-- <v-dialog
            v-model="dialogAdd"
            max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="primary"
                v-bind="attrs"
                v-on="on">
                <v-icon>mdi-plus-thick</v-icon>
                Add
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <span class="text-h5">Add new user</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-text-field
                      v-model="editedItem.account"
                      label="User Account"
                      :rules="[required]">
                    </v-text-field>
                  </v-row>
                </v-container>

                <v-container v-if="error" class="danger-alert">
                  {{error}}
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close">
                  取消
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                  :disabled="editedItem.account==''">
                  儲存
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
        </div>
        
        <div v-for="(item, index) in users">
          <v-divider
            v-if="index!=0"
            class="ma-0">
          </v-divider>
          <v-card
            flat
            class="mx-auto">
            
            <v-list-item two-line>
              <v-list-item-avatar
                size="80"
                color="grey">
              </v-list-item-avatar>
              <v-list-item-content>
                <!-- <div class="text-overline">
                  {{item.name}}
                </div> -->
                <v-list-item-title class="text-h6">
                  {{item.name}}
                </v-list-item-title>
                <v-list-item-subtitle>          
                  {{item.permission}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
        
      </div>
      <div class="background">
        <div class="pa-3 d-flex justify-center align-center">
          <h2 class="ma-0"><b>Report Problem</b></h2>
          <v-spacer></v-spacer>
        </div>
        <div class="pa-3 d-flex justify-center align-center">
          <v-textarea
            filled
            auto-grow
            label="Input your problem"
            rows="4"
            row-height="30"
            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            shaped>
          </v-textarea>
        </div>
        <div class="mr-3 mb-3 d-flex justify-center align-center">
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            depressed>
            Send
          </v-btn>
        </div>
        
      </div>
      <div class="background">
        <div class="pa-3 d-flex justify-center align-center">
          <h2 class="ma-0"><b>Change Farm</b></h2>
          <v-spacer></v-spacer>
        </div>
        <div class="d-flex justify-center align-center">
          <v-sheet
            flat
            class="mx-auto"
            elevation="0"
            width="100%">
            <v-slide-group
              v-model="model"
              show-arrows>
              <v-slide-item
                v-for="(item, index) in farms"
                :key="index"
                v-slot="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="150"
                  width="150"
                  @click="toggle">
                  <v-row
                    class="ma-0 fill-height align-center justify-center">
                    <div 
                      color="white"
                      class="text-center">
                      <p
                        class="mb-2 white--text font-weight-black"
                        color="white">
                        {{item.name}}
                      </p>
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-share-circle'">
                        </v-icon>
                      </v-scale-transition>
                    </div>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div>
      </div>
  </Interface>
</template>

<script>
import authentication from '@/services/authentication'
import Interface from './Interface.vue'

export default {
  name: 'AccountView',
  components: {
    Interface
},
  data() {
    return {
      model:'',
      user:{
        name: '',
        permission: 'admin'
      },
      users:[
        {
          name: 'Jenny',
          permission: 'admin'
        },
        {
          name: 'Amy',
          permission: 'worker'
        }
      ],
      farms:[
        {
          name: 'Happy farm'
        },
        {
          name: 'Hoppy farm'
        },
        {
          name: 'Happy farm'
        },
        {
          name: 'Happy farm 123'
        },
      ]
    }
  },

  created () {
    // this.$loading(true)
    this.initialize()
    // this.$loading(false)
  },

  methods: {
    async initialize(){
      try {
        const response = await authentication.getUserInfo({
          token: this.$store.state.token,
          account: this.$store.state.user
        })
        // console.log(response)
        this.user.name=response.data[0].name
      }catch(error){
        console.log(error)
      }
    },
    logout(){
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
    this.$router.push({
      name: 'loginView'
    })
  }
  }
}
</script>

<style scoped>
.background{
  margin: 10px auto;
  width: 95%;
  padding: 5px;
  background-color: #fff;
  border-radius: 15px;
  max-width: 600px;
}
</style>
