<template>

    <div class="flex flex-col justify-start min-h-[563px]">

        <div class="flex flex-col  space-y-2 card-list"
         :style="{marginTop: `${marginTop}`}">
            <h3 class="text-[24px] font-[800]">{{ dataValue.heading }}</h3>
            <p class="text-[14px mb-[40px] font-[400] leading-[22.4px]">{{ dataValue.desc }}</p>

            <div class="gap-4" style="margin-top: 40px !important;">
                <div  v-if="dataValue.text[0]"  class="acct1 relative mb-[24px] acct-card">
                    <div class="absolute -top-3.5 bg-[#F5FFFC] h-[32px] w-[32px] inline-flex justify-center items-center rounded-full shadow-lg">
                        <IconsProfile/>
                    </div>
                    <span>{{ dataValue.text[0] }}</span>
                </div>

                <div  v-if="dataValue.text[1]"  class="acct2 relative mb-[24px] acct-card">
                    <div class="absolute -top-3.5 left-[45%] bg-[#FFF6F5] h-[32px] w-[32px] inline-flex justify-center items-center rounded-full shadow-lg">
                        <IconsMoney/>
                    </div>
                    <span>{{ dataValue.text[1] }}</span>
                </div>

                <div v-if="dataValue.text[2]" class="acct3 relative mb-[24px] acct-card">
                    <div class="absolute -top-3.5 left-[80%] bg-[#F5FCFF] h-[32px] w-[32px] inline-flex justify-center items-center rounded-full shadow-lg">
                        <IconsShare/>
                    </div>
                    <span>{{ dataValue.text[2] }}</span>
                </div>
            </div>

            <Button name="Get started"/>
        </div>

    </div>

</template>

<script setup>

const selectedItem = ref(1)

const { dataValue,marginTop } = defineProps({
    dataValue:Object,
    marginTop:String
    
})

// const img = ref(dataValue.body[0].image)
// const hovered = ref(false);


</script>


<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.acct1{
    border-radius: var(--Blur-100, 4px);
    border: var(--sds-size-stroke-border) solid #00A370;
    background: rgba(0, 163, 112, 0.10);
    display: flex;
    width: 356px;
    padding: 16px;
    align-items: center;
    gap: 10px;
}

.acct2{
    border-radius: var(--Blur-100, 4px);
    border: var(--sds-size-stroke-border) solid #FF4A38;
    background: rgba(255, 74, 56, 0.10);
    display: flex;
    width: 356px;
    padding: 16px;
    align-items: center;
    gap: 10px;
    min-height: 62px;
}
.acct3{
    border-radius: var(--Blur-100, 4px);
    border: var(--sds-size-stroke-border) solid #002F47;
    background: rgba(0, 47, 71, 0.10);
    display: flex;
    width: 356px;
    padding: 16px;
    align-items: center;
    gap: 10px;
    min-height: 62px;
}

.acct-card span{
    color: #333;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
}


@media (max-width: 500px) {

    .card-list{
        margin-top: 24px !important;
    }
 
}

    

</style>