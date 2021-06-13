import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import {socialInstagram} from 'react-icons-kit/typicons/socialInstagram'
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import {socialLinkedin} from 'react-icons-kit/typicons/socialLinkedin'


import Bitcoin from '../../assets/image/portfolio/bitcoin.jpg'
import Ingles from '../../assets/image/portfolio/ingles.jpg'
import Inversion from '../../assets/image/portfolio/inversion.jpg'
import Watson from '../../assets/image/portfolio/watson.jpg'
import Dev from '../../assets/image/portfolio/dev.jpg'
import Elect from '../../assets/image/portfolio/electron.jpg'
import Rou from '../../assets/image/portfolio/react-router.jpg'

import Plat from '../../assets/image/portfolio/platzi.png'
import Ude from '../../assets/image/portfolio/udemy.svg'

import PortfolioBunbi from '../../assets/image/portfolio/portfolio-bunbi.png'
import Aviacion from '../../assets/image/portfolio/aviacion.jpg'
import Mern from '../../assets/image/portfolio/MERN.png'
import Seani from '../../assets/image/portfolio/seani.png'


import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';


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
    awardLogo: Bitcoin,
    awardName: 'Bitcoin y Blockchain',
    awardDetails: 'Concepts in Bitcoin and Blockchain',
    awardeeLogo: Plat,
    awardeeName: 'Platzi',
    date: 'August 2020',
  },
  {
    awardLogo: Ingles,
    awardName: 'English Pronunciation',
    awardDetails: 'Course Basic English Pronunciation',
    awardeeLogo: Plat,
    awardeeName: 'Platzi',
    date: 'March 2021',
  },
  {
    awardLogo: Inversion,
    awardName: 'Cryptocurrencies',
    awardDetails: 'Cryptocurrency Market and Investment',
    awardeeLogo: Plat,
    awardeeName: 'Platzi',
    date: 'March 2021',
  },
  {
    awardLogo: Watson,
    awardName: 'IBM Watson',
    awardDetails: 'Handling and Examples of IBM Watson Tools',
    awardeeLogo: Plat,
    awardeeName: 'Platzi',
    date: 'August 2020',
  },
  {
    awardLogo: Dev,
    awardName: 'SmartContracts',
    awardDetails: 'Creation, Testing and Deployment of Contracts',
    awardeeLogo: Ude,
    awardeeName: 'Udemy',
    date: 'December 2019',
  },
  {
    awardLogo: Elect,
    awardName: 'React & Electron',
    awardDetails: 'Create Desktop Applications with Electron',
    awardeeLogo: Ude,
    awardeeName: 'Udemy',
    date: 'August 2020',
  },
  {
    awardLogo: Rou,
    awardName: 'React Router',
    awardDetails: 'React Router and Integration with SSR',
    awardeeLogo: Plat,
    awardeeName: 'Platzi',
    date: 'March 2021',
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
          "A Blockchain network for startups, companies and people in a real, interoperable and scalable open economic environment, will later be incorporated with IOT, allowing a much fairer and balanced interaction of activities.",
        image: PortfolioBunbi,
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
          "Certificates issued on a timestamp server that works by taking a hash of a block of items to be dated and publishing the hash widely, across the Ethereum network.",
        image: Aviacion,
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
          "In times of pandemic, institutions could not apply tests in their facilities, the best solution was a scalable platform with good performance to support a large number of applicants.",
        image: Seani,
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
          "A demo application to test JWT functions on a node JS server, validate an access token and display a UI in react, includes CRUD, token authentication, image upload with cludinary and connection to a Stripe API.",
        image: Mern,
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
