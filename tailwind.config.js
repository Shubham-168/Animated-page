const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        petitFormal: ['Petit Formal Script'],
        russonOne: ['Russon One'],
      },
      colors: {
        royalBlue: '#4169e1',
        darkBlue: '#0d1117',
        dark: '#0d1117',
      },
    },
    backgroundImage: {
      wrapperBg:
        "url('https://raw.githubusercontent.com/MarkoWebDev/React-AxeL-Site/7e953179619276e65d0ec8a32413d7498bf2363e/src/assets/images/wrapperBackground.svg')",
      wrapperDark:
        "url('https://raw.githubusercontent.com/MarkoWebDev/React-AxeL-Site/7e953179619276e65d0ec8a32413d7498bf2363e/src/assets/images/wrapperBackground.svg')",
    },
    container: {
      screens: {
        sm: '640px',
        md: '767px',
        lg: '1140px',
        xl: '1400px',
        '2xl': '1800px',
      },
    },
    screens: {
      '2xl': {max: '1535px'},
      // => @media (max-width: 1535px) { ... }
      xl: {max: '1279px'},
      // => @media (max-width: 1279px) { ... }
      lg: {max: '1023px'},
      // => @media (max-width: 1023px) { ... }
      md: {max: '767px'},
      // => @media (max-width: 767px) { ... }
      sm: {max: '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
})
