import React from "react";

const Contact = ()=>{

    return(

        <div className="jumbotron jumbotron-fluid contactJumbotron" id="contactHref">
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" noValidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    required="required"
                    data-validation-required-message="Please enter a message."
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="col-md-6 contactInfo">
                <i className="fa fa-phone">&nbsp;&nbsp;&nbsp;(647) 458-9677</i>
                <br />
                <br />
                <i className="fa fa-envelope">
                  &nbsp;&nbsp;&nbsp;karanjyot.thandi@gmail.com
                </i>
              </div>
              <div className="clearfix" />
              <div className="col-lg-12 text-center">
                <div id="success" />
                <button
                  id="sendMessageButton"
                  className="btn btn-primary btn-xl text-uppercase"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>


    )
}

export default Contact
