import { Card, Container, Row, Col  } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faShuffle, faPlay, faRepeat, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Player(lagu) {
  return (
    <Navbar className="fixed-bottom text-white" bg="dark" variant="dark">
      <Container fluid>
        <Row className="align-items-center w-100">
          <Col>
            <Row className="align-items-center">
              <Col>
                <Image src={'/' + lagu.cover} rounded className="plaver-cover"/>
              </Col>
              <Col xs={8}>
                <Row>
                  <h5 className="fw-bold text-white">{lagu.title}</h5>
                </Row>
                <Row>
                  <h6 className="text-white">{lagu.subtitle}</h6>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xs={6}>
            <Row className="align-items-center">
              <Col className="center">
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faShuffle} size="lg" style={{color: "#dbdbdb",}}/>
                  </Col>
                  <Col>
                    <FontAwesomeIcon icon={faBackwardStep} size="lg" />
                  </Col>
                  <Col>
                    <FontAwesomeIcon icon={faPlay} size="xl" />
                  </Col>
                  <Col>
                    <FontAwesomeIcon icon={faForwardStep} size="lg" />
                  </Col>
                  <Col>
                    <FontAwesomeIcon icon={faRepeat} size="lg" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <ProgressBar animated now={45} style={{height: 10,}} />
              </Col>
            </Row>
          </Col>

          <Col>
           <Row>
            <Col>
              <Row className="align-items-center justify-content-end">
                <Col sm={1}>
                  <FontAwesomeIcon icon={faVolumeHigh} size="lg" />
                </Col>
                <Col sm={4}>
                  <ProgressBar now={90} style={{height: 5,}} />
                </Col>
              </Row>
            </Col>
           </Row>
          </Col>

        </Row>
        
      </Container>
    </Navbar>
  )
}
