import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder1.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Byte</h4>
          <p>
            Burger Byte. The Place for most Tasty Burger on the entire Earth.
          </p>
          <p>
            Explore Various Types of foods and Burger. Click Below To see the
            Menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="founder" />
              <h3>Bhavesh Choudhary</h3>
            </div>
            <p>
              I am Bhavesh Choudhary Founder Of Burger Byte. <br /> All are in
              the Search of{" "}
              <i>"Taste Kaha hai " ?.. So. "Taste yaha hai....." </i>
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
