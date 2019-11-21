<template>
  <div>
    <h1>Increate and Decreate</h1>
    <Result></Result>
    <Other></Other>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from './Counter'
import Result from './Result'
import Other from './Other'

export default {
  components:{
    Counter,
    Result,
    Other
  }
}
</script>