<template>
    <div>
        <div class="relative min-h-[700px] overflow-hidden">
    
            <div class="min-h-[978px] w-full overflow-hidden absolute top-0 opacity-70  left-0">
                <img class=" z-30 absolute top-40  left-40" src="/gridblocks.png"/>
                <img class=" z-20 absolute -top-10  left-0  opacity-[0.18]" src="/hori-lines.png"/>
                <img class=" z-20 absolute top-0  left-0 opacity-[0.18]" src="/verti-lines.png"/>
            </div>
                    
            <div class="flex flex-col justify-center items-center h-full max-w-[1200px] mx-auto  px-4 md:px-0 ">
    
                <div class="flex flex-col text-center  pt-[8rem]  md:pt-[11rem]  max-w-[792px]">
    
                        <h1 class="text-[24px] md:text-[48px] font-[700] text-[#333]">Empowering Your Business with Comprehensive Solutions</h1>
                        <p class="mt-[30px] text-[16px] text-[#333]">Explore our suite of AI-powered tools designed to streamline every aspect of your business.</p>
                        
                </div>
    
                
            </div>
    
            <div class="w-full ">
                <ClientOnly>
                    <CardsSolutionCarousel/>
                </ClientOnly>
            </div>
    
    
            <div class="flex flex-col relative mt-[90px]">
                <div class="max-w-[1200px] mx-auto  px-4 md:px-0">
                    <h3 class="md:text-[32px] text-[20px] w-[297px] md:w-full font-[600] text-center">Complex accounting decisions simplified</h3>
                </div>
    
                <ClientOnly>

                    <Marque :marqueData="marqueData"/>
                </ClientOnly>
    
                <div class="max-w-[1200px] mx-auto  px-4 md:px-0 md:mt-[60px]">
    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                       
    
                       <CardsSolution2 :dataValue="solution2.account" marginTop="127px"/>
    
                       <CardsSolution :dataValue="solution.account" backgroundColor="#EAF0F5" image-width="400px" right="0px" />
    
                    </div>
                </div>
    
            </div>
    
        </div>

        <div class="flex flex-col relative mt-[50px] md:mt-[92px]">
            <div class="max-w-[1200px] mx-auto  px-4 md:px-0">
                <h3 class="md:text-[32px] text-[20px] w-[297px] md:w-full font-[600] text-center">Efficiently manage content on multiple platforms.</h3>
            </div>
    
            <ClientOnly>
                <Marque :marqueData="marqueBlogData"/>
            </ClientOnly>
    
            <div class="max-w-[1200px] mx-auto  px-4 md:px-0 mt-[60px]">
    
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                   
    
                    <CardsSolution :dataValue="solution.blogging" backgroundColor="#EAEAF5" image-width="236px" right="20px" top="20px"/>

                    <CardsSolution2 :dataValue="solution2.blogging" marginTop="60px" />
    
    
                </div>
            </div>
    
        </div>


        <div class="flex flex-col relative  mt-[50px]  md:mt-[92px]">
                <div class="max-w-[1200px] mx-auto  px-4 md:px-0">
                    <h3 class="md:text-[32px] text-[20px] w-[297px] md:w-full font-[600] text-center">Unlock Powerful Marketing Tools to Drive Sales and Stay Ahead</h3>
                </div>
    
                <ClientOnly>
                    <Marque :marqueData="marqueMarketData"/>
                </ClientOnly>
    
                <div class="max-w-[1200px] mx-auto  px-4 md:px-0 mt-[60px]">
    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                       
    
                        <CardsSolution2 :dataValue="solution2.marketing" marginTop="80px"/>

                        <CardsSolution :dataValue="solution.marketing" backgroundColor="#F4EAF5" image-width="300px" right="0px" top="-24px" />
    
    
                    </div>
                </div>
    
        </div>


        <div class="flex flex-col relative  mt-[50px]  md:mt-[92px]">
            <div class="max-w-[1200px] mx-auto  px-4 md:px-0">
                <h3 class="md:text-[32px] text-[20px] w-[297px] md:w-full font-[600] text-center">Automate recurring and one-time meetings</h3>
            </div>
    
            <ClientOnly>
                <Marque :marqueData="marqueMeetingData"/>
            </ClientOnly>
    
            <div class="max-w-[1200px] mx-auto  px-4 md:px-0 mt-[60px]">
    
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                   
    
                    <CardsSolution :dataValue="solution.meeting" backgroundColor="#EAF5F1" image-width="400px" right="-20px" top="110px"/>

                    <CardsSolution2 :dataValue="solution2.meeting" marginTop="40px" />
    
    
                </div>

            </div>
    
        </div>

        <div class="flex flex-col relative  mt-[50px]  md:mt-[92px]">
                <div class="max-w-[1200px] mx-auto  px-4 md:px-0">
                    <h3 class="md:text-[32px] text-[20px] w-[297px] md:w-full font-[600] text-center">Unlock Powerful Marketing Tools to Drive Sales and Stay Ahead</h3>
                </div>
    
                <ClientOnly>
                    <Marque :marqueData="marqueMarketData"/>
                </ClientOnly>
    
                <div class="max-w-[1200px] mx-auto  px-4 md:px-0 mt-[60px]">
    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                       
    
                        <CardsSolution2 :dataValue="solution2.project" marginTop="80px"/>

                        <CardsSolution :dataValue="solution.project" backgroundColor="#F4EAF5" image-width="300px" right="-30px" top="-24px" />
    
    
                    </div>

                </div>
    
        </div>

        <div class="flex flex-col relative  mt-[50px]  md:mt-[92px]">
            <div class="max-w-[1200px] mx-auto  px-4 md:px-0">
                <h3 class="md:text-[32px] text-[20px] w-[297px] md:w-full font-[600] text-center">Organize Your Team with Strategic Role Assignments</h3>
            </div>
    
            <ClientOnly>
                <Marque :marqueData="marqueTeamData"/>
            </ClientOnly>
    
            <div class="max-w-[1200px] mx-auto  px-4 md:px-0 mt-[60px]">
    
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                   
    
                    <CardsSolution :dataValue="solution.team" backgroundColor="#DAE0E4" image-width="400px" right="0px" top="90px"/>

                    <CardsSolution2 :dataValue="solution2.team" marginTop="40px" />
    
    
                </div>
            </div>
    
        </div>


        <div class="bg-[#0E7878] md:min-h-[657px] mt-[92px]">

            <div class="flex flex-col justify-center items-center w-full pt-[56px] relative ">

                <h3 class="text-[#F5F5F5]  text-[24px] font-[600] leading-[44.8px] px-4 md:px-0">Unlock your business potential</h3>
                <p class="text-[#F0F0F0] text-[16px] font-[400] px-4 md:px-0">Modernize, streamline, and automate work with ease</p>
                
                <div class="w-[250px] relative mt-10 md:mt-32 min-h-[100px] md:min-h-56">
                    <ClientOnly>
                        <Iconbg class="absolute left-[90px] -top-10 fade-up icon-vscode" icons="/icons/vs_code.svg"/>
                    </ClientOnly>
                    <ClientOnly>
                        <Iconbg class="absolute right-5 top-5 fade-up icon-md" icons="/icons/m.png"/>
                    </ClientOnly>
                    <ClientOnly>
                        <Iconbg class="absolute top-20 fade-up icon-instagram" icons="/icons/insta.svg"/>
                    </ClientOnly>
                    <ClientOnly>
                        <Iconbg class="absolute left-[90px] top-28 fade-up icon-mail" icons="/icons/gmail.svg"/>
                    </ClientOnly>

                    <ClientOnly>
                        <Iconbg class="absolute left-[90px] top-10 fade-up icon-mailgun" icons="/icons/mailgun.svg"/>
                    </ClientOnly>

                    <ClientOnly>
                        <Iconbg class="absolute right-8 top-28 fade-up icon-hash" icons="/icons/hashnode.svg"/>
                    </ClientOnly>

                    <ClientOnly>
                        <Iconbg class="absolute left-10 top-36 fade-up icon-dev" icons="/icons/devto1.svg"/>
                    </ClientOnly>

                    <ClientOnly>
                        <Iconbg class="absolute fade-up icon-googlemeet" icons="/icons/gm.svg"/>
                    </ClientOnly>
                </div>

                <div class="flex max-w-[399px] relative shadow-2xl">
                    <img src="/logo01.png"/>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>

