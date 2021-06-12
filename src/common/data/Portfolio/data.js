import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import {socialInstagram} from 'react-icons-kit/typicons/socialInstagram'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import {socialLinkedin} from 'react-icons-kit/typicons/socialLinkedin'

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.jpg';
import PortfolioImage2 from '../../assets/image/portfolio/portfolio-2.jpg';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/JacoboMendieta',
  },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/in/jacobo-hernandez-mendieta-007a521a0/',
  },
  {
    icon: socialInstagram,
    url: 'https://www.instagram.com/jacobo1407b/',
  },
  {
    icon: socialGithub,
    url: 'https://github.com/jacobo1407b',
  },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECT',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'AWARDS',
    path: '#awards_section',
    offset: '0',
  },
  {
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
];

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee1,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee2,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee3,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Free Software Advice',
    awardDetails: 'Top Rated App Development Companies USA',
    awardeeLogo: Awardee4,
    awardeeName: 'Awardee',
    date: 'The Jury 2018',
  },
];

export const PORTFOLIO_SHOWCASE = [
  /*{
    title: 'DESIGN',
    portfolioItem: [
      {
        title: 'Canada Media Site',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: '#',
        featuredIn: 'AWWWARDS',
        featuredLink: '#',
        view: '4.5K',
        love: '1.5K',
        feedback: '1.2K',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
      {
        title: 'RedQ, Inc. mobile app',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage2,
        link: '#',
        featuredIn: 'AppStore',
        featuredLink: '#',
        view: '8.5K',
        love: '5.5K',
        feedback: '3.2K',
        buildWith: [
          {
            content: 'React Native',
          },
          {
            content: 'Firebase',
          },
          {
            content: 'Styled Component',
          },
        ],
      },
    ],
  },*/
  {
    title: 'BLOCKCHAIN',
    portfolioItem: [
      {
        title: 'BUNBi network',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: 'https://bunbi.com.mx',
        featuredIn: 'BUNBi',
        featuredLink: 'https://bunbi.com.mx',
        view: '27',
        love: '20',
        feedback: '3',
        buildWith: [
          {
            content: 'Substrate',
          },
          {
            content: 'Rust',
          },
          {
            content: 'Docker',
          },
        ],
      },
    ],
  },
  {
    title: 'SMARTCONTRACT',
    portfolioItem: [
      {
        title: 'TEC BLOCKCHAIN FOR AVIATION',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: 'http://cerapp-env.eba-xbhgdbja.us-east-1.elasticbeanstalk.com/',
        featuredIn: 'TEC BLOCKCHAIN FOR AVIATION',
        featuredLink: 'http://cerapp-env.eba-xbhgdbja.us-east-1.elasticbeanstalk.com/',
        view: '28',
        love: '15K',
        feedback: '10',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Truffle Suite',
          },
          {
            content: 'Solidity',
          },
        ],
      },

    ],
  },
  {
    title: 'WEB',
    portfolioItem: [
      {
        title: 'Seani',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: 'https://seani.vercel.app',
        featuredIn: 'SEANI',
        featuredLink: 'https://seani.vercel.app',
        view: '26',
        love: '15',
        feedback: '16',
        buildWith: [
          {
            content: 'React JS',
          },
          {
            content: 'Next JS',
          },
          {
            content: 'Firebase',
          },
        ],
      },
    ],
  },
  {
    title: 'MERN',
    portfolioItem: [
      {
        title: 'Simple fullstack',
        description:
          "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
        image: PortfolioImage1,
        link: 'https://github.com/jacobo1407b/bunbiplataform',
        featuredIn: 'MERN',
        featuredLink: 'https://github.com/jacobo1407b/bunbiplataform',
        view: '4',
        love: '4',
        feedback: '1',
        buildWith: [
          {
            content: 'Mongo DB',
          },
          {
            content: 'Express',
          },
          {
            content: 'React JS',
          },

          {
            content: 'Node JS',
          },
        ],
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Research',
    description:
      'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.',
  },
  {
    image: Step2,
    title: '2. Design',
    description:
      'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design',
  },
  {
    image: Step3,
    title: '3. Build',
    description:
      'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you ',
  },
];

export const SERVICE_LIST = [
  {
    title: 'Blockchain',
    listItems: [
      {
        content: 'Truffle',
      },
      {
        content: 'Ganache',
      },
      {
        content: 'Drizzle',
      },
      {
        content: 'Solidity',
      },
      {
        content: 'Substrate (basic)',
      },
    ],
  },
  {
    title: 'Web Development',
    listItems: [
      {
        content: 'React JS',
      },
      {
        content: 'Next JS',
      },
      {
        content: 'Redux',
      },
      {
        content: 'Webpack',
      },
      {
        content: 'NodeJS',
      },
    ],
  },
  {
    title: 'Hybrid Application Development',
    listItems: [
      {
        content: 'Flutter',
      },
      {
        content: 'Electron',
      },
      {
        content: 'React Native',
      },
      {
        content: 'Ionic & React',
      },
      {
        content: 'NodeJS',
      },
    ],
  },
];

export const SKILLS = [
  {
    title: 'BLOCKCHAIN',
    description:
      'Decentralized applications, smartcontracts and testing',
    icon: SkillIcon1,
    successRate: '70',
  },
  {
    title: 'Web Application',
    description:
      'MERN stack development with workflow',
    icon: SkillIcon3,
    successRate: '95',
  },
  {
    title: 'Hybrid Application',
    description:
      'Mobile or desktop applications',
    icon: SkillIcon4,
    successRate: '80',
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: 'Microsoft',
  },
  {
    image: Client2,
    title: 'Airbnb',
  },
  {
    image: Client3,
    title: 'Adidas',
  },
  {
    image: Client4,
    title: 'IBM',
  },
  {
    image: Client5,
    title: 'Amazon',
  },
  {
    image: Client6,
    title: 'Google',
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Founder & CEO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer2,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jeny Doe',
    designation: 'Co-Founder & CTO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
  {
    image: Reviewer3,
    review:
      'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
    name: 'Jon Doe',
    designation: 'Co-Founder & COO',
    twitterProfile: 'https://twitter.com/redqinc',
    organization: '@Tonquin',
    organizationURL: 'https://redq.io/',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
];
