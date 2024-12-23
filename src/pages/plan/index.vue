<template>

    <div>

        <div class="relative ">
                <div class="min-h-[500px] w-full overflow-hidden absolute top-0 opacity-70  left-0">
                        <img class=" z-30 absolute top-40  left-40" src="/gridblocks.png"/>
                        <img class=" z-20 absolute -top-10  left-0  opacity-[0.18]" src="/hori-lines.png"/>
                        <img class=" z-20 absolute top-0  left-0 opacity-[0.18]" src="/verti-lines.png"/>
                </div>

                <div class="max-w-[1200px] z-10  mx-auto w-full grid grid-cols-1 md:grid-cols-3 pt-[56px] md:pt-[10%] gap-20 min-h-[500px]
                 md:min-h-[550px] px-4 md:px-0">
        
                    <div class="col-span-2 pt-[50px] md:pt-[50px] ">
                        <div class="flex flex-col justify-start items-start text-start">
        
                            <div class="flex items-center border-b pb-3">
                            <LazyIconsDollar/>
                                <span class="text-[12px] md:text-[14px]  text-[#1D1D1D] ml-1 font-[400] uppercase md:tracking-wide">One dollar software for Start-ups and SME’s</span>
                            </div>
        
                            <span class="text-[30px] md:text-[54px] font-[700] text-[#1D1D1D] leading-tight mt-[16px]">
                                The Most Affordable All-in-One Tool for Startups and SMEs
                            </span>
        
        
                            <p class=" text-[14px] font-[400] tracking-[0.64px] leading-[24px] text-[#454545] mt-[32px] text-balance ">
                                Get everything you need to run your business smoothly at a price designed for startups <br> and SMEs. Belugar's all-in-one platform offers unbeatable value 
                                without compromising on <br> essential features.
                            </p>
        
                            <div class="flex items-center gap-6 mt-[32px]">
        
                                <Button name="Get started" height="48px" width="200px"/>
                                <!-- <Button name="Login" color="#fff" textColor="#009969" height="48px"/> -->
                            </div>
        
                            
                        </div>
                    </div>
        
                    <div class=" relative hidden md:block md:pt-[60px]  -top-0 md:-top-56 right-20">
                        <div class="overflow-hidden md:min-w-[620px]">
                            <img class=" w-full" src="/plan/plan-image.png"/>
                        </div>
                               
                    </div>
        
                </div>
        </div>

        <div class="md:max-w-[1200px] mx-auto w-full min-h-[750px] mt-[92px] md:mt-[0px] px-4 md:px-0">

                <div class="flex  flex-col text-center">
    
                    <div class="flex justify-center">
                        <div class="h-[32px] min-w-[32px] px-2 py-1 rounded-full inline-flex justify-center items-center bg-[#DCE5EF]">
            
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" fill="#34A853" fill-opacity="0.1" stroke="#3477A8" stroke-width="1.5"/>
                                <path d="M11.0336 7.54582C10.9593 6.97383 10.3025 6.04966 9.12157 6.04964C7.74937 6.04962 7.17199 6.80959 7.05484 7.18958C6.87206 7.69785 6.90862 8.74282 8.517 8.85675C10.5275 8.99925 11.3329 9.23655 11.2305 10.467C11.128 11.6974 10.0072 11.9632 9.12157 11.9347C8.23582 11.9062 6.7867 11.4994 6.73047 10.405M8.98102 5.24854V6.05236V5.24854ZM8.98102 11.9273V12.7485V11.9273Z" fill="#34A853" fill-opacity="0.1"/>
                                <path d="M11.0336 7.54582C10.9593 6.97383 10.3025 6.04966 9.12157 6.04964C7.74937 6.04962 7.17199 6.80959 7.05484 7.18958C6.87206 7.69785 6.90862 8.74282 8.517 8.85675C10.5275 8.99925 11.3329 9.23655 11.2305 10.467C11.128 11.6974 10.0072 11.9632 9.12157 11.9347C8.23582 11.9062 6.7867 11.4994 6.73047 10.405M8.98102 5.24854V6.05236M8.98102 11.9273V12.7485" stroke="#3477A8" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
        
                             <span class="text-[#3477A8] text-[14px] ml-1">Pricing</span>
                             
                        </div>

                        
                    </div>
                    <p class="text-[#333] text-[20px] md:text-[32px] font-[600] mt-[30px]">Choose your plan</p>
    
                 
    
                    <div   class="flex flex-col justify-center mt-[40px] mx-auto">

                        <CardsMainPricing :pricing_plans="pricing_plans_monthly"/>
    
                    </div>
                    
                </div>
        </div>

        <div class="md:max-w-[1200px] mx-auto w-full min-h-[750px] mt-[92px] md:mt-0 px-4 md:px-0">

                <div class="flex  flex-col text-center">
                  
                    <p class="text-[#333] text-[20px] md:text-[32px] font-[600]">Choose your plan</p>
                    <p class="text-[#333] text-[14px]  font-[600] mt-[14px]">This is what you get from each plan</p>
    
                    <div class="flex flex-col justify-center mt-[40px] mx-auto w-full  overflow-x-auto md:overflow-hidden
                       scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
                        <div class="flex space-x-4 w-max md:w-full">
                            <CardsComparePricing />
                        </div>
                    </div>

                    
                </div>
        </div>

        <div class="md:max-w-[1200px] mx-auto w-full mt-[92px]  px-4 md:px-0">
            <div>
                <h1 class="text-[20px] md:text-[48px] font-[700] leading-[24px]
                md:leading-[57.6px] max-w-[545px]">Offering the best tools at the cheapest price</h1>
            </div>

            <div class="md:my-[60px] my-[40px]">
                <CardsAbout/>
            </div>
        </div>


        <div class="bg-[#052E2E] py-[112px] mt-[92px]">

            <div class="md:max-w-[1200px] mx-auto w-full px-4 md:px-0">

                <div class="flex flex-col md:flex-row item gap-[80px] w-full">

                    <div class="flex flex-col text-[#F1FAFD] max-w-[500px]">

                        <h3 class="text-[20px] md:text-[48px] font-[700] leading-[57.6px]">Frequently asked questions</h3>

                        <p class="md:mt-6  text-[16px] font-[400] leading-[27px]">It’s okay to have questions, that is why we have dedicated this section to answer them.</p>

                        <div class="flex items-center gap-4 mt-[32px]">
                            <Button color="transparent" name="About Belugar" borderColor="#BFBFBF"/>
                            <Button color="#E6E6E6" text-color="#052E2E" name="About Plans"/>
                        </div>

                    </div>

                    <div class="w-full min-h-[474px]">

                        <Accordion/>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>