// Add these imports at the top of the script

    const marqueData = [
        'Financial Analytics',
        'Monthly Financial Statements',
        'Daily Financial Statements',
        'Add/View/Edit/Delete Financial Records',
        'Export Financial Records',
        'Data Range Filter Records',
        'Fully Customizable Customer Templates',
        " "
    ]

    const  marqueBlogData =[
        "Feature-rich blogging experience",
        "Create and publish engaging contents",
        "Easily update contents across all channels",
        "Improved blogging canonical links and meta data",
        "Leverage Belugar's feature-rich blogging Space",
        "Generate SEO-friendly contents with AI",
        " "
    ]

    const  marqueMarketData =[
        "Feature-rich marketing experience",
        "Create and publish email marketing campaigns",
        "Create and publish social media campaigns",
        "Enhanced and categorized subscriber lists",
        "Improve email delivery score with optional campaign opt-out links",
        "Get insights, stats and more on social media campaigns",
        "Key metrics for improving marketing decision making",
        " .."
    ]

    const  marqueMeetingData =[
        "Multiple meeting functions",
        "Time zone adjustments",
        "Pre-set agendas",
        "Repetitive meeting setup",
        "Customizable Templates",
        "Smart Scheduling",
        "Seamless Calendar Integration",
        "Automated Reminders",
        "Meeting Analytics",
        "Meeting Transcription and Summary"

    ]

    const  marqueProjectData =[
        "Project Financial Analytics",
        "Set Budget and Expenditures",
        "View Project's progress report",
        "View Project's tasks summary",
        "Assign team members to project",
        "View team member's contributions",
        "Get new concepts from investors, customers etc. on your roadmap board",
        "View Community Notes from project concepts"
    ]

    const  marqueTeamData =[
        "Role-Based Access Control",
        "Easy Team Member Onboarding",
        "Comprehensive Team Directory",
        "Task Assignment & Monitoring",
        "Performance Tracking",
        "Role-Based Access Control",
        "Easy Team Member Onboarding",
        "Comprehensive Team Directory",
        "Task Assignment & Monitoring",
        "Performance Tracking"
    ]

    const  marqueIntData =[
        "text-davinci-003",
        "text-davinci-002",
        "text-curie-001",
        "text-babbage-001",
        "text-ada-001",
        "text-davinci-edit-001",
        "code-davinci-edit-001",
        "text-davinci-edit-001",
        "code-davinci-edit-001",
        "gpt-4",
        "gpt-4-0314",
        "gpt-4-32k",
        "gpt-4-32k-0314",
        "gpt-3.5-turbo"

    ]

