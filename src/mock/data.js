import { nanoid } from 'nanoid';
// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Evaldas Tamutis',
  subtitle: 'JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Hello, my name is Evaldas and I am a third-year software systems student of Vilnius College. I am interested in front-end developing, especially when working with ReactJs. I have experience with HTML, CSS, JavaScript, Bootstrap, Material-UI, firebase and more.',
  paragraphTwo: 'So if you are interested you can take a look at my current projects below.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'discord.png',
    title: 'Discord App Clone',
    info:
      'The app allows you to sign in with Google accounts. It also allows to create chat rooms where you can interact with others online. Your profile information will be taken from your Google account and displayed',
    info2: 'Created with ReactJs (REDUX) and firebase.',
    url: 'https://discord-app-6600c.web.app',
    repo: 'https://github.com/Evaldas189/discord-app-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'messenger.png',
    title: 'Messenger App Clone',
    info:
      'The app allows you to sign in with only typing your name in modal. After that you can communicate with others online. The app is adaptable to any device. ',
    info2: 'Created with ReactJs and firebase.',
    url: 'https://facebook-messanger-4d981.web.app/',
    repo: 'https://github.com/Evaldas189/facebook-messegnger-reactJs', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'evaldas.tam1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/evaldas-tamutis-439305183/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Evaldas189/discord-app-clone',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
