import "./Main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Publication from "./Publication";
import Resume from "./Resume";
import PageNotFound from "./PageNotFound";

function Main(){
    return(
        <>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation/>}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="publications" element={<Publication />} />
                        <Route path="resume" element={<Resume />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;