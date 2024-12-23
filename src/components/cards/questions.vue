<template>
    <div class="carousel-container relative max-w-[1200px] mx-auto">
      <!-- Carousel Slides -->
      <div class="carousel-slides flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide min-w-full px-4 md:px-0">
          <div class="grid md:grid-cols-3 gap-4 w-full">
            <div class="md:col-span-2 px-[32px] md:px-[56px] py-[48px] bg-[#FBFCFD] rounded-[40px]">
                <div class="max-w-[508px] ">
                    <h3 class="text-[#8F8F8F] text-[20px] font-[500]">QUESTIONS?</h3>
                    <h4 class="mt-[20px] text-[#1D1D1D] font-[700] text-[20px] md:text-[24px]">{{ slide.heading }}</h4>

                    <p class="text-[#1D1D1D] font-[500] text-[14px] md:text-[16px] mt-[16px] leading-[25.5px]">
                        {{ slide.description }}
                    </p>
                    
                </div>

              <div class="flex justify-between items-center mt-[67px]">
                    <Button name="Get started"/>
                    <div class="flex items-center gap-2">
                        <button
                        class="inline-flex justify-center items-center h-10 w-10 border border-gray-800 rounded-full"
                        @click="prevSlide"
                        :disabled="currentIndex === 0"
                        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
                        >
                        <IconsArrowBack />
                        </button>

                        <button
                        class="inline-flex justify-center items-center h-10 w-10 border border-gray-800 rounded-full"
                        @click="nextSlide"
                        :disabled="currentIndex === slides.length - 1"
                        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === slides.length - 1 }"
                        >
                        <IconsArrowForward />
                        </button>

                    </div>
            </div>
            </div>
            <div class="hidden md:block">
              <img class="w-full min-h-[522px]" :src="slide.image" alt="Slide image"/>
            </div>

          

          </div>
        </div>
      </div>
  
      <!-- Prev Button -->
      <!-- <button
        class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        @click="prevSlide"
        :disabled="currentIndex === 0"
        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
      >
        <IconsArrowBack />
      </button> -->
  
      <!-- Next Button -->
      <!-- <button
        class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        @click="nextSlide"
        :disabled="currentIndex === slides.length - 1"
        :class="{ 'opacity-50 cursor-not-allowed': currentIndex === slides.length - 1 }"
      >
        <IconsArrowForward />
      </button> -->
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const slides = ref([
    {
      heading: 'How can I simplify managing my team and projects?',
      description: `Our comprehensive project management tool centralizes your team’s tasks, schedules, and communication. 
        With features like automated task assignments and real-time collaboration, managing projects from start to finish becomes seamless, ensuring that deadlines are met and your team stays productive. 
        Whether coordinating remote teams or handling multiple projects, this solution makes it simple to keep everything on track`,
      image: '/image1.png',
    },
    {
      heading: 'What’s the best way to keep my business finances in order?',
      description: `An all-in-one accounting solution is key to managing your finances efficiently. From tracking expenses to generating reports and preparing for taxes, the right platform automates these processes, reducing the time and effort required to keep your books in order. 
                  You can monitor your financial health in real-time, making informed decisions that drive business growth.`,
      image: '/image022.png',
    },
    {
      heading: 'How can I improve my customer relationships and sales?',
      description: `Belugar’s Integration of powerful CRM tools helps manage customer interactions, track leads, and boost sales. By centralizing customer data and automating follow-ups, you can nurture relationships more effectively and convert prospects into loyal customers. 
              Whether building a customer base or aiming to increase sales, these CRM features are designed to support your goals.`,
      image: '/image033.png',
    },
    {
      heading: 'How to handle business operations without juggling multiple apps?',
      description: 'Combining essential business tools (project management, accounting, CRM, and more) into a single, seamless platform means you no longer need to switch between different apps to manage your business. Everything you need is in one place, making operations more efficient and giving you more time to focus on growth.',
      image: '/image04.png',
    },
  ])
  
  const currentIndex = ref(0)
  
  const prevSlide = () => {
    if (currentIndex.value > 0) {
      currentIndex.value -= 1
    }
  }
  
  const nextSlide = () => {
    if (currentIndex.value < slides.value.length - 1) {
      currentIndex.value += 1
    }
  }
  </script>
  
  <style scoped>
  .carousel-container {
    overflow: hidden;
    position: relative;
  }
  
  .carousel-slides {
    display: flex;
    width: 100%;
  }
  
  .carousel-slide {
    min-width: 100%;
  }
  
  button:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  </style>
  