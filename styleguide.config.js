const path = require('path');

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/ThemeWrapper.jsx'),
  },
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/**/*.jsx',
    },
    {},
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Raleway&display=swap',
        },
      ],
    },
  },
};
