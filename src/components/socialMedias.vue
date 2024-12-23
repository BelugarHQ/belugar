
<template>
    <div class="flex relative items-center">
      <!-- Icons Container Loop -->
      <div v-for="(icon, index) in icons" :key="index">
        <div class="flex justify-center items-center absolute" 
             :style="`left: ${index * 2}rem`">
          <!-- Replace dynamic z-index class with static classes -->
          <div :class="[
            'relative w-10 h-10 rounded-full',
            'bg-[#2e33380d] bg-opacity-10 backdrop-blur-md',
            'border border-white border-opacity-20',
            `z-${getZIndex(index)}`
          ]">
            <div class="absolute inset-0 flex justify-center items-center">
              <component :is="icon.component" v-if="icon.component" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Additional Information -->
      <span class="absolute left-44 text-[600] text-[20px]">+17</span>
      <span class="absolute left-52 ml-1 text-[#454545] font-[400] text-[14px]">Integrations</span>
    </div>
</template>


<script setup>
import { ref } from 'vue';
  
import fbhome from '@/components/icons/fbhome.vue';
import med from '@/components/icons/med.vue';
import instagram from '@/components/icons/instagram.vue';
import vscode from '@/components/icons/vscode.vue';
import mail from '@/components/icons/mail.vue';
  

// Pre-define z-index values
const getZIndex = (index) => {
  const zIndexes = ['10', '20', '30', '40', '50'];
  return zIndexes[index] || '10';
};


const icons = ref([
  { component: fbhome },
  { component: med },
  { component: instagram },
  { component: vscode },
  { component: mail },
]);

</script>