import React from 'react';

// components
import { LoaderWrapper } from './styled';
import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';

type Props = {
    position?: 'absolute' | 'fixed';
};

function Loader({ position }: Props) {
    return (
        <LoaderWrapper position={position!} data-testid="loader">
            <LoaderSvg />
        </LoaderWrapper>
    );
}

Loader.defaultProps = {
    position: 'absolute',
};

export default Loader;
