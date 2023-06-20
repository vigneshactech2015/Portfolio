import javascript from "../assets/img/Javascript.png";
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import redux from '../assets/img/redux.png';
import react from '../assets/img/react.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/footer-bg.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img loading="lazy" src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img loading="lazy" src={react} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img loading="lazy" src={redux} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img loading="lazy" src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img loading="lazy" src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" loading="lazy" src={colorSharp} alt="Image" />
    </section>
  )
}
