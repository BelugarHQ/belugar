<template>

<div class="md:min-h-[1000px] min-h-[2600px] relative">
            <div class="relative ">
                <div class="h-[978px] overflow-hidden z-10 relative top-0  left-0">
                    <img class=" z-30 absolute top-0  left-40" src="/gridblocks.png"/>
                    <img class=" z-20 absolute top-0  left-0  opacity-10" src="/hori-lines.png"/>
                    <img class=" z-20 absolute top-0  left-0 opacity-10" src="/verti-lines.png"/>
                </div>

                <div class="absolute top-0 left-0 pt-[110px]  z-[2] w-full">

                    <div class="bg-[#1D211E] min-h-[900px] z-[2px] pb-8 px-4 md:px-0">

                        <div class="max-w-[1200px] mx-auto w-full py-[70px] text-[#F4F7FA]">
                            <span class="text-[#F4F7FA] text-[16px] font-[600]">Blog</span>
                            <h4 class="md:text-[48px] text-[24px] mt-[16px] md:w-[768px] font-[700] md:leading-[57.6px]">Contents that matter to your business</h4>

                            <div class="flex flex-col  md:flex-row justify-between md:items-center mt-4 md:mt-[24px] relative">
                                <p class="text-[18px] font-[400] text-[] mb-4 md:mb-0">We are always updating our services and you can learn more about them on our blog</p>
                                 <Button name="Visit blog" />
                            </div>

                            <div class="mt-[40px]">
                                <CardsBlog/>
                            </div>

                        </div>

                          
                    </div>

                </div>
            </div>

        </div>

</template>