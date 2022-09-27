<template>
  <Interface>
    <div>
      <v-app-bar
        absolute
        color="white">
        <v-btn
          width="40"
          height="40"
          min-width="0"
          text
          class="mr-3" 
          :to="{
            name: 'plantView'
          }">
          <v-icon>mdi-close-thick</v-icon>
        </v-btn>

        <v-toolbar-title>{{plant.name}}</v-toolbar-title>

        <v-spacer></v-spacer>

        </v-app-bar>
      <!-- <div
        class="background flex">
        <v-btn
          >
          <v-icon>mdi-close-thick</v-icon>
        </v-btn>
        <h1></h1>
      </div> -->
      <v-sheet 
        class="overflow-y-auto background ">
        <!-- 560 135 -->
        <iframe
          width="100%"
          height="215"
          :src="plant.live_stream"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <v-row
          class="d-flex justify-center align-center ma-4">
          <v-col
            class="d-flex justify-center align-center">
            <div
              class="text-center">
              <v-progress-circular
              :rotate="-90"
              :size="70"
              :width="7"
              :value="plant.health"
              color="primary"> 
                {{ plant.health }}
              </v-progress-circular>
              <p
                class="primary--text overline">
                HEALTH
              </p>
            </div>
          </v-col>
          <v-col
            class="d-flex justify-center align-center">
            <div class="text-center">
              <v-progress-circular
              :rotate="-90"
              :size="70"
              :width="7"
              :value="plant.temperature"
              color="primary"> 
                {{ plant.temperature }}
              </v-progress-circular>
              <p
                class="primary--text overline">
                temperature
              </p>
            </div>
          </v-col>
          <v-col
            class="d-flex justify-center align-center">
            <div class="text-center">
              <v-progress-circular
              :rotate="-90"
              :size="70"
              :width="7"
              :value="plant.humidty"
              color="primary"> 
                {{ plant.humidty }}
              </v-progress-circular>
              <p
                class="primary--text overline">
                humidty
              </p>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card
          class="mx-auto text-center"
          max-width="600"
          flat>
          <v-card-text>
            <div class="text-h4 font-weight-thin">
              Temperature Sparkline
            </div>
          </v-card-text>
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="plant.over_temperature"
                color="rgba(255, 255, 255)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth>
                <template v-slot:label="item">
                  {{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card
          class="mx-auto text-center"
          max-width="600"
          flat>
          <v-card-text>
            <div class="text-h4 font-weight-thin">
              Humidity Sparkline
            </div>
          </v-card-text>
          <v-card-text>
            <v-sheet color="rgba(0, 0, 0, .12)">
              <v-sparkline
                :value="plant.over_humidty"
                color="rgba(255, 255, 255)"
                height="100"
                padding="24"
                stroke-linecap="round"
                smooth>
                <template v-slot:label="item">
                  {{ item.value }}
                </template>
              </v-sparkline>
            </v-sheet>
          </v-card-text>

          

        </v-card>
      </v-sheet>
    </div>
  </Interface>
</template>
  
<script>
import Interface from './Interface.vue'

export default {
  name: 'SP',
  components: {
    Interface
  },
  data() {
    return {
      blockChoose:'',
      plant:{
        name:"Plant 1",
        health: 10,
        temperature: 30,
        humidty: 20,
        live_stream: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        over_temperature:[22, 34, 32, 12, 34, 23, 33],
        over_humidty:    [56, 43, 90, 87, 34, 95, 12, 1, 2, 3, 4],
      },
      required: (value) => !!value || 'Required.',
      error:'',
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.background{
  margin: 10px auto;
  width: 95%;
  padding: 5px;
  padding-top: 60px;
  background-color: #fff;
  border-radius: 15px;
  max-width: 600px;
}
</style>
