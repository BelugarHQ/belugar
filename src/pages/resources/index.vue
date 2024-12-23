<template>


    <div>

        <div class="min-h-[410px] w-full">
            <div class="pt-[52px] hidden md:block">
                <img class="w-full min-h-[410px] " src="/integration/hero.png" alt="hero"/>
            </div>
            <div class="pt-[52px] md:hidden">
                <img class="w-full min-h-[360px] " src="/integration/30.png"/>
            </div>
        </div>


        <div class="relative  px-4 md:px-0">

            <div class="h-[678px] w-full overflow-hidden absolute top-0 opacity-70  left-0">
                    <img class=" z-30 absolute top-40  left-40" v-lazy="'/gridblocks.png'"/>
                    <img class=" z-20 absolute -top-10  left-0  opacity-[0.18]" v-lazy="'/hori-lines.png'"/>
                    <img class=" z-20 absolute top-0  left-0 opacity-[0.18]" v-lazy="'/verti-lines.png'"/>
            </div>

            <div class="md:max-w-[1200px] mx-auto w-full mt-[92px]">
    
                <KeepAlive>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-[80px] text-[#333] ">
                        <div class="flex flex-col md:mt-[40px]">
                            <div class="">
                                <h3 class="text-[20px] md:text-[40px] font-[700] leading-6 md:leading-[48px]">Helping businesses save time, reduce costs, and grow</h3>
                                <p class="text-[14px] leading-[24px] mt-[24px] font-[400]">Join thriving businesses that are using Belugar to 
                                    streamline operations, cut expenses, and boost productivity effortlessly.
                                </p>
        
                                <div class="grid grid-cols-2 my-[24px] gap-6">
        
                                    <div>
                                        <h2 class="text-[20px] md:text-[40px] font-[700] leading-[28.8px] md:leading-[57px]">$30m</h2>
                                        <p class="text-[14px] font-[400] leading-[24px]">Customer savings</p>
                                    </div>
                                    <div>
                                        <h2 class="text-[20px] md:text-[40px] font-[700] leading-[28.8px] md:leading-[57px]">10m+</h2>
                                        <p class="text-[14px] font-[400] leading-[24px]">Hours saved</p>
                                    </div>
                                    <div>
                                        <h2 class="text-[20px] md:text-[40px] font-[700] leading-[28.8px] md:leading-[57px]">200%</h2>
                                        <p class="text-[14px] font-[400] leading-[24px]">Year on year growth</p>
                                    </div>
                                    <div>
                                        <h2 class="text-[20px] md:text-[40px] font-[700] leading-[28.8px] md:leading-[57px]">5k+</h2>
                                        <p class="text-[14px] font-[400] leading-[24px]">Businesses</p>
                                    </div>
        
                                </div>
        
                                <Button name="Get started" color="#137973"/>
                                
                            </div>
                        </div>
        
                        <div class="md:min-h-[640px] z-20">
        
                            <img v-lazy="'/integration/p-image.png'"/>
        
                        </div>
                    </div>
                </KeepAlive>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[80px] text-[#333] mt-[92px]">

                    <div>
                        <h2 class="text-[20px] md:text-[40px] font-[700] leading-6 md:leading-[48px]">Belugar is the only tool your business needs</h2>
                        
                    </div>
                    <div class="min-h-[324px] text-[#000] text-[16px] font-[400] leading-6 ">

                        <p class="">
                            Belugar is built to help startups thrive, offering the essential tools for growth at just $1.
                        </p>

                        <p>
                            <br>Our mission is to empower startups with affordable, powerful tools to streamline operations, 
                            reduce customer acquisition costs, and maximize customer lifetime value. 
                            Belugar's pricing model allows SMEs to safely test business strategies, acquire customers, 
                            and scale efficiently.
                        </p>
                        <p>
                            <br>With a dedicated team constantly enhancing the platform, we 
                            ensure startups have the best resources to succeed and keep pushing the boundaries of what's possible.
                        </p>

                    </div>


                </div>
    
            </div>
        </div>


        <div class="md:max-w-[1200px] mx-auto w-full mt-[92px] px-4 md:px-0 " >

            <div >
                <LazySectionTitle title="What drives us" 
                   heading="Empowering startups in so many ways"
                   text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."/>

                
            </div>

            <div class="md:mt-[92px] mt-[40px]">

                <LazyCardsStartUps :startUpData="startUpData"/>
            </div>
        </div>


        <div  class="md:max-w-[1200px] mx-auto w-full mt-[92px] px-4 md:px-0 min-h-[900px]">

            <div class="mt-[52px]">

                <LazySectionTitle title="Feedback" heading="What others say about Belugar" text="These businesses have said good things about their experience with Belugar!" />

                <div class="mt-[40px]">
                <LazyCardsTestimonial/>
                </div>

            </div>


            <div class="md:mt-[92px] mt-16  px-4 md:px-0">
                <div class="flex justify-center flex-col items-center">
                    <span class="text-[#333] text-[16px] font-[600]">Want to be a part of the team?</span>
                    <p class="text-[#333] md:font-[700] md:text-[24px] md:w-[768px] text-center mt-[14px]">
                        We envision a future where every startup can thrive with accessible, affordable, and powerful tools. We're building a platform that empowers businesses to scale seamlessly and efficiently. Join us in transforming how companies grow and succeed.
                    </p>

                    <div class="mt-[40px] relative top-4 z-30">
                        <Button  name="Contact us"/>
                    </div>
                </div>
            </div>
        </div>


        <LazyBlog/>


        <LazyContact/>


        <LazyAboutBelugar/>





    
    </div>


</template>



<script setup>


const startUpData = [
    {
        title:'Improved productivity',
        text:"Belugar helps startups streamline tasks, manage KPIs, run email and social media campaigns, handle project management, and more—all in one place. Its user-friendly design lets businesses focus on growth.",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M10.4515 22.6588L24.448 4.69302C25.5426 3.28794 27.5944 4.16248 27.5944 6.03414V19.9399C27.5944 21.061 28.399 21.97 29.3916 21.97H36.1992C37.7458 21.97 38.5702 24.0298 37.5484 25.3412L23.552 43.307C22.4574 44.712 20.4056 43.8376 20.4056 41.9658V28.0602C20.4056 26.939 19.601 26.03 18.6084 26.03H11.8007C10.2542 26.03 9.42988 23.9702 10.4515 22.6588Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    {
        title:'Reduced cost',
        text:"With Belugar's pricing, startups will greatly reduce the cost of running their businesses with a CRM product, and thereby, playing it safe at all times. This enables startups to channel their savings into other areas of their businesses for maximum growth.",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M42.5534 33.6708C41.2408 25.7732 37.1544 19.8923 33.602 16.438C32.5682 15.4328 32.0514 14.9303 30.9096 14.4651C29.7678 14 28.7864 14 26.8236 14H22.5124C20.5496 14 19.5682 14 18.4264 14.4651C17.2846 14.9303 16.7678 15.4328 15.734 16.438C12.1816 19.8923 8.09518 25.7732 6.7825 33.6708C5.80582 39.5468 11.2265 44 17.2846 44H32.0514C38.1094 44 43.5302 39.5468 42.5534 33.6708Z" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.1812 8.88574C14.7686 8.28516 14.1705 7.46998 15.4059 7.2841C16.6758 7.09302 17.9944 7.96228 19.2851 7.94442C20.4527 7.92826 21.0476 7.41038 21.6858 6.67096C22.3578 5.89234 23.3984 4 24.668 4C25.9376 4 26.9782 5.89234 27.6502 6.67096C28.2884 7.41038 28.8832 7.92826 30.0508 7.94442C31.3416 7.96228 32.6602 7.09302 33.93 7.2841C35.1654 7.46998 34.5674 8.28516 34.1548 8.88574L32.289 11.6013C31.491 12.7629 31.092 13.3437 30.2568 13.6719C29.4218 14 28.3426 14 26.1844 14H23.1516C20.9934 14 19.9142 14 19.0791 13.6719C18.244 13.3437 17.845 12.7629 17.0469 11.6013L15.1812 8.88574Z" stroke="#333333" stroke-width="3" stroke-linejoin="round"/>
        <path d="M27.9214 25.8372C27.489 24.241 25.2882 22.8006 22.6464 23.8782C20.0046 24.9556 19.5849 28.4226 23.581 28.791C25.387 28.9574 26.5646 28.5978 27.6426 29.6152C28.7208 30.6324 28.921 33.4616 26.165 34.224C23.409 34.9864 20.68 33.7952 20.3828 32.1034M24.3514 21.9854V23.5062M24.3514 34.4586V35.9854" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    },
    {
        title:'Business growth',
        text:"Belugar empowers startups to achieve sustainable business growth by providing essential tools that streamline operations, enhance productivity, and increase customer retention, helping businesses reach their full potential.",
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
        <path d="M4.33203 28C4.33203 20.9868 4.33203 17.4801 6.14795 15.1198C6.48039 14.6878 6.85181 14.2916 7.25689 13.937C9.46959 12 12.7571 12 19.332 12H29.332C35.907 12 39.1944 12 41.4072 13.937C41.8122 14.2916 42.1836 14.6878 42.516 15.1198C44.332 17.4801 44.332 20.9868 44.332 28C44.332 35.0132 44.332 38.52 42.516 40.8802C42.1836 41.3122 41.8122 41.7084 41.4072 42.063C39.1944 44 35.907 44 29.332 44H19.332C12.7571 44 9.46959 44 7.25689 42.063C6.85181 41.7084 6.48039 41.3122 6.14795 40.8802C4.33203 38.52 4.33203 35.0132 4.33203 28Z" stroke="#333333" stroke-width="3"/>
        <path d="M32.332 12C32.332 8.22876 32.332 6.34314 31.1604 5.17158C29.9888 4 28.1032 4 24.332 4C20.5608 4 18.6752 4 17.5036 5.17158C16.332 6.34314 16.332 8.22876 16.332 12" stroke="#333333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24.332 22C22.1228 22 20.332 23.3432 20.332 25C20.332 26.6568 22.1228 28 24.332 28C26.5412 28 28.332 29.3432 28.332 31C28.332 32.6568 26.5412 34 24.332 34M24.332 22C26.0736 22 27.5552 22.8348 28.1044 24M24.332 22V20M24.332 34C22.5904 34 21.1088 33.1652 20.5596 32M24.332 34V36" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
        <path d="M12.332 24H4.33203" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
        <path d="M44.332 24H36.332" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
        </svg>`
    },
]

</script>