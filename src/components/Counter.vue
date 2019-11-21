<template>
  <div>
    <button @click="increatement">Increatement</button>
    <button @click="decreatement">Increatement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increatement() {
      this.$store.commit('increateOp',30);
    },
    decreatement() {
      this.$store.state.result--;
    }
  }
};
</script>