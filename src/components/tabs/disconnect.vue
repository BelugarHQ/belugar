<template>

    <div class="min-h-[430px]">

        <div class="grid grid-cols-1 md:grid-cols-2">

            <div>
                <h5 class="text-[20px] font-[700] leading-[30px] mt-4">Instruction</h5>
        
                <p class="text-[14px] font-[400] leading-[24px] mt-2">
                    {{ integrationItems?.topText }}
                </p>

                <p class="text-[14px] font-[500] leading-[24px] mt-4">
                    {{ integrationItems?.noteText }}
                </p>

                <p class="text-[14px] font-[400] leading-[24px] mt-4">
                    {{ integrationItems?.bottomText }}
                </p>

            </div>
            
            <div class="relative max-w-[254px] left-8 mt-4 md:mt-0">
                    <img :src="integrationItems?.image" alt="">
            </div>

        </div>


    </div>


    
</template>


<script setup>

  const { integrationItems } = defineProps({
    integrationItems:Object
  })

  console.log('ss',integrationItems)


</script>