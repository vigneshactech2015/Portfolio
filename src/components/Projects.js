import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import colorSharp2 from "../assets/img/footer-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Login Module",
      description: "Authentication and authorization",
      imgUrl: projImg1,
    },
    {
      title: "Product Module",
      description: "Customer can buy product",
      imgUrl: projImg2,
    },
    {
      title: "User Module",
      description: "Admin can do CRUD,Customer has read access only",
      imgUrl: projImg3,
    },
    {
      title: "Product Module",
      description: "Admin can add delete edit product",
      imgUrl: projImg4,
    },
    {
      title: "Product detail",
      description: "Customer can view details of product",
      imgUrl: projImg5,
    },
    {
      title: "CheckOut Module",
      description: "Customer can purchase products",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sample</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Credentials</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Live</Nav.Link>
                    
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>UserName : customer</p>
                      <p>Password : customer</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                <div className="project-container">
                <a href="https://github.com/vigneshactech2015/Vkart" target="blank" style={{textDecoration:"none",color:"white",cursor:"pointer",marginLeft:"32%",padding:"2%",backgroundColor:"#883493",borderRadius:"10px"}}>GitHub</a>
                <a href="https://vkart.netlify.app/" target="blank" style={{textDecoration:"none",color:"white",cursor:"pointer",marginLeft:"5%",padding:"2%",backgroundColor:"#883493",borderRadius:"10px"}}>Live Link</a>
                </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img loading="lazy" className="background-image-right" src={colorSharp2} alt="background-image-right"></img>
    </section>
  )
}
