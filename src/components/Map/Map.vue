<template>
  <gmap-map
    :center="center"
    :zoom="15"
    :style="css">
    <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" >
      {{infoContent}}
    </gmap-info-window>
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      @click="onInfoClick(m)"></gmap-marker>
  </gmap-map>
</template>

<script>
/// //////////////////////////////////////
import * as VueGoogleMaps from 'vue2-google-maps'
import { mapGetters } from 'vuex'
import Vue from 'vue'

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
      center: { lat: 10.3157, lng: 123.8854 },
      markers: [],
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      css: 'width: 100%; height: 400px;'
    }
  },
  computed: {
    ...mapGetters({
      restaurants: 'Restaurant/getRestaurant'
    })
  },
  methods: {
    onInfoClick: function (marker) {
      this.infoPosition = marker.position
      this.infoContent = marker.title
      if (this.infoCurrentKey === marker.id) {
        this.infoOpened = !this.infoOpened
      } else {
        this.infoOpened = true
        this.infoCurrentKey = marker.id
      }
    },
    mappingMarkerAndCenter: function (restaurants) {
      this.markers = restaurants.map((post) => {
        return { position: { lat: post.lat, lng: post.lng }, title: post.name, id: post.id }
      })

      try {
        this.center = this.markers[0].position
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    // let key = process.env.GOOGLE_MAP_API_KEY
    // console.log(key)
  },
  watch: {
    restaurants (newVal, oldVal) {
      this.mappingMarkerAndCenter(this.restaurants)
    }
  },
  mounted () {
    this.mappingMarkerAndCenter(this.restaurants)
  }
}
</script>
