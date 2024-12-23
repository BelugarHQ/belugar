



<template>
    <div  @mouseenter.stop="hover = true" @mouseleave.stop="hover = false"
    class=" bg-[#EFECDC] rounded-[18.631px] p-[20px_15.527px_20px_15.527px] text-[#333] text-center
    flex flex-col justify-center items-center w-full card transition ease-in-out duration-1000 hover:transform hover:translate-y-[-150px]">    
           

        <div class="flex flex-col justify-between items-center text-center w-full">
            <h4 class="text-[18px] font-[600] w-full">
                Blogging
            </h4>

            <div class="relative my-[35px]">

                <img class="max-w-[145px] h-[55px] relative left-[30px]  transition ease-in-out duration-700" src="/blogs/blog1.png"
                  :class="hover == true ? 'transform translate-y-[-20px] ':''"/>
                <img class="max-w-[145px] h-[55px] relative -left-[80px]  transition ease-in-out duration-700" src="/blogs/blog2.png"
                  :class="hover == true ? 'transform translate-y-[-20px] ':''"/>
                <img class="max-w-[145px] h-[55px] relative left-[80px]  transition ease-in-out duration-700" src="/blogs/blog3.png"
                  :class="hover == true ? 'transform translate-y-[-20px] ':''"/>
                <img class="max-w-[145px] h-[55px] relative -left-[30px]  transition ease-in-out duration-700" src="/blogs/blog4.png"
                  :class="hover == true ? 'transform translate-y-[-20px] ':''"/>

            </div>


            <div>
                <Button name="Post" height="42px"/>
            </div>

         


            
        </div>


    </div>
</template>

<script setup>


const hover = ref(false)
</script>