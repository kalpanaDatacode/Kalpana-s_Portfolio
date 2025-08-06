import React from "react"

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light" id="nav">
                <div className="container-fluid">
                <img className="image" id="image1" src="Logo.png"></img>
                </div>
                <a className="navbar-brand fs-5" href="#Home">Home</a>
                <a className="navbar-brand fs-5" href="#About me">About</a>
                <a className="navbar-brand fs-5" href="#Services">Services</a>
                <a className="navbar-brand fs-5" href="#Project">Project</a>
                <a className="navbar-brand fs-5" href="#Testimonials">Testimonials</a>
                <a className="navbar-brand fs-5" href="#Contact">Contact</a>
                <button className="btn text-white border-0" id="btn1">Download CV</button>
            </nav>

        </div>
    )
}
export default Navbar;