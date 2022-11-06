export const MENUITEMS = [
  {
    menutitle: "Main",
    Items: [
      {
        title: "Home",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard`,
            type: "link",
            active:false,
            selected:false,
            title: "All Metrics",
          },
          {
            path: `${process.env.PUBLIC_URL}/metrics/operations`,
            type: "link",
            active:false,
            selected:false,
            title: "Operations Metrics",
          },
          {
            path: `${process.env.PUBLIC_URL}/metrics/institute`,
            type: "link",
            active:false,
            selected:false,
            title: "Institutes Metrics",
          },
          {
            path: `${process.env.PUBLIC_URL}/metrics/partners`,
            type: "link",
            active:false,
            selected:false,
            title: "Patners Metrics",
          },
          {
            path: `${process.env.PUBLIC_URL}/metrics/proctors`,
            type: "link",
            active:false,
            selected:false,
            title: "Proctors Metrics",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/advancedui/accordions`,
          //   type: "link",
          //   active:false,
          //   selected:false,
          //   title: "Administrators Metrics",
          // },
          {
            path: `${process.env.PUBLIC_URL}/metrics/support`,
            type: "link",
            active:false,
            selected:false,
            title: "Supports Metrics",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/advancedui/accordions`,
          //   type: "link",
          //   active:false,
          //   selected:false,
          //   title: "SessionBlock Metrics",
          // },
        ]
      },
    ],
  },

  {
    menutitle: "MANAGMENT",
    Items: [
      {
        title: "Customer",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.38 9.38 0 0 0 2.625.372a9.337 9.337 0 0 0 4.121-.952a4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0Z"/>
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/cards`,
            type: "link",
            active:false,
            selected:false,
            title: "New Customer",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/rangeslider`,
            type: "link",
            active:false,
            selected:false,
            title: "Trial Customers",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/calendar`,
            type: "link",
            active:false,
            selected:false,
            title: "Paid Customers",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/calendar`,
            type: "link",
            active:false,
            selected:false,
            title: "Customize Customer",
          },
        ],
      },
      {
        title: "Users",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg"  className="side-menu__icon" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1c-.4.2-.8.3-1.2.5c-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"/></svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/user/operation`,
            title: "Add System User",
            type: "link",
            active:false,
            selected:false,
          },
          {
            path: `${process.env.PUBLIC_URL}/user/proctor`,
            title: "Add Proctor",
            type: "link",
            active:false,
            selected:false,
          },
          {
            path: `${process.env.PUBLIC_URL}/user/partner`,
            title: "Add Partner",
            type: "link",
            active:false,
            selected:false,
          },
          {
            path: `${process.env.PUBLIC_URL}/user/sales`,
            title: "Add Sales",
            type: "link",
            active:false,
            selected:false,
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/elements/avatar`,
          //   title: "User List",
          //   type: "link",
          //   active:false,
          //   selected:false,
          // },
        ],
      },
      {
        title: "Institues",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" d="M7.5 1L0 4.5l2 .9v1.7c-.6.2-1 .8-1 1.4s.4 1.2 1 1.4v.1l-.9 2.1C.8 13 1 14 2.5 14s1.7-1 1.4-1.9L3 10c.6-.3 1-.8 1-1.5s-.4-1.2-1-1.4V5.9L7.5 8L15 4.5L7.5 1zm4.4 6.5l-4.5 2L5 8.4v.1c0 .7-.3 1.3-.8 1.8l.6 1.4v.1c.1.4.2.8.1 1.2c.7.3 1.5.5 2.5.5c3.3 0 4.5-2 4.5-3v-3z"/></svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/institute/college`,
            title: "Add College",
            type: "link",
            active:false,
            selected:false,
          },
          {
            path: `${process.env.PUBLIC_URL}/institute/department`,
            title: "Add Department",
            type: "link",
            active:false,
            selected:false,
          },
          {
            path: `${process.env.PUBLIC_URL}/institute/professor`,
            title: "Add Professor",
            type: "link",
            active:false,
            selected:false,
          },
          {
            path: `${process.env.PUBLIC_URL}/institute/Instructions`,
            title: "Instructions",
            type: "link",
            active:false,
            selected:false,
          },
        ],
      },
    ],
  },

  {
    menutitle: "GLOBAL SETTINGS",
    Items: [
      {
        title: "Site Operations",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M17 21h-7v-7h7zm-5-2h3v-3h-3zm5 11h-7v-7h7zm-5-2h3v-3h-3zm14-7h-7v-7h7zm-5-2h3v-3h-3zm5 11h-7v-7h7zm-5-2h3v-3h-3z"/><path fill="currentColor" d="M8 28H4a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h7.586A1.986 1.986 0 0 1 13 4.586L16.414 8H28a2.002 2.002 0 0 1 2 2v8h-2v-8H15.586l-4-4H4v20h4Z"/></svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            title: "Soft Restrictions",
            type: "sub",
            selected:false,
            active:false,
            children: [
              {
                path: `${process.env.PUBLIC_URL}/software/blocked`,
                title: "Blocked Software",
                type: "link",
                active:false,
                selected:false,
              },
              {
                path: `${process.env.PUBLIC_URL}/software/allowed`,
                title: "Allowed Software",
                type: "link",
                active:false,
                selected:false,
              },
              {
                path: `${process.env.PUBLIC_URL}/software/exclude`,
                title: "Excluded System Processes",
                type: "link",
                active:false,
                selected:false,
              },
            ],
          },
          {
            path: `${process.env.PUBLIC_URL}/operation/terms`,
            type: "link",
            active:false,
            selected:false,
            title: "Terms and Conditions",
          },
          {
            path: `${process.env.PUBLIC_URL}/operation/coupon`,
            type: "link",
            active:false,
            selected:false,
            title: "Generate Coupon",
          },
          {
            path: `${process.env.PUBLIC_URL}/operation/sessionblock`,
            type: "link",
            active:false,
            selected:false,
            title: "Session Blocks",
          },
          {
            path: `${process.env.PUBLIC_URL}/operation/sessionbucket`,
            type: "link",
            active:false,
            selected:false,
            title: "Bucket Slots",
          },
          {
            path: `${process.env.PUBLIC_URL}/operation/shotcutkey`,
            type: "link",
            active:false,
            selected:false,
            title: "Block short Key",
          },
          {
            path: `${process.env.PUBLIC_URL}/advancedui/accordions`,
            type: "link",
            active:false,
            selected:false,
            title: "Settings",
          },
        ]
      },
      {
        title: "Configurations",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059"/><path stroke="currentColor" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4v-9Z"/><circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 16 14)"/><circle cx="37" cy="34" r="3" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 41v-4m0-6v-4m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2"/></g></svg>
        ),
        type: "sub",
        selected:false,
        bookmark: true,
        active:false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/configuration/sessiontype`,
            type: "link",
            active:false,
            selected:false,
            title: "SessionTypes",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/dropcomment`,
            type: "link",
            active:false,
            selected:false,
            title: "DropDownComments",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/modalalert`,
            type: "link",
            active:false,
            selected:false,
            title: "Modal Alerts",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/title`,
            type: "link",
            active:false,
            selected:false,
            title: "Title",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/tooltip`,
            type: "link",
            active:false,
            selected:false,
            title: "Tooltips",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/emailtemplate`,
            type: "link",
            active:false,
            selected:false,
            title: "Email Template",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/configurat`,
            type: "link",
            active:false,
            selected:false,
            title: "Email Configuration",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/stripe`,
            type: "link",
            active:false,
            selected:false,
            title: "Stripe Configuration",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/video`,
            type: "link",
            active:false,
            selected:false,
            title: "Video Management",
          },
          {
            path: `${process.env.PUBLIC_URL}/configuration/notification`,
            type: "link",
            active:false,
            selected:false,
            title: "Notifications",
          },
          {
            path: `${process.env.PUBLIC_URL}/elements/breadcrumbs`,
            title: "NtheEye Storage",
            type: "link",
            active:false,
            selected:false,
          },
        ],
      },
    ],
  },
  {
    menutitle: "HELPER & GUIDE",
    Items: [
      {
        title: "KNOWLEDGE BASE",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273c.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9l-2-1l-2 1V4h4v7z"/></svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            title: "Knowledgebase Admin",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Student",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Institute",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Professor",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Operations",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Proctor",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Partner",
            type: "sub",
            selected:false,
            active:false,
          },
          {
            title: "Preview Institute Proctor",
            type: "sub",
            selected:false,
            active:false,
          },
        ],
      },
      // {
      //   title: "User Profile ",
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       className="side-menu__icon"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //     >
      //       <path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected:false,
      //   children: [
      //     {
      //       path: `${process.env.PUBLIC_URL}/charts/chartJs`,
      //       title: " ChartJs",
      //       type: "link",
      //       active:false,
      //       selected:false,
      //     },
      //   ],
      // },
      // {
      //   title: "Alerts",
      //   icon: (
      //     <svg
      //       xmlns="http://www.w3.org/2000/svg"
      //       className="side-menu__icon"
      //       width="24"
      //       height="24"
      //       viewBox="0 0 24 24"
      //     >
      //       <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected:false,
      //   active:false,
      // },
    ],
  },
];
