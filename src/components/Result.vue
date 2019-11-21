<template>
  <div>
    <h1>This is result: {{result}}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    result(){
      return this.$store.getters.tenResult
    }
  },
}
</script>