import React from 'react';

// components
import { TextWithIconWrapper } from '../styled';

// icons
import { ReactComponent as UsersIcon } from '../../assets/Users.svg';
import { ReactComponent as TimezoneIcon } from '../../assets/Timezone.svg';
import { ReactComponent as ViewsIcon } from '../../assets/Views.svg';
import { ReactComponent as EditIcon } from '../../assets/Edit.svg';

const ICONS: {
    [key: string]: React.ReactNode;
} = {
    users: <UsersIcon />,
    timezone: <TimezoneIcon />,
    view: <ViewsIcon />,
    edit: <EditIcon />,
};

type Props = {
    icon: 'users' | 'timezone' | 'view' | 'edit';
    text: string;
};

function TextWithIcon({ icon, text }: Props) {
    return (
        <TextWithIconWrapper>
            {ICONS[icon]}
            {text}
        </TextWithIconWrapper>
    );
}

export default TextWithIcon;
