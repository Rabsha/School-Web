import React from "react";

const Available = (props) => {

    const AvailableText = {
        heading: "GoToCampus is available for IOS / ANDROID",
        tagline: "Get familiar with the platform using a demo account",
        downloadios: "Download for iOS",
        downloadandroid: "Download for Android",
    }

    return (
        <div className="available">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="avail-text">
                            <img src={props.logo} alt="ok" />
                            <h1>{AvailableText.heading}</h1>
                            <p>{AvailableText.tagline}</p>
                            <a href="#" className="contactBtn">{AvailableText.downloadios}</a>
                            <a href="#">{AvailableText.downloadandroid}</a>
                        </div>
                        <div className="avail-img">
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mobile-image">
                            <img src={props.mobileimage} alt="ok" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Available