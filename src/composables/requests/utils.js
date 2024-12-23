import { useStore } from "@/stores";
import { baseURL } from "@/composables/configs"


export const getPlans = async() =>{
//   const pinia = useStore()
  const data = await fetch(`${baseURL}/base/order/fetch-pricing-plans`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    //   mode: 'no-cors',
  }).then(res => res.json());
  console.log("here.......",data)
  return data
}
