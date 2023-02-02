import React from "react";

const Teams = (props) => {

    const Heading = {
        heading: "A leadership team with vision",
        description: "Our executives lead by example and guide us to accomplish great things every day. Online learning offers a new way to explore.",
    }

    const MemberBox = [
        {
            img:props.member1,
            name:"Naveed Memon",
            desgination:"Software Enigneer",
        },
        {
            img:props.member2,
            name:"Basit Memon",
            desgination:"Software Enigneer",
        },
        {
            img:props.member3,
            name:"Queen Elizbth",
            desgination:"Software Enigneer",
        },
        {
            img:props.member4,
            name:"Jabbar Memon",
            desgination:"Software Enigneer",
        }
    ]

    return (
        <div className="team">
            <div className="container">
                <div className="row">
                    <div className="teamHeading">
                        <h1>{Heading.heading}</h1>
                        <p>{Heading.description}</p>
                    </div>
                </div>
                <div className="row">
                    {MemberBox.map((item,index) => {
                        return <div className="col-md-3">
                            <div className="members">
                                <div className="memberimg">
                                    <img src={item.img} alt="ok" />
                                </div>
                                <div className="memberhead">
                                    <h1>{item.name}</h1>
                                    <p>{item.desgination}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
export default Teams