import heroImg from '../../assets/hero.png';
import inkkioLogo from '../../assets/inkkio-logo.svg';
import '../home/home.css';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../components/topbar/Topbar';
import ProjectBox from '../../components/project_box/ProjectBox'
import WorkBox from '../../components/work_box/WorkBox'

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
          <div className = "projects">
            <ProjectBox title = "Inkkio" description = "A website that lets users customize and send virtual cards to their loved ones." techstack = {["React", "AWS", "Node.js"]} year = "2026" link = "https://www.inkkio.com" github = "https://github.com/kuang63/inkkio" image = {inkkioLogo}></ProjectBox>
          </div>
        </section>
        <section>
          <h1>Work Experience</h1>
            <p>Currently seeking internships</p>
            <WorkBox title = "Machine Learning Intern" techstack = {["Python", "Scikit-learn"]} year = "March - June 2025"></WorkBox>
        </section>
        <footer>
          
        </footer>
      </main>
    )
}

export default Home;