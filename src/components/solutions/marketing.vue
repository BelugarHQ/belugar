<template>
    <div  @mouseenter.stop="hover = true" @mouseleave.stop="hover = false"
    class="bg-[#C9D9D7] rounded-[18.631px] p-[20px_15.527px_20px_15.527px] text-[#333] text-center
    flex flex-col justify-center items-center w-full card transition ease-in-out duration-1000 du hover:transform hover:translate-y-[-160px]">    
           

        <div class="flex flex-col justify-between items-center text-center w-full">
            <h4 class="text-[18px] font-[600] w-full">
                Marketing
            </h4>

            <div class="relative mt-[35px]">

                <img class="w-[145px] h-[55px] relative -left-[80px]  transition ease-in-out duration-700" src="/social/reddit.png"
                  :class="hover == true ? 'transform translate-x-[20px] ':''"/>
                <img class="w-[145px] h-[55px] relative bottom-3.5 left-[80px] transition ease-in-out duration-700" src="/social/insta.png"
                :class="hover == true ? 'transform translate-x-[-20px]':''"/>
                <img class="w-[145px] h-[55px] relative  bottom-3.5 -left-[80px] transition ease-in-out duration-700" src="/social/linkedIn.png"
                :class="hover == true ? 'transform translate-x-[20px]':''"/>
                <img class="w-[145px] h-[55px] relative  bottom-5 left-[80px] transition ease-in-out duration-700" src="/social/fb.png "
                :class="hover == true ? ' transform translate-x-[-20px]':''"/>
                <img class="w-[145px] h-[55px] relative  bottom-3.5 -left-[80px] transition ease-in-out duration-700" src="/social/x.png"
                :class="hover == true ? 'transform translate-x-[20px]':''"/>
                <img class="w-[145px] h-[55px] relative  bottom-8 left-[90px] transition ease-in-out duration-700" src="/social/reddit.png"
                :class="hover == true ? 'transform translate-x-[-20px]':''"/>

            </div>


            <div>
                <Button name="Post"/>
            </div>

         


            
        </div>


    </div>
</template>

<script setup>


const hover = ref(false)
</script>
