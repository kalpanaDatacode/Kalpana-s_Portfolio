import React from "react"

const Skillbar = (props) => {
    return (
        <div className="skill-bar ">
            <h4>{props.title}</h4>
            <div className="progress-container">
                <div className="progress-fill" style={{ width: `${props.percentage}%` }}>
                    <span className="circle"></span>
                </div>
            </div>

        </div>
    )
}

const About = () => {
    return (
        <section id="About" >
            <div id="image3">
                <img src="image2.png"></img>
            </div>
            <div>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Veritatis qui non assumenda
                    vero ipsa quis excepturi.</p>
                <div className="skills">
                    <Skillbar title="UX" percentage={80} />
                    <Skillbar title="Website Design" percentage={70} />
                    <Skillbar title="App Design" percentage={90} />
                    <Skillbar title="Graphic Design" percentage={80} />
                </div>

            </div>

        </section>
    )
}
export default About;