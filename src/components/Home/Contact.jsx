import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <h2>Contact Us</h2>
        <input type="text" name="" id="" placeholder="Name.." />
        <input type="email" name="" id="" placeholder="Email.." />
        <textarea name="" id="" placeholder="Message...."></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
        >
          <img src={burger} alt="burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
