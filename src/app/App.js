import React from 'react';

import Hero from '../hero';
import Experience from '../experience';
import Projects from '../projects';
import Documents from '../documents';
import ContactInfo from '../contact-info';

import './App.css';

const App = () => (
    <div style={{ padding: '15vh 25vw 0 25vw' }}>
        <Hero />
        <Experience style={{ paddingTop: '16px' }} />
        <Projects style={{ paddingTop: '16px' }} />
        <Documents style={{ paddingTop: '16px' }} />
        <ContactInfo style={{ paddingTop: '16px' }} />
    </div>
);

export default App;
