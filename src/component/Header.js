import React from "react";

const Header = (props) => {
    return (
        <div id="header">
            <div className="headerTop clearfix">
                <div className="myContainer noPadding">
                    <div className="main-head">
                        <div className="logo clearfix">
                            <img src={props.logo} />
                        </div>
                        <div className="sideside">
                            <div className="menus clearfix">
                                <ul>
                                    <li><a href="#" className="active-color">Home</a></li>
                                    <li><a href="#">Product</a></li>
                                    <li><a href="#">Pricing & Signup</a></li>
                                    <li><a href="#">Online Demo</a></li>
                                    <li><a href="#">About GoToCampus</a></li>
                                    <li><a href="#">CONTACT US</a></li>
                                </ul>
                            </div>
                            {/* <div className="userIcons">
                                <a href="#"><img src={props.phoneCall} /></a>
                                <a href="#"><img src={props.userIcon} /></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header