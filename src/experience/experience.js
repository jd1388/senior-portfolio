import React from 'react';

import Header from '../core/header';
import Content from '../core/content';

import data from './data';

const createInternshipEnteries = experiences => experiences.map(experience => (
    <div key={`${experience.dates.start}-${experience.dates.end}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '30%' }}>
            <Content style={{ fontWeight: 'normal' }}>{experience.employer}</Content>
            <Content>{`${experience.dates.start} - ${experience.dates.end}`}</Content>
        </div>
        <div style={{ width: '70%' }}>
            <Content style={{ fontWeight: 'normal' }}>{experience.title}</Content>
            <Content>{experience.description}</Content>
        </div>
    </div>
))

const Internships = () => (
    <div>
        <Header size={5} style={{ paddingBottom: '32px' }}>Career Experience</Header>
        {createInternshipEnteries(data)}
    </div>
);

export default Internships;
