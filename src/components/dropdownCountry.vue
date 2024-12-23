<template>



        <div v-show="button1" class="flex items-center rounded-[8px] pl-[6px] justify-center">
                <span class="button-text mr-1">EN</span>
                <n-dropdown trigger="click" :options="options" @select="handleSelect">
                    <n-button quaternary circle>
                        <template #icon>
                            <n-icon>
                                <img class="max-w-[18px]" src="/button-icon.png"/>
                            </n-icon>
                        </template>
                    </n-button>
                </n-dropdown>
        </div>

        <div v-show="button2" class="flex items-center rounded-[8px] relative max-w-[110px]">
            <n-dropdown   trigger="click" :options="options" @select="handleSelect">
                <n-button quaternary @click="showDropdownRef = !showDropdownRef" style="background: #F4F7FA;">
                    <div  class="flex items-center">
                        <span class="button-text font-[400]">EN</span>
                        <n-icon class="flex mx-1 transition ease-in-out">
                            <img  class="max-w-[20px]" src="/button-icon.png"/>
                        </n-icon>
                        <svg :class="{'rotate-up ':showDropdownRef}"   class="transition ease-in-out duration-300 max-w-[24px]"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M19.9181 8.9502L13.3981 15.4702C12.6281 16.2402 11.3681 16.2402 10.5981 15.4702L4.07812 8.9502" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    </n-button>
            </n-dropdown>
        </div>


        <!-- <input type="checkbox" id="myInput">
        <label for="myInput">
            <span class="bar top"></span>
            <span class="bar middle"></span>
            <span class="bar bottom"></span>
        </label> -->

</template>

<script  setup>
import { NButton,NIcon,NDropdown} from 'naive-ui'


const showDropdownMenu = ref()

const { button1,button2} = defineProps({
    button1:{
        type:Boolean,
        default:false,
    },
    button2:{
        type:Boolean,
        default:false,
    }
})

// const message = useMessage()
const showDropdownRef = ref(false)



const  options =  [
        {
          label: 'Marina Bay Sands',
          key: 'Marina Bay Sands',
        //   disabled: true
        },
        {
          label: 'Brown\'s Hotel, London',
          key: 'Brown\'s Hotel, London'
        },
        {
          label: 'Atlantis Bahamas, Nassau',
          key: 'Atlantis Bahamas, Nassau'
        },
        {
          label: 'The Beverly Hills Hotel, Los Angeles',
          key: 'The Beverly Hills Hotel, Los Angeles'
        }
    ]

// showDropdown: showDropdownRef,
function handleSelect(key) {
// message.info(key)
}

// function handleClick() {
//     showDropdownRef.value = !showDropdownRef.value
// }

</script>


<style scoped>

.rotate-up {
  transform: rotate(180deg);
}

</style>