<script setup>

import { NCollapse, NCollapseItem} from 'naive-ui'
import { get_Plans } from "@/composables/actions"

const pinia = useStore()

const pricing_plans_monthly = ref([])
const pricing_plans_anually  = ref([])



// const pricing_plans_monthly = [
//     {
//         amount:0,
//         heading:'Free',
//         text1:'Grow with our social media marketing feature',
//         type:"mo",
//         text2:"No membership fee ",
//         desc:'',
//         values:['1 User','1 Startup','5 Marketing posts','Free 100MB storage for files $0.098/MB for additional storage']
//     },
//     {
//         amount:1,
//         heading:'Monthly',
//         text1:'Everything you need for a growing start-up',
//         type:"mo",
//         text2:"+ One-time $1 membership fee",
//         desc:'',
//         values:['5 Users $1/user for additional user',
//              '3 Start-ups $1/user for additional Start-ups',
//              'Free 100MB storage for files $0.098/MB for additional storage',
//              'Unlimited marketing posts',
//              'All Belugar business tools Accounting, Project management + more'
//             ]
//     },
//     {
//         amount:10,
//         heading:'Yearly',
//         text1:'Everything you need for a growing start-up',
//         type:"yr",
//         text2:"+ One-time $1 membership fee",
//         desc:'',
//         values:['5 Users $1/user for additional user',
//              '3 Start-ups $1/user for additional Start-ups',
//              'Free 100MB storage for files $0.098/MB for additional storage',
//              'Unlimited marketing posts',
//              'All Belugar business tools Accounting, Project management + more'
//             ]
//     },

   

  
// ]


onMounted(async()=>{
    try{

        if(pinia.state.pricingPlans.length){
            pricing_plans_monthly.value =   pinia.state.pricingPlans.map(plan => {
                    const monthlyPlan = {
                        amount: plan.amount,
                        heading: plan.name === 'Free'? 'Free':'Monthly',
                        text1: plan.description,
                        type: "mo",
                        text2: plan.amount === 0 ? "No membership fee" : "+ One-time $1 membership fee",
                        values: [
                            `${plan.max_team_members} Users`,
                            `${plan.max_businesses} Start-ups`,
                            `${plan.max_daily_file_uploads} Marketing posts/emails`,
                            `Free ${Math.floor(plan.storage / 1048576)}MB storage for files`
                        ]
                    };
        
                    // Only create yearly plan for paid options
                    if (plan.amount > 0) {
                        const yearlyPlan = {
                            amount: plan.amount * 12, // Apply 10% discount for yearly
                            heading: `Yearly`,
                            text1: plan.description,
                            type: "yr",
                            text2: "+ One-time $1 membership fee",
                            values: monthlyPlan.values
                        };
                        return [monthlyPlan, yearlyPlan];
                    }
                    
                    return [monthlyPlan];
                }).flat();
        }else{
            await get_Plans()
        }
    }catch(e){
        console.log(e)
    }


  
console.log(pricing_plans_monthly.value,pinia.state.pricingPlans)
  
    
})


</script>