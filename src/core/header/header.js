import React from 'react';
import Typography from '@material-ui/core/Typography';

const getHeaderFontSize = (size) => {
    const baseSize = 24;
    const numberOfSizes = 6;

    return `${(numberOfSizes + 1 - size) * baseSize}pt`;
}

const Header = (props) => {
    const { size, style, ...headerProps } = props;

    const fontSize = getHeaderFontSize(size);
    const headerStyle = { ...style, fontSize };

    return <Typography variant={`h${size}`} style={headerStyle} {...headerProps} />;
};

export default Header;
