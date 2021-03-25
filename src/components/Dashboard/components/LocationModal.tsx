import React from 'react';

// components
import { Modal } from '../../global/Modal';
import { Button } from '../../global/Button';
import { TextWithIcon } from '.';
import { Heading6, Paragraph } from '../../global/Typography';
import { ButtonWrapper, ModalTop } from '../styled';

// types
import { Props } from '../../global/Modal/Modal';
import { Location } from '../../../types';

// helpers
import { formatUsers, formatTimezone, formatViews } from '../../../utils/helpers';

type ModalProps = Pick<Props, 'isOpen' | 'onClose'> & { location: Location };

function LocationModal({ isOpen, onClose, location }: ModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} width="440px" title={location.name}>
            <ModalTop>
                <TextWithIcon icon="users" text={formatUsers(location.userCount)} />
                <TextWithIcon icon="timezone" text={formatTimezone(location.createdAt)} />
                <TextWithIcon icon="view" text={formatViews(location.views)} />
            </ModalTop>
            <Heading6>Desription</Heading6>
            <Paragraph lineHeight="1.5rem">{location.description}</Paragraph>
            <ButtonWrapper>
                <Button onClick={onClose}>Done</Button>
            </ButtonWrapper>
        </Modal>
    );
}

export default LocationModal;
