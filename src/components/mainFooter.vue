<template>

    <div class=" items-center bg-white pt-[92px]" >

        <div class=" flex flex-col  items-center space-y-9 px-4">

            <div class="md:max-w-[1200px] mx-auto w-full flex flex-col justify-center items-center space-y-9">

                <p class="p-text">Join the Belugar community and experience growth in your business</p>
    
                <Button color="black" name="Get started" height="48px"/>

            </div>

            <div class="md:p-[40px] border-y  w-full pt-4">
                  

                <div class="md:max-w-[1200px] mx-auto w-full block  md:flex justify-between items-center gap-10">

                    <div class="md:max-w-[405px]">

                        <div class="flex flex-col items-start">
                            <div class="translator ">

                                <GoogleTranslateSelect
                                    default-language-code="en"
                                    default-page-language-code="en"
                                    :fetch-browser-language="false"
                                    trigger="click"
                                />
                            </div>
                            <span class="small-header pt-4">Need more features?</span>

                            <p class="p-text text-justify py-4">Visit our roadmap board to share your suggestions, and our team will prioritize bringing your ideas to life!</p>

                            <Button name="Visit roadmap"/>

                        </div>

                        
                    </div>


                    <div class="flex flex-col">


                        <div class="md:w-[507px] flex flex-col  md:flex-row justify-end md:pl-4 mt-[22px] md:mt-[0px]">

                            <div v-for="(i,index) in services" :key="index" class="flex justify-between  items-center  w-full">
        
                                <div class="flex flex-col w-full mt-10 md:mt-0">
                                    <div class="flex  items-center w-full">
                                        <div class=" bg-[#DCE5EF] rounded-full p-0.5 items-center ">
                                            <IconsTrust/>
                                        </div>
                                        <span class="p-text text-[14px] font-[400] ml-[8px]">{{ i.type }}</span>
                                    </div>
            
                                    <div class=" mt-[15px] flex justify-start  items-center w-full">
                                        <span class="text-[32px] font-[700] items-center"> 
                                            {{ i.number }}+
                                        </span>
                                    </div>
    
                                    <div class=" flex  items-center w-full">
                                        <span class="p-text-gray text-[14px] items-center">{{ i.name }}</span>
                                    </div>
                                </div>
    
                            </div>
    
                        </div>

                        <div class="mt-[32px] flex  flex-col  md:flex-row justify-between mb-6 md:mb-0 gap-2">

                            <div v-for="(i,index) in footerNavLinks" :key="index" class="flex">
                                <div class="capitalize md:px-[10px] py-[10.5] " @click="navigateTo(`${i.link}`);pinia.state.selectedNavMenu = i.name">

                                    <n-button  tertiary v-if="pinia.state.selectedNavMenu === i.name" type="primary">
                                        <span class="hover:text-[#009969] capitalize">{{i.name}}</span>
                                    </n-button>

                                    <n-button  quaternary v-else >
                                        <span class="hover:text-[#009969] capitalize">{{i.name}}</span>
                                    </n-button>

                                </div>
                            </div>

                        </div>



                    </div>


                </div>


            </div>


            <div class="md:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between md:items-center w-full pb-[36px] gap-5">
    
                <div>
                    <IconsLogo/>
                </div>

                <div class=" text-[#1D1D1D] font-[400] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M22.4414 12.333C22.4414 17.8558 17.9642 22.333 12.4414 22.333C6.91856 22.333 2.44141 17.8558 2.44141 12.333C2.44141 6.81016 6.91856 2.33301 12.4414 2.33301C17.9642 2.33301 22.4414 6.81016 22.4414 12.333Z" stroke="#333333" stroke-width="1.5"/>
                        <path d="M15.4414 14.333C15.4414 15.4376 14.546 16.333 13.4414 16.333H12.4414C11.5095 16.333 11.0436 16.333 10.676 16.1808C10.186 15.9778 9.79664 15.5884 9.59365 15.0984C9.44141 14.7308 9.44141 14.2649 9.44141 13.333V11.333C9.44141 10.4011 9.44141 9.93519 9.59365 9.56764C9.79664 9.07759 10.186 8.68824 10.676 8.48525C11.0436 8.33301 11.5095 8.33301 12.4414 8.33301H13.4414C14.546 8.33301 15.4414 9.22844 15.4414 10.333" stroke="#333333" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <p class="p-text-gray ml-[4px]">2024 Belugar. All rights reserved</p>
                </div>


                    <div class="flex items-center space-x-3">
                        <LazyIconsInsta/>
                        <LazyIconsLinkedIn/>
                        <LazyIconsYoutube/>
                        <LazyIconsTwitter/>
                        <LazyIconsFacebook/>
                        
                    </div>


            </div>


        </div>
    </div>

</template>
<script setup>
import { NButton,NIcon,NDropdown} from 'naive-ui'
import GoogleTranslateSelect from '@google-translate-select/vue3';

const pinia = useStore()


const footerNavLinks = [
    {name:'home', link:'/'},
    {name:'plans', link:'/plan'},
    {name:'legal', link:'/legal'},
    {name:'solutions', link:'/solution'},
    {name:'resources', link:'/resources'},
    {name:'integrations', link:'/integration'},
]

const services = [
    {number:50,type:'Trusted by',name:'Start ups',icon:`<IconsTrust/>`},
    {number:5,type:'Supports',name:'Integrations',icon:`<IconsTrust/>`},
    {number:17,type:'Services',name:'Solutions',icon:`<IconsTrust/>`},
]

// const numberAnimationInstRef = ref(null);

// const handleClick =()=> {
//         numberAnimationInstRef.value?.play();
// }

// onMounted(()=>{
//     handleClick()
// })


</script>

<style scoped>

.translator :deep(.google-translate-select .google-translate-select-dropdown__activator){
    width: 145px !important;
    border-radius: 8px;
    overflow: hidden;
    height: 48px !important;
    border: 1px solid rgba(255, 255, 255, 0.3); /* Slight border for glass */
    backdrop-filter: blur(10px); /* Frosted glass blur */
    background: #2e33380d;
    transition: color .3s cubic-bezier(.4, 0, .2, 1), background-color .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), border-color .3s cubic-bezier(.4, 0, .2, 1);

}
</style>