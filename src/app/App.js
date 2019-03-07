import React from 'react';

import Hero from '../hero';
import Experience from '../experience';
import Projects from '../projects';
import Documents from '../documents';
import ContactInfo from '../contact-info';

import './App.css';

const Section = ({ children }) => (
    <div style={{ paddingTop: '16px' }}>
        {children}
        <hr />
    </div>
);

const App = () => (
    <div style={{ padding: '15vh 25vw 0 25vw' }}>
        <Hero />
        <Section><Experience /></Section>
        <Section><Projects /></Section>
        <Section><Documents /></Section>
        <ContactInfo />
    </div>
);

export default App;
