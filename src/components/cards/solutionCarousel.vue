<template>
        <div class=" z-30 max-w-[1000px] mx-auto mt-[90px] md:my-[124px]">
            
            <div class="hidden md:block">

                 <n-carousel
                     effect="card"
                     prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
                     next-slide-style="transform: translateX(50%) translateZ(-800px);"
                     style="height: 365px !important; max-width: 700px; margin: 0 auto;"
                     :show-dots="false"
                 >
     
                     <n-carousel-item :style="{ width: '60%' }">
                         <div class="p-[28px] meeting h-[365px] w-[313px] carousel-img">
                              <SolutionsMeeting/>
                         </div>
                     </n-carousel-item>
     
     
                     <n-carousel-item :style="{ width: '60%' }">
                         <div class="p-[28px] account h-[365px] w-[313px]  carousel-img">
                             <SolutionsAccount/>
                         </div>
                     </n-carousel-item>
     
                     <n-carousel-item :style="{ width: '60%' }">
     
                         <div class="p-[28px] marketing h-[365px] w-[313px] carousel-img">
     
                             <SolutionsMarketing/>
                              
                         </div>
                         
                     </n-carousel-item>
     
                    
     
                   
     
                     <n-carousel-item :style="{ width: '60%' }">
                         <div class="p-[28px] project h-[365px] w-[313px] carousel-img">
                               <SolutionsProjects/>
                         </div>
                     </n-carousel-item>
     
     
                    
                     <n-carousel-item :style="{ width: '60%' }">
                         <div class="p-[28px] blog h-[365px] w-[313px] carousel-img">
                             <SolutionsBlogging/>
                         </div>
                     </n-carousel-item>
     
                     <!-- <n-carousel-item :style="{ width: '60%' }">
                     <img
                         class="carousel-img"
                         src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                     >
                     </n-carousel-item>
     
                     <n-carousel-item :style="{ width: '60%' }">
                     <img
                         class="carousel-img"
                         src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                     >
                     </n-carousel-item>
     
                     <n-carousel-item :style="{ width: '60%' }">
                     <img
                         class="carousel-img"
                         src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                     >
                     </n-carousel-item> -->
     
                 </n-carousel>
            </div>


            <div class="block md:hidden px-4 md:px-0 carousel2">
                <n-carousel
                effect="custom"
                :interval="40"
                dot-placement="bottom"
                :transition-props="{ name: 'creative' }"
                show-arrow
                style="width: 100%; height: 470px"
                 >
                    
                        <div class="p-[28px] meeting h-auto w-[313px] carousel-img overflow-hidden">
                            <SolutionsMeeting/>
                        </div>
     
     
                         <div class="p-[28px] account h-auto w-[313px]  carousel-img">
                             <SolutionsAccount/>
                         </div>
                     
     
                         <div class="p-[28px] marketing h-auto w-[313px] carousel-img">
     
                             <SolutionsMarketing/>
                              
                         </div>
     
                    
     
                   
     
                         <div class="p-[28px] project h-auto w-[313px] carousel-img">
                               <SolutionsProjects/>
                         </div>
                    
     
     
                    
                         <div class="p-[28px] blog h-auto w-[313px] carousel-img">
                             <SolutionsBlogging/>
                         </div>
                </n-carousel>
            </div>

        </div>
</template>



<script setup>
import { NCarousel,NCarouselItem} from 'naive-ui'

</script>


<style scoped>

.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.carousel2 :deep(.n-carousel__arrow-group) {
  /* bottom: -20px; */
}
.carousel2 :deep(.n-carousel__dot) {
  background-color:  #333 !important;
}

.carousel2 :deep(.n-carousel__dot[aria-selected="true"]) {
  background-color: rgba(9, 8, 8, 0.2) !important;
}
.carousel2 :deep(.n-carousel__arrow) {
  background-color: #333 !important;
}

.project{
    border-radius: 20px;
    border: 0.5px solid #F4D3CD;
    background: rgba(249, 233, 230, 0.45);
}

.account{
    border-radius: 20px;
     border: 0.5px solid #EFE4DC;
    background: rgba(239, 228, 220, 0.45); 
}

.meeting{
    border-radius: 16.129px;
border: 0.403px solid #DCECEF;
background: rgba(216, 238, 243, 0.45);
}

.marketing{
    border-radius: 20px;
border: 0.5px solid #C9D9D7;
background: rgba(135, 171, 166, 0.45);
}

.blog{
    border-radius: 16.129px;
    border: 0.403px solid #EFECDC;
    background: rgba(239, 236, 220, 0.45);
}




:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}

</style>