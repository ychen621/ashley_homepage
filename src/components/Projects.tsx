import "./Projects.css"

function Projects(){
    return(
        <>
            <div className="projects_parent">
                <h2 className="title">Projects</h2>
                <div id="container">
                    <ul className="projectul">
                        <li className="projectList">
                            <h3 className="pTitle">Lisence Plate Recognizor</h3>
                            <h4 className="pSubTitle">Multithread | Java, Git</h4>
                        </li>
                        <li className="projectList">
                            <h3 className="pTitle">Artist Search</h3>
                            <h4 className="pSubTitle">Web Development | Python, JavaScript, TypeScript, Angular, BootStrap, Node.js, Express, Flask, Google Cloud Platform</h4>
                        </li>
                        <li className="projectList">
                            <h3 className="pTitle">Meeting Scheduling System</h3>
                            <h4 className="pSubTitle">Socket | C++, TCP, UDP</h4>
                        </li>
                        <li className="projectList">
                            <h3 className="pTitle">A Journey of Ice and Fire</h3>
                            <h4 className="pSubTitle">Game Development | C#, Unity, Figma, Git</h4>
                        </li>
                        <li className="projectList">
                            <h3 className="pTitle">Weenix Kernel</h3>
                            <h4 className="pSubTitle">Operating System | C, Git</h4>
                        </li>
                        <li className="projectList">
                            <h3 className="pTitle">Cat-Dog Differentiator</h3>
                            <h4 className="pSubTitle">Machine Learning | Python, TensorFlow, Keras</h4>
                        </li>
                        <li className="projectList">
                            <h3 className="pTitle">Heterogenous Breast Cancer Cells Interaction</h3>
                            <h4 className="pSubTitle">Mathematical Modeling | Python</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Projects;