import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder1.png";

const options = {
  initial: { x: "-100%", opacity: 0 },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

const Founder = () => {
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="founder" height={200} width={200} />
        <h3>Bhavesh Choudhary</h3>
        <p>
          Hey, Everyone I am Bhavesh Choudhary Founder of Burger Byte.
          <br /> Our aim is to create the most tasty burger on this planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
