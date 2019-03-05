import React from 'react';

import Hero from '../hero';
import CareerGoals from '../career-goals';
import Internships from '../internships';
import Projects from '../projects';
import Documents from '../documents';
import ContactInfo from '../contact-info';

import './App.css';

const App = () => (
    <div style={{ padding: '15vh 25vw 0 25vw' }}>
        <Hero />
        <CareerGoals />
        <Internships />
        <Projects />
        <Documents />
        <ContactInfo />
    </div>
);

export default App;
