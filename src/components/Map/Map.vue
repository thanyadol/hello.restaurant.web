<template>
  <gmap-map
    :center="center"
    :zoom="7"
    :style="css">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"></gmap-marker>
  </gmap-map>
</template>

<script>
/// //////////////////////////////////////
import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_MAP_API_KEY,
    v: 'OPTIONAL VERSION NUMBER'
    // libraries: 'places', //// If you need to use place input
  }
})

export default {
  data () {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [],
      css: 'width: 100%; height: 600px;'
    }
  },
  computed: {
    ...mapGetters({
      restaurants: 'Restaurant/getRestaurant'
    })
  },
  methods: {
    ...mapActions({
      listRestaurant: 'Restaurant/listRestaurant'
    }),

    async onDefaultKeyword () {
      let keyword = 'Bang Sue'
      console.log('calling')
      await this.listRestaurant(keyword)
      console.log(this.restaurants)
    }
  },
  created () {
    let key = process.env.GOOGLE_MAP_API_KEY
    console.log(key)
  },
  mounted () {
    this.onDefaultKeyword()
  }
}
</script>
