import "./Header.css"
import email from "../icons/email.svg"
import linkedin from "../icons/linkedin.svg"
import github from "../icons/github.svg"
import pin from "../icons/location.png"
import { Link } from "@react-email/components";


function Header(){

    return (
        <>
            <h1>Welcome to Ashley's Portfolio</h1>
            <div className="social_parent">
                <Link className="social_child" href="mailto:ashleychen8889@gmail.com">
                    <img src={email} alt="Email"></img>
                </Link>
                <Link className="social_child" href="https://www.linkedin.com/in/yihsuan-ashley-chen/">
                    <img src={linkedin} alt="LinkedIn"></img>
                </Link>
                <Link className="social_child" href="https://github.com/ychen621">
                    <img src={github} alt="GitHub"></img>
                </Link>
                <img src={pin} alt="location"></img>
                <span><h4 id="city">Sunnyvale, CA</h4></span>
            </div>
        </>
    )
}

export default Header;