import React from 'react';

class Home extends React.Component{
    render(){
        return(
        <div>
            <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
            <h1><span>e</span>- <span>L</span>ect</h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
            <li><a href="#services" data-after="Service">About Us</a></li>
            <li><a href="#projects" data-after="Projects">Features</a></li>
            <li><a href="#about" data-after="About">Log-in</a></li>
            <li><a href="#contact" data-after="Contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="hero">
    <div class="hero container">
      <div>
        <h1>"Vote" <span></span></h1>
        <h1>It's Your Right! <span></span></h1>
        
        <a href="#projects" type="button" class="cta">Authorize</a>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">About Us<span> </span></h1>
        <p>Welcome to e-lect, an online voting system designed to make casting your vote as easy and secure as possible.The conduct of elections is a cornerstone of democratic societies, and
ensuring the transparency, security, and accessibility of the election process
is critical to maintaining public trust in the democratic process. In recent
years, traditional election systems have faced increasing challenges in these
areas, leading to a growing need for more secure and transparent solutions. Our mission is to provide a reliable and trustworthy platform that enables anyone, anywhere to participate in the democratic process.
At e-lect, we understand the importance of democracy and the vital role that voting plays in it. Our team of experienced developers and designers came together with a shared vision to make online voting accessible to everyone. We believe that e-lect is the solution for people who find it difficult to travel to polling stations, especially during pandemics or other crises.
Our system has been designed with security as the top priority. We use the latest encryption and authentication methods to ensure that every vote is cast securely and anonymously. We also offer a user-friendly interface that makes it easy for anyone to cast their vote.
We are proud of the hard work that went into building e-lect, and we are excited to share it with you. If you have any questions or feedback, please don't hesitate to get in touch with us. Thank you for choosing e-lect as your online voting system.

</p>
      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt=""/></div>
          <h2>2631331</h2>
          <p>NUMBER OF RECEIVED VOTES</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt=""/></div>
          <h2>2482</h2>
          <p>NUMBER OF ELECTRONIC ELECTIONS</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"alt="" /></div>
          <h2>162</h2>
          <p>NUMBER OF ELECTRONIC ASSEMBLIES</p>
        </div>
        <div class="service-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png"alt="" /></div>
          <h2>1052</h2>
          <p>NUMBER OF CLIENTS</p>
        </div>
      </div>
    </div>
  </section>
  <section id="projects">
    <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title"> Features</h1>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>Secure Voting</h1>
          
            <p>We offer a service that allows people to make their decisions in a 100% secure way.</p>
          </div>
          <div class="project-img">
            <img src="./img/picture2.png" alt="img"/>
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Efficient Voting</h1>
            <p>Our services simplify the process, facilitate access, increase participation and reduce costs.</p>
          </div>
          <div class="project-img">
            <img src="./img/picture3.png" alt="img" />
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Transparent Voting</h1>
        
            <p>Our voting process is ruled by strict rules on the use, safekeeping, retention and deletion of information, and standardized and public procedures.

</p>
          </div>
                    <div class="project-img" >
            <img src="./img/picture4.png" alt=""/>
         </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact Us <span></span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt=""/></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+977 9876452678</h2>
            <h2>+977 9810926793</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt=""/></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>su58071320@gmail.com</h2>
            <h2>isamup@gmail.com</h2>
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt=""/></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Dhulikhel,Nepal</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>e</span>- <span>L</span>ect</h1>
      </div>
      <h2>Your online voting system.</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="hello"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt=""/></a>
        </div>
        <div class="social-item">
          <a href="hello"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"alt="" /></a>
        </div>
        <div class="social-item">
          <a href="hello"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" alt="" /></a>
        </div>
      </div>
      <p>Copyright Â© 2020 e-Lect. All rights reserved</p>
    </div>
  </section>

  <script src="./app.js"></script>

        </div>
        );
    }
}
export default Home;