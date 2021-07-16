import React from 'react';
import {Image, Button, Carousel, Card, NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Clock, HandIndex, People, Facebook, Instagram, Twitter, Linkedin, Envelope, Phone, GeoAlt, Telephone, Grid3x3GapFill} from 'react-bootstrap-icons';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>

const App = () => {
  return (
  <div> 

    <div style={{width:"100%"}}>
      <div style={{width:"60%",backgroundColor:'darkblue', float:'left'}}>
        <p style={{color:'white', paddingLeft:'5%', fontSize:'20px', paddingTop:'2%', paddingRight:'20%'}}><Envelope color="white"/>  admission@hicoder.in <Telephone color="white"/>  (+91) 9206 980 980 </p>
      </div>
      <div style={{width:"40%",backgroundColor:'darkblue', float:'right'}}>
        <p style={{color:'white', fontSize:'20px', paddingTop:'3%'}}><Clock color="white"/> Mon - Fri: 10:00am - 06.00pm  <Facebook color="white" /> <Instagram color="white" /> <Twitter color="white"/> <Linkedin color="white"/></p>
      </div>
    </div>

    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container style={{width:'100%'}}>
        <div style={{width:'50%'}}>
          <Image src="https://hicoder.in/assets/images/logo-dark.png"/>
        </div>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav  style={{paddingRight:'3%'}}>
        <NavDropdown title="HICODER" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#">About</NavDropdown.Item>
          <NavDropdown.Item href="#">Contact</NavDropdown.Item>
          <NavDropdown.Item href="">Blog</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="me-auto" style={{paddingRight:'3%'}}>
        <NavDropdown title="CODER" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="">What you learn?</NavDropdown.Item>
          <NavDropdown.Item href="">How to Apply?</NavDropdown.Item>
          <NavDropdown.Item href="">Fee Structure</NavDropdown.Item>
          <NavDropdown.Item href="">Blog</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="me-auto" style={{paddingRight:'3%'}}>
        <NavDropdown title="Apply" id="collasible-nav-dropdown">
          <NavDropdown.Item href="">Apply</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button bsclass="custom-btn" size="lg">Apply Now</Button> 
      <Grid3x3GapFill  color="gray" size="40"/>   

    </Navbar.Collapse>
    </Container>
  </Navbar>

  

    <div style={{height:'600px', backgroundImage: `url("https://ak.picdn.net/shutterstock/videos/21531925/thumb/1.jpg" )` ,backgroundSize:'100%',   backgroundRepeat: 'no-repeat'}}>
      <div style={{paddingLeft:'7%', paddingTop:'10%', fontWeight:'bold', paddingBottom:'10%'}}>
        <h4 style={{color:'darkblue', fontSize:'30px' }}>YOUR TIME, OUR EFFORTS</h4>
        <h1 style={{color:'black', fontSize:'400%'}}>Pay After Job Full Stack<br></br>Development Course</h1>
        <Button variant="outline-primary" >Know More</Button>{' '}
      </div>
    </div>

    <div style={{width:"100%",backgroundColor:'darkblue', float:'left',}}>
      <p style={{color:'white', paddingLeft:'6%', fontSize:'25px', paddingTop:'2%', paddingRight:'20%', paddingBottom:'1%'}}> NEXT BATCH: 27 July | Apply Now </p>
    </div>

    <div style={{width: '100%', paddingTop:'15%' }}>
      <div style={{width: '50%', float:'left', paddingLeft:'6%'}}>
        <Image src="https://hicoder.in/assets/images/about/h8-left-img.jpg" width="100%" />      
      </div>
        
      <div style={{width: '50%', float:'left', paddingRight:'6%', paddingTop: '4%', paddingLeft:'2%'}}>
        <h4 style={{color: 'gray' }}>HICODER</h4>
        <h1 style={{color: 'black', fontWeight:'bold' }}>We help students learn</h1>
        <h1 style={{color: 'darkblue', fontWeight:'bold' }}>Full Stack Development.</h1>
        <p style={{width:'fit-content', fontSize: '20px'}}>HiCoder does everything that helps students become successful in the software industry. From product thinking to product designing, system designing, choosing the right frameworks, breaking projects in stages to building teams, and working collaboratively to making the application comply with the latest Google SEO needs and knowledge about integrated analytics, we do everything in between.</p>
      </div>
        
    </div>


    <div style={{width: '100%', clear:'both', paddingTop:'10%'}}>
              
      <div style={{width: '50%', float:'left', paddingLeft:'6%', paddingRight:'2%'}}>
        <h1 style={{color: 'black' }}>Trained on the most in-demand Technology Skills</h1>
        <p style={{width:'fit-content', fontSize: '20px'}}>At the end of the course, every student becomes capable to develop their own create a web application, host on their own domain, enable advanced technologies and observe people's actions on their website and represent themselves as a HiCoder that matters.</p>
        <p>End to End Project Analysis, Design & Development</p>
        <p>Authentication, Geo Tracking, Payment Gateway</p>
        <p>Analytics, SEO, Data Representation, Industry Standards</p>
        <p>Max Pro Resume, Soft Skills, Client Expectation Management</p> <br></br>
        <Button variant="primary" size="lg" >Apply Now</Button>
      </div>

      <div style={{width: '50%', float:'left', paddingRight:'6%'}}>
        <Image src="https://hicoder.in/assets/images/home/2.jpg" width="100%" />      
      </div>

    </div>

    <div style={{backgroundImage: `url("https://www.pngkey.com/png/detail/182-1821560_is-your-vessel-response-plan-disaster-proof-find.png" )`, backgroundSize:'100%', clear:'both', width:'100%', backgroundRepeat:'no-repeat'}}>
      <div style={{ paddingTop:'13%',paddingBottom:'15%', color:'white', fontWeight:'bold', fontSize:'20px', textAlign:'center'}}>
        <div style={{paddingLeft:'3%', width:'25%', float:'left'}}>
          <Image src="https://hicoder.in/assets/images/counter/icon/1.png" width="20%"></Image>
          <p>34+</p>
          <p>Companies</p>
        </div>
        <div style={{width:'25%', float:'left'}}>
          <Image src="https://hicoder.in/assets/images/counter/icon/2.png" width="20%"></Image>
          <p>47+</p>
          <p>Industry Experts</p>
        </div>
        <div style={{width:'25%', float:'left'}}>
          <Image src="https://hicoder.in/assets/images/counter/icon/3.png" width="20%"></Image>
          <p>30+</p>
          <p>Quality Developers</p>
        </div>
        <div style={{paddingRight:'3%',width:'25%', float:'left'}}>
          <Image src="https://hicoder.in/assets/images/counter/icon/4.png" width="20%"></Image>
          <p>40,000,00+</p>
          <p>Application Users</p>
        </div>
      </div>  
    </div>



    

    

    <div style={{width: '100%', clear:'both', paddingTop:'10%'}}>
              
      <div style={{width: '50%', float:'left', paddingLeft:'6%'}}>
        <h1 style={{color: 'black', fontWeight:'bold' }}>Why HiCoder?</h1>
        <p style={{width:'fit-content', fontSize: '20px'}}>HiCoder enables students to think about real-world problems, design, and develop the right solution.<Button variant="link">know more</Button></p>
        <div>
          <div style={{width: '20%', float:'left', paddingTop: '5%'}}>
            <HandIndex color="royalblue" size={80} />
          </div>
          <div style={{width: '80%', float:'left'}}>
            <h2>Personalized Training</h2>
            <p style={{width:'fit-content', fontSize: '20px'}}>We understand the weakness of students coming from poor educational backgrounds. HiCoder avails resources and extra after-class support to match the criteria and keep up with tech.</p>
          </div>
        </div>
        <div>
          <div style={{width: '20%', float:'left', paddingTop: '5%'}}>
            <People color="royalblue" size={80} />
          </div>
          <div style={{width: '80%', float:'left'}}>
            <h2>Production Projects</h2>
            <p style={{width:'fit-content', fontSize: '20px'}}>Every student ends up making around 3 projects that are wholesome, cloud-hosted and can be used for a commercial purpose.</p>
          </div>
        </div>
        
      </div>

      <div style={{width: '50%', float:'left', paddingRight:'6%', paddingLeft:'2%'}}>
        <Image src="https://hicoder.in/assets/images/whychooseus/style4/right-img.jpg" width="100%" />      
      </div>

    </div>

    <div style={{width: '100%', paddingTop:'160px', clear:'both' }}>
      <div style={{width: '50%', float:'left', paddingLeft:'6%'}}>
        <Image src="https://hicoder.in/assets/images/home/1.jpg" width="100%" />      
      </div>
        
      <div style={{width: '50%', float:'left', paddingRight:'6%', paddingTop: '4%', paddingLeft:'2%'}}>
        <h1 style={{color: 'black', fontWeight: 'bold' }}>How does HiCoder help?</h1><br></br>
        <p class="text-muted" style={{fontSize:'18px', fontWeight: 'bold' }}>HiCoder resembeles software development and marketing altogether to develop applications that can be used by real user than keeping on Github.</p><br></br>
        <p style={{width:'fit-content', fontSize: '20px'}}>HiCoder understands the struggle, peer pressure an engineering student goes into throughout curriculum. We believe, Most engineering students who can be part of the core software industry end up having a tech support or customer care job just because college never taught trending technology, project Management or encouraged students to their own projects.</p><br></br>
        <Button variant="primary" size="lg" active>Know More</Button>
      </div>
        
    </div>

    <div style={{width: '100%', paddingTop:'100px', clear:'both', textAlign:'center' }}>
      <h5 style={{color: 'gray'}}>WHAT YOU LEARN</h5>
      <h1 style={{color: 'black', fontWeight:'bold'}}>at HiCoder is useful</h1>
      <h1 style={{color: 'darkblue', fontWeight:'bold'}}>Technology, Management & more</h1>
      
      <div className="learnt" style={{width: '100%', clear:'both', paddingTop:'10%'}}>
        <div style={{width: '25%', float:'left', paddingLeft:'10%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/1.png" alt=""/>
          <h5 class="title">Front End</h5>
          <p>Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.</p>
        </div>
        <div className="learnt" style={{width: '25%', float:'left', paddingleft:'5%', paddingright:'5%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/2.png" alt=""/>
          <h5 class="title">Backend</h5>
          <p>Students learn to plan, project, and execute development projects with client expectation.</p>
        </div>
        <div className="learnt" style={{width: '25%', float:'left',paddingleft:'5%', paddingright:'50%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/3.png" alt=""/>
          <h5 class="title">Project Management</h5>
          <p>Students learn to design, develope the UI following UX with industry standards.</p>
        </div>
        <div className="learnt" style={{width: '25%', float:'left', paddingRight:'10%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/4.png" alt="" width="35%"/>
          <h5 class="title">Production Deployment</h5>
          <p>Students learn to create a server, deploy an application following security guidelines.</p>
        </div>
        <div className="learnt" style={{width: '25%', float:'left', paddingLeft:'10%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/5.png" alt="" width="35%"/>
          <h5 class="title">Basic Analytics</h5>
          <p>Students learn about analytics, usability, and integration of analytics in their production application.</p>
        </div>
        <div className="learnt" style={{width: '25%', float:'left', marginleft:'5%', marginright:'5%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/6.png" alt=""/>
          <h5 class="title">Soft Skills</h5>
          <p>Soft skills encourages open communication & enhances corporate skills having corporate attitude.</p>
        </div>
        <div style={{width: '25%', float:'left',paddingleft:'5%', paddingright:'50%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/7.png" alt=""/>
          <h5 class="title">Industry Standards</h5>
          <p>Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.</p>
        </div>
        <div style={{width: '25%', float:'left', paddingRight:'10%'}}>
          <img src="https://hicoder.in/assets/images/services/style9/8.png" alt="" />
          <h5 class="title">Max Pro Resume</h5>
          <p>Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.</p>
        </div>
      </div>

    </div>

    <div class="p-3 mb-2 bg-light text-dark" style={{width: '100%', paddingTop:'20%', clear:'both', textAlign:'center', paddingBottom:'100px' }}>
      <h5 style={{color: 'blue', paddingTop:'4%'}}>THOUGHTS ON HICODER SYLLABUS</h5>
      <h1 style={{color: 'black', fontWeight:'bold'}}>Reviews by Industry Experts</h1>

      <div style={{width: '100%', paddingTop:'100px', paddingBottom:'100px' }}>
        <div style={{width: '50%', float:'left', paddingLeft:'6%'}}>
          <Image src="https://st.focusedcollection.com/16485780/i/650/focused_199732064-stock-photo-man-using-laptop-dog-lap.jpg" width="600" />      
        </div>
          
        <div style={{width: '50%', float:'left', paddingRight:'6%'}}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.laminex.co.nz/medias/p-Super-White-Shareable.jpg-768Wx739H?context=bWFzdGVyfGltYWdlc3wyODY0M3xpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDA1L2gwMC84ODMyMTE5NjAzMjMwLmpwZ3xjNjUyNjAxNzM3Y2U2NWI0YzNjOTY2NGFjZmU2YTQxMTRhYTZkMTVhYjMyZmM2N2NhNWE1YjBiMWUyMjFjMmEy"
                alt="First slide"
              />
              <Carousel.Caption style={{color:'black'}}>
                <p style={{ fontSize:'22px', fontStyle:'oblique'}}>HiCoder didn't exist 15 years ago when I was preparing for software engineering career. In 2002, I had to pay hefty to get basic technical training. Good to see that HiCoder is removing the barrier of high tuition fee and encouraging students towards product focused learning than just teaching specific programming language that generally gets outdated.</p><br></br>
                <Image src="https://hicoder.in/assets/images/testimonial/avatar/1.jpg" alt="" width="20%" roundedCircle/><br></br>
                <h3>Ashish Vishwakarma</h3>
                <p style={{color:'gray', fontSize:'20px', fontStyle:'oblique'}}>Software Engineer, Bosch</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.laminex.co.nz/medias/p-Super-White-Shareable.jpg-768Wx739H?context=bWFzdGVyfGltYWdlc3wyODY0M3xpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDA1L2gwMC84ODMyMTE5NjAzMjMwLmpwZ3xjNjUyNjAxNzM3Y2U2NWI0YzNjOTY2NGFjZmU2YTQxMTRhYTZkMTVhYjMyZmM2N2NhNWE1YjBiMWUyMjFjMmEy"
                alt="Second slide"
              />

              <Carousel.Caption style={{color:'black'}}>
                <p style={{ fontSize:'22px', fontStyle:'oblique'}}>HiCoder is doing a good job by offering production grade learning. This will enable students to code whole application where students will end up on tech lead position in a few years.</p><br></br>
                <Image src="https://hicoder.in/assets/images/testimonial/avatar/2.jpg" alt="" width="20%" roundedCircle/><br></br>
                <h3>Tapas Adhikary</h3>
                <p style={{color:'gray', fontSize:'20px', fontStyle:'oblique'}}>UI/UX, Micro Focus</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.laminex.co.nz/medias/p-Super-White-Shareable.jpg-768Wx739H?context=bWFzdGVyfGltYWdlc3wyODY0M3xpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDA1L2gwMC84ODMyMTE5NjAzMjMwLmpwZ3xjNjUyNjAxNzM3Y2U2NWI0YzNjOTY2NGFjZmU2YTQxMTRhYTZkMTVhYjMyZmM2N2NhNWE1YjBiMWUyMjFjMmEy"
                alt="Third slide"
              />

              <Carousel.Caption style={{color:'black'}}>
                <p style={{ fontSize:'22px', fontStyle:'oblique'}}>HiCoder is doing a good job by offering production grade learning. This will enable students to code whole application where students will end up on tech lead position in a few years.</p><br></br>
                <Image src="https://hicoder.in/assets/images/testimonial/avatar/3.jpg" alt="" width="20%" roundedCircle/><br></br>
                <h3>Sudhir Kumar</h3>
                <p style={{color:'gray', fontSize:'20px', fontStyle:'oblique'}}>Technical Lead, HARMAN International</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.laminex.co.nz/medias/p-Super-White-Shareable.jpg-768Wx739H?context=bWFzdGVyfGltYWdlc3wyODY0M3xpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDA1L2gwMC84ODMyMTE5NjAzMjMwLmpwZ3xjNjUyNjAxNzM3Y2U2NWI0YzNjOTY2NGFjZmU2YTQxMTRhYTZkMTVhYjMyZmM2N2NhNWE1YjBiMWUyMjFjMmEy"
                alt="Fourth slide"
              />

              <Carousel.Caption style={{color:'black'}}>
                <p style={{ fontSize:'22px', fontStyle:'oblique'}}>HiCoder didn't exist 15 years ago when I was preparing for software engineering career. In 2002, I had to pay hefty to get basic technical training. Good to see that HiCoder is removing the barrier of high tuition fee and encouraging students towards product focused learning than just teaching specific programming language that generally outdated.</p><br></br>
                <Image src="https://hicoder.in/assets/images/testimonial/avatar/5.jpg" alt="" width="20%" roundedCircle/><br></br>
                <h3>Srikant Rahul</h3>
                <p style={{color:'gray', fontSize:'20px', fontStyle:'oblique'}}>Technical Architect, Hexaware Technologies</p>
              </Carousel.Caption>
            </Carousel.Item>


          </Carousel>
        </div>
      </div>

      <div style={{clear:'both', paddingTop:'5%'}}>
        <div style={{backgroundColor:'darkblue'}}>
          <h1 style={{fontWeight:'bolder', paddingTop:'4%', paddingBottom:'4%', color:'white'}}>Partner & Associates</h1>
          <img src="https://hicoder.in/assets/images/partner/3.jpg" alt="" style={{paddingRight:'3%', paddingBottom:'5%' }}/>
          <img src="https://hicoder.in/assets/images/partner/4.jpg" alt="" style={{paddingRight:'3%', paddingBottom:'5%'  }}/>
          <img src="https://hicoder.in/assets/images/partner/5.jpg" alt="" style={{paddingRight:'3%', paddingBottom:'5%'  }}/>
          <img src="https://hicoder.in/assets/images/partner/6.jpg" alt="" style={{paddingRight:'3%', paddingBottom:'5%'  }}/>
        </div>
      </div>

      <div style={{clear:'both', paddingTop:'5%', textAlign:'center' }}>
        <h5 style={{color: 'gray' }}>NEWS</h5>
        <h1 style={{color: 'black', fontWeight:'bolder' }}>#COVID19 Demands more full stack developers.</h1>
        <h1 style={{color: 'darkblue', fontWeight:'bolder', paddingBottom:'5%'  }}>& Industry Updates</h1>

      </div>

      <div style={{width: '100%', clear:'both', paddingTop:'5%', paddingLeft:'6%', paddingRight:'6%'}}>
                
            <div style={{width: '33%', float:'left'}}>
              <img src="https://hicoder.in/assets/images/blog/3.jpg" alt="" width="90%"/><br></br>
              <p1 style={{fontSize:'28px'}}>13 reasons why businesses love hiring failed entrepreneurs.</p1><br></br>
              <img src="https://hicoder.in/assets/images/blog/avatar/1.png" alt="" width="10%"></img>Hicoder <Clock color="green" size={80} width="5%"/> 17 Oct 2020  
            </div>
      
            <div style={{width: '34%', float:'left', paddingRight:'0.5%', paddingleft:'0.5%'}}>
              <img src="https://hicoder.in/assets/images/blog/4.jpg" alt="" width="90%"/><br></br>
              <p1 style={{fontSize:'28px'}}>Students having real time experience are less likely to have career gap.</p1><br></br>
              <img src="https://hicoder.in/assets/images/blog/avatar/1.png" alt="" width="10%"></img>Hicoder <Clock color="green" size={80} width="5%"/> 17 Oct 2020
            </div>

            <div style={{width: '33%', float:'left'}}>
              <img src="https://hicoder.in/assets/images/blog/1.jpg" alt="" width="90%"/><br></br>
              <p1 style={{fontSize:'28px'}}>College education isn't enough to be relevant for the tech industry.</p1><br></br>
              <img src="https://hicoder.in/assets/images/blog/avatar/1.png" alt="" width="10%"></img>Hicoder <Clock color="green" size={80} width="5%"/> 17 Oct 2020
            </div>   
          </div>

    </div>
    
    <div className="footer" style={{clear:'both', paddingTop:'5%'}}>
      <Card>
        <Card.Img src="https://img.freepik.com/free-photo/team-students-completing-task_23-2147666610.jpg?size=626&ext=jpg" alt="Card image" style={{opacity:'0.1'}} />
        <Card.ImgOverlay>
          <div style={{width: '100%', clear:'both', paddingTop:'10%', paddingLeft:'6%', paddingRight:'6%'}}>
                
            <div style={{width: '50%', float:'left', paddingRight:'15%'}}>
              <img src="https://hicoder.in/assets/images/logo-dark.png" alt=""/>
              <p style={{width:'fit-content', fontSize: '20px'}}>HiCoder enables students in being capable to develop production grade application by availing full stack development, Soft skills, Analytics and project management skills to get a core software job in the Industry.</p>
              <Button variant="primary" size="lg" >Apply Now</Button>
            </div>
      
            <div style={{width: '20%', float:'left', paddingleft:'7%'}}>
              <h1 style={{color:'darkblue', fontWeight:'bold'}}>Info</h1><br></br>
              <p style={{fontSize:'20px'}}>Home</p><br></br>
              <p style={{fontSize:'20px'}}>About</p><br></br>
              <p style={{fontSize:'20px'}}>Blog</p><br></br>
              <p style={{fontSize:'20px'}}>FAQ</p><br></br> 
              <p style={{fontSize:'20px'}}>Contact</p><br></br>
            </div>

            <div style={{width: '30%', float:'left'}}>
              <h1 style={{color:'darkblue', fontWeight:'bold'}}>Contact</h1><br></br>
              <p style={{fontSize:'20px'}}><GeoAlt color="royalblue" />264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana, India, PIN: 500033</p><br></br>
              <p style={{fontSize:'20px'}}><Phone color="royalblue" />(+91) 9206 980 980</p><br></br>
              <p style={{fontSize:'20px'}}><Envelope color="royalblue" />admission@hicoder.in</p><br></br>
              <p style={{fontSize:'20px'}}><Clock color="royalblue" />10:00AM - 06:00PM</p><br></br>
            </div>   
          </div>

          <div style={{clear:'both', paddingTop:'10%',color:'black' }}>
            <hr/>
          </div>

          <div style={{width: '100%', clear:'both', paddingTop:'5%'}}>              
            <div style={{width: '80%', float:'left', paddingLeft:'6%', paddingRight:'2%'}}>
              <p style={{fontSize:'17px'}}>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
              <p style={{fontSize:'17px'}}><Button variant="link">Privacy Policy </Button>|<Button variant="link">Terms of Service </Button>| *Registration Charges Applied </p>
            </div>
      
            <div style={{width: '20%', paddingRight:'6%', float:'right'}}>
              <Facebook color="royalblue" size={40} /> <Instagram color="royalblue" size={40}/> <Twitter color="royalblue" size={40}/> <Linkedin color="royalblue" size={35}/>
            </div>       
          </div>

        </Card.ImgOverlay>
      </Card>
    </div>
  
  
  </div>

  

  );

}

export default App;