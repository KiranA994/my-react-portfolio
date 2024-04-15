import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {


  return (
    <>

      <nav  className="navbar navbar-light" style={{backgroundColor: "#e3f2fd", width:'100%'}}>
         <div className="container-fluid d-flex justify-content-around">
         <h1 className='text-center mt-3' style={{color: 'rebeccapurple'}}>Portfolio</h1>
          <a className="navbar-brand a-hover" href="#home">Home</a>
          <a className="navbar-brand a-hover" href="#about">About</a>
          <a className="navbar-brand a-hover" href="#skills">Skills</a>
          <a className="navbar-brand a-hover" href="#projects">Projects</a>
          <a className="navbar-brand a-hover" href="#resume">Resume</a>
          <a className="navbar-brand a-hover" href="#contact">Contact</a>
        </div>
     </nav>

      <div className="row" id='home'>
        <div className="col-md-2"></div>
        <div className="col-md-4 mt-5">
          <img src="src\assets\Kiran_A.jpg" alt=""/>
        </div>
        <div className="col-md-4 mt-5">
          <h2>Basic Details</h2>
        <div className="card" style={{width: "100%"}}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{backgroundColor: 'aquamarine'}}>Name: Kiran A</li>
          <li className="list-group-item" style={{backgroundColor: 'aquamarine'}}>Qualification: MTech</li>
          <li className="list-group-item" style={{backgroundColor: 'aquamarine'}}>Location: Angamaly</li>
          <li className="list-group-item" style={{backgroundColor: 'aquamarine'}}>Phone: 9744663023</li>
          <li className="list-group-item" style={{backgroundColor: 'aquamarine'}}>Email: kiranagrasalamarar@gmail.com</li>
        </ul>
      </div>
        </div>
        <div className="col-md-2"></div>

      </div>


      <div className="container" id='about'>
      <h2 className='text-center mt-5 mb-5'>About</h2>
        <div className="row">
        <div className="col-md-4">
          <p style={{textAlign: 'justify'}}>
            Hi, My name is Kiran A. I am from Angamaly. I have done my post graduation in MTech Signal Processing from Model Engineering College.
            I have done BTech in EEE from Adi Shankara Institute of Engineering and Technology. I have 2 year of experience in angular.Possesses solid knowledge of HTML, CSS, JavaScript and Bootstrap with ability to quickly learn new technologies.
          </p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <h5>Hobbies & Interests</h5>
          <p>Watching Movies</p>
          <p>Listening Music</p>
          <p>Website development</p>
       </div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <h5>Strengths</h5>
          <p>Good Learner</p>
          <p>Result Oriented</p>
          <p>Adaptability</p>
        </div>
        </div>

      </div>


      <div className="container" id='skills'>
      <h2 className='text-center mt-5 mb-5'>Skills</h2>
      <div className="row">
        <div className="col-md-4">
          <h5>Front End Technology</h5>
          <p>Angular</p>
          <p>React</p>
          <p>Bootstrap</p>
          <p>Javscript</p>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <h5>Back End Technology</h5>
          <p>Python</p>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <h5>Database</h5>
          <p>MySQL</p>
          <p>PostgreSQL</p>
        </div>
      </div>

      </div>

<div className="container" id='projects'>
<div className='row'>

<h2 className='text-center mt-5 mb-5'>Projects</h2>

<div className="col-md-3">
  <div class="card" style={{width: '100%'}}>
  <img src="src\assets\restaurant.JPG" class="card-img-top" alt="restaurant"/> 
  <div class="card-body">
    <h5 class="card-title">The banquet</h5>
    <p class="card-text">This restaurant website is built using html, css languages.</p>
    <a href="https://eclectic-queijadas-88a4ea.netlify.app/" class="btn btn-primary" target='_blank'>View Website</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card" style={{width: '100%'}}>
  <img src="src\assets\travel.JPG" class="card-img-top" alt="..." /> 
  <div class="card-body">
    <h5 class="card-title">MakeMyTravel</h5>
    <p class="card-text">This restaurant website is built using html, css, JavaScript languages.</p>
    <a href="https://fluffy-moxie-530037.netlify.app/" class="btn btn-primary" target='_blank'>View Website</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card" style={{width: '100%'}}>
  <img src="src\assets\bmi.JPG" class="card-img-top" alt="..." /> 
  <div class="card-body">
    <h5 class="card-title">BMI Calculator</h5>
    <p class="card-text">The project was built using react with vite package.</p>
    <a href="https://bmi-calculator-react-xi.vercel.app/" class="btn btn-primary" target='_blank'>View Website</a>
  </div>
</div>
</div>
<div className="col-md-3">
<div class="card" style={{width: '100%'}}>
  <img src="src\assets\weather.JPG" class="card-img-top" alt="..." /> 
  <div class="card-body">
    <h5 class="card-title">Weather Forecast</h5>
    <p class="card-text">This restaurant website is built using html, css, JavaScript languages.</p>
    <a href="https://my-weather-app-react-eight.vercel.app/" class="btn btn-primary" target='_blank'>View Website</a>
  </div>
</div>
</div>

</div>
</div>


      <div className="row mt-5" id="resume">

        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className='text-center mb-5'>Resume</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <a href="src\assets\Kiran_A_Resume.pdf" download id="download">DOWNLOAD CV</a>
          </div>
        </div>
        <div className="col-md-4"></div>

      </div>


      <div className="row" id='contact'>
      <h2 className='text-center mt-5'>Contact</h2>
        <div className="col-md-1"></div>
        <div className="col-md-5 mb-5">
        <ul>
          <li className="list-group-item mt-4">Timing: 9AM - 6PM</li>
          <li className="list-group-item mt-4">Date: Monday - Saturday</li>
          <li className="list-group-item mt-4">Contact: +91 9744663023</li>
          <li className="list-group-item mt-4">Location: Angamaly</li>

        </ul>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 mb-5">
          <form action="">
            <input type="text" placeholder='Enter Your name'  className='form-control w-75 mt-4'/>
            <input type="email" placeholder='Enter Your email'  className='form-control w-75 mt-4'/>
            <input type="text" placeholder='Enter Your number'  className='form-control w-75 mt-4'/>
          </form>
          <div className='d-flex justify-content-center align-items-center me-5'>
            <button type='button' className='btn btn-warning w-25 mt-4'>Contact</button>
          </div>
        </div>
      </div>

      <footer>
        <div className="icon-set ms-5">
            <div clasclassNames="icon">
                <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} className='fs-2' />
                  </a>
            </div>
            <div className="icon">
                <a href="https://github.com/">
                <FontAwesomeIcon icon={faGithub} className='fs-2'  />
                  </a>
            </div>
            <div className="icon">
                <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} className='fs-2 me-5'  />
                </a>
            </div>
            <div style={{marginLeft: 'auto', marginRight:'30px', marginTop: '10px'}}>
            <p>&copy; My Portfolio Design 2024, All Rights Reserved ® Kiran A</p>
            </div>

        </div>
    </footer>


          </>
  )
}

export default App
