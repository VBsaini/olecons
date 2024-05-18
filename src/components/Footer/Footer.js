import React from "react";
//CSS
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          {/* COPYRIGHT */}
          <div className="row">
            <div className="col-lg-6">
              <span className="copyright">© Uprising, 2021</span>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-2">
              <div className="footer-languages">
                <div className="language-en">En</div>
                <div className="language-fr">Fr</div>
              </div>
            </div>
          </div>
          {/* BODY */}
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-body-1">
                Huckletree (space Shoreditch) ∙ 18 Finsbury Square, London, EC2A
                1AH, United Kingdom
              </div>
              <span className="footer-body-2">service@uprising.agency</span>
            </div>
          </div>
          {/* SCOIAL MEDIA */}
          <div className="row">
            <div className="col-sm-2 footer-logo-container-col">
              <div className="footer-logo-container">
                {/* FACEBOOK */}
                <div className="footer-logo">
                  <img
                    height={20}
                    width={20}
                    src="https://thumb.tildacdn.com/tild6661-6430-4865-b437-306162626334/-/format/webp/Facebook.png"
                  />
                </div>
                {/* INSTAGRAM */}
                <div className="footer-logo">
                  <img
                    height={20}
                    width={20}
                    src="https://thumb.tildacdn.com/tild3639-6138-4535-a333-306465643362/-/format/webp/Instagram.png"
                  />
                </div>
                {/* LINKEDIN */}
                <div className="footer-logo">
                  <img
                    height={20}
                    width={20}
                    src="https://thumb.tildacdn.com/tild3338-6661-4337-b233-643266623064/-/format/webp/Linkedin.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
