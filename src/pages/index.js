import React , { useState, useEffect } from "react"
import { motion } from "framer-motion";
import Header from '../component/Header'
import Banner from '../component/Banner'
import Portals from '../component/Portals'
import Integrations from "../component/Integrations";
import Modules from "../component/Modules";
import Teams from "../component/Teams";
import Available from "../component/Available";
import Footer from "../component/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import '../css/style.css';

//Header Logo Image
import Logo from '../images/GoToCampus.svg'
import UserIcon from '../images/user.png'
import PhoneCall from '../images/phone-call.png'

//Banner Social Icons
import facebook from '../images/facebook.jpg'
import googles from '../images/googles.jpg'
import twitter from '../images/twitter.jpg'
import linkedin from '../images/linkedin.png'

//Integration images
import img1 from '../images/Google-GSuite.png'
import img2 from '../images/Microsoft-Office-365.png'
import img3 from '../images/Amazon-Alexa.png'
import img4 from '../images/Microsoft-Cortana.png'
import img5 from '../images/Dropbox.png'
import img6 from '../images/Slack.png'

//Modules Images
import Module1 from '../images/img1.jpg'
import Module2 from '../images/img2.jpg'
import Module3 from '../images/img3.jpg'
import Module4 from '../images/img4.jpg'
import Module5 from '../images/img5.jpg'
import Module6 from '../images/img6.jpg'
import ReadMoreArrow from '../images/readmore.png'

//Teams
import Member1 from '../images/team1.png'
import Member2 from '../images/team2.png'
import Member3 from '../images/team3.png'
import Member4 from '../images/team4.png'
import Member5 from '../images/team5.png'

//Available
import mobileimage from '../images/mobile.png'
import apple from '../images/appstore.png'
import andriod from '../images/playstore.png'

//Footer
import whiteLogo from '../images/GoToCampus_White.svg'

const IndexPage = () => {

  const loadingContainer = {
    width: "120px",
    height: "35px",
    display: "flex",
    justifyContent: "space-around",
    margin:"0 auto",
    paddingTop: 300,
  };
  const loadingCircle = {
    display: "block",
    width: "40px",
    height: "40px",
    backgroundColor: "#3A36DB",
    borderRadius: "100%",
  };
  
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "60%",
    },
  };
  const loadingCircleTransition = {
    duration : 0.4,
    yoyo : Infinity,
    ease: 'easeInOut'
  }

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main>
        {loading ? (
          <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end">
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              style={loadingCircle}
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
          </motion.div>
        ) : (
          <div className="main-content">
            <Header logo={Logo} userIcon={UserIcon} phoneCall={PhoneCall} />
            <Banner icon1={facebook} icon2={googles} icon3={twitter} icon4={linkedin} />
            <Portals />
            <Integrations image1={img1} image2={img2} image3={img3} image4={img4} image5={img5} image6={img6} />
            <Modules image1={Module1} image2={Module2} image3={Module3} image4={Module4} image5={Module5} image6={Module6} readmore={ReadMoreArrow}/>
            <Teams member1={Member1} member2={Member2} member3={Member3} member4={Member4} member5={Member5} />
            <Available logo={Logo} mobileimage={mobileimage} apple={apple} andriod={andriod} />
            <Footer whiteLogo={whiteLogo} />
          </div>
        )}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
