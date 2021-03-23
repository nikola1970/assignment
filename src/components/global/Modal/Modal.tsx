import React from 'react';
import Modal from 'react-modal';

// components
import { ModalContentWrapper } from '.';

if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}

const modalWrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(48, 64, 78, 0.8)',
};

const contentStyles = {
    position: 'static' as 'static',
    padding: 0,
    border: 'none',
    overflow: 'visible',
};

Modal.defaultStyles.overlay = { ...Modal.defaultStyles.overlay, ...modalWrapperStyles };
Modal.defaultStyles.content = { ...Modal.defaultStyles.content, ...contentStyles };

export type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    width?: string;
    ariaHideApp?: boolean;
    title?: string;
};

const ariaHideApp = !(process.env.NODE_ENV === 'test');

const StyledModal = ({ children, isOpen, onClose, width, title }: Props) => {
    return (
        <Modal
            ariaHideApp={ariaHideApp}
            closeTimeoutMS={150}
            isOpen={isOpen}
            onRequestClose={onClose}
        >
            <ModalContentWrapper onClose={onClose} width={width!} title={title!}>
                {children}
            </ModalContentWrapper>
        </Modal>
    );
};

StyledModal.defaultProps = {
    width: '500px',
    title: 'Nikola',
};

export default StyledModal;
