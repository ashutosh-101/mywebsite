import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aniket | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aniket Habib',
  subtitle: 'Full Stack developer ',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'rohan.jpg',
  paragraphOne:
    "I am a second year enginerring student with majors in Computer Science and a member of student's council. In Addition to coding i have managed a lot of events at highschool.",
  paragraphTwo:
    'An energetic and imaginative young developer who is able to work alongside other talented IT professionals in creating websites to the very highest standards ',
  paragraphThree:
    'I have tried my hands on a lot of languages. Along with development I practise competitive coding as well.',
  resume: 'RESUME.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bloggit.jpg',
    title: 'Covid19 Tracker',
    info:
      'Covid19 Tracker helps user aware of rise in covid cases throughout the world. The app has graphs for easy understanding and to help user compare data.',
    info2: '',
    livetext: '',
    url: 'https://aniket2107.github.io/covid-tracker/',
    repo: 'https://github.com/Aniket2107/covid-tracker', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'feedly1.jpg',
    title: 'Sorting Visualiser',
    info: 'A project to visualise the tough and difficult algorithms that students find difficult.',
    info2: '',
    livetext: '',
    url: 'https://aniket2107.github.io/Sorting-visualizer/',
    repo: 'https://github.com/Aniket2107/Sorting-visualizer', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Capture.JPG',
    title: 'ShoeCulb',
    info: 'Full stack E-commerce app build with Mern stack with paymentgateway .',
    info2: '',
    livetext: '',
    url:
      'https://docs.google.com/presentation/d/1cPv51WEZHcV8_RiuMUdxsU-85BIky8bTAqX_dF0v01w/edit?usp=sharing',
    repo: 'https://github.com/Aniket2107/mern-Ecommerce-frontend', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'had096705@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aniket-habib-20034719b/',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/_masterkeef_/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Aniket2107',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
