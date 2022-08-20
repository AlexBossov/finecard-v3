<template>
  <div>
    <Navbar/>
    <v-card
        class="mx-auto text-center"
        color="#1E88E5"
        dark
        max-width="150vh"
        min-height="75vh"

    >
      <v-card-text><h1>Количество клиентов</h1></v-card-text>

      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)" elevation="5" rounded>
          <v-sparkline
              :labels="labels"
              :value="value"
               color="white"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              :show-labels="true"
              auto-draw
              padding="12"
          >
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="text-h4 font-weight-thin">
          Статистика за последнюю неделю
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

import Navbar from "@/components/navbar/Navbar";

export default {
  name: "Statistics",
  components: {Navbar},
  data: () => ({
    labels: [
      '18.08',
      '19.08',
      '20.08',
      '21.08',
      '22.08',
      '23.08',
      '24.08',
    ],
    value: [
      15,
      20,
      3,
      14,
      5,
      20,
      26,
    ],
    width: 3,
    radius: 10,
    padding: 2,
    lineCap: 'round',
    gradient: gradients[5],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: true,
  }),
}
</script>

<style scoped>

</style>