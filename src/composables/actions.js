import { useStore } from "@/stores";

import { getPlans } from "@/composables/requests/utils"
// import { baseURL } from "@/composables/configs"


export const get_Plans = async()=>{

    const pinia= useStore()

    pinia.state.isloadingPriceCard = true

    try{
        
        const data = await getPlans()
        if(data.length){
            pinia.setpricingPlans(data)
            console.log('data',pinia.state.pricingPlans)
        }else{
        // showNotification(`${data.message}`)
      }

      pinia.state.isloadingPriceCard = false

    }catch(e){

        console.log(e)

    }finally{

        pinia.state.isloadingPriceCard = false

    }

}