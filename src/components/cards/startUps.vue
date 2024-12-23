<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" >

        <div v-for="i in startUpData" class="p-6 text-[#333] flex flex-col cont shadow-lg">

           <div v-html="i.icon"></div>

            <h4 class="text-[24px] leading-[31.5px] font-[700]">{{ i.title }}</h4>

            <p class="text-[14px] font-[400] leading-4">
               
                {{ i.text }}
            </p>

        </div>



    </div>
</template>


<script setup>

const {startUpData} =defineProps({
    startUpData:Array
})


</script>


<style scoped>

.cont{
    display: flex;
    padding: 16px;

    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid rgba(13, 191, 148, 0.40);

    background: #F4F7FA;
    /* Drop Shadow/100 */
}
</style>