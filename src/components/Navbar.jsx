import React from "react"




function Navbar(){
    return(
        <div>

            <nav className="nav mx-0" id="navbar">

                <img className="image"  id="image1" src="Logo.png"></img>
                <a className="nav_elem" href="#Home">Home</a>
                <a className="nav_elem" href="#About me">About</a>
                <a className="nav_elem" href="#Services">Services</a>
                <a className="nav_elem" href="#Project">Project</a>
                <a className="nav_elem" href="#Testimonials">Testimonials</a>
                <a className="nav_elem" href="#Contact">Contact</a>
                <button id="btn1">Download CV</button>
            </nav>




        </div>
    )
}
export default  Navbar;