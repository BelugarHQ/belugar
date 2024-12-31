<template>
    <div>
        <div class="min-h-[210px] w-full">
            <div class="pt-[52px] hidden md:block">
                <img class="w-full min-h-[300px] " src="/legal/legal1.png" alt="hero"/>
            </div>
            <div class="pt-[52px] md:hidden">
                <img class="w-full min-h-[360px] " src="/legal/legalsmall1.png"/>
            </div>
        </div>

        <div class="relative min-h-[678px] text-[#333;] ">

            <div class="h-[678px] w-full overflow-hidden absolute top-0 opacity-70  left-0">
                    <img class=" z-30 absolute top-40  left-40" v-lazy="'/gridblocks.png'"/>
                    <img class=" z-20 absolute -top-10  left-0  opacity-[0.18]" v-lazy="'/hori-lines.png'"/>
                    <img class=" z-20 absolute top-0  left-0 opacity-[0.18]" v-lazy="'/verti-lines.png'"/>
            </div>

            <div class="md:max-w-[1200px] mx-auto w-full mt-[92px]">

                <h2 class="text-center font-[700] text-6 md:text-[32px] md:leading-[38.4px]">Legal</h2>

                <div class="tabs mt-6 px-4 md:px-0">
                    <n-tabs type="segment" animated color="info"  tab-style="max-width: 450px;">
                        <n-tab-pane name="privacy policy" tab="Privacy policy">
                            <TabsPrivacy />
                        </n-tab-pane>

                        <n-tab-pane name="terms of use" tab="Terms of use">
                            <TabsTerms/>
                        </n-tab-pane>

                        <n-tab-pane name="cookies" tab="Cookies">
                            <TabsCookies/>
                        </n-tab-pane>
                    </n-tabs>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script setup>
import { NTabs, NTabPane} from 'naive-ui'

</script>


<style scoped>

:deep(.n-tabs-rail){
    max-width: 450px !important;
    background: #009969!important;
    padding: 8px 16px !important;
    border-radius: 12px !important;
}
:deep(.n-tabs-nav){
    display: flex !important;
    justify-content: center !important;
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


</style>