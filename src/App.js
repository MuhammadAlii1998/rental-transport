import './css/styles.css';
import './assets/img/close-icon.svg';
import './assets/img/map-image.png';

function App() {
  return (
    <div className="App" id="page-top">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" >
        <div className="container">
          <a className="navbar-brand" href="#page-top"><img src="https://img.icons8.com/fluency/2x/container-truck.png" alt="..."/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link" href="#services">Vehicles</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Our Clients</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Site!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container" >
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Vehicles</h2>
          </div>
          <div style={{'margin-bottom':'150px', 'margin-top':'50px'}}>
            <span className="fa-stack">
               <img src={"https://www.suzukiislamabad.pk/media/620x485/ravi/big2.jpeg"} width="360" />
            </span>
          </div>
          <div className="col-md-6" style={{'margin-bottom':'150px'}}>
              <span className="fa-stack">
                 <img src={"https://cache4.pakwheels.com/system/car_generation_pictures/4778/original/Daehan_Shehzore.jpg?1523015517"} width="360"/>
              </span>
          </div>
          <div className="col-md-6" style={{'margin-bottom':'170px'}}>
              <span className="fa-stack">
                 <img src={"https://ueeshop.ly200-cdn.com/u_file/UPAR/UPAR275/2106/products/07/9799a367e9.jpg"} width="360" />
              </span>
          </div>
        </div>
      </section>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center" style={{'margin-bottom':'30px'}}>
            <h2 className="section-heading text-uppercase">Our Clients</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={"https://images.unsplash.com/photo-1518704618243-b719e5d5f2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="..."/>
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Bullay Shah Paper Mills</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src={"https://images.unsplash.com/photo-1500241770736-a3f62bbc8717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} alt="..."/>
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Anarkali Dye Center</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="https://images.unsplash.com/photo-1598006640672-f0cc33c40702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="..."/>
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Capture Crew</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="https://images.unsplash.com/photo-1543489816-c87b0f5f7dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="..."/>
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">LESCO</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxldmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..."/>
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">LEVIS</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">

              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="..."/>
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Hush Puppies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase" style={{'margin-bottom':'80px'}}>About</h2>

          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="https://images.unsplash.com/photo-1619824130478-2fb945b98ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80"
                                                   alt="..." style={{'height':'100%', 'width':'100%'}}/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 style={{'margin-bottom':'20px', 'margin-top':'30px'}}>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.unsplash.com/photo-1574757974346-45bae947d89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80https://images.unsplash.com/photo-1574757974346-45bae947d89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                                   alt="..." style={{'height':'100%', 'width':'100%'}}/></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 style={{'margin-bottom':'20px', 'margin-top':'30px'}}>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>

              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.unsplash.com/file-1635809686961-0440cea0b2fdimage"
                                                   alt="..." style={{'height':'100%', 'width':'100%'}}/></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 style={{'margin-bottom':'20px', 'margin-top':'30px'}}>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://images.unsplash.com/photo-1601912552080-0fb89fd08042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
                                                   alt="..." style={{'height':'100%', 'width':'100%'}}/></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 style={{'margin-bottom':'20px', 'margin-top':'30px'}}>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br/>
                  Of Our
                  <br/>
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>


      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase" style={{'margin-bottom':'80px'}}>Contact Us</h2>
          </div>
          <h3 className="text-center section-heading text-uppercase" style={{'color':'#ffc800','margin-bottom':'40px'}}>Mobile # 0303-2940659</h3>

          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">

                  <input className="form-control" id="name" type="text" placeholder="Your Name *"
                         data-sb-validations="required"/>
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div className="form-group">

                  <input className="form-control" id="email" type="email" placeholder="Your Email *"
                         data-sb-validations="required,email"/>
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="form-group mb-md-0">

                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *"
                         data-sb-validations="required"/>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">

                  <textarea className="form-control" id="message" placeholder="Your Message *"
                            data-sb-validations="required"></textarea>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                </div>
              </div>
            </div>

            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br/>
                <a href="https://startbootstrap.com/solution/contact-forms">Activate Form</a>
              </div>
            </div>

            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send
                Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2021</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="https://web.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="https://web.facebook.com/login/?_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>
            <div style={{'margin-top':'40px', 'font-weight':'bold', 'color':'#ffc800'}}>
              <p>Developed and Maintain by<i> <a href="https://muhammadali1998.netlify.app/" style={{'color':'#000000'}}>MA</a></i></p>
            </div>
          </div>
        </div>
      </footer>

      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                                                                      alt="Close modal" style={{'height':'30px', 'width':'30px'}}/></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Bullay Shah Paper Mills</h2>
                    <p className="item-intro text-muted">Manging transportation of their Raw Material and Finished Products.</p>
                    <img className="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1642480532034-362360552ccb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="..."/>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                                                                      alt="Close modal" style={{'height':'30px', 'width':'30px'}}/></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Anarkali Dye Center</h2>
                    <p className="item-intro text-muted">Provide transportation services for their business. Especially delivery of wooden fuel for combustion purpose</p>
                    <img className="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1579551053957-ee77f9b970c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="..."/>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                                                                      alt="Close modal" style={{'height':'30px', 'width':'30px'}}/></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Capture Crew</h2>
                    <p className="item-intro text-muted">Play role in the movement of their equipments for outdoor shoot</p>
                    <img className="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="..."/>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                                                                      alt="Close modal" style={{'height':'30px', 'width':'30px'}}/></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">LESCO</h2>
                    <p className="item-intro text-muted"></p>
                    <img className="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1473308822086-710304d7d30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="..."/>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                                                                      alt="Close modal" style={{'height':'30px', 'width':'30px'}}/></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Levis</h2>
                    <p className="item-intro text-muted">Responsible for the delivery of clothes to factory and finished goods to outlets</p>
                    <img className="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1605518215584-5ba74df5dfd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="..."/>

                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                                                                      alt="Close modal" style={{'height':'30px', 'width':'30px'}}/></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">

                    <h2 className="text-uppercase">Hush Puppies</h2>
                    <p className="item-intro text-muted">Deliver products from factory to warehouse and from warehouse to outlets.</p>
                    <img className="img-fluid d-block mx-auto" src="https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="..."/>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
