<template>
    <div class=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-[60px]">
        <div v-for="(i,index) in integrationItems" class="" @click="navigateTo(`/integration/${index}`)">
            <div  class="md:w-[340px] cont bg-[#F4F7FA] flex ">

                <div v-html="i.icon"></div>
                <span class="text-[#333] font-[600] text-[24px] leading-8 ml-2">{{ i.text }}</span>
               
            </div>
        </div>

    </div>

    <!-- {{ integrationItems }} -->
</template>



<script setup>

  const { integrationItems } = defineProps({
    integrationItems:Object
  })


</script>


<style scoped>

.cont{
    display: flex;
    width: 380px;
    height: 203px;
    /* flex-direction: column; */
    justify-content:  center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid rgba(0, 122, 84, 0.15);
    background:  #F4F7FA;
}

@media (max-width: 799px) {

    .cont{
        margin: 0px auto;
        width: 100%;
        max-width: 380px;
    }

    
}
</style>