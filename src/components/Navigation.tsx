import "./Navigation.css"
import { Outlet, Link } from "react-router-dom";

function Navigation(){
    return(
        <>
            <div className="parent">
                <nav className="nav">
                    <ul className="navul">
                        <li className="navlist">
                            <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
                        </li>
                        <li className="navlist">
                            <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
                        </li>
                        <li className="navlist">
                            <Link to="/projects" style={{textDecoration: 'none'}}>Projects</Link>
                        </li>
                        <li className="navlist">
                            <Link to="/publications" style={{textDecoration: 'none'}}>Publications</Link>
                        </li>
                    </ul>
                </nav>
                <div className="pages">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Navigation;