import React from "react";

const Integrations = (props) => {
    const integration = {
        heading: "GoToCampus Integrates with",
    }
    const boximgs = [
        {
            img:props.image1,
            title: "Google GSuite"
        },
        {
            img:props.image2,
            title: "Microsoft Office 365"
        },
        {
            img:props.image3,
            title: "Amazon Alexa"
        },
        {
            img:props.image4,
            title: "Microsoft Cortana"
        },
        {
            img:props.image5,
            title: "Dropbox"
        },
        {
            img:props.image6,
            title: "Slack"
        },

    ]

    return (
        <div className="integration">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="integration-heading">
                            <h1>{integration.heading}</h1>
                        </div>
                    </div>
                    <div className="allintegration">
                        <div className="row">
                            {boximgs.map((item,index) => {
                                return <div className="col-md-2">
                                     <div className="mybox1">
                                        <img src={item.img} alt="ok" />
                                        <h1>{item.title}</h1>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="btn-readmore">
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Integrations