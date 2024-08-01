import React, { useState } from "react";
import "./MainPage.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";

const MainPage = () => {
  const [manageLogin, setManageLogin] = useState(false);
  const navigate = useNavigate();

  const handleSignInbtn = () => {
    navigate("/login");
    setManageLogin(true);
  };

  const handleCreateFormBot = () => {
    navigate("/signup");
  };

  return (
    <>
      <div class="header">
        <div id="logo">
          <img src="Logo.png" alt="logo" />
          <span>FormBot</span>
        </div>

        <div id="btn1">
          <button id="button1" onClick={handleSignInbtn}>
            Sign in{" "}
          </button>
          <button id="button2" onClick={handleCreateFormBot}>
            Create a FormBot
          </button>
        </div>
      </div>
      <div class="header-2">
        <div id="subHeader-2">
          <img src="Heading.png" alt="" />
          <div id="paragraph">
            <p>
              Typebot gives you powerful blocks to create unique chat
              experiences. Embed them
            </p>
            <p>
              anywhere on your web/mobile apps and start collecting results like
              magic.
            </p>
          </div>
          <button id="button3" onClick={() => navigate("/signup")}>
            Create a FormBot for free
          </button>
          <div id="figure">
            <img src="Figure.png" alt="figure" />
          </div>
        </div>
      </div>

      <div class="heading-3">
        <p>Replace your old school forms </p>
        <p>with</p>
        <p>chatbots</p>
      </div>
      <div class="paragraph-2">
        <p>
          Typebot is a better way to ask for information. It leads to an
          increase in customer satisfaction and retention and multiply by
        </p>
        <p>3</p>
        <p>your conversion rate compared to classical forms.</p>
      </div>
      <div id="container-2">
        <img
          src="Container-2.png"
          alt="Container-2"
          onClick={() => navigate("/signup")}
        />
      </div>
      <div id="container-3">
        <img
          src="Container-3.png"
          alt="Container-3"
          onClick={() => navigate("/signup")}
        />
        <div id="heading-4">
          <h1>Easy building experience</h1>
          <p>
            All you have to do is drag and drop blocks to create your app. Even
            if you have custom needs, you can always add custom code.
          </p>
        </div>
      </div>
      <div id="container-4">
        <div id="heading-5">
          <h1>Easy building experience</h1>
          <p>
            All you have to do is drag and drop blocks to create your app. Even
            if you have custom needs, you can always add custom code.
          </p>
        </div>
        <img
          src="Container-4.png"
          alt="Container-4"
          onClick={() => navigate("/signup")}
        />
      </div>

      <div class="heading-6">
        <img
          src="Container-5.png"
          alt="container-5"
          onClick={() => navigate("/signup")}
        />
      </div>
      <div id="heading-7">
        <h1>Integrate with any platform</h1>
        <p>
          Typebot offers several native integrations blocks as well as
          instructions on how to embed typebot on particular platforms
        </p>
      </div>
      <div class="heading-3">
        <p>Collect results in real-time </p>
      </div>
      <div class="paragraph-2">
        <p>
          One of the main advantage of a chat application is that you collect
          the user's responses on each question.
        </p>
        <b> You won't lose any valuable data.</b>
      </div>
      <div class="paragraph-2">
        <img src="Image-1.png" alt="image-1" />
      </div>
      <div id="heading-8">
        <p>And many more features</p>
      </div>
      <div class="paragraph-2">
        <p>Typebot makes form building easy and comes with powerful features</p>
      </div>
      <div id="Container-6">
        <img src="Container-6.png" alt="" />
      </div>
      <div id="heading-9">
        <p>Loved by teams and creators from all around the world</p>
        <img src="Container.png" alt="" />
      </div>
      <div id="heading-10">
        <h1>Improve conversion and user engagement with FormBots </h1>

        <div id="create-btn">
          <button onClick={() => navigate("/signup")}>Create a FormBot</button>
          <p>
            No trial. Generous <b>free</b> plan.{" "}
          </p>
        </div>
      </div>
      <div id="footer">
        <div id="sub-footer1">
          <span>
            Made with <FaHeart style={{ color: "red" }} /> by
          </span>
          <p>@Sukhi</p>
        </div>
        <div id="sub-footer2">
          <ul>
            <li>
              Status <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>
              Documents <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>
              Roadmap <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>Pricing </li>
          </ul>
        </div>
        <div id="sub-footer3">
          <ul>
            <li>
              Disord <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>
              GitHub repository
              <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>
              Twitter
              <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>
              LinkedIn <FaExternalLinkAlt style={{ color: "white" }} />
            </li>
            <li>OSS Friends</li>
          </ul>
        </div>
        <div id="sub-footer4">
          <ul>
            <li>About</li>
            <li>Contacts</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPage;
