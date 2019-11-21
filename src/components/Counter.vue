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
      this.$store.state.result++;
    },
    decreatement() {
      this.$store.state.result--;
    }
  }
};
</script>