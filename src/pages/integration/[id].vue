<template>
    <div class="text-[#333]">

        <div class="bg-[#F4F7FA] pt-[92px] pb-4">

            <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0">
                <div @click="navigateTo('/integration')" class="flex items-center gap-4">
                    <div class="w-[50px] bg-[#fff] rounded-[12px]">
        
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M30 36L18 24L30 12" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
        
                    </div>
    
                    <span class="text-[#1D1D1D] text-[18px]">Back</span>
    
                </div>

                </div>

        </div>


        <div class="relative overflow-hidden">
            <div class="h-[978px] w-full overflow-hidden absolute z-10 top-0 opacity-70  left-0">
                    <img class=" z-20 absolute top-40  left-40 " src="/gridblocks.png"/>
                    <img class=" z-20 absolute -top-10  left-0  opacity-[0.18]" src="/hori-lines.png"/>
                    <img class=" z-20 absolute top-0  left-0 opacity-[0.18]" src="/verti-lines.png"/>
            </div>

            <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0 my-[33px]">

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>

                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160" fill="none">
                            <g clip-path="url(#clip0_492_15405)">
                                <path d="M79.9987 66.155C87.6475 66.155 93.8469 72.3531 93.8469 79.9994C93.8469 87.6475 87.6475 93.8469 79.9987 93.8469C72.3525 93.8469 66.1531 87.6456 66.1531 79.9994C66.1531 72.3531 72.3525 66.155 79.9987 66.155ZM32.8206 79.9994C32.8206 53.9431 53.9431 32.8213 79.9987 32.8213C106.058 32.8213 127.179 53.9431 127.179 79.9994C127.179 81.7244 127.087 83.4256 126.906 85.0994C126.548 89.6988 129.923 93.2094 134.493 93.2094C142.249 93.2094 143.075 83.2094 143.075 79.9994C143.075 45.1619 114.836 16.9231 79.9987 16.9231C45.1619 16.9231 16.9231 45.1625 16.9231 79.9994C16.9231 114.834 45.1619 143.074 79.9981 143.074C98.4994 143.074 115.14 135.114 126.679 122.428L139.646 133.316C124.999 149.689 103.702 160.003 79.9987 160.003C35.8162 160.003 0 124.183 0 79.9994C0 35.8163 35.8162 0 79.9987 0C124.184 0 160 35.8163 160 80C160 97.7594 151.544 112.181 134.559 112.181C127.084 112.181 122.54 108.756 120.059 104.934C111.727 118.289 96.9037 127.181 79.9987 127.181C53.9425 127.181 32.8206 106.055 32.8206 79.9994ZM79.9987 49.7431C63.29 49.7431 49.7425 63.2888 49.7425 79.9994C49.7425 96.71 63.29 110.257 79.9987 110.257C96.7087 110.257 110.257 96.71 110.257 79.9994C110.257 63.2888 96.7087 49.7431 79.9987 49.7431Z" fill="#AF252A"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_492_15405">
                                <rect width="160" height="160" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg> -->

                        <div class="md:h-[160px] md:w-[160px] w-[106px]">
                            <img :src="all_integration?.img" alt="icon">
                        </div>

                        <h2 class="text-[24px] mt-4 md:text-[48px] font-[800]">{{ all_integration?.title }}</h2>

                        <p class="md:my-[24px] my-4 text-[18px]">
                          {{ all_integration?.text}}
                        </p>

                        <Button :name="`${all_integration?.buttonText}`"/>

                    </div>

                    <div class="col-span-2 relative bg-[#F0FFFA]  p-6 md:py-[32px] md:px-[56px] rounded-[12px] z-30">

                        <n-tabs type="segment" animated>
                            <n-tab-pane name="setup" tab="Setup">
                                 <TabsSingleItem :integrationItems="all_integration?.setup.slice(0,2)" />
                            </n-tab-pane>
                            <n-tab-pane name="disconnect" tab="Disconnect">
                                <TabsDisconnect :integrationItems="all_integration?.disconnect"/>
                            </n-tab-pane>
                        </n-tabs>


                        <div class="flex items-center gap-2 relative bottom-0  p-4">
                            <button
                            class="inline-flex justify-center items-center h-10 w-10 border border-gray-800 rounded-full"
                            @click="prevSlide"
                            :disabled="currentIndex === 0"
                            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
                            >
                            <IconsArrowBack />
                            </button>

                            <button
                            class="inline-flex justify-center items-center h-10 w-10 border border-gray-800 rounded-full"
                            @click="nextSlide"
                            :disabled="currentIndex === 1"
                            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 1 }"
                            >
                            <IconsArrowForward />
                            </button>

                        </div>

                    </div>
                </div>

            </div>

            <div class="mt-[92px] mb-[60px]">
    
                <h4 class="text-center text-[20px] md:text-[32px] font-[600] md:leading-[44.8px]">Available Models</h4>
    
                <Marque :marqueData="marqueData"/>
    
                <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0 mt-6 md:mt-[92px]">
                    <div class="py-[40px] px-4 md:px-[80px] max-w-[900px] min-h-[271px] mx-auto text-center border-[0.5px] rounded-[20px] border-[#CCC]">
                        <h5 class="text-[20px]  font-[600] md:leading-[28px]">About {{ all_integration?.title }}</h5>
                        <p class="text-[14px] text-left  font-[400] leading-[24px] mt-4 md:mt-6">
                          {{all_integration?.about}}                       
                         </p>
                    </div>
                </div>
    
            </div>
        </div>



    </div>
</template>

<script setup>
import { NTabs, NTabPane} from 'naive-ui'
import { integration } from '@/composables/json/integrations'

const marqueData = [
    "text-davinci-003",
    "text-davinci-002",
    "text-curie-001",
    "text-babbage-001",
    "text-ada-001",
    "text-davinci-edit-001",
    "code-davinci-edit-001"
]

const router = useRouter()
  const currentId = router.currentRoute.value.params.id


const all_integration = computed(()=>{
    return integration()?.find(e => e.id == currentId)
})

console.log('lll',all_integration.value,currentId)

const currentIndex = ref(0)
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1
    }
  }
  
  const nextSlide = () => {
    if (currentIndex.value < slides.value.length - 1) {
      currentIndex.value += 1
    }
  }


 
  


</script>

<style scoped>

:deep(.n-tabs-rail){
    max-width: 250px !important;
    background: #004D35 !important;
    padding: 8px !important;
    border-radius: 12px !important;
}
:deep(.n-tabs-nav){
    display: flex !important;
    /* justify-content: center !important; */
}

:deep(.n-tabs-tab-wrapper .n-tabs-tab){
    background: transparent;
    color: white;
    padding: 9px !important;
    border-radius: 12px !important;
    margin: 0px 5px;

}
:deep(.n-tabs-tab-wrapper .n-tabs-tab--active){
    /* background: #009969 !important; */
    padding: 9px !important;
    border-radius: 12px !important;


}

.tab2 :deep(.n-tabs-tab){
    background: #66666673 !important;
    color: #333 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 12px !important;
    font-size: 16px;
    padding: 12px 24px !important;
}
.tab2 :deep(.n-tabs-tab.n-tabs-tab--active){
    background: #009969 !important;
    color: #F4F7FA !important;
  
}
</style>