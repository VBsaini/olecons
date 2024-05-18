/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <div>
        <img
          data-aos="zoom-in"
          src="https://static.tildacdn.com/tild6663-6237-4038-b062-316237353336/1680-eng.gif"
          alt=""
          className="header-gif"
        />
      </div>
      <div data-aos="fade-up" className="who-r-we">
        <h2>Who we are</h2>
        <p>
          Your IT partner for digital leadership. We have created and launched
          numerous products onto the market, with their total capitalization
          reaching $28 million, and their audiences numbering in the hundreds of
          thousands of customers.
        </p>
      </div>
      <div className="header-cards-container">
        <div className="first-two">
          <div data-aos="fade-up" className="header-card">
            <img src="https://thumb.tildacdn.com/tild3961-6466-4736-b065-636330323733/-/cover/80x80/center/center/-/format/webp/Calendar.png" />
            <div className="header-card-text">
              <h4>Low time to market</h4>
              <p>Starting from 40 days for services (not landing pages)</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos- className="header-card">
            <img src="https://thumb.tildacdn.com/tild6564-6363-4232-b065-303136616431/-/cover/80x80/center/center/-/format/webp/Award.png" />
            <div className="header-card-text">
              <h4>Unique expertise</h4>
              <p>
                The agency's team includes graduates of the 500 startups
                accelerator
              </p>
            </div>
          </div>
        </div>
        <div className="last-two">
          <div data-aos="fade-up" data-aos-delay="300" className="header-card metric-header-card">
            <img src="https://thumb.tildacdn.com/tild3664-3632-4131-a234-333039383638/-/cover/80x80/center/center/-/format/webp/fi_bar-chart.png" />
            <div className="header-card-text">
              <h4>Result in metrics</h4>
              <p>Design must also act as a conversion venue</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="header-card">
            <img src="https://thumb.tildacdn.com/tild3839-3364-4131-b939-336666653566/-/cover/80x80/center/center/-/format/webp/Lightning-alt.png" />
            <div className="header-card-text">
              <h4>Advanced instruments</h4>
              <p>Figma Professional , Youtrack, Miro, Notion, Metabase</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 data-aos="fade-up" className="expertise-heading">
          Our expertise
        </h3>
        <div className="expertise-text-container">
          <p data-aos="fade-up" className="expertise-main-text">
            Our expertise is based on the creation and introduction of startups
            and IT products to the European and US markets. The agency's team
            consists of the graduates of the 500 startups accelerator (USA). ¹
            We apply all the experience and knowledge gained from leading
            experts in the venture capital industry from Europe and the US while
            working on our projects.
          </p>
          <p
            data-aos="fade-left"
            data-aos-delay="50"
            className="expertise-secondary-text"
          >
            We create high-quality designs created not only with style in mind,
            but also with the aim of solving the tasks they were meant for, and
            coping with product challenges.
            <span className="span-border"></span>
          </p>
        </div>
        <span className="span">
          <p data-aos="fade-up" data-aos->
            500 startups is a multi-billion dollar venture fund and accelerator
            from the United States. 5 graduates of the accelerator have become
            unicorns (projects with a capitalization of over $1 billion).
          </p>
        </span>
      </div>
      <div className="our-experience">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="our-experience-heading"
        >
          Our experience is simple to grasp: we demonstrate it on a daily basis
        </div>
        <div className="our-experience-cards">
          <div className="our-experience-card" style={{ marginLeft: 0 }}>
            <a href="#">
              <img
                className="our-experience-img"
                data-aos="fade-up"
                data-aos-delay="200"
                src="https://thumb.tildacdn.com/tild3637-6635-4230-b232-303038363666/-/cover/540x540/center/center/-/format/webp/Uprising_Prodvizheni.png"
              />
              <div className="our-experience-text-container">
                <div data-aos="fade-up" className="our-experience-insta">
                  <img src="https://thumb.tildacdn.com/tild3035-3634-4161-b036-653262623765/-/format/webp/fi_instagram.png" />
                  <p>uprising_agency</p>
                </div>
                <p
                  className="our-experience-text-container-data"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  This case became a real challenge for the agency
                </p>
              </div>
            </a>
          </div>
          <div className="our-experience-card">
            <a href="#">
              <img
                className="our-experience-img"
                data-aos="fade-up"
                data-aos-delay="200"
                src="https://thumb.tildacdn.com/tild3439-3361-4336-a139-323164663836/-/cover/540x540/center/center/-/format/webp/Uprising_Prodvizheni.png"
              />
              <div className="our-experience-text-container">
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="our-experience-insta"
                >
                  <img src="https://thumb.tildacdn.com/tild3035-3634-4161-b036-653262623765/-/format/webp/fi_instagram.png" />
                  <p>uprising_agency</p>
                </div>
                <p
                  className="our-experience-text-container-data"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  New principles of Bash Today's visual communication
                </p>
              </div>
            </a>
          </div>
          <div className="our-experience-card">
            <a href="#">
              <img
                className="our-experience-img"
                data-aos="fade-up"
                data-aos-delay="200"
                src="https://thumb.tildacdn.com/tild3562-6635-4633-a565-646564373464/-/cover/540x540/center/center/-/format/webp/Uprising_Prodvizheni.png"
              />
              <div className="our-experience-text-container">
                <div
                  data-aos="fade-up"
                  data-aos-delay="800"
                  className="our-experience-insta"
                >
                  <img src="https://thumb.tildacdn.com/tild3035-3634-4161-b036-653262623765/-/format/webp/fi_instagram.png" />
                  <p>uprising_agency</p>
                </div>
                <p
                  className="our-experience-text-container-data"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  How we created a unique design on the Tilda platform
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="review-text-container">
          <p className="review-left" data-aos="fade-right">
            «
          </p>
          <p data-aos="zoom-in" className="main-review">
            Thank you for the great work! We have an excellent new website that
            is modern, stylish, and easy to use. I am delighted to work with
            you, as it has been a very easy to get along with your team. I
            appreciate you adding your own views on the project and giving us
            truly professional advice, while at the same time being so attentive
            to all of our needs.
          </p>
          <p data-aos="fade-left" className="review-right">
            »
          </p>
        </div>
        <div className="review-info">
          <img
            data-aos="fade-up"
            src="https://thumb.tildacdn.com/tild6131-3433-4633-a232-306535636533/-/resize/160x/-/format/webp/Foto_Klienti_Upshift.png"
          />
          <div className="review-info-text-container">
            <div data-aos="fade-up" data-aos-delay="100" className="name">
              Ezra Goldman
            </div>
            <p data-aos="fade-up" data-aos-delay="300" className="position">
              chief executive officer, co-founder <br />
              Upshift
            </p>
          </div>
        </div>
      </div>
      <div className="upshift home-project-card">
        <div className="text-container-card">
          <div data-aos="fade-up" data-aos-delay="200">
            Redesigned the website of an eco friendly <br /> car service
          </div>
          <p data-aos="fade-up" data-aos-delay="200" className="design">
            Upshift: fractional car ownership <br />
            (US) ∙ design
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="upshift-bullet-data"
          >
            • Analysed current business metrics to choose the most important
            growth areas
            <br />• Proposed the most important things to redesign and
            implemented them
            <br />• Implemented illustrations from scratch <br /> • Updated the
            brandbook
          </p>
        </div>
        <div className="img-container">
          <img
            data-aos="fade-up"
            data-aos-delay="400"
            className="card-1"
            src="https://thumb.tildacdn.com/tild3339-6433-4563-b932-306438343664/-/resize/540x/-/format/webp/iPhone_13_mini_-_4.png"
          />
          <img
            className="dog"
            data-aos="zoom-in"
            data-aos-delay="600"
            src="https://thumb.tildacdn.com/tild3235-3134-4163-b964-306331663535/-/resize/600x/-/format/webp/Group_33530.png"
          />
          <img
            className="top-widgit"
            data-aos="zoom-in"
            data-aos-delay="1000"
            src="https://thumb.tildacdn.com/tild3861-3938-4136-b063-306639626330/-/resize/500x/-/format/webp/Group_33534.png"
          />
          <img
            className="card-2"
            data-aos="fade-down"
            data-aos-delay="500"
            src="https://thumb.tildacdn.com/tild3064-6536-4132-b361-633261653263/-/resize/540x/-/format/webp/iPhone_13_mini_-_122.png"
          />
          <img
            className="bottom-widgit"
            data-aos="zoom-in"
            data-aos-delay="800"
            src="https://thumb.tildacdn.com/tild6638-3461-4130-b531-663333666130/-/resize/400x/-/format/webp/Group_33537.png"
          />
          <img
            className="card-3"
            data-aos="zoom-in"
            data-aos-delay="900"
            src="https://thumb.tildacdn.com/tild3331-3262-4230-b936-626638393161/-/resize/540x/-/format/webp/iPhone_13_mini_-_12.png"
          />
        </div>
      </div>
      <div className="wedding home-project-card">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-container-card"
        >
          <h4>
            Wedding box: vendor marketplace and organizer for wedding
            preparations
          </h4>
          <p className="design">design</p>
          <p className="wedding-bullets">
            <span>•</span> 17 product interviews in 3 segments
            <br />
            <span>•</span> CJM detailing, in-depth design support for external
            developers
          </p>
        </div>
        <div className="img-container">
          <img
            className="leaves-main leaves"
            data-aos="zoom-in"
            src="https://thumb.tildacdn.com/tild3437-6432-4464-a236-303965363037/-/format/webp/photo.png"
          />
          <img
            className="bride-face bride"
            src="https://thumb.tildacdn.com/tild3364-6238-4663-b738-366165643965/-/format/webp/Mask_Group.png"
          />
          <img
            className="bride-background bride"
            data-aos="zoom-in"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild6537-3961-4265-b939-353533316665/-/format/webp/Vector.png"
          />
          <img
            className="make-up widgit"
            data-aos="fade-right"
            data-aos-delay="1000"
            src="https://thumb.tildacdn.com/tild3264-3863-4965-b363-633035626139/-/resize/524x/-/format/webp/Group_1349.png"
          />
          <img
            className="leaves-secondary leaves"
            data-aos="zoom-in"
            data-aos-delay="550"
            src="https://thumb.tildacdn.com/tild3833-3966-4639-a262-306337343039/-/resize/710x/-/format/webp/_2.png"
          />
          <img
            className="bride-dress widgit"
            data-aos="fade-left"
            data-aos-delay="800"
            src="https://thumb.tildacdn.com/tild6561-6136-4361-b038-386634663733/-/resize/594x/-/format/webp/Group_1347.png"
          />
          <img
            className="rings widgit"
            data-aos="fade-left"
            data-aos-delay="600"
            src="https://thumb.tildacdn.com/tild6333-3133-4438-b139-363932656630/-/resize/534x/-/format/webp/Group_1346.png"
          />
          <img
            className="floristics widgit"
            data-aos="fade-up"
            data-aos-delay="400"
            src="https://thumb.tildacdn.com/tild3031-6562-4035-b261-613361666535/-/resize/526x/-/format/webp/Group_1345.png"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
        className="home-project-card law-school"
      >
        <div className="text-container-card">
          <h4>
            Created and online-educational platform for an international law
            school
          </h4>
          <p className="design">
            ICLRC ∙ The Summer school on public international law '20:
            educational platform ∙ design, development
          </p>
          <p className="school-bullets">
            • Created in 50 days <br />• Integration with Zoom, Skype, Microsoft
            teams
            <br />• Online scientific libraries <br />• Private-access web
            solution with enhanced security
          </p>
        </div>
        <div className="img-container">
          <img
            className="balls-1"
            data-aos="zoom-in"
            data-aos-delay="600"
            src="https://thumb.tildacdn.com/tild3138-3431-4263-b963-303730613038/-/resize/410x/-/format/webp/_I.png"
          />
          <img
            className="moniter"
            data-aos="zoom-in"
            data-aos-duration="600"
            src="https://thumb.tildacdn.com/tild3361-6664-4032-a163-646461643635/-/format/webp/photo.png"
          />
          <img
            className="balls-2"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
            src="https://thumb.tildacdn.com/tild6637-6536-4436-a331-346333636564/-/resize/340x/-/format/webp/_III.png"
          />
          <img
            className="balls-3"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="600"
            src="https://thumb.tildacdn.com/tild3863-3563-4435-b038-333462343164/-/resize/462x/-/format/webp/_II_.png"
          />
          <img
            className="balls-4"
            data-aos="zoom-in"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild3964-3639-4732-a539-383364356464/-/resize/462x/-/format/webp/_II_.png"
          />
        </div>
      </div>
      <div style={{position: "relative"}}>
          <span className="before"></span>
      <div className="home-project-card MVP">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
          className="text-container-card"
        >
          <h4>Launched an MVP of a B2B marketplace in 9 months</h4>
          <p className="design">
            Alligator: B2B consumer goods marketplace ∙ design, development
          </p>
          <p className="mvp-bullets">
            • Launch of MVP in 9 months in a conservative industry <br />
            • 73 product interviews in 8 segments
            <br />• Digitalization of the "factory ∙ distributor ∙ wholesaler"
            sequence
          </p>
        </div>
        <img
            className="purple-orb"
            src="https://thumb.tildacdn.com/tild6136-6336-4334-b437-353634326563/-/format/webp/Ellipse_1.png"
          />
        <div className="img-container">
          <img
            className="widget-1"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://thumb.tildacdn.com/tild3862-3437-4161-b638-626332643664/-/resize/538x/-/format/webp/Group_1340.png"
          />
          <img
            className="mainsite-1"
            data-aos="fade-up"
            data-aos-delay="300"
            src="https://thumb.tildacdn.com/tild3034-3336-4134-b964-353363396239/-/resize/622x/-/format/webp/Group_1327.png"
          />
          <img
            className="widget-2"
            data-aos="zoom-in"
            data-aos-delay="700"
            src="https://thumb.tildacdn.com/tild6531-6630-4136-b139-396666383231/-/resize/316x/-/format/webp/Item_Card.png"
          />
          <img
            className="widget-3"
            data-aos="zoom-in"
            data-aos-delay="900"
            src="https://thumb.tildacdn.com/tild3931-3735-4631-b638-656638323966/-/resize/316x/-/format/webp/Statistic.png"
          />
          <img
            className="widget-4"
            data-aos="zoom-in"
            data-aos-delay="1100"
            src="https://thumb.tildacdn.com/tild6530-3364-4765-a432-303765373266/-/resize/316x/-/format/webp/Widget.png"
          />
          
          <img
            className="mainsite-2"
            data-aos="fade-up"
            data-aos-delay="400"
            src="https://thumb.tildacdn.com/tild3538-3561-4138-a337-363361626365/-/resize/658x/-/format/webp/Alligator_Sait_Mobil.png"
          />
        </div>
      </div></div>
      <div className="home-project-card algo">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
          className="text-container-card"
        >
          <h4>
            Launched and promoted a venue booking marketplace in a
            high-competitive market
          </h4>
          <p className="design">
            Bash Today: a marketplace of event venues ∙ design, development, ML,
            SEO
          </p>
          <p className="booking-bullets">
            • Passed Sber X ∙ 500 startups accelerator <br />• The first batch
            team to close an investment round after the accelerator phase within
            6 months
          </p>
        </div>
        <div className="img-container">
          <img
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
            className="mainsite-1"
            src="https://thumb.tildacdn.com/tild6261-3564-4539-a163-303164616662/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="400"
            className="cloud"
            src="https://thumb.tildacdn.com/tild3664-6561-4366-b561-356535613239/-/resize/400x/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            data-aos="zoom-out"
            data-aos-duration="600"
            data-aos-delay="200"
            className="background"
            src="https://thumb.tildacdn.com/tild3739-3161-4933-b138-613230636266/-/format/webp/Visuals_Bash-Today_1.png"
          />
          <img className="make-up" src="" />
        </div>
      </div>
      <div className="home-project-card EGS">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="50"
          className="text-container-card"
        >
          <h4>
            Implemented a high-loaded ESG service with multiple integrations
          </h4>
          <p className="design">
            Razvivai.rf ∙ Business online: business support products for SMEs in
            the Far East of Russia and the Russian Arctic ∙ design, development,
            data science
          </p>
          <p className="esg-bullets">
            • Implemented in 40 days
            <br />• Integration with VK business and REC
            <br />• System fraud was reduced via data science
            <br />• More than 7,000 entrepreneurs in the Far East of Russia have
            received support in the amount of $3.5 million thanks to the efforts
            of the project
          </p>
        </div>
        <div className="img-container">
          <img
            className="one-line"
            data-aos="fade-in"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild6665-3164-4165-a236-383931653938/-/resize/936x/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="right-map"
            data-aos="fade-left"
            data-aos-delay="100"
            src="https://thumb.tildacdn.com/tild3534-3435-4631-b663-643237663261/-/resize/840x/-/format/webp/Visuals_FRDV_6-3.png"
          />
          <img
            className="left-map"
            data-aos="fade-right"
            data-aos-delay="200"
            src="https://thumb.tildacdn.com/tild3365-3838-4635-b661-383438343638/-/resize/840x/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="cloud"
            data-aos="zoom-in"
            data-aos-delay="500"
            src="https://thumb.tildacdn.com/tild6437-3034-4463-b835-653663623365/-/resize/598x/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="red-talkbox"
            data-aos="zoom-in-right"
            data-aos-delay="900"
            src="https://thumb.tildacdn.com/tild6137-3538-4234-a463-666537336365/-/resize/234x/-/format/webp/Uprising_Sait_Vizual.png"
          />
          <img
            className="girl"
            data-aos="zoom-in"
            src="https://thumb.tildacdn.com/tild3061-6261-4665-b630-656163393663/-/resize/942x/-/format/webp/Uprising_Sait_Vizual.png"
          />
        </div>
      </div>
      <div className="all-project-cases-container"> <a href="#">All project cases</a></div>
      <div className="review">
        <div className="review-text-container">
          <p data-aos="fade-right" className="review-left">
            «
          </p>
          <p data-aos="zoom-in" className="main-review">
            I would say that working with us is in its own way exclusive,
            because each project receives great attention. We never shy away
            from pointing out the bottlenecks in your request and suggest ways
            of solving them. We are always guided by the principles of
            responsible ESG management based on legal and fair remuneration,
            transparent management, and clear communication of goals and
            objectives to the entire team. We also cherish the opportunity to be
            working with companies adhering to the UN Sustainable development
            principles (UN SDGS).
          </p>
          <p data-aos="fade-left" className="review-right">
            »
          </p>
        </div>
        <div className="review-info">
          <img src="https://thumb.tildacdn.com/tild3363-6661-4961-b336-336566393563/-/resize/140x/-/format/webp/OADOsG0wyaw.jpg" />
          <div className="review-info-text-container">
            <h3 className="name">Efim Kolodkin</h3>
            <p className="position">
              chief executive officer
              <br />
              founder
            </p>
          </div>
        </div>
      </div>
      <div className="what-we-offer">
        <div id="what-we-offer-heading-container" className="heading">
          <h3 id="what-we-offer-heading">What we offer</h3>
        </div>
        <div className="list">
          <p style={{ paddingTop: 0 }}>
            Redesign of existing websites, applications, platforms
          </p>
          <p>Improvement of current metrics through data science</p>
          <p>Product design from the ground up</p>
          <p>
            Design implementation into a working web product by our professional
            programmers
          </p>
          <p>Marketplace, LMS, and online platform creation</p>
          <p>White label LMS and marketplace solutions</p>
          <p>
            Product analytics and machine learning solutions for optimizing
            processes and increasing conversion rates
          </p>
          <p>Additional tasks to be discussed on an individual basis ²</p>
          <p>
            Our professional capabilities are extensive, but special tasks
            require a custom approach.
          </p>
        </div>
      </div>
      <div className="our-clients" style={{ marginBottom: "300px" }}>
        <h3 data-aos="fade-up">Our clients</h3>
        <div className="clients">
          <div className="client">
            <img
              className="smol"
              src="https://thumb.tildacdn.com/tild3339-6235-4339-b166-343061383136/-/resize/192x/-/format/webp/Frame_593.jpg"
            />
            <div className="client-text-container">
              <h4 data-aos="fade-up" data-aos-delay="200">
                Visabot
              </h4>
              <p data-aos="fade-up" data-aos-delay="300">
                Visa assistant service
                <br />
                United States
              </p>
            </div>
          </div>
          <div className="client">
            <img src="https://thumb.tildacdn.com/tild3833-6362-4463-a265-313034393462/-/resize/282x/-/format/webp/Frame_595.jpg" />
            <div className="client-text-container">
              <h4 data-aos="fade-up" data-aos-delay="200">
                Upshift
              </h4>
              <p data-aos="fade-up" data-aos-delay="300">
                Carsharing service
                <br />
                United States
              </p>
            </div>
          </div>
          <div className="client">
            <img src="https://thumb.tildacdn.com/tild6366-3761-4136-a638-303237343934/-/resize/332x/-/format/webp/INMO-Expert_Colour.jpg" />
            <div className="client-text-container">
              <h4 data-aos="fade-up" data-aos-delay="200">
                INMO ∙ Expert
              </h4>
              <p data-aos="fade-up" data-aos-delay="300">
                Real estate operator
                <br />
                Spain
              </p>
            </div>
          </div>
          <div className="client">
            <img
              className="smol"
              src="https://thumb.tildacdn.com/tild3331-3661-4932-a531-636263633963/-/resize/172x/-/format/webp/Frame_609.jpg"
            />
            <div className="client-text-container">
              <h4 data-aos="fade-up" data-aos-delay="200">
                Bash Today
              </h4>
              <p data-aos="fade-up" data-aos-delay="300">
                Event booking marketplace
                <br />
                Russia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hompage-footer">
        <div>
        <h2>Ready <br /> for explosive growth? Let's get started!</h2>
        <a href="#" className="send-a-request-btn"><img src="https://thumb.tildacdn.com/tild3532-3735-4263-a431-383631623963/-/format/webp/Uprising_Sait_Mobile.png"/> Send a request</a>
      <img className="bolt-footer-1" src="https://thumb.tildacdn.com/tild3464-3664-4162-a438-663332653365/-/resize/80x/-/format/webp/Visuals_Visioner_Ene.png"/>
      <img className="bolt-footer-2" src="https://thumb.tildacdn.com/tild6162-3639-4939-a261-356338323038/-/resize/110x/-/format/webp/__8x14.png"/>
      <img className="bolt-footer-3" src="https://thumb.tildacdn.com/tild3561-3435-4233-a134-393832313063/-/resize/84x/-/format/webp/__8x14-1.png"/>
      </div>
      <footer className="footer homepage-down-footer">
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
            <div className="col-sm-2">
              <div className="footer-logo-container">
                {/* FACEBOOK */}
                {/* <div className="footer-logo"> */}
                  <img
                    height={20}
                    width={20}
                    src="https://thumb.tildacdn.com/tild6561-3232-4066-b038-613763313430/-/format/webp/Facebook-1.png"
                  />
                {/* </div> */}
                {/* INSTAGRAM */}
                {/* <div className="footer-logo"> */}
                  <img
                    height={20}
                    width={20}
                    src="https://thumb.tildacdn.com/tild3262-6131-4530-b733-383264323231/-/format/webp/Instagram-1.png"
                  />
                {/* </div> */}
                {/* LINKEDIN */}
                {/* <div className="footer-logo"> */}
                  <img
                    height={20}
                    width={20}
                    src="https://thumb.tildacdn.com/tild6135-6261-4630-b431-356633613664/-/format/webp/Linkedin-1.png"
                  />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default Homepage;
