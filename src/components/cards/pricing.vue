<template>
   <div class="flex flex-col md:flex-row justify-center md:w-[820px] mx-auto gap-6">
  <div v-for="(i, index) in (pinia.state.isloadingPriceCard  ? [1, 2] : pricing_plans)" :key="index">
    <div class="grid grid-cols-1 md:grid-cols-2 md:ml-[80px] transition ease-in-out duration-300">
        
        <!-- Skeleton Loader -->
        <div v-if="pinia.state.isloadingPriceCard" class="animate-pulse space-y-4 border px-[20px] py-[16px] rounded-[20px] min-w-[327px] h-[500px] grid grid-rows-8 bg-[#F4F7FA]">
          <!-- Price -->
          <div class="row-span-2 flex flex-col gap-2 items-start border-b border-dotted pb-[10px]">
            <div class="bg-gray-300 h-6 w-16 rounded"></div>
            <div class="bg-gray-300 h-4 w-24 rounded"></div>
          </div>

          <!-- Values -->
          <div class="row-span-6 space-y-4">
            <div v-for="v in 3" :key="v" class="flex items-center pt-[17px]">
              <div class="bg-gray-300 h-5 w-5 rounded-full"></div>
              <div class="bg-gray-300 h-4 w-32 rounded ml-2"></div>
            </div>
          </div>

          <!-- Price Type and Button -->
          <div class="border-t flex justify-between items-center pt-[8px]">
            <div class="bg-gray-300 h-5 w-20 rounded"></div>
            <div class="bg-gray-300 h-8 w-24 rounded"></div>
          </div>
        </div>

        <!-- Actual Content -->
        <div v-else class="border px-[20px] py-[16px] rounded-[20px] min-w-[327px] h-[500px] grid grid-rows-8 bg-[#F4F7FA]">
          <div class="row-span-2 flex flex-col gap-2 items-start border-b border-dotted pb-[10px]">
            <div class="text-[#454545] text-[20px] font-[700]">{{ i.amount ? `$${i.amount}` : 'FREE' }}</div>
            <div class="text-[#454545] text-[14px] font-[400]">{{ i.desc }}</div>
          </div>

          <div class="row-span-6">
            <div v-for="v in i.values" :key="v" class="flex items-center pt-[17px]">
              <IconsCheckCircle />
              <span class="text-[#626262] text-[12px] font-[400] ml-1.5">{{ v }}</span>
            </div>
          </div>

          <div class="border-t flex justify-between items-center pt-[8px]">
            <span class="font-[400] text-[16px] text-[#333]">
              <span class="text-[20px] font-[600]">${{ i.amount }}/</span>{{ i.type }}
            </span>
            <Button name="Learn more" width="100px" color="#009969" />
          </div>
        </div>
        
      <div></div>
    </div>
  </div>
</div>

</template>

<script setup>

    import { get_Plans } from "@/composables/actions"


    const pinia = useStore()


    const { pricing_plans,loading} = defineProps({
        pricing_plans:Array,
        loading:Boolean,
    })

    onMounted(async()=>{
        await get_Plans()
        
    })

</script>