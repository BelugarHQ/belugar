<template>
    <div class="border table-cont gap-x-4 overflow-hidden w-[1000px] md:w-full">
        <div class="overflow-x-scroll ">
            <div class="grid grid-cols-4 ">
                <div class="  px-6  flex justify-center items-center text-left">
                    <h4 class="text-[20px] md:text-[32px] font-[700]">Available plans and features</h4>
                </div>
    
                <div class="p-6">
                    <div class="pb-6 ">
                        <div class="flex">
                            <h4 class="text-[18px] md:text-[20px] font-[700]">Free</h4>
                        </div>
                        <p class="font-[400] text-[14px] text-left mb-4">No membership fee</p>
    
                        <Button name="Get started" color="#137973" width="100%"/>
                    </div>
                </div>
                <div class="p-6">
                    <div class="pb-6 ">
                        <div class="flex">
                            <h4 class="text-[18px] md:text-[20px] font-[700]">Monthly</h4>
                        </div>
                        <p class="font-[400] text-[14px] text-left mb-4">+ One-time $1 membership fee</p>
    
                        <Button name="Get started" color="#137973" width="100%"/>
                    </div>
                </div>
                <div class="p-6">
                    <div class="pb-6 ">
                        <div class="flex">
                            <h4 class="text-[18px] md:text-[20px] font-[700]">Yearly</h4>
                        </div>
                        <p class="font-[400] text-[14px] text-left mb-4">+ One-time $1 membership fee</p>
    
                        <Button name="Get started" color="#137973" width="100%"/>
                    </div>
                </div>
            </div>
        </div>

        <table class="min-w-full bg-white border border-gray-200 rounded-[12px] overflow-x-scroll">
            <thead class="rounded-[12px]">
                <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left ">Feature</th>
                <th class="py-3 px-6 text-left"></th>
                <th class="py-3 px-6 text-center"></th>
                <th class="py-3 px-6 text-center"></th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light rounded-[12px]">
                <tr v-for="(user, index) in features" :key="index" class="border-b border-gray-200 hover:bg-gray-100 rounded-[12px]">

                <td class="py-3 px-6 text-left border-x w-[25%]">
                    {{ user.feature }}
                </td>

                <td class="py-3 px-6 flex justify-center items-center text-center border-x">
                    <div>
                        <span v-if="user.free !== 'icon'">{{ user.free }} </span>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="#333333"/>
                        </svg>
                    </div>
                </td>
                
                <td class="py-3 px-6  text-center border-x">
                    

                    <div class="flex justify-center items-center ">

                        <svg  v-if="user.monthly  === 'icon'"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="#333333"/>
                        </svg>
                        <span v-else> {{ user.monthly }}</span>
                       
                    </div>


                </td>

                <td class="py-3 px-6  text-center border-x">
                    

                    <div class="flex justify-center items-center ">

                        <svg  v-if="user.yearly  === 'icon'"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="#333333"/>
                        </svg>
                        <span v-else> {{ user.yearly }}</span>
                       
                    </div>


                </td>
                <!-- <td class="py-3 px-6 text-center border-x">{{ user.yearly }}</td> -->
                </tr>
            </tbody>
        </table>

        <table class="min-w-full bg-white border border-gray-200 rounded-[12px] overflow-x-scroll">
            <thead class="rounded-[12px]">
                <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left ">Extra charges</th>
                <th class="py-3 px-6 text-left"></th>
                <th class="py-3 px-6 text-center"></th>
                <th class="py-3 px-6 text-center"></th>
                </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light rounded-[12px]">
                <tr v-for="(user, index) in charges" :key="index" class="border-b border-gray-200 hover:bg-gray-100 rounded-[12px]">

                <td class="py-3 px-6 text-left border-x w-[25%]">
                    {{ user.charge }}
                </td>

                <td class="py-3 px-6 flex justify-center items-center text-center border-x">
                    <div>
                        <span v-if="user.free !== 'icon'">{{ user.free }} </span>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="#333333"/>
                        </svg>
                    </div>
                </td>
                
                <td class="py-3 px-6  text-center border-x">
                    

                    <div class="flex justify-center items-center ">

                        <svg  v-if="user.monthly  === 'icon'"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="#333333"/>
                        </svg>
                        <span v-else> {{ user.monthly }}</span>
                       
                    </div>


                </td>

                <td class="py-3 px-6  text-center border-x">
                    

                    <div class="flex justify-center items-center ">

                        <svg  v-if="user.yearly  === 'icon'"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z" fill="#333333"/>
                        </svg>
                        <span v-else> {{ user.yearly }}</span>
                       
                    </div>


                </td>
                <!-- <td class="py-3 px-6 text-center border-x">{{ user.yearly }}</td> -->
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import { ref } from 'vue'

// Sample users data
const features = ref([
  { feature: 'Users/Team size', free: '1', monthly: '5', yearly: '5' },
  { feature: 'Start up', free: '1', monthly: '5', yearly: '5' },
  { feature: 'Social media posts per month', free: '1', monthly: 'Unlimited', yearly: 'Unlimited' },
  { feature: '100MB storage', free: 'icon', monthly: 'icon', yearly: 'icon' },
  { feature: 'Email marketing', free: 'Not available', monthly: 'icon', yearly: 'icon' },
  { feature: 'Email & Invoice Template', free: 'Not available', monthly: 'icon', yearly: 'icon' },
  { feature: 'Unlimited storage', free: 'Not available', monthly: 'icon', yearly: 'icon' },
  { feature: 'Usage statistics & Analytics', free: 'Not available', monthly: 'icon', yearly: 'icon' },
  { feature: 'Task scheduling', free: 'Not available', monthly: 'icon', yearly: 'icon' },
  { feature: 'AI Content Generator', free: 'Not available', monthly: 'icon', yearly: 'icon' },
  { feature: 'All Belugar Integrations', free: 'Not available', monthly: 'icon', yearly: 'icon' },
]);


const charges = ref([
  { charge: 'Add more users', free: 'Not available', monthly: '$1', yearly: '$10' },
  { charge: 'Add more startups/Businesses', free: 'Not available', monthly: '$1/Startup', yearly: '$1/Startup' },
  { charge: 'Add more storage', free: 'Not available', monthly: '$0.098/MB', yearly: '$0.098/MB' },
]);


// Get status class based on user status
const getStatusClass = (status) => {
  switch (status) {
    case 'Active':
      return 'text-green-500'
    case 'Inactive':
      return 'text-red-500'
    case 'Pending':
      return 'text-yellow-500'
    default:
      return ''
  }
}
</script>

<style scoped>

.table-cont{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid rgba(102, 102, 102, 0.56);
    background: #F1F5F9;
}
</style>