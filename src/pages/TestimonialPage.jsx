import { Container, Row, Col } from "react-bootstrap";
import FaqComponents from "../components/FaqComponents";

import { testimonial } from "../data/index";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp">Semua Testimonial</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-2s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, non.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col className="mb-5" key={data.id}>
                  <p className="desc shadow-sm">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponents />
    </div>
  );
};

export default TestimonialPage;
