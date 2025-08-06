import React from "react"

const Card = (props) => {
    return(
        <div className="container d-flex float-left">
            <img src={props.image}></img>
        
        <div className="card-body">
              
                <p className="card-text">Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Officiis architecto voluptatibus.</p>
                  <h5 className="card-title">Name</h5>
                  <p>CEO</p>
            </div>


       
        </div>
    )

}

const Testimonials = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center ">Testimonials</h1>
            <p className="text-center">Lorem ipsum dolor si consectetur, adipisicing elit debitis corrupti sapiente.<br /> Voluptatem omnis debitis corrupti sapiente.</p>
           <div >
            <Card image={"Ellipse 11.png"}/>
            <Card image={"Ellipse 10.png"} />
            <Card image={"Ellipse 11.png"} />
            </div>
        </div>
    )
}

export default Testimonials;