import React from 'react';
import Typography from '@material-ui/core/Typography';

const Content = ({ style, ...contentProps }) => {
    const contentStyle = { fontSize: '16pt', fontWeight: 'lighter', paddingBottom: '16px', ...style };

    return <Typography variant='body1' {...contentProps} style={contentStyle} {...contentProps} />;
};

export default Content;
