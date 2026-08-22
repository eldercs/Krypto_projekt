<template>
    <ul class = "relative top-28 w-56 p-0 border rounded-md">
        <li @click="selectItem('BTC')" :class="current == 'BTC' ? 'border border-red-300' : ''">Bitcoin</li>
        <li @click="selectItem('ETH')" :class="current == 'ETH' ? 'border border-red-300' : ''">ETH</li>
        <li @click="selectItem('USD')" :class="current == 'USD' ? 'border border-red-300' : ''">USD</li>
    </ul>
</template>
<script>
    export default{
        props: {
            setCrypto:{
                type: Function
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
            }
        }
    }
</script>
<style>
    .active{
        border-color: red;
    }
</style>