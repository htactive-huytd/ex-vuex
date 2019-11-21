<template>
  <div>
    <h1>This is result of Other: {{tenResult}}</h1>
    <h1>This is name result of Other: {{nameResult}}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['tenResult', 'nameResult'])
  },
}
</script>