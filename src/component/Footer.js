import React from 'react'

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footertop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="whitelogo">
                                <img src={props.whiteLogo} alt="ok" />
                                <p> Address: 39111 Paseo Padre Parkway, Suite 202, Fremont, California, 94538, USA</p>
                                <p> Phone: <a href="tel:+1-800-801-4801">+1-800-801-4801</a></p>
                                <p> Email: <a href="mailto:info@gotocampus.co">info@gotocampus.co</a></p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="menuslink">
                                <h1>General Links</h1>
                                <ul>
                                    <li><a href="#">About GoToCampus</a></li>
                                    <li><a href="#">Pricing and Signup</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Partner with Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="menuslink">
                                <h1>GoToCampus Resources</h1>
                                <ul>
                                    <li><a href="#">About GoToCampus</a></li>
                                    <li><a href="#">Pricing and Signup</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Partner with Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="newsletter">
                                <h1>Subscribe to our Newsletter</h1>
                                <form>
                                    <input type="text" class="" placeholder="Email" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerline">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footerline">
                                <p>Copyright © 2022 - All Rights Reserved. A Product of Verge Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer