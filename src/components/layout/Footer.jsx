import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Byte</h2>
        <p>we are trying to give you the best taste in the world.</p>
        <br />
        <em>we give attention to genuine feedback.</em>
        <br></br>
        <br />
        <strong>@all rights received Burger Byte</strong>
      </div>
      <aside>
        <h4>FOLLOW US ON.</h4>
        <a href="https://www.youtube.com/@RightMasterFacts">
          <AiFillYoutube />
        </a>
        <a href="https://github.com/Bhaveshhhhhhh">
          <AiFillGithub />
        </a>
        <a href="nstagram.com/iam_bhaveshh___/">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
