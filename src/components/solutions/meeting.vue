<template>

    <div  class="bg-[#DCECEF] rounded-[18.631px] p-[20px_15.527px_20px_15.527px] text-[#333] text-center
    flex flex-col justify-center items-center w-full card transition ease-in-out duration-1000 hover:transform hover:translate-y-[-170px]">
    <!-- hover:transform hover:translate-y-[-70px] -->

        <div class="flex justify-between items-center w-full">
            <h4 class="text-[18px] font-[600]">
                Meeting
            </h4>

            <div class="flex items-center gap-[10px] ">

                 <n-button :disabled="true" type="primary" size="small">
                    <span class="text-[12px]">Create meeting</span>
                 </n-button>
              
            </div>


            
        </div>


        <div class="flex items-start w-full mt-[18.8px] flex-col">
            <h4 class="text-[12px] font-[500] mb-[12px]">Attendees</h4>

            <ClientOnly>
                <n-checkbox v-model:checked="member" size="medium" label="All members" class="mb-[12px]"/>
            </ClientOnly>
            
            <n-select size="large"  v-model:value="value" :options="options"  class="mb-[12px]"  placeholder="Select members"/>

            <span class="text-[12px] font-[400] mb-[8px]">Duration</span>
            
            <n-date-picker size="small" v-model:value="range" type="daterange" clearable />
            
            <span class="text-[12px] font-[400] mt-[12px] mb-[8px]">Repeat on</span>


            <ClientOnly>
                <n-checkbox size="medium" label="Everyday" class="mb-[14px]"/>
            </ClientOnly>
            
            <n-date-picker v-model:value="timestamp" type="date" size="small" class="w-full"  placeholder="Select days"/>

            <span class="text-[12px] font-[400] mt-[12px] mb-[8px]">Location</span>

            <ClientOnly>

                <div class="flex gap-4 mb-3">
                    <n-checkbox size="medium" label="Physical" class="mb-[14px]"/>
                    <n-checkbox size="medium" label="Virtual" class="mb-[14px]"/>
                </div>
            </ClientOnly>

            <n-select size="large"  v-model:value="value" :options="options"  class="mb-[12px]"  placeholder="Select platform"/>


        </div>


    </div>

</template>


<script setup>
import { NButton,NCheckbox,NSelect,NDatePicker} from 'naive-ui'

// const   range = ref([118313526e4, Date.now()])

const value = ref(null)
const timestamp = ref(null)
const range = ref(null)
const member = ref(null)

const options = [
        {
          label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
          value: 'song0',
        },
        {
          label: 'Drive My Car',
          value: 'song1'
        },
        {
          label: 'Norwegian Wood',
          value: 'song2'
        },
    ]

</script>

<style scoped>
:deep(.n-input) {
    min-height: 40px;
    border-radius: 8px;

}
:deep(.n-base-selection ){
    border-radius: 8px;
}
</style>