import styled from 'styled-components';

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 25px;
`;

export const ContentWrapper = styled.div<{ width: string }>`
    width: ${({ width }) => width};
    border-radius: 5px;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 940px;
    max-height: calc(100vh - 50px);
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: calc(100vw - 48px);
        max-height: 80vh;
    }
`;

export const ModalTitle = styled.span`
    font-size: 1rem;
    font-weight: 600;
`;

export const CloseIconWrapper = styled.button`
    background: transparent;
    border: 0;
    display: flex;
    cursor: pointer;
    margin-left: 20px;
`;

export const ChildrenWrapper = styled.div`
    overflow: auto;
    font-size: 0.875rem;
    overflow-x: hidden;
    padding: 15px 25px;

    @media all and (max-width: 767px) {
        padding: 14px;
    }
`;
