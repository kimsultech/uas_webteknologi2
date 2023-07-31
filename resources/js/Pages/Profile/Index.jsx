import React from 'react';

import { Card, Container, Row, Col, Image } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../Layouts/Default';

import { Link } from '@inertiajs/react';

import { Head } from '@inertiajs/react';

export default function Index({auth}) {

    return (
        <Layout auth={auth}>
            <Head title='Profil' />

            <div style={{ marginTop: '50px' }}>

            <Container className="mb-5">
                <Row className="mt-5 mb-2">
                <Col className="center">
                    <FontAwesomeIcon icon={faUser} bounce className="urang" style={{color: "#ffffff",}} />
                </Col>
                </Row>
                <Row>
                <Col className="center">
                    <h5 className="text-white">{auth.user.name}</h5>
                </Col>
                </Row>
                <Row>
                <Col className="center">
                    <small className="text-white">{auth.user.email}</small>
                </Col>
                </Row>
            </Container>

                <div className="row justify-content-md-center">
                    <h3 className='text-danger text-center'>Anggota Kelompok :</h3>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <a className="text-decoration-none">
                            <div className="card">
                                <img src="/profile.png" width="150" className="card-img-top thumbnail-profile" alt='' />

                                <div className="card-body text-center">
                                    <span className="card-text font-bold">Andrea Maulana</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <a className="text-decoration-none">
                            <div className="card">
                                <img src="/profile.png" width="150" className="card-img-top thumbnail-profile" alt='' />

                                <div className="card-body text-center">
                                    <span className="card-text font-bold">Salma Alya Shafira</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4">
                        <a className="text-decoration-none">
                            <div className="card">
                                <img src="/profile.png" width="150" className="card-img-top thumbnail-profile" alt='' />

                                <div className="card-body text-center">
                                    <span className="card-text font-bold">Sultan Akmal Maulana</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </Layout>
    )

}