import React from 'react';

import Header from '../core/header';
import Content from '../core/content';

import data from './data';

const Hero = () => (
    <div>
        <Header size={1} style={{ textAlign: 'center', paddingBottom: '64px' }}>{data.title}</Header>
        <Content>{data.message}</Content>
        <Content>{data.goals}</Content>
    </div>
);

export default Hero;
