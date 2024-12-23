

export const integration = () => {
    const items = [
      {
        id: 0,
        title: 'ChatGPT',
        img: "/int/group568.png",
        text: 'Supercharge your email marketing campaigns and blogging experience with an AI content generator',
        buttonText: 'Integrate ChatGPT',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/connectcard.png',
            text: 'Click on the Connect button on the ChatGPT integration and setup your API key to finalize the connection.',
          },
          {
            image: '/integration/image36',
            text: 'Upon successful connection, you can now start generating contents with your integration.',
          },
          {
            image: '/integration/image36',
            text: 'Click on the AI icon as shown in step 3 to reveal the AI content generator window as shown here.',
          },
        ],

        disconnect: {
          topText: "If you ever need to disconnect your OpenAI ChatGPT integration, you can click on the Disconnect button as shown in the image on the ChatGPT integration window. Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `To reconnect, simply follow the Setup Guide`,
          image: '/int/disconnectcard.png',
        },

        about:`The ChatGPT integration comes with customizable capabilities. You can customize the number of tokens to use for each conversation, the type of model you'd like to use and the prompt/question you'd like to get answers to. Answers are auto populated for you and ordered by the latest results from the AI so you can go back to any answer you choose to work with.`
      },




      {
        id: 1,
        title: 'Mailgun',
        img: "/int/mailgun1.png",
        text: 'Supercharge your email marketing campaigns with a powerful email integration',
        buttonText: 'Integrate Mailgun',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c1.png',
            text: 'Click on the Connect button and follow the prompts from the resulting Mailgun window to add up your Mailgun Keys.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Mailgun integration, you can click on the Disconnect button as shown in the image above, on the Mailgun integration window. Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/mailgunD.png',
        },
        about:`The Mailgun integration helps you send emails on Belugar such as marketing emails (to subscribers), invoice quotes to customers, newsletters and team meeting emails etc.`
      },

      {
        id: 2,
        title: 'Facebook',
        img: "/int/facebook.png",
        text: 'Seamlessly connect your Facebook account to Belugar to enhance social media management, automate posts, and track engagement all in one place.',
        buttonText: 'Integrate Facebook',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/connectcard.png',
            text: 'Click on the Connect button on the Facebook integration and setup your API key to finalize the connection.',
          },
          {
            image: '/integration/image36',
            text: 'Upon successful connection, you can now start generating content with your integration.',
          },
          {
            image: '/integration/image36',
            text: 'Click on the AI icon as shown in step 3 to reveal the AI content generator window as shown here.',
          },
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Facebook integration, you can click on the Disconnect button as shown in the image on the Facebook integration window. Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `To reconnect, simply follow the Setup Guide`,
          image: '/int/d2.png',
        },
        about: `The Facebook integration helps you publish your product's posts, banners, etc., together with other platforms all at once. Posts can also be scheduled for later publishing by Belugar.`,
      },


      {
        id: 3,
        title: 'Instagram',
        img: "/int/instagram.png",
        text: "Effortlessly link your Instagram account to Belugar for automated scheduling, content management, and performance tracking to maximize your brand's reach.",
        buttonText: 'Integrate Instagram',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c3.png',
            text: 'Click on the Connect button and follow the prompts from Instagram to finish up your connection.',
          },
          {
            image: '/integration/image36',
            text: 'Upon successful connection, you can now start generating content with your integration.',
          },
          {
            image: '/integration/image36',
            text: 'Click on the AI icon as shown in step 3 to reveal the AI content generator window as shown here.',
          },
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Instagram integration, you can click on the Disconnect button as shown in the image above, on the Instagram integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d3.png',
        },
        about: `The Instagram integration helps you publish your product's posts, banners etc., together with other platforms all at once. Posts can as well be scheduled for later publishing by Belugar.With the Instagram integration, you can publish 
        Single media,stories,carousel, or Reels posts.`,
      },

      {
        id: 4,
        title: 'LinkedIn',
        img: "/int/linkedIn1.png",
        text: `Easily integrate LinkedIn with Belugar to automate posts, manage your professional content, and track engagement, helping you grow your business network effortlessly.`,
        buttonText: 'Integrate LinkedIn',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c4.png',
            text: 'Click on the Connect button and follow the prompts from X to finish up your connection.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your LinkedIn integration, you can click on the Disconnect button as shown in the image above, on the LinkedIn integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d4.png',
        },
        about:`The LinkedIn integration helps you publish your product's posts, banners etc., together with other platforms all at once. Posts can as well be scheduled for later publishing by Belugar. 
         With the LinkedIn integration, you can publish Text Only, Images, Videos, Documents, or Multi Images posts`
      },

      {
        id: 5,
        title: 'X',
        img: "/int/x1.png",
        text: `The X integration helps you publish your product's posts, banners etc., together with other platforms all at once. Posts can as well be scheduled for later publishing by Belugar`,
        buttonText: 'Integrate X',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c5.png',
            text: 'Click on the Connect button and follow the prompts from LinkedIn to finish up your connection.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your X integration, you can click on the Disconnect button as shown in the image above, on the X integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d5.png',
        },
        about:`The X integration helps you publish your product's posts, banners etc., together with other platforms all at once. 
        Posts can as well be scheduled for later publishing by Belugar`
      },

      {
        id: 6,
        title: 'Reddit',
        img: "/int/reddit1.png",
        text: `Link your Reddit account to Belugar to automate post scheduling, manage discussions, and monitor engagement across relevant communities.`,
        buttonText: 'Integrate Reddit',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c6.png',
            text: 'Click on the Connect button and follow the prompts from Reddit to finish up your connection.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Reddit integration, you can click on the Disconnectbutton as shown in the image above, on the Reddit integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d6.png',
        },
        about:`The Reddit integration helps you publish your product's posts, banners etc., together with other platforms all at once. 
        Posts can as well be scheduled for later publishing by Belugar`
      },

      {
        id: 7,
        title: 'Gmail',
        img: "/int/gmail1.png",
        text: `Seamlessly connect your Gmail account to Belugar to streamline email management, automate workflows, and keep your communications organized and efficient.`,
        buttonText: 'Integrate Gmail',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c7.png',
            text: 'Click on the Connect button and follow the prompts from Gmail to finish up your connection.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Gmail integration, you can click on the Disconnect button as shown in the image above, on the Gmail integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d7.png',
        },
        about:`The Gmail integration helps you send emails on Belugar such as marketing emails (to subscribers), invoice quotes to customers, 
        newsletters and team meeting emails etc. Plus, the Gmail integration is free and allows you to send up to 500 emails everyday`
      },

    {
        id: 8,
        title: 'Calendar',
        img: "/int/g-calendar.png",
        text: `Sync your Google Calendar with Belugar to manage appointments, schedule tasks, and streamline your workflow all in one place.`,
        buttonText: 'Integrate Calendar',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c88.png',
            text: 'Click on the Connect button and follow the prompts from Google Calendar/Meet to finish up your connection.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Gmail integration, you can click on the Disconnect button as shown in the image above, on the Gmail integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d8.png',
        },
        about:`The Google Calendar/Meet integration helps startups improve their weekly team meetings creation. With the integration, startups can create meetings tied to their Google Calendar, schedule meetings and select weekdays Belugar should create a meeting link and share to all the team members.This completely removes the need to remember to create and share meeting links manually, 
        and other burdens of meeting creation so that teams can channel their time into other areas of their businesses.`
    },


       {
        id: 9,
        title: 'Sendgrid',
        img: "/int/sendgrid1.png",
        text: `Easily connect your SendGrid account to Belugar for automated email campaigns, reliable delivery, and detailed performance tracking to boost your communication efforts.`,
        buttonText: 'Integrate Sendgrid',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c9.png',
            text: 'Click on the Connect button and follow the prompts from the resulting Sendgrid window to add up your Sendgrid API Key and Sender Email.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Sendgrid integration, you can click on the Disconnect button as shown in the image above, on the Sendgrid integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d9.png',
        },
        about:`The Sendgrid integration helps you send emails on Belugar such as marketing emails (to subscribers), 
        invoice quotes to customers, newsletters and team meeting emails etc.`
      },


      {
        id: 10,
        title: 'Postmark',
        img: "/int/postmark.png",
        text: `Seamlessly integrate Postmark with Belugar for reliable transactional email delivery, improved performance tracking, and enhanced email security.`,
        buttonText: 'Integrate Postmark',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c10.png',
            text: 'Click on the Connect button and follow the prompts from the resulting Postmark window to add up your Postmark Keys.',
          }
        ],
        disconnect: {
          topText: "If you ever need to disconnect your Postmark integration, you can click on the Disconnect button as shown in the image above, on the Postmark integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d10.png',
        },
        about:`The Postmark integration helps you send emails on Belugar such as marketing emails 
        (to subscribers), invoice quotes to customers, newsletters and team meeting emails etc`
      },

      {
        id: 11,
        title: 'Belugar spaces',
        img: "/int/belugar-space.png",
        text: `Your own blogging space, without the noise!A Startup founder's blogging space that's void of distractions.Just you, your team, readers and your articles.`,
        buttonText: 'Integrate',
        setup: [
          {
            image: '',
            text: 'Belugar Space is already connected for you automatically and no further action is required',
          },
        //   {
        //     image: '/int/c10.png',
        //     text: 'Click on the Connect button and follow the prompts from the resulting Postmark window to add up your Postmark Keys.',
        //   }
        ],
        disconnect: {
          topText: "Belugar Space integration is an in-built Belugar blogging feature, and can't be disconnected.",
        //   noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
        //   bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
        //   image: '/int/d10.png',
        },
        about:`At the heart of efficient marketing and brand awareness for startups, is Belugar Spaces.Belugar Spaces is an in-built blogging feature that helps startups own a blogging space that contains contents only from their own businesses. The SEO-friendly nature of Belugar Spaces helps startups gain more awareness on their products; plus, readers/visitors can subscribe to spaces to receive email notifications from the space whenever they publish new contents in the future.Your space subscribers also gets shown on your email subscription lists in your Belugar dashboard so you can further send newsletter notifications about your products to them later on.`
      },



      {
        id: 12,
        title: 'Hashnode',
        img: "/int/hashnode.png",
        text: `Publish your blog contents on Hashnode and other blogging platforms in one go`,
        buttonText: 'Integrate Hashnode',
        setup: [
          {
            image: '/int/image37.png',
            text: 'Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.',
          },
          {
            image: '/int/c12.png',
            text: 'Click on the Connect button and follow the prompts from Hashnode to finish up your connection.',
          }
        ],

        disconnect: {
          topText: "If you ever need to disconnect your Hashnode integration, you can click on the Disconnect button as shown in the image above, on the Hashnode integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note: after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d12.png',
        },
        about:`The Hashnode integration helps you publish, update and delete blog contents from your Hashnode account
         together with other blogging platforms on Belugar at once.`
    },

      {
        id: 13,
        title: 'VSCode',
        img: "/int/vs_code.png",
        text: `View, work on and complete tasks assigned to you, across all the startups you've been onboarded on`,
        buttonText: 'Integrate VSCode',
        setup: [
          {
            image: '/int/image46.png',
            text: `Simply search for, and install the Belugar VSCode extension on your Visual Studio Code app. 
            After a successful installation, simply enter the following on your PC keys while on VSCode: 
            On Mac: Enter Cmd + Shift + P
            On Windows: Enter Ctrl + Shift + P

            Doing this will open up the VSCode command window. You can now search for Belugar Tasks and click on the result that shows up tas shown in the image.`,
          },
          {
            image: '/int/c13.png',
            text: 'This image shows the extension was successfully installed on your Visual Studio Code app.',
          }
        ],

        disconnect: {
          topText: "Simply click on the SIGN OUT button on your VSCode Belugar Tasks window",
          noteText: ``,
          bottomText: ``,
          image: '',
        },
        about:`Often times, developers do get distracted by their social media messages and apps. This is because beginning startups usually share bug fixes, 
        UI changes and other product related conversations on their choice of social media platform, as images, texts or videos.Doing this exposes developers 
        on the team to distractions (e.g other texts/DMs, WhatsApp statuses etc.) on their social media app; this becomes a problem and leads to distractions and lack of doing an honest work for the day.Therefore, with the Belugar Visual Studio Code extension, development teams can get these tasks (bug-fixes etc.) directly on their VSCode app and work on them straightaway without having to leave their workspace for a potential distraction during their work hours.This helps teams stay productive at all times when neccesary, same way the big companies in the industry are executing their operations.`
    },

      {
        id: 14,
        title: 'Dev.to',
        img: "/int/devto1.png",
        text: `Publish your blog contents on Dev.to and other blogging platforms in one go`,
        buttonText: 'Integrate Dev.to',
        setup: [
          {
            image: '/int/image37.png',
            text: `Simply click the Integrations button on the sidebar of your dashboard to open up the integrations window as shown in the image.`,
          },
          {
            image: '/int/c14.png',
            text: 'Click on the Connect button and follow the prompts from Dev.to to finish up your connection.',
          }
        ],

        disconnect: {
          topText: "If you ever need to disconnect your Dev.to integration, you can click on the Disconnect button as shown in the image above, on the Dev.to integration window.Follow the disconnection prompt and you're done.",
          noteText: `Note:after disconnecting your integration, Belugar will automatically invalidate and delete any record it holds for your integration and will not be in possession of it thereafter.`,
          bottomText: `If you ever need the integration, simply follow the Setup Guide again.`,
          image: '/int/d14.png',
        },
        about:`The Dev.to integration helps you publish, update and delete blog contents from your Dev.to account together with other blogging platforms on Belugar at once.`
    },

      


    ];
  
    return items;
}
