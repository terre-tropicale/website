const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

const myColors = {};
for (const property in colors) {
  myColors[property] = colors[property];
}
myColors.transparent = 'transparent';
myColors.current = 'currentColor';

module.exports = {
  plugins: [forms],
  purge: ['./src/**/component.tsx'],
  theme: {
    colors: myColors,
    fontFamily: {
      heading: ['Montserrat SemiBold', 'sans-serif'],
      body: ['Lato Regular', 'sans-serif']
    },
    screens: {
      mq1: { raw: '(min-width: 640px) and (max-width: 1024px) and (orientation: landscape)' },
      mq2: { raw: '(min-width: 640px) and (max-width: 1024px) and (orientation: portrait)' },
      mq3: { raw: '(min-width: 1024px)' }
    }
  },
  variants: {
    extend: {
      fill: ['hover']
    }
  }
};
