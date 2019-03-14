import React from 'react';
import Link from '@material-ui/core/Link';

import Header from '../core/header';
import Content from '../core/content';

import data from './data';

const getContactInfo = contactMethods => contactMethods.map(({ name, src }) => (
    <Content style={{ textDecoration: 'underline' }}>
        <Link href={src} target='_blank'>
            {name}
        </Link>
    </Content>
));

const ContactInfo = ({ style }) => (
    <div style={style}>
        <Header size={5} style={{ paddingBottom: '32px' }}>Contact Info</Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {getContactInfo(data)}
        </div>
    </div>
);

export default ContactInfo;
