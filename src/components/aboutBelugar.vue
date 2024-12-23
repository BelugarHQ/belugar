<template>

    <div class="bg-[#052E2E] py-[112px] mt-[92px]">

        <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0">

            <div class="flex flex-col md:flex-row item gap-[80px] w-full">

                <div class="flex flex-col text-[#F1FAFD] max-w-[500px]">

                    <h3 class="text-[20px] md:text-[48px] font-[700] leading-[57.6px]">Frequently asked questions</h3>

                    <p class="md:mt-6  text-[16px] font-[400] leading-[27px]">It’s okay to have questions, that is why we have dedicated this section to answer them.</p>

                    <div class="flex items-center gap-4 mt-[32px]">
                        <Button color="transparent" name="About Belugar" borderColor="#BFBFBF"/>
                        <Button @click="navigateTo('/plan')" color="#E6E6E6" text-color="#052E2E" name="About Plans"/>
                    </div>

                </div>

                <div class="w-full min-h-[474px]">

                    <Accordion/>

                </div>

            </div>

        </div>

    </div>
</template>