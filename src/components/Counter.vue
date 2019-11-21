<template>
  <div>
    <button @click="increment">Increatement</button>
    <button @click="asyncdecrement">Increatement</button>
    <hr />
    <br />
    <input type="text" v-model="value"/>
    <p>Text test: {{value}}</p>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  methods: {
    ...mapActions(["increment", "asyncdecrement"]),
    ...mapMutations(["decreatement"])
  }
};
</script>