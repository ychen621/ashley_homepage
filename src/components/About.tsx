import "./About.css"
import ashley02 from "../images/gradimage2.png"
import { Link } from "react-router-dom"

function About(){
    const uscline = "M.S. in Computer Science (GPA: 3.74) \n Period: Jan. 2022 - May. 2024"
    const imgsline = "Ph.D. Candidate in Biolodical Science \n Period: Jul. 2019 - Jan. 2022"
    const ntuline = "B.S. in Clinical Laboratory Science and Medical Biotechnology (GPA: 3.81) \n Period: Sep. 2014 - Jun. 2018"

    
    return(
        <>
            <div className="about_parent">
                <h2 className="title">About</h2>
                <div id="about_container">
                    <img id="profile01" src={ashley02}></img>
                    <ul className="educationul">
                        <span id="intro">😊 Master of Science in Counpter Science with strong Biological background 😊</span>
                        <p>I am proficient in multiple programming languages including Java, Python, C, C++, C#, JavaScript, and TypeScript.
                            Futhermore, I am experienced in Web development, Multi-threads Programming, Machine Learning, and Game Development.
                            Please find more details about my previous work in <Link to="/projects"style={{textDecoration: 'none'}}>Projects </Link>
                            section or in my <a href="../src/files/Yi-Hsuan_Chen_Resume.pdf">Resume</a>.
                        </p>
                        <h3 id="list_title">Education</h3>
                        <li className="school">
                            <a id="usc" href="https://www.usc.edu/">University of Southern California</a>
                            <p className="degree">{uscline}</p>
                        </li>
                        <li className="school">
                            <a id="imgs" href="https://www.cityofhope.org/academics/irell-and-manella-graduate-school-of-biological-sciences">Irell & Manella Graduate School of Biological Sciences</a>
                            <p className="degree">{imgsline}</p>
                        </li>
                        <li className="school">
                            <a id="ntu" href="https://www.ntu.edu.tw/english/">National Taiwan University</a>
                            <p className="degree">{ntuline}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About;