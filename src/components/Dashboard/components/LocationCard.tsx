import React from 'react';

// components
import { TextWithIcon } from '.';
import { LocationCardWrapper, EditIconWrapper } from '../styled';
import { Heading3 } from '../../global/Typography';

// icons
import { ReactComponent as EditIcon } from '../../assets/Edit.svg';

// helpers
import { formatUsers, formatTimezone, formatViews } from '../../../utils/helpers';

type Props = {
    id: string;
    name: string;
    createdAt: string;
    userCount: number;
    views: number;
    onCardClick: (id: string) => void;
};

function LocationCard({ id, name, createdAt, userCount, views, onCardClick }: Props) {
    return (
        <LocationCardWrapper onClick={() => onCardClick(id)} data-testid="location-card">
            <EditIconWrapper>
                <EditIcon />
            </EditIconWrapper>
            <Heading3>{name}</Heading3>
            <TextWithIcon icon="users" text={formatUsers(userCount)} />
            <TextWithIcon icon="timezone" text={formatTimezone(createdAt)} />
            <TextWithIcon icon="view" text={formatViews(views)} />
        </LocationCardWrapper>
    );
}

export default LocationCard;
