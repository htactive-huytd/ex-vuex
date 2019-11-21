<template>
  <div>
    <button @click="increment">Increatement</button>
    <button @click="decreatement">Increatement</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions(["increment"]),
    ...mapMutations(["decreatement"])
  }
};
</script>