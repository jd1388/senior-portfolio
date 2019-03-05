import React from 'react';
import Typography from '@material-ui/core/Typography';

import data from './data';

const Hero = () => (
    <div style={{ border: '1px solid blue' }}>
        <Typography variant='h1'>{data.title}</Typography>
        <Typography variant='body1'>{data.message}</Typography>
    </div>
);

export default Hero;
