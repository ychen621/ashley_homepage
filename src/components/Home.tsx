import "./Home.css"
import ashley01 from "../images/ashley01.png"
import React from 'react';

function Home(){
    const intro = "Hello, Welcome to my personal homepage! \\\\n \\\\n My name is Yi-Hsuan (Ashley) Chen. \\\\n In this site, you can find the must know information about me.";
    const lines = intro.split('\\\\n');
    return(
        <>
            <div className="home_parent">
                <h2 className="title">Home</h2>
                <div id="home_container">
                    <img id="profile01" src={ashley01}></img>
                    <div id="home_content">
                        {lines.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;