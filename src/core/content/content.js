import React from 'react';
import Typography from '@material-ui/core/Typography';

const Content = ({ style, ...contentProps }) => {
    const contentStyle = { ...style, fontSize: '16pt' };

    return <Typography variant='body1' {...contentProps} style={contentStyle} {...contentProps} />;
};

export default Content;
