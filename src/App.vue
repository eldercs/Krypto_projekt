<script setup>
import Input from './components/Input.vue';
import Selector from './components/Selector.vue';


</script>

<template>
  <h1 class="text-center text-8xl text-yellow-300 mx-auto">CRYPTO</h1>
  <Input></Input>
  <div class="flex mx-auto my-0 w-auto justify-around">
    <Selector></Selector>
    <Selector></Selector>
  </div>
</template>

<style scoped>

</style>