const solution = {
    account:{
        heading:'A powerful Financial Tool for Your  Business Success',
        body:[
            {title:'Key Financial Metrics ',text:'Track essential financial stats and performance indicators.',image:'/laptop-mockup.png'},
            {title:'Comprehensive Insights',text:'Gain daily and monthly insights into your sales, expenses, and earnings across all currencies',image:'/acct/business.png'},
            {title:'Seamless Financial Management',text:'Easily import/export financial records in multiple formats.',image:'/acct/image16.png'},
            {title:'Customizable Invoices',text:'Send fully customizable, professional invoices to your customers.',image:'/acct/group48.png'},
            {title:'Tailored Email Templates',text:'Create and send personalized, professional email templates to enhance customer communication.',image:'/acct/group49.png'},
        ]
    },

    blogging:{
        heading:'Enhance Your Blogging with Smart Tools',
        body:[
            {title:'Effortless Content Management ',text:'Create and publish email marketing campaigns to selected set of subscribers.',image:'/blogs/postcard.png'},
            {title:'Belugar Spaces',text:'Create in a distraction-free environment tailored for startup founders, designed to optimize inbound marketing',image:'/blogs/postcard2.png'},
            // {title:'Seamless Financial Management',text:'Easily import/export financial records in multiple formats.',image:'/acct/image16.png'},
        ]
    },

    marketing:{
        heading:'Powerful Tools for an Exceptional Marketing Experience',
        body:[
            {title:'Email Campaign Management ',text:'Publish and manage blog posts across 4 channels, with AI-generated, SEO-friendly content to boost engagement',image:'/market/m1.png'},
            {title:'Subscriber List Management',text:'Organize and segment subscribers for targeted campaigns, with automatic conversion of waitlist signups into subscribers',image:'/market/m2.png'},
            {title:'Import/Export Subscriber List',text:'Seamlessly import or export your subscriber lists for easy management.',image:'/market/m3.png'},
            {title:'Social Media Management',text:'Publish and manage posts across 6+ social media channels, streamlining your social media presence',image:'/market/m1.png'},
        ]
    },

    meeting:{
        heading:'Automate Meetings & Boost Team Productivity',
        body:[
            {title:'Improved productivity with meetings ',text:'Create and manage one-time or recurring team meetings',image:'/meet.png'},
        ]
    },

    project:{
        heading:'Smart Tools for Maximum Productivity',
        body:[
            {title:'Comprehensive Project Metrics',text:'Get a complete overview of your projects, including financial stats, progress insights, and team usage statistics',image:'/project/p1.png'},
            {title:'Task Assignment & Management',text:'Assign and manage tasks effortlessly. Your development team can directly work on and update tasks within Visual Studio Code, streamlining the workflow.',image:'/meet.png'},
            {title:'Budget Monitoring & Control ',text:'Track your project’s budget and expenditures in real-time. Make informed decisions to optimize spending and reduce production costs.',image:'/meet.png'},
            {title:'Interactive Roadmaps ',text:"Engage your users with transparent roadmaps. Allow them to suggest new features and provide feedback to enhance your product's development.",image:'/meet.png'},
        ]
    },

    team:{
        heading:'Excellent Team Management Tools',
        body:[
            {title:'Create and Assign Roles',text:'Manage your team members with access-based roles',image:'/team/t1.png'},
            {title:'Simplified Task Assignment ',text:'Assign and manage tasks effortlessly. Track performance of members with measured KPI’s and task completion rate',image:'/team/t2.png'},
        ]
    },

}

