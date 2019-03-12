import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

import Header from '../core/header';
import Content from '../core/content';

import data from './data';

const getDocuments = documents => documents.map(({ name, src }) => (
    <Content style={{ textDecoration: 'underline' }}>
        <Link href={src}>
            {name}
        </Link>
    </Content>
));

const Documents = ({ style }) => (
    <div style={style}>
        <Header size={5} style={{ paddingBottom: '32px' }}>Documents</Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {getDocuments(data)}
        </div>
    </div>
);

export default Documents;
