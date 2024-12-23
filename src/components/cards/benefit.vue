<template>

    <div class="mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-8" >
        <div v-for="i in benefits" class="cont flex flex-col items-center" >

            <div class="max-w-[381px] px-[16px] md:w-[381px] pt-[12px]">
                <img class="w-full" v-lazy="`${i.img}`"/>
            </div>
            <div class="inner-cont h-full flex flex-col  text-[#FEFBFB]">

                <div class="text-left">
                    <h5 class="text-[16px] font-[700] leading-6">{{ i.heading }}</h5>
                    <p class="text-[14px] font-[400] leading-6 mt-1">{{ i.desc }}</p>
                </div>

            </div>

        </div>
    </div>

</template>


<script setup>

const benefits = [
    {
        img:'/int/imageframe.png',
        heading:'Simple AI-Integration',
        desc:'Enjoy industry standard and a easy-to-understand API you can use from any backend framework of your choice'
    },
    {
        img:'/int/imageframe2.png',
        heading:'Comprehensive API Documentation',
        desc:'Leverage a well-documented API with core examples, responses, status codes etc., to help guide you during integration'
    },
    {
        img:'/int/imageframe3.png',
        heading:'Reduces Time to Build',
        desc:'Greatly reduce the time you spend building your MVP. Use the API to build your basic admin dashboard functionality on Belugar'
    },
    {
        img:'/int/imageframe4.png',
        heading:'Perform Bulk Actions',
        desc:'Easily transfer your existing records to Belugar with bulk insert/import operations'
    },
]
</script>

<style scoped>

.cont{
    width: 421px;
    height: 299px;
    flex-shrink: 0;
    border-radius: 12px;
    border: var(--sds-size-stroke-border) solid var(--gray-stroke, #CCC);
    background: #E5EBF0;
    box-shadow: 0px 4px 8px 0px rgba(51, 51, 51, 0.20);

}

.inner-cont{
    display: flex;
    width: 421px;
    padding: 16px 25px 42px 25px;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 6px 6px;
    background: #1F2A34;
}

@media (max-width: 798px) {

    .cont{
        width: 100%;
        max-width: 421px;

    }

    .inner-cont{
        width: 100%;
        max-width: 421px;
    }
    
}

</style>