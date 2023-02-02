import React from "react";

const Modules = (props) => {
    const modulesText = [
        {
            img: props.image1,
            heading: "Admin",
            description: "Effectively plan and manage multiple Educational Institutions, branches, facilities, announcements, complaints, events, and holidays.",
            classes:"col-md-4 topspace",
            read:props.readmore,
        },
        {
            img: props.image2,
            heading: "Academics",
            description: "Develop and plan your course schedules, syllabus, class timings, and study plan.",
            classes:"col-md-4 topspace",
            read:props.readmore,
        },
        {
            img: props.image3,
            heading: "Students",
            description: "Simple and Effective module to record and manage student data, student admissions and registrations, student attendance, class tests, assignments, homework, student certificates, student exit, and student directory.",
            classes:"col-md-4 topspace",
            read:props.readmore,
        },
        {
            img: props.image4,
            heading: "Teachers",
            description: "Assign teachers to courses, manage attendance, and efficiently manage course planner.",
            classes:"col-md-4",
            read:props.readmore,
        },
        {
            img: props.image5,
            heading: "Parents",
            description: "Manage parents directory, organize meetings and visits, and record correspondence with parents.",
            classes:"col-md-4",
            read:props.readmore,
        },
        {
            img: props.image6,
            heading: "Student Assessments",
            description: "Design student assignments, class tests, online tests, and homework, and record student health and behavioural incidents",
            classes:"col-md-4",
            read:props.readmore,
        }
    ] 

    return(
        <div className="modules">
            <div className="borders1"></div>
            <div className="borders2"></div>
            <div className="borders3"></div>
            <div className="borders4"></div>
            <div className="borders5"></div>
            <div className="borders6"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-top">
                            <h1>GoToCampus Modules</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                {modulesText.map((item,index) => {
                    return <div className={item.classes}>
                        <div className="modulebox">
                            <div className="oneWork">
                                <img src={item.img} alt="ok" className="myimghover" />
                                <h1>{item.heading}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div className="btn-ButtonWork clearfix">
                                <a href="#">Read More</a>
                                <img src={item.read} alt="ok" />
                            </div>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>
    )
}
export default Modules