
import React from "react"

const Card = (props) => {
    return (


        <div className="card d-grid mx-auto my-2 text-center mt-4 bg-#f8f8f8" style={{ width: "20rem", marginBottom: "1rem" }} >
          
            <div className="img-fluid">
                <img src={props.image} className="card-image-top img-fluid mx-auto d-block"  alt="image" ></img>
            </div>
            <div className="card-body row">
                <h6 className="card-title "style={{ color: "#FD6F00" }}>Web Design</h6>
                <p className="card-text " style={{ color: "black",fontStyle:"bold",fontWeight:"700"}}>{props.para} </p>
            </div>
        </div>


    );
};

const Projects = () => {
    const buttons=["All","UI/UX","Web Design","Appp Design","Graphic Design"];
    return (
        <section id="projectss " className="container ">
            


            <h1 className="text-center mt-5">Projects</h1>
            <p className="text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam porro expedita <br />inventore recusandae veritatis vitae, aliquid doloremque fugit.</p>
              <div className="  d-flex justify-content-center flex-wrap gap-2 mt-3 mb-4 ">
                {
                    buttons.map((item,index)=>(
                        <button key={index} className="btn btn-outline-primary">
                            {item}
                        </button>
                    
                ))
            }

            </div>
            
            <div className="d-flex flex-row justify-content-center  flex-wrap">
                
                <Card className="col-md-3 " para="Airlcalling Landing Page Design" image={"Group 24.png"} />
                <Card className="col-md-3" para="Airlcalling Landing Page Design" image={"Group 26 (1).png"} />
                <Card className="col-md-3" para="Airlcalling Landing Page Design" image={"Group 27 (1).png"} />
               
            </div>
        </section>
    )
}
export default Projects;