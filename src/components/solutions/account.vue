<template>
    <div  class="bg-[#EFE4DC] rounded-[23.102px] p-[20px_15.527px_20px_15.527px] text-[#333] text-center
    flex flex-col justify-center items-center w-full card transition ease-in-out duration-1000 hover:transform hover:translate-y-[-70px]">
    <!--  -->
        <div class="flex justify-between items-center w-full">
            <h4 class="text-[18px] font-[600]">
                Accounting
            </h4>

            <div class="flex items-center gap-[10px] ">
                <div class="bg-[#F4F7FA] p-[4px] flex justify-center items-center rounded-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_916_2695)">
                        <path d="M10.5 7.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V7.5M8.5 4L6 1.5M6 1.5L3.5 4M6 1.5V7.5" stroke="#037599" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_916_2695">
                        <rect width="12" height="12" fill="white"/>
                        </clipPath>
                        </defs>
                     </svg>
                </div>
                <div class="bg-[#F4F7FA] p-[4px] flex justify-center items-center rounded-[4px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clip-path="url(#clip0_916_2698)">
                            <path d="M10.5 7.5V9.5C10.5 9.76522 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V7.5M3.5 5L6 7.5M6 7.5L8.5 5M6 7.5V1.5" stroke="#037599" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_916_2698">
                            <rect width="12" height="12" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>


            
        </div>
        
        <div class="w-full mt-4 table">
            <n-data-table
                size="small"
                :columns="columns"
                :data="data"
                :pagination="pagination"
                :row-class-name="rowClassName"
                />
        </div>
    </div>
</template>

<script setup>
import { NButton,NDataTable, NTag,NGradientText,NText } from 'naive-ui'

function createColumns({
  sendMail
}) {
  return [
    {
       title(column) {
        return h(
          NText,
          {
            size: '12',
          },
          { default: () => 'Customer' }
        )
      },
      key: "customer",
    },

    
    {
        title(column) {
        return h(
          NText,
          {
            size: '12',
          },
          { default: () => 'Amount' }
        )
      },
      key: "amount"
    },
  
   

    {
      title(column) {
        return h(
          NText,
          {
            size: '12',
          },
          { default: () => 'Status' }
        )
      },

      key: "status",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            bordered: false,
            secondary: true,
            type: row.status === 'due' ? "warning":"info",
            // color: row.status === 'due' ?  "#D9A10F" :"#037599",

            onClick: () => sendMail(console.log(row.status))
          },
          { default: () => row.status === 'due' ? "Due" :"Paid" }
        );
      }
    },
    {
      title(column) {
        return h(
          NText,
          {
            size: '12',
          },
          { default: () => 'Actions' }
        )
      },

      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            size: "small",
            color:"#037599",
            onClick: () => sendMail(row)
          },
          { default: () => "View" }
        );
      }
    },
  ];
}

function createData() {
  return [
    {
      key: 0,
      customer: "John Brown",
      amount: 32,
      address: "New York No. 1 Lake Park",
      status: "due"
    },
    {
      key: 1,
      customer: "Jim Green",
      amount: 42,
      address: "London No. 1 Lake Park",
       status: "due"
    },
    {
      key: 2,
      customer: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      status: "paid"
    },
    {
      key: 2,
      customer: "Joe Black",
      amount: 32,
      address: "Sidney No. 1 Lake Park",
      status: "paid"
    }
  ];
}


const rowClassName =(row)=> {

        if (row.status === 'due') {
          return "too-old";
        }
        return "";
}

console.log(createData().status === 'Due')

const data = createData()

const columns = createColumns({
        sendMail(rowData) {
        //   message.info(`send mail to ${rowData.name}`);
        }
  })

const  pagination= {
        pageSize: 10
      }
</script>


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
  transform: translateY(-70px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card:active {
  transform: translateY(-10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border: none !important;
}

.table :deep(.n-data-table-tr th) {
  background: #E9D9CE !important;
  border-bottom: none !important;
  padding: 10px !important;
}

:deep(.n-data-table-tr td) {
  border-bottom: none !important;
  padding: 10px !important;
}

.table :deep(.too-old td) {
  background: #F2E9E3 !important;
}

:deep(.n-data-table-wrapper){
    border: none !important;
}


.table :deep( .amount) {
  color: rgba(0, 0, 128, 0.75) !important;
}
</style>
