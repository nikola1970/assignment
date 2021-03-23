import { createGlobalStyle } from 'styled-components';

// theme
import { theme } from '.';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${theme.fonts.fontFamily};
    }

    button:focus {
        outline: none;
    }

    .ReactModal__Body--open {
      overflow: hidden;

        #root {
            overflow: hidden;
        }
    }

    @media all and (min-width: 600px) {
        .ReactModal__Overlay {
            opacity: 0;
            transition: opacity 250ms ease-in-out;
            z-index: 9999;
        }
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }

    .ReactModal__Content {
        max-width: 100% !important;
    }
`;

export default globalStyles;
