import React from 'react';
import Typography from '@material-ui/core/Typography';

import data from './data';

const CareerGoals = () => (
    <div style={{ border: '1px solid red' }}>
        <Typography>{data.goals}</Typography>
    </div>
);

export default CareerGoals;
