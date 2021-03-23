import styled from 'styled-components';

// components
import { Paragraph } from '../global/Typography';

export const DashboardWrapper = styled.div`
    padding: 25px 60px;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 340px);
    grid-gap: 25px;

    @media all and (max-width: 601px) {
        padding: 25px 14px;
    }
`;

export const EditIconWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 25px;
    height: 26px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

export const LocationCardWrapper = styled.div`
    position: relative;
    padding: 15px 25px;
    border: 1px solid #e8e9ea;
    background-color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #f6f6f6;
        transition: background-color 0.2s;
    }

    h3 {
        margin-bottom: 10px;
    }
`;

export const TextWithIconWrapper = styled(Paragraph)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
        margin-right: 8px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 30px;
    text-align: right;
`;

export const ModalTop = styled.div`
    margin-bottom: 20px;
`;
