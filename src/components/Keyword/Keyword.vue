<template>
  <div class="input-group | mb-1">
    <!-- It's better to be explicit -->
    <!-- Don't forget to bind the property with ":" (we forget all the time!) -->
    <font-awesome-icon :icon="['fas', 'search']" class='mt25 | grey' />
    <input v-on:keyup.enter="updateValue($event.target.value)"
           :value="value" type="text" class="form-control"
           placeholder="Enter keyword" >
  </div>
</template>

<script>
/// //////////////////////////////////////

export default {
  data () {
    return {
    }
  },
  props: [ 'value' ],
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
<style scoped>
.mt25 {
  margin-top: 10px;
}
input {
  border:none;
  background-color: transparent;
  color: #495057;
}
.form-control:focus {
  box-shadow: none;
}
input:focus {
    outline: none;
}
.grey {
  color: gray;
}
.input-group {
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding: 0px 10px;
}
</style>
