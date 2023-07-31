import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';


export default function Queue(lagu) {
  return (
    <div>
      <Container>
        <ListGroup as="ol">
          <ListGroup.Item as="li" variant="dark" className="queue-item" active>
              <Row className="align-items-center">
                <Col sm={1}>
                  <Image src={'/' + lagu.cover} rounded className="queue-cover"/>
                </Col>
                <Col>
                  <Row>
                    <b className="fw-bold">{lagu.title}</b>
                  </Row>
                  <Row>
                    <span>{lagu.subtitle}</span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <span>{lagu.description}</span>
                  </Row>
                </Col>
                <Col sm={1}>
                  <Row>
                    <span >3:33</span>
                  </Row>
                </Col>
              </Row>
          </ListGroup.Item>

          

        </ListGroup>
      </Container>
    </div>
  );
};
