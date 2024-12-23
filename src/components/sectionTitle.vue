<template>

    <div>
        <span class="text-[#333] text-[14px] font-[600]">
            {{ title }}
        </span>
        <h1 class="md:text-[48px] text-[24px] text-[#333] font-[700] max-w-[530px] leading-[28.8px] my-4 md:my-[24px] md:leading-[57.6px]">
             {{ heading }}
        </h1>
        <p class="md:text-[18px] text-[14px] text-[#333] font-[400] max-w-[530px]">
            {{ text }}
            </p>
    </div>

</template>

<script setup>


const {heading, text } = defineProps({
    title:String,
    heading:String,
    text:String
})
 
</script>