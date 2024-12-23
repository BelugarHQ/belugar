<template>

    <div>

        <div class="relative marquee-container  block  z-50" v-once>
                <div class="marquee flex justify-around items-center ">
                    <div v-for="(i,index) in marqueData" :key="index">
                        <span class="span mx-[20px]">{{ i }}</span>
                    </div>
                </div>
                <div class="marquee marquee2 flex justify-around items-center">
                    <div v-for="(i,index) in marqueData" :key="index">
                        <span class="span mx-[20px]">{{ i }}</span>
                    </div>
                </div>
        </div>
    </div>

</template>

<script setup>


const {marqueData} = defineProps({
    marqueData:Array,
})

</script>


<style scoped>

@media (max-width: 960px) { /* xs breakpoint */
   


 .marquee-container {
  min-height: 20px;

  .marquee {
    margin-top: 10px;
    font-size: 18px !important;
  }

 
  .span {
    padding-left: 4px;
  }
}

}

@media (max-width: 500px) {
    .marquee-container {
    min-height: 60px !important;

  .marquee {
    margin-top: 20px !important;
    font-size: 16px !important;
  }

 
  /* .marquee div{
    display: none;
} */
 
}

    
}

@media (min-width: 960px) { /* md breakpoint */
  .my-text {
    font-size: 120px;
    font-weight: 700;
    letter-spacing: 3px;
  }
}



.back-to-top-button {
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: #025945;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  display: none;
  height: 50px;
  width: 50px;
  align-items: center;
  z-index: 99;

}

.back-to-top-button:hover {
  background-color: #025945 hover shade;
}

.back-to-top-button svg {
  width: 100%;
  height: 100%;
}



.marquee-container {
  overflow: hidden;
  line-height: 30px;
  min-height: 100px;

  .marquee {
    margin-top: 32px;
    top: 0;
    left: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    animation: marquee 30s linear infinite;
    font-size: 20px;
    font-weight: 400;
  }

  .marquee2 {
    animation-delay: 15s;
  }
  b {
    padding-left: 450px;
  }
}

@keyframes marquee {
  0% {
    left: -100%;
  }
  100% {
    left: 100%
  }
}
</style>