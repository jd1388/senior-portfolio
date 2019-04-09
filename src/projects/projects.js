import React from 'react';

import Header from '../core/header';
import Content from '../core/content';

import data from './data';

const getProjectEntries = projects => projects.map(project => (
    <div key={project.name}>
        <Content style={{ fontWeight: 'normal' }}>{project.name}</Content>
        <Content>{project.description}</Content>
    </div>
));

const Projects = ({ style }) => (
    <div style={style}>
        <Header size={5} style={{ paddingBottom: '32px' }}>Projects</Header>
        {getProjectEntries(data)}
    </div>
);

export default Projects;
