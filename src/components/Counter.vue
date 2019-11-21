<template>
  <div>
    <button @click="increment">Increatement</button>
    <button @click="asyncdecrement">Increatement</button>
    <hr>
    <br>
    <input type="text" :value="value" @input="updateValue">
    <p>Text test: {{value}}</p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  computed: {
    value(){
      return this.$store.getters.value;
    }
  },
  methods: {
    ...mapActions(["increment", "asyncdecrement"]),
    ...mapMutations(["decreatement"]),
    updateValue(event){
      // dispatch() cái mà ta có thể kích hoạt sự kiện trong actions
      this.$store.dispatch('updateValue', event.target.value)
    }
  }
};
</script>