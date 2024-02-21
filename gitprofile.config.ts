// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'akashk0712', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Akash Kachhaway Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'akash-kachhaway',
    twitter: 'arif_szn',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    email: 'kachhawayakash@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1pQhYPuVOFydiwDx9deSjXoKEVIX12FvH/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'MongoDB',
    'MySQL',
    'Data Structures',
    'Git',
    'Docker',
    'Machine Learning',
    'Web Development',
  ],
  experiences: [
    {
      company: 'Ignitus',
      position: 'Machine Learning Intern',
      from: 'January 2024',
      to: 'Present',
    },
    {
      company: 'Infosys Springboard',
      position: 'Artificial Intelligence Intern',
      from: 'September 2024',
      to: 'November 2024',
    },
  ],
  educations: [
    {
      institution: 'Madhav Institute of Technology and Science Gwalior',
      degree: 'Bachelor of Technology',
      stream: 'Information Technology',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'M.G.M. Mission H.S. School Dewas',
      degree: 'Higher ',
      from: '2012',
      to: '2014',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    //themes: [
      //'light',
      //'dark',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >AKash Kachhaway Portfolio</a>,

  enablePWA: true,
};

export default CONFIG;
