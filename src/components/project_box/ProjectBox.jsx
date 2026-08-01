import '../project_box/projectbox.css'

function ProjectBox({ title, description, techstack, year, github, link, image }) {
    return (
        <article className = "project-container">
            <img src = {image} alt = {title} className = "project-image"></img>
            <div className = "project-title-and-year">
                <h2> {title} </h2>
                <p> {year} </p>
            </div>
            <p> {description} </p>
            <div className = "project-techstack">
                {techstack.map((tech) => (
                    <p> {tech} </p>
                ))
                }
            </div>
            <a href = {github}>
                <button>Github</button>
            </a>
            <a href = {link}>
                <button>Website</button>
            </a>
        </article>
    )
}

export default ProjectBox; 