import React, { useState, useEffect } from "react";
import Video from "../video/video.mp4";
import {
  MdArrowForward as ArrowForward,
  MdKeyboardArrowRight as ArrowRight,
} from "react-icons/md";
import Login from "./Login";
import SignUp from "./SignUp";
import Img1 from "../img/svg-1.svg";
import Logo from "../img/logo.png";
import WordCloud from "../img/wordCloud.png";
import DailyAverage from "../img/dailyAverage.png";

import Img2 from "../img/svg-2.svg";
import Img3 from "../img/svg-3.svg";
import Img4 from "../img/svg-4.svg";
import Img5 from "../img/svg-5.svg";
import { Link } from "react-scroll";
import axios from "axios";
import Navbar from "./Navbar";
import { animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  const [hover, setHover] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const getQuotes = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => setQuotes(res.data))
      .catch((err) => console.log(err));

    if (quotes.length > 0) {
      setQuotes(quotes[Math.floor(Math.random() * quotes.length - 1)]);
    }
  };

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
    setQuote(randomQuote);
    console.log(randomQuote);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Navbar scrollNav={scrollNav} toggleHome={toggleHome} />

      <div className="hero-section home">
        <div className="video-bg">
          <video src={Video} autoPlay muted loop type="video/mp4" />
        </div>

        <div className="page-content">
          <h1 className="page-heading">SemiColon Community</h1>
          <center>
            <p style={{ marginLeft: "5%", marginRight: "5%" }}>
              Mental health is such an important aspect in life. In order to be
              successful, people must have an optimistic mindset and never give
              up at their goals. Unfortunately, about 800,000 people die from
              being depressed each year. In order to have a healthy, calm mind,
              it is important to receive support and engagement from others.
              Hence, we hope this webapp shines some light in the lives of
              others, and makes their duties easier with its broad range of
              functionality.
            </p>
          </center>
          <button className="btn" onClick={getRandomQuote}>
            Random Quote !!
          </button>

          <i>
            <h1 style={{ margin: "30px 0 10px" }} className="quote">
              {quote.text}
            </h1>
          </i>

          <h3 style={{ fontWeight: 200, margin: "10px 0" }} className="author">
            {quote.author === null ? "Anonymous" : quote.author}
          </h3>

          <Link
            smooth={true}
            duration={1000}
            spy={true}
            offset={-70}
            exact="true"
            to="sign-up"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            className="btn"
          >
            Get Started{" "}
            {hover ? (
              <ArrowForward className="icon" />
            ) : (
              <ArrowRight className="icon" />
            )}
          </Link>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="img-wrapper">
                <img className="logo-img" src={Logo} alt="Img" />
              </div>
            </div>
            <div className="col2">
              <div className="text-wrap">
                <h1 className="top-line">About Us</h1>
                <h2 className="heading">
                  We are dedicated to helping you maintain a positive
                  state-of-mind.{" "}
                </h2>
                <p className="subtitle">
                  With our chat functionality, we will help users avoid stress
                  by talking to others on the webapp. We also have a daily quote
                  section for motivation and a mental health tips list. We
                  believe that the semicolon is a symbol for optimism, as when a
                  writer includes a semicolon, the sentence goes on when there
                  is a pause, just like in life, hence the name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Free Community.</h1>
                <h2 className="heading">For you, me and all of us.</h2>
                <p className="subtitle">
                  Join us now for an open and healthy environment to talk, share
                  and make friends in general.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img1} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Meditate.</h1>
                <h2 className="heading">
                  Meditation, yoga, massages, and deep breathing exercises and
                  guidance.
                </h2>
                <p className="subtitle">
                  Keeping your problems to yourself is doing nothing but
                  suffocating your inner self. Open up, call a friend or join
                  the community to share.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img2} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Learn in public.</h1>
                <h2 className="heading">Seek therapy or medical assistance</h2>
                <p className="subtitle">
                  The community is completely based on wellness of the people,
                  learn and share your accomplishments in public to feel better.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img3} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container dark">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Maintaining good relationships</h1>
                <h2 className="heading">
                  When was the last time you called a friend?
                </h2>
                <p className="subtitle">
                  Always communicate with your loved ones and remember they are
                  there for you.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img4} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="info-section">
          <h1 style={{ margin: 0 }} className="top-line">
            You are not alone
          </h1>
          <h2 style={{ margin: "0" }} className="heading">
            It is a battle for everyone.
          </h2>
          <p style={{ margin: "10px 0" }} className="subtitle">
            Check out this Sentiment Analysis chart and Word Cloud that was
            created by extracting Twitter tweets regarding mental health.
          </p>

          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap"></div>
              <div className="img-wrapper">
                <img style={{ marginTop: "-80px" }} src={WordCloud} alt="Img" />
              </div>
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={DailyAverage} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sign-in" className="info-container dark">
        <div className="info-section">
          <div className="info-row">
            <div className="col1">
              <div className="text-wrap">
                <h1 className="top-line">Join Us!</h1>
                <h2 className="heading">Login to start your journey now!</h2>
                <p className="subtitle">
                  Exercising with others is ideal in improving mental health
                  because you are with people close to you who can understand
                  your problems and will always be there for you.
                </p>
              </div>
              <Login />
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img4} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="sign-up" className="info-container">
        <div className="info-section">
          <div className="info-row imgStart">
            <div className="col1">
              <div className="text-wrap-signup">
                <h1 className="top-line">New user here?</h1>
                <h2 className="heading">Sign Up for Free!</h2>
              </div>
              <SignUp />
            </div>
            <div className="col2">
              <div className="img-wrapper">
                <img src={Img5} alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
