import { Col, Container, Row } from "react-bootstrap"
import Video from "../../components/video/Video"
import "./_homeScreen.scss"

const HomeScreen = () => {
  return (
    <Container>
        <Row>
            {[...new Array(20)].map((index) => (
                <Col lg={3} md={4} key={index}>
                    <Video />
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default HomeScreen