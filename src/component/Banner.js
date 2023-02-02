import React from "react";

const Banner = (props) => {

    const BannerText = {
        heading: "A complete solution for all your academic endeavours",
        description:"Our cloud-based service provides digital and mobile platforms to manage complete lifecycle of students in the educational institution.",
    }
    const SocialIcon = [
        {
            icon:props.icon1,
            tagline:"Like on Facebook",
            class:"facebook clearfix",
            link:"https://www.facebook.com",
        },
        {
            icon:props.icon2,
            tagline:"Add on Google",
            class:"google clearfix",
            link:"https://www.google.com",
        },
        {
            icon:props.icon3,
            tagline:"Follow on Twitter",
            class:"twitter clearfix",
            link:"https://www.twitter.com",
        },
        {
            icon:props.icon4,
            tagline:"Connect on Linkedin",
            class:"linkedin clearfix",
            link:"https://www.linkedin.com",
        }
    ]

    return (
        <div className="banner">
            <div className="overlaybg"></div>
            <div className="container">
                <div className="mybannertext">
                    <h1>{BannerText.heading}</h1>
                    <p>{BannerText.description}</p>
                    <a href="#" className="nomargin">Signup</a>
                    <a href="#" className="contactBtn">Contact Us</a>
                </div>
            </div>
            <div className="social-media">
                {SocialIcon.map((item,index) => {
                    return <div className={item.class}>
                        <a href={item.link}>
                            <h4>{item.tagline}</h4>
                            <img src={item.icon} alt="ok" />
                        </a>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Banner