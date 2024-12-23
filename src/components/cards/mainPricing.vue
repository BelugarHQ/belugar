<template>
    <div class="grid grid-cols-1 md:grid-cols-3 text-[#333] gap-6">
        <div v-for="i in pricing_plans" class="card-cont items-start">

            <div class="pb-6 border-b-[1px] border-dotted border-[#666] gap-2">
                <div class="flex">
                    <h4 class="text-[20px] font-[700]">{{ i.heading}}</h4>
                </div>
                <p class="font-[400] text-[14px] text-left">{{ i.text1 }}</p>
            </div>

            <div class="py-6 w-full space-y-6 border-b-[1px] border-dotted border-[#666]">
                <div class="flex flex-col items-start">
                    <span class="text-[32px] font-[700]">${{i.amount}}/<span class="text-[20px]">{{ i.type }}</span></span>
                    <span class="font-[400] text-[14px] text-left">{{ i.text2 }} </span>
                </div>

                <Button name="Get started" color="#137973" width="100%"/>
            </div>

            <div class="row-span-6">
                <div class="" v-for="v in i.values">
                    <div class="flex items-center pt-[17px] " >
                        <div class="">
                            <IconsCheckCircle/>
                        </div>
                        <span class="text-[#626262] flex items-start text-left text-[12px] font-[400] ml-1.5">
                            {{ v }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>


const { pricing_plans} = defineProps({
    pricing_plans:Array,
})

</script>

<style scoped>


.card-cont{
    border-radius: 8px;
    background: var(--bg-day, #F4F7FA);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.10);
    padding: var(--spacing-4xl, 32px);
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex: 1 0 0;
    align-self: stretch;


}
</style>