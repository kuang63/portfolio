import { useNavigate } from 'react-router-dom';
import './topbar.css'

function Topbar() {
    const navigate = useNavigate();

    return (
        <header>
          <h6> Jiaxin Kuang </h6>
          <nav>
            <ul>
              <li><a href = "">About Me</a></li>
              <li><a href = "">Projects</a></li>
              <li><a href = "">Work Experience</a></li>
            </ul>
          </nav>
          <div className = "social-media">
            <a href = "https://github.com/kuang63">
              <button> Github </button>
            </a>
            <a className = "https://www.linkedin.com/in/jiaxin-kuang-3022a9340/">
              <button> Linkedin </button>
            </a>
          </div>
        </header>
    )
}

export default Topbar; 