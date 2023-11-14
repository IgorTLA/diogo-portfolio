import coverAppCitPtBr from '../../../public/images/centralItMobile/cover.png';
import discoverAppCitPtBr from '../../../public/images/centralItMobile/discover-and-define.png';
import wireframeAppCitPtBr from '../../../public/images/centralItMobile/wireframe.png';
import usabilityAppCitEnUs from '../../../public/images/centralItMobile/usability-testing-en-us.png';
import styleguideAppCitPtBr from '../../../public/images/centralItMobile/styleguide.png';

import coverExpCenterPtBr from '../../../public/images/experienceCenter/cover.png';
import uxAnalyticsExpCenterEnUs from '../../../public/images/experienceCenter/uxAnalyticsEnUs.png';
import oldVersionExpCenterPtBr from '../../../public/images/experienceCenter/oldVersion.png';
import mediumVersionExpCenterPtBr from '../../../public/images/experienceCenter/mediumVersion.png';
import firstNewVersionExpCenterPtBr from '../../../public/images/experienceCenter/firstNewVersion.png';

export const menuEnUs = {
  b1: 'Services',
  b2: 'Projects',
  b3: 'Contact'
};

export const AboutMeEnUs = {
  title: "Hello! I'm Diogo Rother",
  subTitle: 'UX/UI & Product Designer',
  description: {
    p1: 'Specialized in User Experience Design. I am an agile person who loves taking on new challenges.',
    p2: "Along my journey, I've learned that it's not enough to create beautiful screens; we must delve into understanding our users' problems and find the best way to solve them."
  },
  actions: {
    b1: 'Download Resume',
    b2: 'Contact Me'
  }
};

export const servicesEnUs = {
  title: { t1: 'My', t2: 'services', t3: 'to help your', t4: 'company' },
  card: {
    t1: 'UX Research',
    t2: 'UX Analytics',
    t3: 'UI Design',
    t4: 'Prototyping',
    t5: 'Usability Testing'
  }
};

export const projectsEnUs = {
  title: 'Projects',
  card: {
    t1: 'Central IT Mobile',
    t2: 'Experience Center',
    t3: 'Fiscal Actions System',
    t4: '156 Call Center',
    t5: 'Team Control Dashboard',
    t6: 'CRM Dashboard'
  },
  tags: {
    tag1: 'UX Design',
    tag2: 'UI Design',
    tag3: 'In Production',
    tag4: 'Under Construction',
    tag5: 'Interactive',
    tag6: 'In Stores'
  }
};

