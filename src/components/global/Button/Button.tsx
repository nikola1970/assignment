import React from 'react';

// components
import { ButtonWrapper } from './styled';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
};

function Button({ children, onClick }: Props) {
    return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
}

export default Button;
