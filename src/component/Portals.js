import React from "react";

const Portals  = () => {

    const PortalText = {
        heading: "GoToCampus Portals",
        description:"At Turitor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.",
    }

    const Boxtext = [
        {        
            heading: "Administrator",
            description:"Easily accessible and easy to use tool to manage your data, plan all your academic activities, and communicate with stakeholders",
            id:"box1",
            classes:"boxes activeborder",
        },
        {        
            heading: "Students",
            description:"Online gateway for students to access their classwork, assessments, exams, class schedules, and mark sheets",
            id:"box2",
            classes:"boxes",
        },
        {        
            heading: "Teachers",
            description:"Plan for class schedules, mark student attendance, assign classwork and homework, design assessments and exams, and communicate with students and parents.",
            id:"box3",
            classes:"boxes",
        },
        {        
            heading: "Parents",
            description:"Easily monitor attendance, assessments, progress, and mark sheets. Communicate with teachers and institution administration and access parent meeting schedules.",
            id:"box4",
            classes:"boxes",
        }
    ]

    return(
        <div className="portals">
            <div className="border1"></div>
            <div className="border2"></div>
            <div className="border3"></div>
            <div className="border4"></div>
            <div className="border5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="portal-box">
                            <h1>{PortalText.heading}</h1>
                            <p>{PortalText.description}</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="portalsboxes clearfix">
                            {Boxtext.map((item,index) => {
                                return <div className={item.classes} id={item.id}>
                                    <h1>{item.heading}</h1>
                                    <p>{item.description}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portals