export const centralItMobileEnUs = {
  title: 'Central IT Mobile',
  cover: coverAppCitPtBr,
  st1: 'The Challenge',
  t1: 'Adapt a robust IT application for web-based ticket opening and approvals to a mobile platform. iOS and Android.',
  st2: 'My Role',
  t2: 'Conducting quantitative research, Hotjar analyses, service blueprints, CSD matrix, impact x effort matrix, wireframes, golden path, design system, interactive prototyping, usability testing, sprint prioritization, facilitating SCRUM ceremonies for the involved team, and continuous improvement roadmap.',
  st3: 'Tools Used',
  t3: {
    p1: {
      name: 'Miro:',
      description: 'Main online whiteboard for workshops'
    },
    p2: {
      name: 'Hotjar:',
      description:
        'Utilized for quantitative research and analysis of the web application'
    },
    p3: {
      name: 'Figma:',
      description: 'Primary tool for screen creation and prototyping'
    },
    p4: {
      name: 'Maze:',
      description: 'Used for conducting unmoderated usability tests'
    }
  },
  st4: 'Design Proccess',
  t4: 'I applied Design Thinking in conjunction with Lean UX',
  st5: 'Discover and Define',
  t5: {
    p1: {
      name: '5W2H',
      description:
        'As the scope of the MVP had already been conceptualized by stakeholders, I chose to use the 5W2H methodology to analyze the alignment between the proposed plan and the business objectives.'
    },
    p2: {
      name: 'CSD Matrix',
      description:
        'With the proposal aligned with the business, it was time to understand more about the product in question. I used the Certainties, Assumptions, and Doubts Matrix technique to clarify which functionalities were necessary in the MVP and what my level of knowledge about them was.'
    },
    p3: {
      name: 'Lean Inception',
      description:
        'With the information I obtained, I conducted a Lean Inception with all those responsible for product development. I relied on their business insights and technical perspectives to confirm the implementation feasibilities. It was incredible!'
    },
    p4: {
      name: 'We Explored:',
      topics: {
        t1: 'Deepening the objective',
        t2: 'Analysis of the initial prototype',
        t3: 'Areas for improvement',
        t4: 'Technical feasibility'
      },
      discover: discoverAppCitPtBr
    },
    p5: {
      name: 'User Research & Mapping',
      description:
        'To better understand how information hierarchy functions and how to reproduce it in design, I employed user research techniques. This helped me identify common pain points and gain a deeper understanding of the complete functionalities of each flow.'
    },
    p6: 'Once more familiar with the flow, I used the operational system mapping technique as a visual aid for the team.'
  },
  st6: 'Develop and Delivery',
  t6: {
    p1: {
      name: 'Wireframes',
      description:
        'I began the solution with sketch frames for idea validation and moved on to wireframes, conducting unmoderated usability tests through Maze.',
      wireframe: wireframeAppCitPtBr
    },
    p2: {
      name: 'Usability Testing',
      description:
        'We conducted unmoderated usability tests using the Maze tool with the medium-fidelity version to ensure we were on the right track and identify potential improvements in the flows.'
    },
    p3: {
      name: 'Learning: ',
      description:
        "Avoid making the prototype fully interactive, as many users may navigate out of curiosity, which can interfere with the analysis. It's best to focus solely on the interactions within the mission flow.",
      usability: usabilityAppCitEnUs
    },
    p4: {
      name: 'Styleguide',
      description:
        "I conceptualized the style guide based on the company's brand. As the product would exist on both IOS and Android platforms, a style guide was created for each, enhancing the individual experience for each technology.",
      styleguide: styleguideAppCitPtBr
    },
    p5: {
      name: 'Presentation',
      description:
        'A presentation was conducted for stakeholders with an interactive prototype of the product. We discussed ideas and presented a roadmap for the upcoming detailed versions.'
    },
    p6: {
      name: 'Handoff',
      description:
        'With stakeholder confirmation, the design was communicated to developers through Figma, initiating the implementation of the code.'
    },
    p7: {
      name: 'Continuous Improvements',
      description:
        'With the product already in stores, we began prioritized technical improvements, updating with each version.'
    }
  },
  st7: 'Next Steps',
  t7: 'For the next steps of the product, I plan to apply the Lean Discovery method. The goal is to gain a clearer view of how our product is being received by users and identify possible points for design improvement. With this approach, I hope to gather valuable insights that will help us make more informed decisions for the continuous enhancement of the product. I am excited about the opportunity to contribute to the evolution of the product and to learn from user interactions.',
  st8: 'Learnings',
  t8: "Taking on a project in progress, without having been part of the initial alignment and with the MVP already defined, presented a significant challenge. However, this experience allowed me to question the decisions made and evaluate if they were truly aligned with the product and business objectives. As a result, I was able to review the internal strategy and identify potential improvement opportunities for future projects. This experience taught me the importance of constantly evaluating decisions and ensuring they align with the overall goals of the project and the company. It also helped me develop skills in adaptation and problem-solving in an ever-changing environment. I look forward to applying these learnings in future projects and contributing even more to the company's success."
};

