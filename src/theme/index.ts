import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  devices:{
      mobile: '(min-width: 375px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1200px)',
  },
  fonts: {
      fontHeading: 'brandon-grotesque',
      fontBody: 'bitter',
  },
  colors: {
    primary: '#FFE600',
    secondary: '#FFD200',
    bgColor: "#F6F6F6",
    textHeadingColor: "#2D2D2D",
    textBodyColor: "#73777C",
    divider: "#E0E4E8",
    cardBgColor: "#fff"
  },
  boxShadow: '0px 24px 32px rgba(45, 45, 45, 0.16)'
};

export { theme };