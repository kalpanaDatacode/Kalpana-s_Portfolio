
import React from "react"

const Card = (props) => {
    return (


        <div className="card d-grid mx-auto my-4 text-center  bg-#f8f8f8" style={{ width: "15rem", marginBottom: "1rem" }} >
            <div className=" img-fluid p-3 ">
                <img src={props.image} className="card-image-top " alt="image"></img>
            </div>
            <div className="card-body row">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br />Officiis architecto voluptatibus.</p>
            </div>
        </div>


    );
};

const Services = () => {
    return (
        <section id="services" className="container ">


            <h1 className="text-center ">Services</h1>
            <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam porro expedita <br />inventore recusandae veritatis vitae, aliquid doloremque fugit.</p>
            <div className="d-flex flex-row justify-content-center  flex-wrap">
                <Card className="col-md-4 img-fluid p-3" title="UI/UX" image={"Vector.png"} />
                <Card className="col-md-4" title="Web Design" image={"Vector1.png"} />
                <Card className="col-md-4" title="App design" image={"Group1.png"} />
                <Card className="col-md-4" title="Graphic design" image={"Vector (2).png"} />
            </div>
        </section>
    )
}
export default Services;