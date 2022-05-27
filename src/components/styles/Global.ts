
import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.bgColor};
        font-family: ${({ theme }) => theme.fonts.fontBody};
    }

    img {
        max-width: 100%;
}
`;

export default GlobalStyles;
