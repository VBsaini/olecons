import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Project.css";

// Update : added throttle to increase performance
window.addEventListener("scroll", throttle(parallax, 0));

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function parallax() {
  var scrolled = window.pageYOffset / 3;
  document.querySelectorAll(".parallax").forEach((el) => {
    var coords = scrolled * -0.6 + "px";
    el.style.transform = "translateY(" + coords + ")";
  });
}
function Project() {
  return (
    <div>
      <Navbar />
      <div data-aos="zoom-in" className="main-project-info">
        <h2>Projects</h2>
        <p>
          Your IT partner for digital leadership. We have created and launched
          numerous products onto the market, with their total capitalization
          reaching $16 million, and their audiences numbering in the hundreds of
          thousands of customers.
        </p>
      </div>
      <div className="project-upshift project-card">
        <div className="project-img-container">
          <img
            className="girl"
            data-aos="zoom-in"
            data-aos-delay="400"
            src="https://thumb.tildacdn.com/tild3331-3434-4965-b434-323332643638/-/resize/838x/-/format/webp/Frame.png"
          />
          <img
            className="widgit-1"
            data-aos="fade-up"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild3762-3132-4832-b964-313033313337/-/resize/746x/-/format/webp/iPhone_13_mini_-_14.png"
          />
          <img
            className="widgit-2"
            data-aos="fade-up"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild3437-6337-4263-a133-633733323838/-/resize/588x/-/format/webp/Group_33573.png"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          className="project-text-container"
        >
          <h4>«Upshift»: eco friendly fractional car membership service</h4>
          <p>design</p>
        </div>
      </div>
      <div className="project-wedding project-card project-alt">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="project-text-container"
        >
          <h4>
            Wedding box: vendor marketplace and organizer for wedding
            preparations
          </h4>
          <p>design</p>
        </div>
        <div className="project-img-container">
          <img
            className="mainsite-1"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            src="https://thumb.tildacdn.com/tild3561-3537-4231-b532-373334333531/-/resize/846x/-/format/webp/Wedding-box_Sait_Pan.png"
          />
          <img
            className="mainsite-2"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            src="https://thumb.tildacdn.com/tild6635-6665-4331-a636-356634303637/-/resize/852x/-/format/webp/Wedding-box_Sait_Mob.png"
          />
          <img
            className="small-leave-right parallax"
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="1000"
            src="https://thumb.tildacdn.com/tild3533-3731-4131-a533-326230376165/-/resize/306x/-/format/webp/kisspng-leaf-green-g.png"
          />
          <img
            className="leave-top-left"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            src="https://thumb.tildacdn.com/tild3565-3136-4131-a137-363536663564/-/resize/374x/-/format/webp/kisspng-leaf-green-g.png"
          />
          <img
            className="leave-bottom-left parallax"
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="1000"
            src="https://thumb.tildacdn.com/tild6531-3365-4734-a638-303035663935/-/resize/410x/-/format/webp/kisspng-leaf-green-g.png"
          />
        </div>
      </div>
      <div className="project-ICLRC project-card">
        <div className="project-img-container">
          <img
            className="screen"
            data-aos="zoom-in"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild3832-3137-4230-b135-333535333239/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="ball-2"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            src="https://thumb.tildacdn.com/tild3631-6236-4139-b934-383965323335/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="ball-5"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild3562-3464-4363-b636-343234626532/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            data-aos="zoom-in"
            data-aos-delay="50"
            className="moniter"
            src="https://thumb.tildacdn.com/tild6435-3765-4837-a638-323638313231/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="ball-3"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild3939-3638-4864-b532-393639653865/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="ball-4"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            src="https://thumb.tildacdn.com/tild3364-3330-4538-b763-393638386564/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="ball-6"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            src="https://thumb.tildacdn.com/tild3037-6636-4437-b737-326631333736/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="ball-1"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            src="https://thumb.tildacdn.com/tild3364-3330-4538-b763-393638386564/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="background-ball"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="700"
            src="https://thumb.tildacdn.com/tild6465-3234-4836-b732-326662643266/-/format/webp/Uprising_Sait_Vizual.png"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="project-text-container"
        >
          <h4>
            ICLRC ∙ The Summer school on public international law '2020:
            educational platform
          </h4>
          <p>design, development</p>
        </div>
      </div>
      <div className="project-alligator project-card project-alt">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="project-text-container"
        >
          <h4>Alligator: B2B consumer goods marketplace</h4>
          <p>design, development</p>
        </div>

        <div className="project-img-container">
          <img
            className="small-left-cube"
            data-aos="fade-in"
            data-aos-delay="50"
            src="https://thumb.tildacdn.com/tild6330-3361-4631-b661-336637376630/-/resize/192x/-/format/webp/Alligator_Sait_Vizua.png"
          />
          <img
            className="mainsite-1"
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="700"
            src="https://thumb.tildacdn.com/tild3838-3430-4538-b338-643532373137/-/resize/792x/-/format/webp/Group_1314.png"
          />
          <img
            className="mainsite-2"
            data-aos="zoom-in-up"
            data-aos-delay="350"
            data-aos-duration="700"
            src="https://thumb.tildacdn.com/tild3832-6261-4163-b464-386233333232/-/resize/616x/-/format/webp/__I.png"
          />
          <img
            className="widgit"
            data-aos="zoom-in-down"
            data-aos-delay="500"
            data-aos-duration="700"
            src="https://thumb.tildacdn.com/tild3536-6138-4332-b532-346564666566/-/resize/436x/-/format/webp/Frame_319.png"
          />
          <img
            className="faded-cube parallax"
            data-aos="fade-in"
            data-aos-delay="150"
            data-aos-duration="700"
            src="https://thumb.tildacdn.com/tild3132-3463-4031-b261-333639646366/-/resize/390x/-/format/webp/Alligator_Sait_Vizua.png"
          />
        </div>
      </div>
      <div className="second-project">
        <div className="bash second-project-img-container">
          <img
            className="card-right"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            src="https://static.tildacdn.com/tild6466-3964-4737-b635-373032643430/Group_33576.png"
          />
          <img
            className="cloud"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild6464-6561-4536-b337-623461346165/-/format/webp/Group_33576.png"
          />
          <img
            className="card-left"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild3934-6263-4530-b133-303335383865/-/format/webp/Vizuali_Bash-Today_1.png"
          />
          <img
            className="bolt-2"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            src="https://thumb.tildacdn.com/tild3439-3366-4533-a635-663336656635/-/format/webp/__8x14-2.png"
          />
          <img
            className="bolt-1"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild6339-6138-4262-b263-643337643031/-/format/webp/__8x14-1.png"
          />
          <img
            className="bolt"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="250"
            src="https://thumb.tildacdn.com/tild3936-3934-4031-a537-643734663831/-/resize/34x/-/format/webp/__8x14.png"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="50"
          className="bash-text"
        >
          <h2 className="second-project-heading">
            Bash Today: a marketplace of event venues
          </h2>
          <p className="second-project-para">design, development, ML, SEO</p>
        </div>
        <div className="razvivai second-project-img-container">
          <img
            src="https://thumb.tildacdn.com/tild3030-6366-4737-b264-346435616537/-/resize/310x/-/format/webp/Frame_620.png"
            className="widgit-right"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <img
            src="https://thumb.tildacdn.com/tild6338-3365-4533-b331-393562346664/-/format/webp/illyustratsia_dlya_k.png"
            className="brand-new-widgit"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="1000"
          />
          <img
            src="https://static.tildacdn.com/tild3963-3466-4438-b234-646234626539/Frame_621.png"
            className="widgit-left"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="800"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="500"
          className="razvivai-text"
        >
          <h2 className="second-project-heading">
            Razvivai.rf ∙ Business online: business support products for SMEs in
            the Far East of Russia and the Russian Arctic
          </h2>
          <p className="second-project-para">design, development</p>
        </div>
        <div className="four-pho second-project-img-container">
          <img
            className="leaves-right"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="50"
            src="https://thumb.tildacdn.com/tild6461-6637-4331-b032-613264386431/-/resize/256x/-/format/webp/Pngtreefloating_gree.png"
          />
          <img
            className="card"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
            data-aos-delay="150"
            src="https://thumb.tildacdn.com/tild3063-3438-4065-a364-373765326463/-/resize/465x/-/format/webp/4Pho_Sait_Mobile_Kar.png"
          />
          <img
            className="food"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild6266-6530-4530-a665-653031316332/-/format/webp/illyustratsia_dlya_k.png"
          />
          <img
            className="leaves-left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild3732-6161-4936-b666-336365633936/-/format/webp/Pngtreefloating_gree.png"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
          className="pho-text"
        >
          <h2 className="second-project-heading">
            4pho: food delivery service
          </h2>
          <p className="second-project-para">design, development</p>
        </div>
        <div className="startis second-project-img-container">
          <img
            className="startis-right-widgit"
            src="https://thumb.tildacdn.com/tild6433-6632-4534-b938-326339313633/-/cover/260x227/center/center/-/format/webp/Frame_625.png"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
          <img
            className="startis-left-widgit"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild6135-3437-4162-b336-303963356332/-/format/webp/Frame_624.png"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="startis-text"
        >
          <h2 className="second-project-heading">
            Startis: financial platform and infographic system
          </h2>
          <p className="second-project-para">design</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
