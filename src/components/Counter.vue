<template>
  <div>
    <button @click="increment">Increatement</button>
    <button @click="asyncdecrement">Increatement</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions(["increment", "asyncdecrement"]),
    ...mapMutations(["decreatement"])
  }
};
</script>