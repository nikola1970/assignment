import React, { memo } from 'react';

// components
import { LoaderWrapper } from './styled';
import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';

type Props = {
    position?: 'absolute' | 'fixed';
};

const Loader = ({ position }: Props) => (
    <LoaderWrapper position={position!} data-testid="loader">
        <LoaderSvg />
    </LoaderWrapper>
);

Loader.defaultProps = {
    position: 'absolute',
};

export default memo(Loader);
