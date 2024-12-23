<template>

    <div class=" col-span-2 p-[24px_30px]  rounded-[20px] h-[] mb-4"
         :style="{background: `${backgroundColor}`}">

        <span class="text-[#454545] text-[12px] font-[600]">WHAT’S INCLUDED</span>

        <h2 class="text-[#1D1D1D] text-[20px] md:text-[32px] font-[800] leading-normal md:w-[80%]">{{ dataValue.heading }}</h2>

        <div class="flex  md:flex-row flex-col-reverse relative">

            <div   class="flex flex-col justify-between mt-[8px]">
                <div v-for="(i,index) in dataValue.body" :key="index">
    
                    <div @click="selectedItem = index + 1;img= i.image;indexItem= index + 1" class="max-w-[334px]  mt-[16px] cursor-pointer">
                        <div class="flex items-center"
                        :class="selectedItem === index + 1 ?'text-[#009969]':''">
                            <svg class="transition ease-in-out duration-1000"  :class="selectedItem === index + 1 ?'opacity-90':'opacity-20'"
                            v-if="selectedItem === index + 1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9 11.0101" stroke="#009969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="text-[18px] font-[600] transition ease-in-out duration-1000"
                            :class="selectedItem === index + 1 ?' transform translate-x-[10px]':''">{{i.title}}</span>
                        </div>
                        <p class="text-[16px] mt-2 font-[400] text-[#626262]"
                          >{{ i.text }}</p>
                    </div>
                </div>
            </div>

            <div class="md:absolute flex justify-center items-center h-full img "
            
            :style="{maxWidth: `${imageWidth}`,top:`${top}`,right: `${right}`}">
                <img class="transition ease-in-out duration-1000"  :src="img"
                :class="selectedItem === indexItem  ?'transform scale-x-[100%]':''"/>
            </div>

        </div>



    </div>

</template>

<script setup>




const selectedItem = ref(1)
const indexItem = ref(1)

const { dataValue,backgroundColor,imageWidth,top,right } = defineProps({
    dataValue:Object,
    backgroundColor:String,
    imageWidth:String,
    top:String,
    right:String,
    
})

const img = ref(dataValue.body[0].image)
// const hovered = ref(false);


</script>

<style scoped>
@media (max-width: 500px) {
    .img{
        margin-top: 40px;
 
}

    
}
</style>