<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue';
import Selector from './components/Selector.vue';

import axios from 'axios';


const amount = ref(0)
const cryptoErst = ref("")
const cryptoZwei = ref("")
const error = ref("")
const result = ref(0)
function changeAmount(val){
  amount.value = val
}
function setCryptoErst(val){
  cryptoErst.value = val
}
function setCryptoZwei(val){
  cryptoZwei.value = val
}
async function convert(){
  if(amount.value <= 0){
    error.value = "Bitte geben Sie einen Wert größer als Null ein"
    return;
  }
  else if(cryptoErst.value == cryptoZwei.value){
    error.value = "Wählen Sie 2 verschiedene Währungen aus"
    return;
  }
  else if(cryptoErst.value == "" || cryptoZwei.value == ""){
    error.value = "Wählen Sie Währungen aus"
    return;
  }
  try {
        const response = await axios.get(
            "https://api.coinconvert.net/convert/btc/usd?amount=1"
        );

        console.log(response.data);
  } 
  catch (error) {
    console.error(error);
  }  
  error.value = ""
    
}



/* test(); */
</script>

<template>
  <h1 class="text-center text-8xl text-yellow-300 mx-auto">CRYPTO</h1>
  <Input :changeAmount="changeAmount" :convert="convert">{{ amount }}</Input>
  <!-- <p>{{ amount }}</p> -->
   <!-- <button @click="test()" class="relative top-11 left-5 bg-red-500 text-white py-4 px-6 border rounded-sm">Click</button> -->
  <div class="flex mx-auto my-0 w-auto justify-around">
    <Selector :setCrypto="setCryptoErst"></Selector>
    <Selector :setCrypto="setCryptoZwei"></Selector>
  </div>
  <h2>{{ error }}</h2>
  <h2>{{ result.value }}</h2>
  <!-- <h2>{{ cryptoZwei }}</h2> -->
</template>

<style scoped>

</style>
