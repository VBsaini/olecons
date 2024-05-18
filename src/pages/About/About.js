import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "./../../components/Footer/Footer";
function About() {
  return (
    <div>
      <Navbar />

      <div
        data-AOS="fade-up"
        data-AOS-duration="500"
        data-AOS-easing="ease-in"
        data-AOS-delay="50"
        className="about-container"
      >
        <h1 className="about-header">About</h1>
      </div>
      <span>
        <img
          data-AOS="zoom-out"
          data-AOS-easing="ease-in"
          data-AOS-duration="500"
          data-AOS-delay="75"
          className="geo-background"
          src="https://thumb.tildacdn.com/tild3165-3636-4834-a165-613935346366/-/format/webp/photo.png"
        />
      </span>
      <div className="about-body">
        {/* OUR STORY */}
        <h2
          data-AOS="fade-up"
          data-AOS-duration="500"
          data-AOS-easing="ease-in"
          data-AOS-delay="50"
          className="our-story-header"
        >
          Our Story
        </h2>
        <p
          data-AOS="fade-up"
          data-AOS-duration="500"
          data-AOS-easing="ease-in"
          data-AOS-delay="50"
          className="our-story-body"
        >
          In 2020, at the peak of the pandemic, we, the founders of Bash Today,
          decided to start outsourcing development venture in order to diversify
          our business workforce solutions. Over the course of several months,
          we managed to complete 16 projects. In total, our team's portfolio
          includes over 400 projects. We decided to expand our development and
          design capabilities and turn the given direction into an independent
          business by launching our own digital agency.
        </p>

        {/* ORANGE CIRCLES */}
        <div className="orange-circles">
          <Row>
            <Col className="col-lg-8"></Col>
            <Col>
              <div
                data-AOS="fade-left"
                data-AOS-duration="500"
                data-AOS-easing="ease-in"
                data-AOS-delay="100"
                className="orange-circle-1"
              ></div>
            </Col>
            <Col>
              <div
                data-AOS="fade-left"
                data-AOS-duration="600"
                data-AOS-easing="ease-in"
                data-AOS-delay="200"
                className="orange-circle-2"
              ></div>
            </Col>
          </Row>
          <Row>
            <Col className="col-lg-9">
              <div
                data-AOS="fade-left"
                data-AOS-easing="ease-in"
                data-AOS-duration="700"
                data-AOS-delay="300"
                className="orange-circle-3"
              ></div>
            </Col>
            <Col>
              <div
                data-AOS="fade-left"
                data-AOS-duration="800"
                data-AOS-easing="ease-in"
                data-AOS-delay="400"
                className="orange-circle-4"
              ></div>
            </Col>
          </Row>
        </div>

        {/* GEOGRAPHY */}
        <h2
          data-AOS="fade-left"
          data-AOS-duration="800"
          className="geography-header"
        >
          Geography
        </h2>
        <p
          data-AOS="fade-left"
          data-AOS-duration="500"
          className="geography-body"
        >
          We're a fully remote team of more than 20 professionals allocated in
          Moscow, Minsk, Krasnodar, Novosibirsk, Bishkek, Alma-Ata, San
          Francisco and London. Such spread allows us to work with customers
          from all over the world — from the United States to Russia.
        </p>

        {/* APPROACH */}
        <h2
          data-AOS="fade-right"
          data-AOS-duration="300"
          className="approach-header"
        >
          Approach
        </h2>
        <p className="approach-body">
          <p
            data-AOS="fade-right"
            data-AOS-duration="300"
            data-AOS-easing="ease-in"
            className="approach-body-1"
          >
            Our work is based on principles of ethics and aesthetics. A good
            product is honest, impartial, attentive to users, helpful,
            effective, and does it right. A well-crafted product is beautiful,
            clear, simple, likeable, leaves a long-lasting impression and
            amplifies the overall image of the client's business. By creating
            modern user-friendly top-notch products, we help our clients'
            businesses to grow, expand, appeal and successfully cover the brand
            new audience. When you see the growth with naked eye, we know our
            job is done right.
          </p>

          <p className="approach-body-2">
            <div className="divider-line"></div>
            <div
              data-AOS="fade-left"
              data-AOS-duration="300"
              data-AOS-easing="ease-in"
              className="approach-body-2-desc"
            >
              For each client, we create a team which is focused on the tasks of
              a particular project: full immersion, attention to details, always
              in touch.
            </div>
          </p>
        </p>

        {/* OUR TEAM */}
        <h2
          data-AOS="fade-up"
          data-AOS-duration="300"
          className="our-team-header"
        >
          Our Team
        </h2>
        <div className="our-team-body">
          <Row className="our-team-body-row">
            {/* MEMBER 1 */}
            <Col className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 member-1">
              <div className="our-team-body">
                {/* PHOTO */}
                <div>
                  <div
                    className="our-team-body-photo"
                    data-AOS="fade-up"
                    data-AOS-duration="300"
                  >
                    <img
                      src="https://thumb.tildacdn.com/tild6338-3837-4233-a132-396434333234/-/cover/120x166/center/center/-/format/webp/Mask_Group-1.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* NAME*/}
                <div>
                  <div
                    className="our-team-body-member-name"
                    data-AOS="fade-up"
                    data-AOS-duration="400"
                  >
                    <span>Efim Kolodkin </span>
                  </div>
                </div>
                {/* DESCRIPTION*/}
                <div>
                  <div
                    className="our-team-body-member-description"
                    data-AOS="fade-up"
                    data-AOS-duration="450"
                    delay="50"
                  >
                    <span>
                      Our team10 years in strategic management and sales, top
                      proptech entrepreneur
                    </span>
                  </div>
                </div>
                {/* POSITION*/}
                <div>
                  <div
                    className="our-team-body-member-position"
                    data-AOS="fade-up"
                    data-AOS-duration="550"
                    delay="100"
                  >
                    <span>chief executive officer</span>
                    <span>founder</span>
                  </div>
                </div>
              </div>
            </Col>
            {/* MEMBER 2 */}
            <Col className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 member-2">
              <div className="our-team-body">
                {/* PHOTO */}
                <div>
                  <div
                    className="our-team-body-photo"
                    data-AOS="fade-up"
                    data-AOS-duration="300"
                  >
                    <img
                      src="https://thumb.tildacdn.com/tild6262-3239-4634-b333-643338336461/-/cover/120x166/center/center/-/format/webp/Mask_Group-3.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* NAME*/}
                <div>
                  <div
                    className="our-team-body-member-name"
                    data-AOS="fade-up"
                    data-AOS-duration="400"
                  >
                    <span>Andrey Gorobchenko </span>
                  </div>
                </div>
                {/* DESCRIPTION*/}
                <div>
                  <div
                    className="our-team-body-member-description"
                    data-AOS="fade-up"
                    data-AOS-duration="450"
                    delay="50"
                  >
                    <span>
                      8 years' expertise in digital services with an audience of
                      over one million people
                    </span>
                  </div>
                </div>
                {/* POSITION*/}
                <div>
                  <div
                    className="our-team-body-member-position"
                    data-AOS="fade-up"
                    data-AOS-duration="550"
                    delay="100"
                  >
                    <span>chief product officer</span>
                    <span>co-founder</span>
                  </div>
                </div>
              </div>
            </Col>
            {/* MEMBER 3 */}
            <Col className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 member-3">
              <div className="our-team-body">
                {/* PHOTO */}
                <div>
                  <div
                    className="our-team-body-photo"
                    data-AOS="fade-up"
                    data-AOS-duration="300"
                  >
                    <img src="https://thumb.tildacdn.com/tild3039-6630-4066-b664-353066353937/-/cover/120x166/center/center/-/format/webp/Mask_Group-2.png" />
                  </div>
                </div>
                {/* NAME*/}
                <div>
                  <div
                    className="our-team-body-member-name"
                    data-AOS="fade-up"
                    data-AOS-duration="400"
                  >
                    <span>Alex Belikov </span>
                  </div>
                </div>
                {/* DESCRIPTION*/}
                <div>
                  <div
                    className="our-team-body-member-description"
                    data-AOS="fade-up"
                    data-AOS-duration="450"
                    delay="50"
                  >
                    <span>
                      17 years in design, created over 400 design products, ex.
                      Fireart (Poland)
                    </span>
                  </div>
                </div>
                {/* POSITION*/}
                <div>
                  <div
                    className="our-team-body-member-position"
                    data-AOS="fade-up"
                    data-AOS-duration="550"
                    delay="100"
                  >
                    <span>chief design officer</span>
                    <span>co-founder</span>
                  </div>
                </div>
              </div>
            </Col>
            {/* MEMBER 4 */}
            <Col className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12 member-4">
              <div className="our-team-body">
                {/* PHOTO */}
                <div>
                  <div
                    className="our-team-body-photo"
                    data-AOS="fade-up"
                    data-AOS-duration="300"
                    delay="50"
                  >
                    <img src="https://thumb.tildacdn.com/tild6531-6261-4730-a632-336531343133/-/cover/117x155/center/center/-/format/webp/Visuals_Avatar_Shevc.png" />
                  </div>
                </div>
                {/* NAME*/}
                <div>
                  <div
                    className="our-team-body-member-name"
                    data-AOS="fade-up"
                    data-AOS-duration="400"
                  >
                    <span>Irine Shévchik</span>
                  </div>
                </div>
                {/* DESCRIPTION*/}
                <div>
                  <div
                    className="our-team-body-member-description"
                    data-AOS="fade-up"
                    data-AOS-duration="450"
                    delay="50"
                  >
                    <span>
                      Lead designer, more than 50 successfully accomplished
                      projects, 10 years' expertise
                    </span>
                  </div>
                </div>
                {/* POSITION*/}
                <div>
                  <div
                    className="our-team-body-member-position"
                    data-AOS="fade-up"
                    data-AOS-duration="550"
                    delay="100"
                  >
                    <span>senior product designer</span>
                    <span>brand strategist</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div
          data-AOS="fade-up"
          data-AOS-duration="450"
          delay="50"
          className="about-bottom"
        >
          <p>
            And more than 20 highly qualified professionals: designers,
            illustrators, copywriters, business strategists, data scientists,
            and developers.
          </p>
        </div>

        {/* thin grey line  */}
        <hr className="thin-grey-line"></hr>

        {/* SERVICES */}
        <div className="services">
          <Row>
            <Col>
              <div
                data-AOS="fade-up"
                data-AOS-duration="450"
                data-AOS-delay="50"
              >
                <strong className="services-header">Design</strong>
              </div>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="50"
                className="services-body"
              >
                <div>After effects</div>
                <div>Figma</div>
                <div>Illustrator</div>
                <div>Invision</div>
                <div>Photoshop</div>
                <div>Tilda</div>
              </div>
            </Col>
            <Col>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="100"
              >
                <strong className="services-header">Backend</strong>
              </div>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="150"
                className="services-body"
              >
                <div>Django</div>
                <div>Laravel</div>
                <div>Flutter</div>
                <div>Lumen</div>
                <div>Memcached</div>
                <div>MySQL</div>
                <div>Nginx</div>
                <div>Clickhouse</div>
                <div>Excel VBA</div>
                <div>REST API</div>
                <div>PHP7</div>
                <div>PostgreSQL</div>
                <div>Python</div>
                <div>Redis</div>
                <div>Ubuntu</div>
              </div>
            </Col>
            <Col>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="250"
              >
                <strong className="services-header">Frontend</strong>
              </div>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="400"
                className="services-body"
              >
                <div>React</div>
                <div>SCSS / SASS</div>
                <div>LESS</div>
                <div>Vue.js</div>
                <div>jQuery</div>
                <div>Bootstrap</div>
                <div>HTML / CSS</div>
                <div>Google DS</div>
                <div>Amplitude</div>
                <div>Next.js</div>
                <div>Webpack</div>
              </div>
            </Col>
            <Col>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="450"
              >
                <strong className="services-header">Management</strong>
              </div>
              <div
                data-AOS="fade-up"
                data-AOS-duration="450"
                data-AOS-delay="600"
                className="services-body"
              >
                <div>Github</div>
                <div>Google docs</div>
                <div>Miro</div>
                <div>Notion</div>
                <div>Slack</div>
                <div>Telegram</div>
                <div>Testrail</div>
                <div>Trello</div>
                <div>Youtrack</div>
                <div>Zoom</div>
              </div>
            </Col>
            <Col>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="650"
              >
                <strong className="services-header">Promotion</strong>
              </div>
              <div
                data-AOS="fade-up"
                data-AOS-duration="500"
                data-AOS-delay="700"
                className="services-body"
              >
                <div>Yandex metrics</div>
                <div>Yandex webmaster</div>
                <div>Google analytics</div>
                <div>Google search console</div>
                <div>Google tag manager</div>
                <div>Google optimize</div>
                <div>Netpeak software</div>
                <div>Serpstat</div>
                <div>Ahrefs</div>
                <div>Spywords</div>
                <div>Topvisor</div>
                <div>Key collector</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
