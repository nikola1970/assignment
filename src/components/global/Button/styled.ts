import styled from 'styled-components';

export const ButtonWrapper = styled.button`
    font-size: 0.875rem;
    line-height: 1.5rem;
    background-color: ${({ theme }) => theme.colors.green};
    padding: 4px 15px;
    border: none;
    color: #fff;
    border-radius: 16px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;
