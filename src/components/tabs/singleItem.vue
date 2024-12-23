<template>

    <div class="text-[#333]">
        <div>
            <div class="flex flex-col md:flex-row  relative">
                <Steps title="step 1" 
                :text="integrationItems[0]?.text "/>
                <div class="relative max-w-[114px] mt-4 md:mt-0">
                    <img :src="integrationItems[0]?.image " alt="">
                </div>
                
            </div>
            <div v-if="integrationItems[1]" class="mt-[20px] flex flex-col md:flex-row relative">
                <Steps title="step 1" 
                :text="integrationItems[1]?.text "/>
                <div class="relative max-w-[254px] md:-top-14 md:left-8 mt-4 md:mt-0">
                    <img :src="integrationItems[1]?.image"  alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

  const { integrationItems } = defineProps({
    integrationItems:Object
  })



</script>
