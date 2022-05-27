import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    devices: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    fonts: {
      fontHeading: string;
      fontBody: string;
    };
    colors: {
      primary: string;
      secondary: string;
      bgColor: string;
      textHeadingColor: string;
      textBodyColor: string;
      divider: string;
      cardBgColor: string;
    };
    boxShadow: string;
  }
}
