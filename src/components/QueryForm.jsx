import React, { useState } from "react";
import axios from "axios";
import { styles } from "../style";

function QueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  axios.defaults.withCredentials = true;
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(formData);
      const response = await axios.post(
        "https://backend-ikk2.onrender.com/api/queries/submit",
        body,
        config
      );
      console.log(response.data);
      alert("Query Submitted Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err.response ? err.response.data : err);
      alert("Failed to Submit Query");
    }
  };

  return (
    <div className={`px-[1rem] py-[1rem] pb-0 min-h-[100vh] overflow-hidden`}>
      <div
        className={`${styles.flexCenter} relative overflow-hidden flex-col bg-gradient-to-tr from-[#CCB0DD] to-[#BC97D3] shadow-2xl rounded-3xl p-[2rem] px-[1.3rem] ss:px-[2rem] sm:px-[2.5rem] md:px-[5rem] py-[4rem] pt-[8rem] mb-[2rem] h-full min-h-[100vh]  w-full`}
      >
        <div className={`${styles.flexCenter} flex-col lg:flex-row`}>
          <div className={`w-full lg:w-[50%] block z-10`}>
            <p className={` ${styles.text2} font-Quicks text-white `}>
              <span
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`${styles.head1}`}
              >
                Get in Touch
              </span>{" "}
              <br />
              <span>
                We love hearing from you! <br />
                Whether you have a question, or feedback, fill out the form
                below and we'll get back to you as soon as possible.
              </span>
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className={`w-full lg:w-[50%] block z-10 ${styles.flexCenter} flex-col ${styles.text3} font-Quicks font-medium bg-white/50 backdrop-blur-xl px-[1rem] sm:px-[2rem]  xl:px-[4rem] h-full ml-[1rem] rounded-2xl py-[2rem] my-[2rem] `}
          >
            <div className={`${styles.flexBetween} w-full my-[0.5rem]`}>
              <input
                className={`w-full rounded-lg  outline-[#BF9CD5] py-[0.5rem] px-[1rem] `}
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Enter your Name"
                required
              />
            </div>
            <div className={`${styles.flexBetween} w-full my-[0.5rem]`}>
              <input
                className={`w-full  rounded-lg outline-[#BF9CD5] py-[0.5rem] px-[1rem] `}
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Enter your Email Address"
                required
              />
            </div>
            <div className={`${styles.flexBetween} w-full my-[0.5rem]`}>
              <textarea
                className={`w-full  rounded-lg outline-[#BF9CD5] py-[0.5rem] px-[1rem] `}
                rows={4}
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder="Write your Message.."
                required
              />
            </div>
            <button
              type="submit"
              className={`hero-btn1 hero-btn-glow1 text-white px-[2rem] py-[0.5rem] rounded-full my-[1rem] w-full `}
            >
              Submit
            </button>
          </form>
        </div>
        <div
          className={`${styles.text2} ${styles.flexCenter} flex-col sm:flex-row block z-10 text-white `}
        >
          <span
            className={` text-[2rem] sm:text-[5rem] lg:text-[7rem] my-[1rem]`}
          >
            🖤{" "}
          </span>
          <h5 className={`italic`}>
            Your privacy is important to us. We promise to keep your information
            safe and will never share it with third parties.
          </h5>
        </div>
        <div
          className={`absolute z-0 -left-10 top-[4rem] bg-yellow/90 rounded-full w-[19rem] h-[7rem] blur-2xl -rotate-[25deg] `}
        />
        <div
          className={`absolute z-0 left-[10rem] -top-[3rem] bg-coolPink/40  rounded-full w-[16rem] h-[12rem] blur-2xl rotate-[35deg] `}
        />
      </div>
    </div>
  );
}

export default QueryForm;
