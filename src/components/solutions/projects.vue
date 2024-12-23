<template>
    <div>
      <div class="bg-[#F4D3CD] rounded-[22.473px] p-[20px_15.527px_20px_15.527px] text-[#333] text-center
           flex flex-col justify-center items-center w-full card transition ease-in-out duration-1000 hover:transform hover:translate-y-[-180px]">
        <h4 class="text-[20px] font-[600] w-[189px] mb-2">Project & Team Management</h4>
  
        <div class="w-full mt-[10px]" v-for="i in 5" :key="i">
          <div class="bg-[#F9E9E6] flex flex-col justify-start items-start rounded-[8px] p-[8px_8px_8px_8px]">
            <div class="text-[8px] p-[4px] px-4 font-[600] indicator">
              new
            </div>
  
            <div class="text-[12px] font-[400] mt-[4px]">
              5 Projects completed
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<style scoped>
.indicator {
  background: rgba(66, 133, 244, 0.10);
  border-radius: 200px;
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.card {
  position: relative;
  transition: transform 1s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-180px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card:active {
  transform: translateY(-10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}
</style>
