<template>
    <div class="text-[#333] max-w-[400px]">

        <h5 class="text-[20px] font-[700] leading-[30px] mt-6">{{ title }}</h5>

        <p class="text-[14px] font-[400] leading-[24px] mt-4">
           {{ text }}
         </p>


    </div>
</template>


<script setup>

  const { title,text } = defineProps({
    title:String,
    text:String
  })


</script>

