<template>
  <Interface>
    <div>
      <div class="d-flex justify-center align-center background">
        <!-- <div class="icon-btn">
          <v-icon>mdi-chevron-left</v-icon>
        </div>
        <v-autocomplete
          v-model="blockChoose"
          :items="blocks"
          label="block" />
        <div class="icon-btn">
          <v-icon>mdi-chevron-right</v-icon>
        </div> -->
        <v-card
          flat>
          <v-tabs
            background-color="white"
            show-arrows>
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

            <v-tab
              v-for="item in blocks"
              :href="'#tab-' + item">
                {{item}}
            </v-tab>
          </v-tabs>
        </v-card>
      </div>
      <div class="background">
        <!-- <div class=" pa-3 d-flex justify-center align-center">
          
        </div> -->
        <div 
          v-for="(item,index) in plants">
          <v-divider
            v-if="index!=0"
            class="ma-0">
          </v-divider>
          
          <v-card
            flat
            class="mx-auto"
            :to="{
              name: 'SP'
            }">
            
            <v-list-item three-line>
              <!-- <v-img
                tile
                max-width="150"
                :src = item.img
                class="mr-2"
              ></v-img> -->
              <v-icon
                class="mr-3"
                size="100"
                color="primary">
                mdi-sprout
              </v-icon>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  <b>{{item.name}}</b>
                </v-list-item-title>
                <div
                  class="d-flex justify-end align-center">
                  <v-progress-circular
                  :rotate="-90"
                  :size="70"
                  :width="7"
                  :value="item.health"
                  color="primary"
                  class="text-center"> 
                    {{ item.health }}
                  </v-progress-circular>
                </div>
                
                <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
              </v-list-item-content>

              
            </v-list-item>

          </v-card>
        
        </div>

      </div>
    </div>
  </Interface>
</template>
  
<script>
import Interface from './Interface.vue'

export default {
  name: 'PlantView',
  components: {
    Interface
  },
  data() {
    return {
      blockChoose:'',
      plants:[
        {
          name:"Plant 1",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9DwgouoSDVcRKmiO9Nu8EYFR72ewP1xz9gEuKgL&s",
          health: 10,
          temperature: 30,
          humidty: 200,
        },
        {
          name:"Plant 2",
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbh9DwgouoSDVcRKmiO9Nu8EYFR72ewP1xz9gEuKgL&s",
          health: 10,
          temperature: 30,
          humidty: 200,
        },
      ],
      blocks:[
        'first',
        'second',
        'third',
        'forth',
        'fifth'
      ],
      small_blocks:[
        'west',
        'east',
        'south',
        'north',
      ],
      required: (value) => !!value || 'Required.',
      error:'',
    }
  },
  methods: {
    showItem(item){
      this.editedIndex = this.notes.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogShow = true
    },

    // editItem(item){
    //   this.editedIndex = this.customers.indexOf(item)
    //   this.editedItem = Object.assign({}, item)
    //   this.dialog = true
    // },
    closeItem(){
      this.dialogShow = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.error=""
    },
    close(){
      this.dialogAdd = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
      this.error=""
    },
    save(){

    }
  },
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
.icon-btn{
  padding: 10px;
  /* background: white */
}
</style>
