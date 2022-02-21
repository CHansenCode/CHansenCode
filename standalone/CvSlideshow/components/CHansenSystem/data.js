export const apps = [
  {
    id: '8989assk',
    category: 'backside',

    name: 'Express.js',
    role: 'server',
    status: 'in development',
    prefix: 'api',
    name: 'DB',
    suffix: '',
    descr: `
    RESTful express.js server that interconnects the database with
    both consumer apps & content creation apps
    `,
    tags: ['Express.js', 'jwt-Tokens', 'Mongoose', 'JOI validation'],
    url: '',
    git: 'https://github.com/CHansenCode/CHansenCode-server',
  },
  {
    id: '1289kjhasdjask',
    category: 'backside',

    name: 'MongoDB',
    role: 'database',
    status: 'in development',
    prefix: '',
    name: 'DB',
    suffix: '',
    descr: 'Default MongoDB. ',
    tags: ['MongoDB', 'Compass', 'Postman'],
    url: '',
    git: '',
  },
  {
    id: 'jkasd21378',
    category: 'content',

    name: 'Server',
    role: 'content manager',
    status: 'in development',
    prefix: 'cms',
    name: 'DB',
    suffix: '',
    descr: 'built on cow',
    tags: ['react', 'Next.js', 'scss modules', 'redux', 'iron-sessions'],
    url: 'https://cms.chansen.design/',
    git: 'https://github.com/CHansenCode/CHansenCode-cms',
  },
  {
    id: 'iiiiiiiiiiiiiiii',
    category: 'backside',

    name: 'Component Library',
    role: 'library',
    status: 'in development',
    prefix: 'lib',
    name: 'DB',
    suffix: '',
    descr:
      'Is a component library/viewer that i developed to document the components that i develop. It also serves as a isolated single source of truth library for the components that the cms/consumer apps consumes. It`s configured with rollup.js for npm publishing',
    tags: [
      'Rollup.js',
      'Npm publish',
      'Next.js',
      'scss modules',
      'babel',
      'postcss',
    ],
    url: 'https://lib.chansen.design/',
    git: 'https://github.com/CHansenCode/CHansenCode-lib',
  },
];

// export const apps = [
//   {
//     id: '8989assk',
//     category: 'backside',
//     version: '0.7.0',
//     // diagram
//     name: 'Express.js',
//     role: 'server',
//     status: 'in development',
//     //
//     prefix: 'api',
//     name: 'DB',
//     suffix: '',
//     //
//     descr:
//       'RESTful express.js server that interconnects the database with both consumer apps & content creation apps',
//     tags: ['Express.js', 'jwt-Tokens', 'Mongoose', 'JOI validation'],
//     functions: {
//       implemented: [''],
//       inDevelopment: [''],
//     },
//     //  links
//     url: '',
//     git: 'https://github.com/CHansenCode/CHansenCode-server',
//   },
//   {
//     id: '1289kjhasdjask',
//     category: 'backside',
//     version: '-',
//     //
//     name: 'MongoDB',
//     role: 'database',
//     status: 'in development',
//     //
//     prefix: '',
//     name: 'DB',
//     suffix: '',
//     //
//     descr: 'Default MongoDB. ',
//     tags: ['MongoDB', 'Compass', 'Postman'],
//     functions: {
//       implemented: [''],
//       inDevelopment: [''],
//     },

//     //  links
//     url: '',
//     git: '',
//   },

//   //Content Creation
//   {
//     id: 'jkasd21378',
//     category: 'content',
//     version: '1.0.0',
//     //
//     name: 'Server',
//     role: 'content manager',
//     status: 'in development',
//     //
//     prefix: 'cms',
//     name: 'DB',
//     suffix: '',
//     //
//     descr: 'built on cow',
//     tags: ['react', 'Next.js', 'scss modules', 'redux', 'iron-sessions'],
//     functions: {
//       implemented: [
//         'Media DB',
//         'Texts DB',
//         'Project Planning App',
//         'Calendar',
//         'Intercom',
//         'Site Settings',
//         'Users & user groups',
//       ],
//       inDevelopment: [''],
//     },

//     //  links
//     url: 'https://cms.chansen.design/',
//     git: 'https://github.com/CHansenCode/CHansenCode-cms',
//   },
//   {
//     id: 'iiiiiiiiiiiiiiii',
//     category: 'content',
//     version: '1.0.0',
//     //
//     name: 'Component Library',
//     role: 'library',
//     status: 'in development',
//     //
//     prefix: 'lib',
//     name: 'DB',
//     suffix: '',
//     //
//     descr:
//       'Is a component library/viewer that i developed to document the components that i develop. It also serves as a isolated single source of truth library for the components that the cms/consumer apps consumes. It`s configured with rollup.js for npm publishing',
//     tags: [
//       'Rollup.js',
//       'Npm publish',
//       'Next.js',
//       'scss modules',
//       'babel',
//       'postcss',
//     ],
//     functions: {
//       implemented: [''],
//       inDevelopment: [''],
//     },
//     //  links
//     url: 'https://lib.chansen.design/',
//     git: 'https://github.com/CHansenCode/CHansenCode-lib',
//   },

//   //Consumer apps
//   {
//     id: 'k123j1378',
//     category: 'consumer',
//     version: '1.0.0',
//     //
//     name: 'Server',
//     role: 'homepage',
//     status: 'in development',
//     //
//     prefix: 'www',
//     suffix: '.com',
//     //
//     descr: 'Legacy homepage',
//     tags: ['React', 'next.js', 'scss modules'],
//     functions: {
//       implemented: [''],
//       inDevelopment: [''],
//     },
//     //  links
//     url: 'https://www.chansen.design/',
//     git: 'https://github.com/CHansenCode/CHansenCode-home',
//   },
//   {
//     id: '66666adds',
//     category: 'consumer',
//     version: '1.0.0',
//     //
//     name: 'Slides',
//     role: 'presentation',
//     status: 'in development',
//     //
//     prefix: 'slides',
//     suffix: '.com',
//     //
//     descr:
//       '"Slides"- presentation style app. Built for showcasing presentatitons built in the CMS. Simple and quick to use presentation builder connected to the media library.',
//     tags: ['React', 'next.js', 'scss modules'],
//     functions: {
//       implemented: [''],
//       inDevelopment: [''],
//     },
//     //  links
//     url: 'https://slides.chansen.design/',
//     git: 'https://github.com/CHansenCode/CHansenCode-slides',
//   },
//   {
//     id: '68293njdds',
//     category: 'consumer',
//     version: '1.0.0',
//     //
//     name: 'Portfolio',
//     role: 'Portfolio',
//     status: 'in development',
//     //
//     prefix: 'cv',
//     suffix: '.com',
//     //
//     descr: 'built on cow',
//     tags: ['React', 'next.js', 'scss modules'],
//     functions: {
//       implemented: [''],
//       inDevelopment: [''],
//     },
//     //  links
//     url: 'https://portfolio.chansen.design',
//     git: 'https://github.com/CHansenCode/CHansenCode-portfolio',
//   },
// ];
