import React from 'react';

import Layout from '../../Layouts/Default';

import { Link } from '@inertiajs/react';

import { useState } from 'react';

import { Card, Container, Row, Col, Image, Alert  } from "react-bootstrap";

import { Head } from '@inertiajs/react';

export default function Index({ lagus, session, auth}) {
    const [show, setShow] = useState(true);

    return (
        <Layout auth={auth}>

            <Head title='Home' />

            <div style={{ marginTop: '50px' }}>

                {session.success && show && (
                    <Alert variant="success" onClose={() => setShow(true)}>
                        <Alert.Heading>{session.success}</Alert.Heading>
                    </Alert>
                )}

                <Row className="flex">
                    {lagus.map((lagu, index) => (
                        <Col sm={2} className="albumWrapper" key={index}>
                            <Link href={"/lagu/show/" + lagu.id} className="text-decoration-none">
                                <Card className="albumImage" bg="dark">
                                    <Image
                                        src={'/' + lagu.cover}
                                        className="cover"
                                    />
                                    <div className="bg-dark">
                                        <div className="p-3 text-white">
                                            <h6 className="cover_title fw-bold">
                                                {lagu.title}
                                            </h6>
                                            <h6 className="cover_subtitle">
                                                {lagu.subtitle}
                                            </h6>
                                        </div>
                                        {auth.user &&
                                            <div className="text-end p-2">
                                                <Link href={"/lagu/delete/" + lagu.id} method="delete" as='button' className="btn btn-sm btn-danger me-2">Hapus</Link>
                                                <Link href={"/lagu/edit/" + lagu.id} className="btn btn-sm btn-success">Edit</Link>
                                            </div>
                                        }

                                    </div>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>

            </div>
        </Layout>
    )

}