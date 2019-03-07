import React from 'react';

import Header from '../core/header';
import Content from '../core/content';

import data from './data';

const Hero = () => (
    <div style={{ border: '1px solid blue' }}>
        <Header size={1} style={{ textAlign: 'center', paddingBottom: '64px' }}>{data.title}</Header>
        <Content style={{ paddingBottom: '16px' }}>{data.message}</Content>
        <Content>{data.goals}</Content>
    </div>
);

export default Hero;
