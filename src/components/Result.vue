<template>
  <div>
    <h1>This is result: {{result}}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['result'])
  }
}
</script>