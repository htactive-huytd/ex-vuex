<template>
  <div>
    <button @click="increatement">Increatement</button>
    <button @click="decreatement">Increatement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    increatement() {
      this.$store.commit("increateOp", 30);
    },
    ...mapMutations(["decreatement"])
  }
};
</script>