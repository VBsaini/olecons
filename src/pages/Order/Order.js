import React, { useRef, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//CSS
import "./Order.css";
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
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Order() {
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
    <div>
      <Navbar />

      <Row>
        <Col>
          <Row>
            <div data-aos="zoom-in-up" className="order-header">
              <span>Let's discuss your project</span>
            </div>
          </Row>
          <div className="order-body">
            {/* FIRST AND LAST NAME */}
            <Row data-aos="fade-up" data-aos-duration="600">
              <div className="order-body-input">
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
            <Row data-aos="fade-up" data-aos-duration="600">
              <div className="order-body-input">
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
            {/* PHONE */}
            <Row data-aos="fade-up" data-aos-duration="600">
              <div className="order-body-input">
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
            <Row data-aos="fade-up" data-aos-duration="600">
              <div className="order-body-input">
                <span className="input-title">Project description</span>
                <textarea className="input-field" rows="4" cols="50" />
              </div>
            </Row>
            {/* PROJECT BUDGET   */}
            <Row data-aos="fade-up" data-aos-duration="600">
              <div className="order-body-input">
                <span className="input-title">Project budget (USD) </span>
                <select
                  className="input-field"
                  name="project"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="5000 . 10,000">5000 . 10,000</option>
                  <option value="10,000 . 20,000">10,000 . 20,000</option>
                  <option value="20,000 . 30,000">20,000 . 30,000</option>
                  <option value="30,000 . 40,000">30,000 . 40,000</option>
                  <option value="Over 40,000">Over 40,000</option>
                  <option value="Individual estimate required">
                    Individual estimate required
                  </option>
                </select>
              </div>
            </Row>

            {/*PROJECT FILES ATTATCHMENTS*/}
            <Row data-aos="fade-up" data-aos-duration="600">
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
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="order-body-submit"
            >
              <Button className="order-button" type="submit">
                Send a Request
              </Button>
            </div>
          </div>
        </Col>
        <Col>
          <div className="order-body-right">
            <Row>
              <div
                data-aos="fade-left"
                data-aos-durtaion="500"
                data-aos-delay="50"
                className="paragraph-1"
              >
                <span>
                  Please leave your contact details and we will reach out to you
                  as soon as possible to clarify the details of your project. ¹
                </span>
              </div>
            </Row>
            <Row>
              <div
                data-aos="fade-left"
                data-aos-durtaion="500"
                data-aos-delay="100"
                className="paragraph-2"
              >
                <span>
                  All submitted information is completely confidential and will
                  only be available to the employees of the Uprising agency.
                </span>
              </div>
            </Row>
            <Row>
              <div
                data-aos="fade-left"
                data-aos-durtaion="500"
                data-aos-delay="50"
                className="paragraph-3"
              >
                <span>
                  ¹ We usually call back within an hour during business hours 10
                  am ∙ 7 pm (UTC+3), Mon ∙ Fri.
                </span>
              </div>
            </Row>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

export default Order;
