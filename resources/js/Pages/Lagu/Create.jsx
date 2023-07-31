import React, { useState } from 'react';

import Layout from '../../Layouts/Default';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { router } from '@inertiajs/react';

import { Head } from '@inertiajs/react';

export default function Create({ errors, auth }) {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [cover, setCover] = useState('');

    const storeLagu = async (e) => {
        e.preventDefault();

        router.post('/lagu', {
            title: title,
            subtitle: subtitle,
            description: description,
            cover: cover
        });
    }


    return (
        <Layout auth={auth}>
            <Head title='Tambah' />

            <div className="row justify-content-md-center" style={{ marginTop: '50px', paddingBottom: '100px' }}>
                <div className="col-md-6">
                    <div className="card border-0 rounded shadow-sm border-top" bg="light">
                        <div className="card-header">
                            <span className="font-weight-bold">Tambah Lagu</span>
                        </div>

                        <div className="card-body">
                            <form onSubmit={storeLagu}>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder=""
                                    value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>

                            {errors.title && (
                                <div className="alert alert-danger">
                                    {errors.title}
                                </div>
                            )}

                            <Form.Group className="mb-3" controlId="subtitle">
                                <Form.Label>Artist</Form.Label>
                                <Form.Control type="text" placeholder=""
                                    value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                            </Form.Group>

                            {errors.subtitle && (
                                <div className="alert alert-danger">
                                    {errors.subtitle}
                                </div>
                            )}

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="" as="textarea" rows={3}
                                    value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>

                            {errors.description && (
                                <div className="alert alert-danger">
                                    {errors.description}
                                </div>
                            )}

                            <Form.Group className="mb-3" controlId="cover">
                                <Form.Label>Cover</Form.Label>
                                <Form.Control type="file" placeholder="" 
                                     onChange={(e) => setCover(e.target.files[0])} />
                            </Form.Group>

                            {errors.cover && (
                                <div className="alert alert-danger">
                                    {errors.cover}
                                </div>
                            )}

                            <div className="text-end">
                                <Button type="submit">Tambah</Button>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
