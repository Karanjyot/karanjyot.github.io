import React from "react";

const Projects = ()=>{

return(
<div>
  <div
    className="modal fade"
    id="modalQuickView2"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12">
              {/* Carousel Wrapper*/}
              <div
                id="carousel-thumb"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/devithome.JPG') }
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/devitsignup.JPG') }
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src= { require('./Images/devitlogin.JPG') }
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/devitquestion.JPG') }
                      alt="Fourth slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/devitanswer.JPG') }
                      alt="Fifth slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/devitchat.JPG') }
                      alt="Sixth slide"
                    />
                  </div>
                </div>
                {/*/.Slides*/}
                {/*Controls*/}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
                {/*/.Controls*/}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-thumb"
                    data-slide-to={0}
                    className="active"
                  ></li>
                  <li data-target="#carousel-thumb" data-slide-to={1}></li>
                  <li data-target="#carousel-thumb" data-slide-to={2}></li>
                  <li data-target="#carousel-thumb" data-slide-to={3}></li>
                  <li data-target="#carousel-thumb" data-slide-to={4}></li>
                  <li data-target="#carousel-thumb" data-slide-to={5}></li>
                </ol>
              </div>
            </div>
            {/*/.Carousel Wrapper */}
          </div>
          <h2 className="h2-responsive product-name">
            <strong>Devit</strong>
          </h2>
          <div className="row">
            <div className="col-lg-7">
              {/*Accordion wrapper*/}
              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* Accordion card */}
                {/* Card header */}
                {/* Card body */}
                <div
                  id="collapseOne1"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne1"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                    <br />
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src= { require('./Images/deviticons.png') } />
              {/* Accordion card */}
              {/* Accordion wrapper */}
            </div>
            <div className="text-center butCenter">
              {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <a
                target="_blank"
                href="https://salty-stream-26516.herokuapp.com/"
              >
                <button type="button" className="btn btn-primary">
                  Live
                  <i className="fas fa-laptop" />
                </button>
              </a>
              <a target="_blank" href="https://github.com/Karanjyot/project-2">
                <button className="btn btn-primary">
                  Code
                  <i className="fas fa-code" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* modalll 2*/}
  {/* Modal: modalQuickView */}
  <div
    className="modal fade"
    id="modalQuickView"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12">
              {/* Carousel Wrapper*/}
              <div
                id="carousel-thumb1"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/wheretohome.JPG') }
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/wheretotoronto.JPG') }
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/wheretotoronto2.JPG') }
                      alt="Third slide"
                    />
                  </div>
                </div>
                {/*/.Slides*/}
                {/*Controls*/}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb1"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb1"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
                {/*/.Controls*/}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-thumb1"
                    data-slide-to={0}
                    className="active"
                  ></li>
                  <li data-target="#carousel-thumb1" data-slide-to={1}></li>
                  <li data-target="#carousel-thumb1" data-slide-to={2}></li>
                </ol>
              </div>
            </div>
            {/*/.Carousel Wrapper */}
          </div>
          <h2 className="h2-responsive product-name">
            <strong>Whereto</strong>
          </h2>
          <div className="row">
            <div className="col-lg-7">
              {/*Accordion wrapper*/}
              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* Accordion card */}
                {/* Card header */}
                {/* Card body */}
                <div
                  id="collapseOne1"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne1"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={ require('./Images/wheretoicons.png') }/>
              {/* Accordion card */}
              {/* Accordion wrapper */}
            </div>
            <div className="text-center butCenter">
              {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <a target="_blank" href="https://sjahmed1445.github.io/whereto/">
                <button type="button" className="btn btn-primary">
                  Live
                  <i className="fas fa-laptop" />
                </button>
              </a>
              <a target="_blank" href="https://github.com/sjahmed1445/whereto">
                <button className="btn btn-primary">
                  Code
                  <i className="fas fa-code" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Quiztime Modal*/}
  {/* Modal: modalQuickView */}
  <div
    className="modal fade"
    id="modalQuickView3"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12">
              {/* Carousel Wrapper*/}
              <div
                id="carousel-thumb2"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/quizstart.JPG') }
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/quizquestion.JPG') }
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/quizhs.JPG') }
                      alt="Third slide"
                    />
                  </div>
                </div>
                {/*/.Slides*/}
                {/*Controls*/}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb2"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb2"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
                {/*/.Controls*/}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-thumb1"
                    data-slide-to={0}
                    className="active"
                  ></li>
                  <li data-target="#carousel-thumb1" data-slide-to={1}></li>
                  <li data-target="#carousel-thumb1" data-slide-to={2}></li>
                </ol>
              </div>
            </div>
            {/*/.Carousel Wrapper */}
          </div>
          <h2 className="h2-responsive product-name">
            <strong>QuizTime</strong>
          </h2>
          <div className="row">
            <div className="col-lg-7">
              {/*Accordion wrapper*/}
              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* Accordion card */}
                {/* Card header */}
                {/* Card body */}
                <div
                  id="collapseOne1"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne1"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={ require('./Images/wheretoicons.png') }/>
              {/* Accordion card */}
              {/* Accordion wrapper */}
            </div>
            <div className="text-center butCenter">
              {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <a target="_blank" href="https://karanjyot.github.io/quizgame/">
                <button type="button" className="btn btn-primary">
                  Live
                  <i className="fas fa-laptop" />
                </button>
              </a>
              <a target="_blank" href="https://github.com/Karanjyot/quizgame">
                <button className="btn btn-primary">
                  Code
                  <i className="fas fa-code" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Password Generator Modal*/}
  {/* Modal: modalQuickView */}
  <div
    className="modal fade"
    id="modalQuickView4"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-lg-12">
              {/* Carousel Wrapper*/}
              <div
                id="carousel-thumb3"
                className="carousel slide carousel-fade carousel-thumbnails"
                data-ride="carousel"
              >
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/passwordhome.JPG') }
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100 imgcar"
                      src={ require('./Images/passwordgen.JPG') }
                      alt="Second slide"
                    />
                  </div>
                </div>
                {/*/.Slides*/}
                {/*Controls*/}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb3"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb3"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
                {/*/.Controls*/}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-thumb3"
                    data-slide-to={0}
                    className="active"
                  ></li>
                  <li data-target="#carousel-thumb3" data-slide-to={1}></li>
                </ol>
              </div>
            </div>
            {/*/.Carousel Wrapper */}
          </div>
          <h2 className="h2-responsive product-name">
            <strong>Password Generator</strong>
          </h2>
          <div className="row">
            <div className="col-lg-7">
              {/*Accordion wrapper*/}
              <div
                className="accordion md-accordion"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                {/* Accordion card */}
                {/* Card header */}
                {/* Card body */}
                <div
                  id="collapseOne1"
                  className="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne1"
                  data-parent="#accordionEx"
                >
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Anim pariatur cliche
                    reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat
                    skateboard dolor brunch. Food truck quinoa nesciunt laborum
                    eiusmod.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={ require('./Images/wheretoicons.png') }/>
              {/* Accordion card */}
              {/* Accordion wrapper */}
            </div>
            <div className="text-center butCenter">
              {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <a
                target="_blank"
                href="https://karanjyot.github.io/passwordgenerator/"
              >
                <button type="button" className="btn btn-primary">
                  Live
                  <i className="fas fa-laptop" />
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Karanjyot/passwordgenerator"
              >
                <button className="btn btn-primary">
                  Code
                  <i className="fas fa-code" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* port */}
  <section className="content-section" id="portfolio">
    <div className="container">
      <div className="content-section-heading text-center">
        {/* <h3 class="text-secondary mb-0">Portfolio</h3> */}
        <h2 className="mb-5" id="portfolioHeader">
          Recent Projects
        </h2>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6">
          <a
            className="portfolio-item"
            data-toggle="modal"
            data-target="#modalQuickView"
            href="#"
          >
            {/* <span class="caption">
          <span class="caption-content">
            <h2>Whereto</h2>
            <p class="mb-0">Explore the world today!</p>
          </span>
        </span> */}
            <img
              className="img-fluid"
              src= { require('./Images/whereto2.jpg') }
              alt="whereto"
            />
          </a>
        </div>
        <div className="col-lg-6">
          <a
            className="portfolio-item"
            data-toggle="modal"
            data-target="#modalQuickView2"
            href="#"
          >
            {/* <span class="caption">
          <span class="caption-content">
            <h2>Devit</h2>
            <p class="mb-0">Chat with fellow developers!</p>
          </span>
        </span> */}
            <img
              className="img-fluid imgheight"
              src={ require('./Images/devithomepage2.png') }
              alt="devit"
            />
          </a>
        </div>
        <div className="col-lg-6">
          <a
            className="portfolio-item"
            data-toggle="modal"
            data-target="#modalQuickView3"
            href="#"
          >
            {/* <span class="caption">
          <span class="caption-content">
            <h2>Quiztime</h2>
            <p class="mb-0">A fun quiz game that tests a users knowledge of basketball trivia.</p>
          </span>
        </span> */}
            <img className="img-fluid" src={ require('./Images/quiz2.jpg') } alt />
          </a>
        </div>
        <div className="col-lg-6">
          <a
            className="portfolio-item"
            data-toggle="modal"
            data-target="#modalQuickView4"
            href="#"
          >
            {/* <span class="caption">
          <span class="caption-content">
            <h2>Workspace</h2>
            <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
          </span>
        </span> */}
            <img className="img-fluid" src={ require('./Images/password2.jpg') } alt />
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
)

}

export default Projects