const solution2 = {
    account:{
        heading:'Accounting',
        desc:"Keep track of your business' sales, expenses and get insights on your monthly financial status with ease",
        text:[
            'Easily move financial data for analysis or presentation',
            "Track your business' financial performance across all currencies.",
            "Create and send custom invoices for products and payments."
        ]
    },

    blogging:{
        heading:'Blogging',
        desc:"Boost inbound marketing with SEO-rich content on Beluga Spaces, Hashnode, Medium, and Dev.to",
        text:[
            'Efficiently manage blog posts across multiple platforms.',
            "Create SEO-optimized content effortlessly",
            "Rack subscriber data and content performance."
        ]
    },
    marketing:{
        heading:'Marketing',
        desc:"Boost sales and increase brand awareness with Belugar's marketing services. Effortlessly create waitlists, launch surveys, and manage social media and email campaigns across all your business channels",
        text:[
            'Create and publish posts and emails effortlessly',
            "Publish across channels, create waitlists, and run surveys",
            "Generate content with AI and access key performance insights"
        ]
    },
    meeting:{
        heading:'Meetings',
        desc:"Schedule and automate your team's meeting using Google Meet, Zoom or any other meeting channels you love",
        text:[
            'Schedule and manage one-time or recurring meetings linked to your calendar',
            "Create, update, and manage team meetings with an intuitive interface.",
            "Utilize Google Meet, Zoom, or any preferred platform for unlimited meeting options."
        ]
    },
    project:{
        heading:'Project Management',
        desc:"Boost your team's productivity with a robust project management service, featuring an interactive project roadmap board for seamless audience engagement.",
        text:[
            'Create, manage, and track project status with an intuitive interface, ideal for all users.',
            "Monitor task progress, identify bottlenecks, and manage project budgets to ensure efficient resource allocation.",
            "Engage your audience with transparent project roadmaps, allowing for feature requests and feedback integration."
        ]
    },

    team:{
        heading:'Team Management',
        desc:"Manage and assign roles to your team members, giving them tailored access to your Belugar business dashboard",
        text:[
            'Effortlessly onboard, manage, and assign tasks to team members',
            "Assign tasks directly from team profiles, with the ability for developers to work within Visual Studio Code.",
            "Track team members' impact on your business with key metrics, including task completion rates and activity KPIs."
        ]
    },

    
}


</script>


<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.acct1{
    border-radius: var(--Blur-100, 4px);
    border: var(--sds-size-stroke-border) solid #00A370;
    background: rgba(0, 163, 112, 0.10);
    display: flex;
    width: 356px;
    padding: 16px;
    align-items: center;
    gap: 10px;
}

.acct2{
    border-radius: var(--Blur-100, 4px);
    border: var(--sds-size-stroke-border) solid #FF4A38;
    background: rgba(255, 74, 56, 0.10);
    display: flex;
    width: 356px;
    padding: 16px;
    align-items: center;
    gap: 10px;
}
.acct3{
    border-radius: var(--Blur-100, 4px);
    border: var(--sds-size-stroke-border) solid #002F47;
    background: rgba(0, 47, 71, 0.10);
    display: flex;
    width: 356px;
    padding: 16px;
    align-items: center;
    gap: 10px;
}

.acct-card span{
    color: #333;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
}


.fade-up {
  opacity: 0;
  transform: translateY(10px);
  animation: up 5s ease-in infinite;
}

@keyframes up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 1;
    transform: translateY(50px);
  }
  100% {
    opacity: 0;
    transform: translateY(0px);
  }
}

/* Stagger animations with animation delay */
.icon-vscode {
  animation-delay: 0s;
}

.icon-md {
  animation-delay: 1s;
}

.icon-instagram {
  animation-delay: 2s;
}

.icon-mail {
  animation-delay: 3s;
}

.icon-mailgun {
  animation-delay: 4s;
}

.icon-hash {
  animation-delay: 5s;
}

.icon-dev {
  animation-delay: 6s;
}

.icon-googlemeet {
  animation-delay: 7s;
}

</style>