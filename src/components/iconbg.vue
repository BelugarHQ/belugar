<template>

    <div>
        <div class="bg-[#D0EAFB] w-[48px] h-[48px] inline-flex justify-center items-center rounded-full">
            <!-- <component :is="icons" /> -->
            <img :src="icons">
        </div>
    </div>

</template>

<script setup>

 // Adjust path as necessary

const {icons} = defineProps({
    icons:String
})



</script>