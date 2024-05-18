import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//CSS
import "./Landing.css";
//phone input
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import metadata from "libphonenumber-js/metadata.min.json";
import { Button } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";

/*
ROCKET BOTTOM LINK : https://thumb.tildacdn.com/tild6435-3135-4064-b961-663839666361/-/format/webp/3.png
ROCKET UP : https://thumb.tildacdn.com/tild3163-3164-4530-b439-646133366664/-/format/webp/1.png
THUNDER RIGHT : https://thumb.tildacdn.com/tild3733-6565-4836-b562-376333346661/-/resize/180x/-/format/webp/Visuals_Visioner_Ene.png
THUNDER LEFT : https://thumb.tildacdn.com/tild6264-6230-4934-a165-663536666330/-/resize/160x/-/format/webp/Visuals_Visioner_Ene.png
*/
function Landing() {
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [project, setProject] = React.useState();
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const inputRef = useRef();
  const handleUpload = () => {
    inputRef.current?.click();
    console.log(inputRef.current?.files);
  };
  return (
    <>
      {/* LANDING NAVBAR */}
      <section className="landing-navbar full-width">
        <Container>
          <div className="upshift-logo-container">
            <a href="/">
              <img
                className="upshift-logo"
                width={116}
                height={40.75}
                src="https://static.tildacdn.com/tild6163-3537-4666-a131-316465346639/12456Uprising_Brand-.svg"
              />
            </a>
          </div>
          <div className="row">
            {/* LEFT HALF */}
            <div className="col-lg-8">
              <div
                data-aos="zoom-in"
                data-aos-duration="600"
                className="landing-text"
              >
                We create <br />
                modern
                <br />
                and selling <br />
                <span className="landing-text-2">
                  landing <br />
                  pages <br />
                  and much <br />
                  more
                </span>
              </div>
              <Button
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="50"
                className="contact-us"
              >
                Contact us
              </Button>
            </div>
            {/* RIGHT HALF */}
            <div className="col-lg-4" style={{ position: "relative" }}>
              <div className="landing-img-container">
                <img
                  className="rocket"
                  data-aos="zoom-in-up"
                  data-aos-duration="700"
                  src="https://thumb.tildacdn.com/tild3163-3164-4530-b439-646133366664/-/resize/1000x/-/format/webp/1.png"
                />
                <img
                  className="flame"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                  src="https://thumb.tildacdn.com/tild6435-3135-4064-b961-663839666361/-/resize/1000x/-/format/webp/3.png"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  className="landing-bolt-1 landing-bolt"
                  src="https://thumb.tildacdn.com/tild3733-6565-4836-b562-376333346661/-/resize/90x/-/format/webp/Visuals_Visioner_Ene.png"
                />
                <img
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  className="landing-bolt-2 landing-bolt"
                  src="https://thumb.tildacdn.com/tild6264-6230-4934-a165-663536666330/-/resize/80x/-/format/webp/Visuals_Visioner_Ene.png"
                />
                <div
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="landing-ball landing-ball-50"
                ></div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="750"
                  className="landing-ball landing-ball-30 "
                ></div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="650"
                  className="landing-ball landing-ball-22 "
                ></div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="550"
                  className="landing-ball landing-ball-140 "
                ></div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="550"
                  className="landing-ball landing-ball-12 "
                ></div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="450"
                  className="landing-ball landing-ball-22-2 "
                ></div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="650"
                  className="landing-ball landing-ball-35"
                ></div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="750"
                  className="landing-ball landing-ball-80"
                ></div>
                <div
                  data-aos="zoom-in-right"
                  data-aos-duration="500"
                  data-aos-delay="450"
                  className="landing-ball landing-ball-15"
                ></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div
        style={{
          transform: "scale(0.95)",
        }}
      >
        {/* OUR WORKS SECTION */}
        <section className="our-works">
          <div
            data-aos="fade-up"
            data-aos-duration="400"
            className="our-works-header"
          >
            Our works
          </div>
          {/* 1st ROW */}
          <div class="work-type-row">
            <Row className="work-type">
              <Col className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                {/* Upshit */}
                <div className="col-item-1">
                  <div class="work-type-row">
                    <Row>
                      <div>
                        <img
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-image"
                          src="https://thumb.tildacdn.com/tild3638-3730-4561-b931-313032313335/-/cover/840x600/center/center/-/format/webp/Uprising_Prodvizheni.jpg"
                          alt="Project Work Image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="image-footer">
                        <span
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-name"
                        >
                          Upshift
                        </span>
                        <span
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-type"
                        >
                          Professional
                        </span>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
              {/* Aplifter */}
              <Col className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="col-item-2">
                  <div class="work-type-row">
                    <Row>
                      <div>
                        <img
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-image"
                          src="https://thumb.tildacdn.com/tild6165-6539-4533-b861-643563663034/-/cover/840x600/center/center/-/format/webp/Group_33574.jpg"
                          alt="Project Work Image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="image-footer">
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-name"
                        >
                          Aplifter
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-type"
                        >
                          Basic
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* 2nd ROW */}
          <div class="work-type-row">
            <Row className="work-type">
              <Col className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                {/* Istok audio */}
                <div className="col-item-1">
                  <div class="work-type-row">
                    <Row>
                      <div>
                        <img
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-image"
                          src="https://thumb.tildacdn.com/tild6536-3466-4563-b330-396339393930/-/cover/840x600/center/center/-/format/webp/Group_33581.jpg"
                          alt="Project Work Image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="image-footer">
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-name"
                        >
                          Istok audio
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-type"
                        >
                          Basic
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                {/* Elixir premium lab */}
                <div className="col-item-2">
                  <div class="work-type-row">
                    <Row>
                      <div>
                        <img
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-image"
                          src="https://thumb.tildacdn.com/tild3038-6635-4062-b734-346162623438/-/cover/840x600/center/center/-/format/webp/Group_33578.jpg"
                          alt="Project Work Image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="image-footer">
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-name"
                        >
                          Elixir premium lab
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-type"
                        >
                          Optima
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* 3rd ROW */}
          <div class="work-type-row">
            <Row className="work-type">
              <Col className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                {/* Alpha wave alliance */}
                <div className="col-item-3">
                  <div class="work-type-row">
                    <Row>
                      <div>
                        <img
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-image"
                          src="https://thumb.tildacdn.com/tild3639-3734-4537-b362-633031373561/-/cover/840x600/center/center/-/format/webp/Frame_602.png"
                          alt="Project Work Image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="image-footer">
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-name"
                        >
                          Alpha wave alliance
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-duration="400"
                          className="work-type"
                        >
                          Basic
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </section>
        {/* TEAM SECTION */}
        <section className="team">
          {/* heading row */}
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              className="col-team-header"
            >
              A team with a deep business expertise
            </Col>
            <Col></Col>
          </Row>
          {/* team description row */}
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              className="col-team-description"
            >
              By creating landing pages, we help our clients to achieve
              leadership in the digital environment. Our expertise is based on
              the creation and delivery of digital products to the European and
              US markets. The agency's team consists of the graduates of the 500
              startups accelerator (USA). ¹ We apply all the experience and
              knowledge gained from leading experts in the venture capital
              industry from Europr and the US while working on our projects.
            </Col>
            <Col className="col-team-description-filler"></Col>
          </Row>
          {/* team description footer */}
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              className="col-team-description-footer"
            >
              ¹ 500 startups is a multi-billion dollar venture fund and
              accelerator from the United States. 5 graduates of the accelerator
              have become unicorns (projects with a capitalization of over $1
              billion).
            </Col>
            <Col className="col-team-description-footer-filler"></Col>
          </Row>
        </section>
        {/* Why choose us? */}
        <section className="why-choose-us">
          {/* heading row */}
          <Row>
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              className="col-why-choose-us-header"
            >
              Why choose us?
            </Col>
            <Col></Col>
          </Row>
          {/* description row  1*/}
          <Row className="why-choose-us-row">
            {/* COLUMN 1 */}
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              className="col-why-choose-us-description col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="why-choose-us-description-row-1">
                <div className="why-choose-us-description-icon">
                  <img
                    src="https://thumb.tildacdn.com/tild3961-6466-4736-b065-636330323733/-/cover/80x80/center/center/-/format/webp/Calendar.png"
                    alt="icon"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="why-choose-us-description-text">
                  <div className="why-choose-us-description-text-header">
                    Low time to market
                  </div>
                  <div className="why-choose-us-description-text-body">
                    Starting from 6 days for landing pages
                  </div>
                </div>
              </div>
            </Col>
            {/* COLUMN 2 */}
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="col-why-choose-us-description col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="why-choose-us-description-row-2">
                <div className="why-choose-us-description-icon">
                  <img
                    src="https://thumb.tildacdn.com/tild3966-6434-4139-a366-393165643836/-/cover/80x80/center/center/-/format/webp/Frame_4.png"
                    alt="icon"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="why-choose-us-description-text">
                  <div className="why-choose-us-description-text-header">
                    Transparent process
                  </div>
                  <div className="why-choose-us-description-text-body">
                    You'll be able to monitor the production in real time
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* description row  2*/}
          <Row className="why-choose-us-row">
            {/* COLUMN 1 */}
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="200"
              className="col-why-choose-us-description col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="why-choose-us-description-row-1">
                <div className="why-choose-us-description-icon">
                  <img
                    src="https://thumb.tildacdn.com/tild3035-3565-4036-a664-326630646138/-/cover/80x80/center/center/-/format/webp/Frame_1.png"
                    alt="icon"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="why-choose-us-description-text">
                  <div className="why-choose-us-description-text-header">
                    Adaptive design
                  </div>
                  <div className="why-choose-us-description-text-body">
                    We carefully adapt all the layouts for multiple screen
                    sizes, from 320 to 2550 px
                  </div>
                </div>
              </div>
            </Col>
            {/* COLUMN 2 */}
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="250"
              className="col-why-choose-us-description col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="why-choose-us-description-row-2">
                <div className="why-choose-us-description-icon">
                  <img
                    src="https://thumb.tildacdn.com/tild6137-6662-4061-b439-346232653361/-/cover/80x80/center/center/-/format/webp/Frame_3.png"
                    alt="icon"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="why-choose-us-description-text">
                  <div className="why-choose-us-description-text-header">
                    SEO optimization
                  </div>
                  <div className="why-choose-us-description-text-body">
                    We managе the basic SEO, that will help you with further
                    internet marketing
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* description row  3*/}
          <Row className="why-choose-us-row">
            {/* COLUMN 1 */}
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
              className="col-why-choose-us-description col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="why-choose-us-description-row-1">
                <div className="why-choose-us-description-icon">
                  <img
                    src="https://thumb.tildacdn.com/tild3535-3534-4536-b965-303536363239/-/cover/80x80/center/center/-/format/webp/Frame_2.png"
                    alt="icon"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="why-choose-us-description-text">
                  <div className="why-choose-us-description-text-header">
                    We keep our minds up-to-date
                  </div>
                  <div className="why-choose-us-description-text-body">
                    We follow the latest trends, have an impressive collection
                    of references, and crave the creativity
                  </div>
                </div>
              </div>
            </Col>
            {/* COLUMN 2 */}
            <Col
              data-aos="fade-up"
              data-aos-duration="500"
              className="col-why-choose-us-description col-lg-6 col-md-12 col-sm-12 col-xs-12"
            >
              <div className="why-choose-us-description-row-2">
                <div className="why-choose-us-description-icon">
                  <img
                    src="https://thumb.tildacdn.com/tild3664-3632-4131-a234-333039383638/-/cover/80x80/center/center/-/format/webp/fi_bar-chart.png"
                    alt="icon"
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="why-choose-us-description-text">
                  <div className="why-choose-us-description-text-header">
                    Result in metrics
                  </div>
                  <div className="why-choose-us-description-text-body">
                    Landing pages are created to convert leads for your
                    business, so we pay close attention to the conversion
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        {/* MODERN TOOLS */}
        <section className="modern-tools">
          <Row>
            <Col className="col-modern-tools-header col-modern-tools-body col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                className="modern-tools-header-text"
              >
                We use the most modern tools in our work
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="col-modern-tools-body col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="modern-tools-body-text">
                <ol className="modern-tools-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="50"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      Website and application builders: Tilda ∙ Zero block,
                      Webflow, Wix, Bubble.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="250"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      Graphics editors and prototyping tools: Figma,
                      Illustrator, Photoshop.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="450"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      Animation: Tilda ∙ Zero block (basic built-in), After
                      effects (custom, tailored).
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="450"
                    data-aos-delay="600"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      Integrations: Facebook messenger, Chart.js, Vue.js.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="750"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      Also: domain names, web hosting services, SSL certificate,
                      HTTPS protocol, database security, safe online
                      transactions, and much more.
                    </span>
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </section>
        {/* PACKAGE */}
        <section className="package">
          {/* ROW 1 */}
          <Row>
            <Col className="col-package-header">
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="50"
                className="package-header-text"
              >
                Choose your <br />
                landing page <br />
                package
              </div>
            </Col>
            <Col></Col>
          </Row>
          {/* ROW 2 */}
          <Row>
            <Col className="col-package-body">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="package-body-text"
              >
                Four options to choose from: Basic, Optima, Professional and
                Custom.
              </div>
            </Col>
            <Col></Col>
          </Row>
        </section>
        {/* BASIC */}
        <section className="basic">
          <Row className="types-row">
            <Col className="col-basic-header col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="basic-header-text"
              >
                Basic: lightning-fast landing page launch in 6 days
                <span id="popular" className="popular">
                  POPULAR
                </span>
              </div>
            </Col>
            <Col className="col-basic-header-2 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-header-text-2"
              >
                From $1,900
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-body"
              >
                Full-fledged landing page of 6 blocks
                <br />
                <br />
                Basic SEO setup
              </div>
              <div className="basic-footer">
                <a
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="basic-footer-text"
                  href="https://alphawavealliance.com/"
                >
                  Example ↗
                </a>
              </div>
            </Col>
          </Row>
        </section>
        {/* PRO */}
        <section className="basic">
          <Row className="types-row">
            <Col className="col-basic-header col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="basic-header-text"
              >
                Pro: creative and stunning presentation
              </div>
            </Col>
            <Col className="col-basic-header-2 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-header-text-2"
              >
                From $11,000
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-body"
              >
                Landing page with non-standard solutions
                <br />
                <br />
                Copyright Illustrations
                <br />
                <br />
                Animation of text, illustrations and background
              </div>
              <div className="basic-footer">
                <a
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="basic-footer-text"
                  href="https://projects.invisionapp.com/share/BN11Y61TXJVW#/screens"
                >
                  Example ↗
                </a>
              </div>
            </Col>
          </Row>
        </section>
        {/* OPTIMA */}
        <section className="basic optima">
          <div className="full-width orange-arrow"></div>
          <Row className="types-row">
            <Col className="col-basic-header col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="basic-header-text"
              >
                Optima: an effective way to present your product with animation
              </div>
            </Col>
            <Col className="col-basic-header-2 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-header-text-2"
              >
                From $11,000
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-body"
              >
                Landing page with non-standard solutions
                <br />
                <br />
                Copyright Illustrations
                <br />
                <br />
                Animation of text, illustrations and background
              </div>
              <div className="basic-footer">
                <a
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="basic-footer-text"
                  href="https://projects.invisionapp.com/share/BN11Y61TXJVW#/screens"
                >
                  Example ↗
                </a>
              </div>
            </Col>
          </Row>
        </section>
        {/* CUSTOM */}
        <section className="basic">
          <Row className="types-row">
            <Col className="col-basic-header col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                className="basic-header-text"
              >
                <img
                  className="custom-header-text-image"
                  src="https://static.tildacdn.com/tild3232-3965-4232-a236-623239636165/Group_33607.svg"
                />
                <br />
                original site from our design . laboratory
              </div>
            </Col>
            <Col className="col-basic-header-2 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-header-text-2"
              >
                Price on request
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="basic-body"
              >
                Creation of the concept of photo content and participation in
                the organisation of the photoshoot
                <br />
                <br />
                Layout on bootstrap
                <br />
                <br />
                Illustrations and animation from our design laboratory
              </div>
            </Col>
          </Row>
        </section>
        {/* START PROJECT */}
        <section className="modern-tools">
          <Row>
            <Col className="col-modern-tools-header">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="50"
                className="modern-tools-header-text"
              >
                We use the most modern tools in our work
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="col-modern-tools-body">
              <div className="modern-tools-body-text">
                <ol className="modern-tools-list">
                  <li
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="150"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      We receive and process your request.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      We validate the copy and visual content.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="450"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      We create the design layouts (to demonstrate the selected
                      style)
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="600"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      We approve the chosen style with you.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="750"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      We implement the approved design.
                    </span>
                  </li>
                  <li
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="900"
                    className="modern-tools-list-item"
                  >
                    <span className="list-item-text">
                      We test the landing page and hand it over to you.
                    </span>
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </section>
        {/* DISCUSS PROJECT */}
        <section className="discuss-project" style={{ overflow: "hidden" }}>
          {/* ROW 1 HEADER */}
          <Row>
            <Col className="col-discuss-project-header">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="discuss-project-header-text"
              >
                Let's discuss your project!
              </div>
            </Col>

            <Col></Col>
          </Row>
          <Row>
            <Col className="col-lg-6 col-md-12 col-sm-12 col-xs-12 col-discuss-project-body-1">
              {/* FIRST AND LAST NAME */}
              <Row className="discuss-project-input">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="order-body-input"
                >
                  <span className="input-title">First and last name</span>
                  <input
                    className="input-field"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                </div>
              </Row>
              {/* EMAIL */}
              <Row className="discuss-project-input">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="order-body-input"
                >
                  <span className="input-title">Email</span>
                  <input
                    className="input-field"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </div>
              </Row>
              {/* PHONE NUMBER */}
              <Row className="discuss-project-input">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="order-body-input"
                >
                  <span className="input-title">Phone</span>
                  <PhoneInput
                    placeholder="99999 99999"
                    name="phone"
                    className="input-field-phone"
                    metadata={metadata}
                    format={true}
                    defaultCountry={"IN"}
                    maxLength="16"
                    value={formatPhoneNumberIntl(phoneNumber)}
                    onChange={(phoneNumber) => {
                      setPhoneNumber(phoneNumber);
                    }}
                  />
                </div>
              </Row>
              {/* PROJECT DESCRIPTION */}
              <Row className="discuss-project-input">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="order-body-input"
                >
                  <span className="input-title">Project description</span>
                  <textarea className="input-field" rows="4" cols="50" />
                </div>
              </Row>
              {/* LANDING PACKAGE */}
              <Row className="discuss-project-input">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="order-body-input"
                >
                  <span className="input-title">
                    Choose a landing page package
                  </span>
                  <select
                    className="input-field"
                    name="project"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  >
                    <option value="Basic">Basic</option>
                    <option value="Optima">Optima</option>
                    <option value="Professional">Professional</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </Row>
              {/*PROJECT FILES ATTATCHMENTS*/}
              <Row className="discuss-project-input">
                <div className="order-body-input">
                  <span className="input-title">
                    Attach any files important for your project (e.g. brandbook)
                  </span>
                  <div>
                    <button className="file-input" onClick={handleUpload}>
                      <label className="mx-3">
                        {inputRef.current?.files.length > 0
                          ? "✓ " + inputRef.current?.files[0].name
                          : "Add files"}
                      </label>
                      <input
                        id="file-input"
                        className="d-none"
                        value={fileName}
                        ref={inputRef}
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                    </button>
                  </div>
                </div>
              </Row>
              {/*SUBMIT BUTTON*/}
              <div className="order-body-submit">
                <Button className="order-button" type="submit">
                  Send a Request
                </Button>
              </div>
            </Col>
            <Col
              className="col-lg-6 col-md-12 col-sm-12 col-xs-12  col-discuss-project-body-2"
              style={{ paddingLeft: "100px" }}
            >
              <Row>
                <div
                  data-aos="fade-left"
                  data-aos-duration="300"
                  className="discuss-paragraph-1"
                >
                  <span>
                    Please leave your contact details and we will reach out to
                    you as soon as possible to clarify the details of your
                    project. ¹
                  </span>
                </div>
              </Row>
              <Row>
                <div
                  data-aos="fade-left"
                  data-aos-duration="300"
                  data-aos-delay="100"
                  className="discuss-paragraph-2"
                >
                  <span>
                    All submitted information is completely confidential and
                    will only be available to the employees of the Uprising
                    agency.
                  </span>
                </div>
              </Row>
              <Row>
                <div
                  data-aos="fade-left"
                  data-aos-duration="300"
                  data-aos-delay="200"
                  className="discuss-paragraph-3"
                >
                  <span>
                    ¹ We usually call back within an hour during business hours
                    10 am ∙ 7 pm (UTC+3), Mon ∙ Fri.
                  </span>
                </div>
              </Row>
            </Col>
          </Row>
        </section>
        {/* thin grey line  */}
        <hr className="thin-grey-line"></hr>
        {/* QUESTIONS */}
        <section className="questions">
          <Row>
            <Col className="col-questions-header">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="questions-header-text"
              >
                Still have questions?
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="col-questions-body">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="questions-body-text"
              >
                Drop us a line via service@uprising.agency or Facebook messenger
                on this page.
              </div>
            </Col>
            <Col></Col>
          </Row>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