export const experienceCenterEnUs = {
  title: 'Experience Center',
  cover: coverExpCenterPtBr,
  st1: 'The Challenge',
  t1: "Redesign of the Central IT's main Experience Center.",
  st2: 'My Role',
  t2: 'Quantitative research design, Hotjar analyses, service blueprinting, CSD matrix, wireframing, golden path creation, interactive prototyping (to facilitate handoff), sprint prioritization, and facilitation of SCRUM ceremonies for the involved team.',
  st3: 'Tools Used',
  t3: {
    p1: {
      name: 'Miro:',
      description: 'Main online whiteboard for workshops'
    },
    p2: {
      name: 'Hotjar:',
      description:
        'Utilized for quantitative research and analysis of the web application'
    },
    p3: {
      name: 'Figma:',
      description: 'Primary tool for screen creation and prototyping'
    }
  },
  st4: 'Design Proccess',
  t4: 'I applied Design Thinking in conjunction with Lean UX',
  st5: 'Discover and Define',
  t5: {
    p1: {
      name: 'CSD Matrix',
      description:
        'Since the system already existed with a user base of 100 daily users, I used the CSD matrix to test my knowledge and that of the stakeholders involved in the project. It was interesting because I identified that little was known about the usability of the product.'
    },
    p2: {
      name: 'UX Analytics',
      description: {
        t1: 'I used Hotjar as the primary tool for analyzing user interactions with the environment. In addition to the basic features of heatmaps and interaction recording, I added a quantitative survey to understand more about the most used flows by our users and overall satisfaction with the product.',
        t2: 'So far, we have received responses from 240 users, and these are the most interesting insights:',
        topics: {
          t1: 'The search field is the most used feature.',
          t2: 'With the help of the heatmap, I identified that 23% of users accessed the Profile only to click the back button to return to the previous system. My solution was to bring this icon outside the profile, reducing the number of clicks required for the action.',
          t3: '28.9% of users use the environment to find shortcuts to other applications.',
          t4: '36.6% of users use the environment to access activities, making it the most important functionality.'
        },
        t3: 'With this information, I was able to define the changes that would generate the most value for users, making it easier to prioritize them in the sprints.',
        uxAnalytics: uxAnalyticsExpCenterEnUs
      }
    },
    p3: {
      name: 'Lean Inception',
      description:
        'With the information I obtained, I conducted a Lean Inception for alignment with all those responsible for the environment. I relied on their business insights and technical perspectives to confirm implementation priorities.'
    },
    p4: {
      name: 'User Research & Mapping',
      description:
        "To understand more about how information hierarchy works and how to reproduce it in design, I used Figma to create a visual organizational chart of the environment's layers."
    }
  },
  st6: 'Develop and Delivery',
  t6: {
    p1: {
      name: 'Prototype',
      description:
        'I started the solution following the original version of the product, incorporating only the most visually impactful and functional improvements.',
      images: [
        { id: 1, title: 'Old Version', image: oldVersionExpCenterPtBr },
        {
          id: 2,
          title: 'Medium-fidelity wireframe with colors',
          image: mediumVersionExpCenterPtBr,
          description: {
            t1: 'Note: ',
            t2: "Although it's not common to use colors in medium-fidelity wireframes, I chose to use them in my UI Design strategy. By organizing myself in components and having the brand identity already established, I could use colors to highlight contrast and generate greater perceived value for users using the highlighting effect. This approach significantly contributed to highlighting the redesign proposal compared to the previous design."
          }
        },
        {
          id: 3,
          title: 'Versão 1 em produção',
          image: firstNewVersionExpCenterPtBr,
          description: {
            t1: 'Note: ',
            t2: 'With the medium-fidelity wireframe, it became apparent that a more impactful restyling was needed, incorporating the use of icons and visual cues while still maintaining the familiar layout structure for users.'
          }
        }
      ]
    },
    p2: {
      name: 'Styleguide',
      description:
        "I conceptualized the style guide based on the company's brand."
    },
    p3: {
      name: 'Presentation',
      description:
        'A presentation was conducted for stakeholders with the interactive prototype of the product, intending to validate insights and present real data from observations.'
    },
    p4: {
      name: 'Handoff',
      description:
        'With stakeholder confirmation, the design was communicated to developers through Figma, initiating the implementation of the codes.'
    },
    p5: {
      name: 'Continuous Improvements',
      description:
        'With the product already in production, I continue to use Hotjar to identify upcoming improvements.'
    }
  },
  st7: 'Next Steps',
  t7: {
    topics: {
      t1: 'Hotjar analyses',
      t2: 'User feedback',
      t3: 'Qualitative research',
      t4: 'Further quantitative research',
      t5: 'Usability testing'
    }
  },
  st8: 'Learning',
  t8: {
    p1: 'It was a very enriching experience because I realized that users may be apprehensive about significant changes to a tool they have been accustomed to for a long time.',
    p2: "Therefore, I adopted the strategy of modernizing the current structure without major changes, bringing more value to alterations of existing features. It's a great first step to show that we are here to help and enhance the experience.",
    p3: 'This approach allowed users to have more confidence in future changes, paving the way for more impactful improvements.'
  }
};
