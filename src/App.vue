<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue';
import { onMounted } from 'vue'
import Selector from './components/Selector.vue';

import axios from 'axios';
const items = ref({}) 

const fetchCryptoData = async () => {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/exchange_rates")
    const data = await response.json()
    items.value = data 
    console.log(data)
  } catch (error) {
    console.error('Error', error)
  }
}
onMounted(() => {
  fetchCryptoData()
})

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
  console.log(cryptoErst.value)
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
            "https://api.coingecko.com/api/v3/exchange_rates"
        );
        const myArray = []
        myArray.push(cryptoErst.value, cryptoZwei.value)

        const foundElements = myArray.map(cryptoName => {
            const lowerName = cryptoName.toLowerCase(); 

            const fullCryptoData = response.data.rates[lowerName]; 
            
  
            if (fullCryptoData) {
              /* console.log(cryptoErst.value) */
                const { name, value } = fullCryptoData;
                return { name, value };
            }
            
            return null; 
        }).filter(item => item !== null);
        if(foundElements[0] && cryptoErst.value != "BTC"){
          const kalkulateResult = (1 / (foundElements[0].value * amount.value)) * foundElements[1].value
          result.value = kalkulateResult
          error.value = ""
          /* console.log(result.value) */
          return result
        }
        else if(foundElements[0] && cryptoErst.value == "BTC"){
          const kalkulateResult = foundElements[1].value * amount.value
          result.value = kalkulateResult
          error.value = ""
          /* console.log(kalkulateResult) */
          return result
          /* console.log(kalkulateResult) */
        }
        /* console.log(foundElements) */
        /* console.log(kalkulateResult) */
        /* console.log(cryptoZwei.value) */
       /*  console.log(response.data); */
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
  <div class="flex mx-auto my-0 w-auto justify-around gap-x-20">
    <Selector :setCrypto="setCryptoErst" :items="items"></Selector>
    <Selector :setCrypto="setCryptoZwei" :items="items"></Selector>
  </div>
  <div class="flex justify-center items-center relative -top-8 max-[1100px]:top-40">
    <div class="bg-white px-10 py-5 w-max rounded-lg shadow-md">
      <h2>{{ error }}</h2>
      <h2 v-show="error == ''">Wechselkurs:  {{ result }}</h2>
    </div>
  </div>
</template>

<style scoped>

</style>
