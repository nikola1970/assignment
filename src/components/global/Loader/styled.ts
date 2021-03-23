import styled from 'styled-components';

export const LoaderWrapper = styled.div<{ position: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: ${({ position }) => position};
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
`;
