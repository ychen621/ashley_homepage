import "./About.css"

function About(){
    const uscline = "M.S. in Computer Science (GPA: 3.74) \n Period: Jan. 2022 - May. 2024"
    const imgsline = "Ph.D. Candidate in Biolodical Science \n Period: Jul. 2019 - Jan. 2022"
    const ntuline = "B.S. in Clinical Laboratory Science and Medical Biotechnology (GPA: 3.81) \n Period: Sep. 2014 - Jun. 2018"

    return(
        <>
            <div className="about_parent">
                <h2 className="title">About</h2>
                <div id="about_container">
                    <span>I'm a software engineer with solid biological backgroud</span>
                    <ul className="educationul">
                        <h3 id="edu_title">Education</h3>
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