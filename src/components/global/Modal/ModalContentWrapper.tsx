import React from 'react';

// components
import { Heading4 } from '../Typography';
import { ModalHeader, ContentWrapper, CloseIconWrapper, ChildrenWrapper } from './styled';
import { ReactComponent as CloseIcon } from '../../assets/Close.svg';

type Props = {
    children: React.ReactNode;
    onClose: () => void;
    width: string;
    title: string;
};

function ModalContentWrapper({ children, onClose, width, title }: Props) {
    return (
        <ContentWrapper width={width} data-testid="modal">
            <ModalHeader>
                <Heading4>{title}</Heading4>
                <CloseIconWrapper onClick={onClose} data-testid="close-modal-icon">
                    <CloseIcon />
                </CloseIconWrapper>
            </ModalHeader>

            <ChildrenWrapper>{children}</ChildrenWrapper>
        </ContentWrapper>
    );
}

export default ModalContentWrapper;
