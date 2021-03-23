import styled, { css } from 'styled-components';

// theme
import { theme } from '../../theme';

const commonTetStyles = css`
    color: ${theme.colors.text};
    font-weight: 700;
`;

export const Heading1 = styled.h1`
    ${commonTetStyles}
    font-size: 1.375rem;
    line-height: 1.75rem;
`;

export const Heading3 = styled.h3`
    ${commonTetStyles}
    font-size: 1.125rem;
    line-height: 2rem;
`;

export const Heading4 = styled.h4`
    ${commonTetStyles}
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const Heading5 = styled.h5<{ grey: boolean }>`
    ${commonTetStyles}
    font-size: 1rem;
    line-height: 2rem;

    ${({ grey }) =>
        grey &&
        css`
            color: #c1c1c1;
        `}
`;

export const Heading6 = styled.h6`
    ${commonTetStyles}
    font-size: 0.875rem;
    line-height: 1.5rem;
`;

export const Paragraph = styled.p<{ lineHeight?: string }>`
    ${({ theme: themeProp, lineHeight }) => css`
        color: ${themeProp.colors.text};
        font-weight: 400;
        font-size: 0.875rem;

        ${lineHeight &&
        css`
            line-height: ${lineHeight};
        `}
    `}
`;
