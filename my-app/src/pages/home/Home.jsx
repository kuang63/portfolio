import heroImg from '../../assets/hero.png';
import '../home/home.css';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';

function Home() {
    return (
      <main>
        <Topbar></Topbar>
        <section className = "about-me">
          <div className = "about-me-text">
            <h1>Hi, I'm Jiaxin</h1>
            <p>
              I'm an incoming computer science major at Johns Hopkins University.
              My expertise are web development and machine learning. 
              Currently, I'm building platform to edit and share virtual cards with React and Node.js.</p>
          </div>
          <img src = {heroImg} className = "about-me-img"></img>
        </section>
        <section>
          <h1>Personal Projects</h1>
        </section>
        <section>
          <h1>Work Experience</h1>
            <p>Currently seeking internships</p>
            <div className = "job-title-and-date">
              <p>Machine Learning Intern @ Cerbrec</p>
              <p>March 2025 - June 2025</p>
            </div>
        </section>
        <footer>
          
        </footer>
      </main>
    )
}

export default Home;