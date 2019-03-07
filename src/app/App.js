import React from 'react';

import Hero from '../hero';
import Experience from '../experience';
import Projects from '../projects';
import Documents from '../documents';
import ContactInfo from '../contact-info';

import './App.css';

const Section = ({ children }) => (
    <div>
        {children}
        <hr />
    </div>
);

const App = () => (
    <div style={{ padding: '10vh 25vw 0 25vw' }}>
        <Section><Hero /></Section>
        <Section><Experience /></Section>
        <Section><Projects /></Section>
        <Section><Documents /></Section>
        <ContactInfo />
    </div>
);

export default App;
