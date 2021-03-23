import React from 'react';

// components
import { HeaderWrapper } from './styled';
import { Heading1, Heading5 } from '../global/Typography';

function Header() {
    return (
        <HeaderWrapper>
            <Heading5 grey>All Locations</Heading5>
            <Heading1>ACME Locations</Heading1>
        </HeaderWrapper>
    );
}

export default Header;
