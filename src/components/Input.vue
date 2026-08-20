<template>
    <form @submit.prevent ="convert()">
        <input type="number" min="0" @input="changeAmount($event.target.value)" class="relative bg-white p-2 rounded-md top-12 border text-2xl w-96" placeholder="Geben Sie eine Zahl ein"/>
        <button type="submit" class="relative top-11 left-5 bg-red-500 text-white py-4 px-6 border rounded-sm">Konvertieren</button>
    </form>

</template>
<script>
    export default{
        props: {
            changeAmount: {
                type: Function
            },
            convert:{
                type:Function
            }
        }
    }
</script>