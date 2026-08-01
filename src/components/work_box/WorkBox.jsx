import '../work_box/workbox.css'

function WorkBox({ title, techstack, year }) {
    return (
        <article className = "work-container">
            <div className = "work-title-and-year">
                <h2> {title} </h2>
                <p> {year} </p>
            </div>
            <div className = "project-techstack">
                {techstack.map((tech) => (
                    <p> {tech} </p>
                ))
                }
            </div>
        </article>
    )
}

export default WorkBox; 