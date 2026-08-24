<template>
    <ul class = "relative top-28 w-56 p-0 border rounded-md max-h-[320px] overflow-y-auto custom-scrollbar">
        <!-- <li @click="selectItem('BTC')" :class="current == 'BTC' ? 'border border-red-300' : ''">Bitcoin</li>
        <li @click="selectItem('ETH')" :class="current == 'ETH' ? 'border border-red-300' : ''">ETH</li>
        <li @click="selectItem('USD')" :class="current == 'USD' ? 'border border-red-300' : ''">USD</li> -->
        <li v-for="(name, key) in items.rates" :key @click=selectItem(name.unit) :class="current == name.unit ? 'border border-red-300' : ''">{{ name.name }}</li>
    </ul>
</template>
<script>
    export default{
        props: {
            setCrypto:{
                type: Function
            },
            items:{
                type:Object
            }
        },
        data(){
            return{
                current: ""
            }
        },
        methods:{
            selectItem(val) {
                this.setCrypto(val);
                this.current = val
                /* console.log(this.current) */
            }
        }
    }
</script>
<style>
    .active{
        border-color: red;
    }
</style>