<template>
  <div>
    <h1>This is result of Other: {{result}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    result(){
      return this.$store.state.result
    }
  },
}
</script>