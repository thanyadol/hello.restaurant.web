<template>
  <div class="form-group">
    <input v-on:keyup.enter="updateValue($event.target.value)" :value="value" type="text" class="form-control" placeholder="Enter keyword" >
  </div>
</template>

<script>
/// //////////////////////////////////////

export default {
  data () {
    return {
    }
  },
  props: ['value'],
  computed: {
  },
  methods: {
    onKeywordChange: function (value) {
      console.log(value)
    },
    updateValue (value) {
      this.$emit('input', value)
    }
  },
  mounted () {
    // console.log(this.value)
  }
}
</script>
