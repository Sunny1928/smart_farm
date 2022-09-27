<template>
  <Interface>

    <div>
      <div class="weather-section background">
        
      </div>
      <div class="note-section background">
        <div class=" pa-3 d-flex justify-center align-center">
          <h2 class="ma-0"><b>Notifications</b></h2>
          <v-spacer></v-spacer>
          
          <v-dialog
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
                <span class="text-h5">Add new note</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-text-field
                      v-model="editedItem.title"
                      label="Note Title"
                      :rules="[required]">
                    </v-text-field>
                  </v-row>
                  <v-row>
                    <v-autocomplete
                      v-model="editedItem.block_id"
                      :items="blocks"
                      label="block" />
                  </v-row>
                  <v-row>
                    <v-autocomplete
                      v-model="editedItem.small_block_id"
                      :items="small_blocks"
                      label="small block" />
                  </v-row>
                  <v-row>
                    <v-text-field
                      v-model="editedItem.comment"
                      label="comment">
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
                  :disabled="editedItem.name==''">
                  儲存
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <v-dialog
            v-model="dialogShow"
            max-width="600">
            <template v-slot:activator="{ on, attrs }">
            
            </template>

            <v-card
              class="mx-auto"
              max-width="600px"
              outlined>
              
              <v-card-text>
                  
              </v-card-text>
              <v-card-title class="text-h6">
                <v-icon class="mr-4">{{showedItem.icon}}</v-icon>

                {{showedItem.title}}
              </v-card-title>
              <v-card-text>
                <div class="text-overline d-flex">
                    {{showedItem.date}}
                    <v-spacer></v-spacer>
                    <v-icon>mdi-map-marker</v-icon>
                    {{showedItem.block_id}} - {{showedItem.small_block_id}}
                  </div>
                {{showedItem.comment}}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="closeItem">
                  Close
                </v-btn>
                <!-- <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="save">
                  <v-icon>mdi-pencil</v-icon> 
                  Revise
                </v-btn> -->
              </v-card-actions>
            </v-card>
          </v-dialog>
        
        <div v-for="(item, index) in notes">
          <v-card
            flat
            class="mx-auto"
            max-width="600"
            @click= "showItem(item)">
            <v-divider
              v-if="index!=0"
              class="ma-0">
            </v-divider>
            <v-list-item three-line>
              <v-icon class="mr-4">{{item.icon}}</v-icon>
              <v-list-item-content>
                <div class="text-overline">
                  {{item.date}}
                </div>
                <v-list-item-title class="text-h6">
                  {{item.title}}
                </v-list-item-title>
                <v-list-item-subtitle>          
                  {{item.comment}}
                </v-list-item-subtitle>
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
  name: 'HomeView',
  components: {
    Interface
  },
  data() {
    return {
      dialogAdd: false,
      dialogShow: false,
      editedIndex: -1,
      showedItem: {
        title: '',
        block_id: '',
        small_block_id: '',
        comment: '',
      },
      editedItem: {
        title: '',
        block_id: '',
        small_block_id: '',
        comment: '',
      },
      defaultItem: {
        title: '',
        block_id: '',
        small_block_id: '',
        comment: '',
      },
      notes:[
        {
          icon:"mdi-alert-octagram",
          title:"Have A Nice Day in Farm",
          date: "May 24 5:43pm",
          block_id: "farm1",
          small_block_id: "west",
          comment:"Excellent harvest the grapes have a rich flavor and aromaa rich flavor and aroma",
          writer: "Sunny Chuang"
        },
        {
          icon:"mdi-chat",
          title:"Have A Nice Day in Farm",
          date: "May 24 5:43pm",
          block_id: "farm1",
          small_block_id: "west",
          comment:"Excellent harvest the grapes have a rich flavor and aromaa rich flavor and aroma",
          writer: "Sunny Chuang"
        }
      ],
      blocks:[
        'first',
        'second',
        'third',
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
      this.showedItem = Object.assign({}, item)
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
</style>
