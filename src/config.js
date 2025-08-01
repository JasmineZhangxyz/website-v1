module.exports = {
  email: 'xiyue.jasmine.zhang@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/JasmineZhangxyz',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/xiyue-jasmine-zhang/',
    },
  ],

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#experience',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    orange: '#ffae57',
    navy: '#2f3b54',
    darkNavy: '#171c28',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
