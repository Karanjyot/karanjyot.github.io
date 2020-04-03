import React from "react"

const Footer = () =>{

    return(
        <div className="footer">
  <div className="container">
    <div className="row">
      <p id="copyright">© 2020 Karanjyot Thandi </p>
      <div className="footerIcons">
        <a
          href="https://www.linkedin.com/in/karanjyot-thandi-5004a1173/"
          target="_blank"
        >
          {" "}
          <i className="fab fa-linkedin-square" style={{ fontSize: 36 }} />
        </a>
        <i className="fa fa-download" style={{ fontSize: 36 }} />
        <a href="https://github.com/Karanjyot" target="_blank">
          {" "}
          <i className="fab fa-github" style={{ fontSize: 36 }} />
        </a>
      </div>
    </div>
  </div>
</div>
    )
}

export default Footer