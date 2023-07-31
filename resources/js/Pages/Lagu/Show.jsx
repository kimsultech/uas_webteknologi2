import React from 'react';

import Layout from '../../Layouts/Default';
import Player from './Player';
import Queue from './Queue';

import { Head } from '@inertiajs/react';

export default function Show({ lagu, auth }) {

    return (
        <Layout auth={auth}>
            
            <Head title={lagu.title + ' - ' + lagu.subtitle} />

            <Queue title={lagu.title} subtitle={lagu.subtitle} cover={lagu.cover} description={lagu.description} />

            <Player title={lagu.title} subtitle={lagu.subtitle} cover={lagu.cover} description={lagu.description} />
        </Layout>
    )

}