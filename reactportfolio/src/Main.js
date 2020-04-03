import React from "react";

const Main = ()=>{

return(

    <div class="jumbotron jumbotron-fluid" id="mainJumbotron">
        
 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
               
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link" href="#portfolioHeader">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactHref">Contact</a>
                      </li>
                    
                  </ul>
                </div>
              </nav>

          <h1 class="display-4" id="nameHeader">KARANJYOT THANDI</h1>
          <p class="lead" id="title">Software Developer</p>
        
      </div>
)
}

export default Main