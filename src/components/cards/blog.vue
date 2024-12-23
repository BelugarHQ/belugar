<template>
    <div class="grid  grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="i in 4">
            <div class=" items-center grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="/blogs/1.png"/>
                <div class="md:ml-[24px]">
    
                    <div class="flex items-center">
    
                        <div class="blog-content text-[#009969] text-[14px] font-[600]">
                            templates
                        </div>
        
                        <span class="text-[#F4F7FA] text-[14px] font-[600] ml-[10px]">5 min read</span>
                    </div>
                    
                    <div class="mt-[16px]">
                        <h4 class="text-[#F4F7FA] text-[24px] font-[700]">New Invoice template</h4>
                        <p class="text-[#F4F7FA] text-[16px] font-[400] leading-[24px]">
                            Some bunch of words to make up this space because this is the full width of this textbox
                        </p>
                    </div>
    
                    <button class="inline-flex justify-center items-center text-[#F4F7FA] text-[16px] font-[400] leading-[24px] mt-[32px]">
                        <span class="">Read more</span>
                        <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none">
                        <path d="M9.70697 17.4496L15.414 11.7426L9.70697 6.03564L8.29297 7.44964L12.586 11.7426L8.29297 16.0356L9.70697 17.4496Z" fill="#F4F7FA"/>
                        </svg>
                    </button>
    
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>

   const  blogs =[
    {
        id:1,
        

    }
   ]
</script>


<style scoped>

.blog-content{
    border-radius: var(--sds-size-blur-100);
    opacity: var(--sds-size-stroke-border);
    background: rgba(0, 153, 105, 0.10);
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
}
</style>