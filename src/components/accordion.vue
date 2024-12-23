<template>
    <div>
      <div 
        v-for="(item, index) in items" 
        :key="index" 
        class="border-t  border-[#A4E1F4]"
        :class="index + 1 === items.length ? 'border-b':''"
         >
        <!-- Accordion Header with transparent background -->
        <button 
          class="w-full text-left py-4 bg-transparent flex justify-between items-center focus:outline-none" 
          @click="toggle(index)"
        >
          <h3 class="text-lg font-[700] text-[#F1FAFD]">
            {{ item.title }}
          </h3>
          <!-- Icon that rotates based on accordion state -->
         

            <svg class="h-5 w-5 transition-transform duration-300" 
              :class="{'rotate-180': activeIndex === index}"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M23.8213 20.1767L23.8213 20.1767L23.4677 20.5303C23.4677 20.5303 23.4677 20.5303 23.4677 20.5303C23.3701 20.6279 23.2118 20.6279 23.1142 20.5303C23.1142 20.5303 23.1142 20.5303 23.1142 20.5303L16.3516 13.7677L15.9981 13.4141L15.6445 13.7677L8.88193 20.5303C8.78429 20.6279 8.62607 20.6279 8.52844 20.5303L8.17484 20.1767C8.0772 20.079 8.0772 19.9208 8.17484 19.8232L15.8213 12.1767C15.919 12.0791 16.0772 12.0791 16.1748 12.1767L23.8213 19.8232C23.8213 19.8232 23.8213 19.8232 23.8213 19.8232C23.9189 19.9208 23.9189 20.0791 23.8213 20.1767Z" fill="#A4E1F4" stroke="#A4E1F4"/>
            </svg>
        </button>
  
        <!-- Accordion Content with unified animation -->
        <transition name="accordion" @enter="onEnter" @leave="onLeave">
          <div 
            v-if="activeIndex === index" 
            ref="content"
            class="overflow-hidden bg-transparent"
          >
            <div class="pb-7 text-[#E6E6E6] text-[16px]">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Sample data for the accordion
  const items = ref([
    { title: 'Is Belugar free to use?', content: `Belugar is available for a monthly subscription fee of $1. However, we offer a free plan that gives access to just the social media feature, for startups willing to test our services before committing to a paid plan. Check out our Pricing page for more info` },
    { title: 'Why is Belugar so cheap?', content: 'Belugar is affordable due to its innovative business model, which leverages technology to minimize costs. We prioritize accessibility for startups, providing essential tools without compromising quality, all for just one dollar.' },
    { title: 'What features are available on the dollar bill plan?', content: 'The Dollar Bill plan includes essential features such as 5 users, 5 startups, unlimited social media posts, and email marketing tools, all designed to support startups in achieving their growth objectives efficiently.' },
    { title: "Will Belugar's pricing ever change?", content: 'While current pricing is designed to be affordable for startups, Belugar may adjust its pricing in the future to reflect enhancements and new features, ensuring users always receive great value.' },
    { title: "After adding extra teammates for $1 each, does this add up to my monthly bill?", content: 'Yes, any additional teammates added at $1 each will increase your monthly bill proportionally, allowing you to scale your team as needed while managing costs effectively.' },
    { title:"What happens after unlocking the premium invoice and email templates?", content: 'Unlocking the premium invoice and email templates grants you access to customizable, professional designs that enhance your branding and communication, streamlining your invoicing and email marketing processes for better engagement and efficiency.' },
  ])
  
  // Active accordion index
  const activeIndex = ref(0)
  
  // Toggle accordion state
  const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
  }
  
  // Functions to animate height
  const onEnter = (el) => {
    el.style.height = 0
    requestAnimationFrame(() => {
      el.style.height = el.scrollHeight + 'px'
    })
  }
  
  const onLeave = (el) => {
    el.style.height = el.scrollHeight + 'px'
    requestAnimationFrame(() => {
      el.style.height = 0
    })
  }
  </script>
  
  <style scoped>
  /* Smooth transition for accordion content with unified open/close animation */
  .accordion-enter-active, .accordion-leave-active {
    transition: height 0.3s ease;
  }
  
  .accordion-enter, .accordion-leave-to {
    height: 0;
  }
  
  /* Optional: rotating icon smooth transition */
  .rotate-180 {
    transform: rotate(180deg);
  }
  </style>
  