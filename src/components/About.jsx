import React from "react";
import { styles } from "../style";

const About = () => {
  return (
    <div className={`${styles.flexCenter} flex-col w-full h-full p-[1rem]`}>
      <div
        className={`bg-[#AA7CC7] ${styles.flexCenter} ${styles.xPaddings} flex-col w-full min-h-[96vh] rounded-2xl py-[4rem] `}
      >
        <div data-aos="fade-up"  className={`md:mt-[8rem] my-[2rem] w-full`}>
          <h1
            className={`${styles.aboutHeading} z-20 font-Kalnia text-white w-full`}
          >
            Why Talk About {" "}
            <span className={`text-primary w-full `}>Skincare</span>?
          </h1>
          <p className={` ${styles.text1} font-Quicks text-white mt-[1rem]`}>
            Your skin is not just your body's coat—it's your hero, protecting
            you from germs and harsh weather. But sometimes, it needs a little
            help. That’s where skincare comes in! It’s not just about looking
            good; it’s about keeping your skin strong and healthy.
          </p>
        </div>

        <div data-aos="fade-up" className={`my-[2rem]`}>
          <h1
            className={` ${styles.aboutHeading} z-20 font-Kalnia text-white w-full `}
          >
            Is Skincare Just {" "}
            <span className={`text-primary`}>Hype</span>?
          </h1>
          <p className={` ${styles.text1} font-Quicks text-white mt-[1rem] `}>
            You might wonder if all those fancy bottles and tubes are just a way
            to spend your money. Here’s the real deal:{" "}
          </p>
          <ul
            typeof="disc"
            className={` ${styles.text2} mt-[1rem] font-Quicks text-white `}
          >
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Smart Choices Save Money:&nbsp;
              </span>
              Using the right products for your skin type can mean fewer
              products and less waste of your hard-earned cash.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Not All Products Fit All:&nbsp;
              </span>{" "}
              What works for your friend might not work for you. Learning about
              your skin type helps you pick what truly matters and skip the
              rest.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Long-Term Gain:&nbsp;
              </span>
              Think of skincare as an investment. Protecting your skin now means
              less chance of needing expensive treatments for skin troubles
              later on.
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" className={`my-[2rem]`}>
          <div className={`${styles.flexBetween}`}>
            <h1
              className={` ${styles.aboutHeading} z-20 font-Kalnia text-white `}
            >
              Dive into the Science of Skincare
            </h1>
           
          </div>
          <p className={` ${styles.text1} font-Quicks text-white mt-[1rem]`}>
            Let's peel back the layers and see why skincare is not just about
            looking good—it’s about deep-rooted health and wellness:
          </p>
          <ul
            typeof="disc"
            className={` ${styles.text2} mt-[1rem] font-Quicks text-white `}
          >
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Strengthen Your Shield:&nbsp;
              </span>
              Proper skincare reinforces your skin's barrier, keeping you
              hydrated and defending against environmental threats.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Boost Cell Turnover:&nbsp;
              </span>
              Your skin naturally refreshes its cells, shedding the old to
              reveal the new. As we age, this process slows. A targeted skincare
              routine speeds this up, keeping your complexion bright and
              youthful.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Balance and Harmony:&nbsp;
              </span>
              Using the right products helps maintain your skin’s perfect pH
              balance, reducing the risk of infections and irritations.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Feel Good, Look Great:&nbsp;
              </span>
              There’s undeniable confidence in clear, glowing skin. It’s about
              feeling as vibrant on the outside as you do on the inside.
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" className={`my-[2rem]`}>
          <div className={`${styles.flexBetween}`}>
            <h1
              className={` ${styles.aboutHeading} z-20 font-Kalnia text-white `}
            >
              Invest in Your Skin, Invest in Yourself
            </h1>
          </div>
          <p className={` ${styles.text1} font-Quicks text-white mt-[1rem]`}>
            Your skin deserves care and attention. With the right regimen, you
            can:
          </p>
          <ul
            typeof="disc"
            className={` ${styles.text2} mt-[1rem] font-Quicks text-white `}
          >
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Prevent common skin problems&nbsp;
              </span>
              before they start.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Address and heal current issues&nbsp;
              </span>
              more effectively.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Slow down the aging clock&nbsp;
              </span>
              for a lasting radiance.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Enhance your natural beauty,&nbsp;
              </span>
              minimizing the need for makeup.
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" className={`my-[2rem]`}>
          <div className={`${styles.flexBetween}`}>
            <h1
              className={` ${styles.aboutHeading} z-20 font-Kalnia text-white `}
            >
              Why Choose Purely?
            </h1>
          </div>
          <p className={` ${styles.text1} font-Quicks text-white mt-[1rem]`}>
            At Purely, we blend the art of beauty with the science of
            dermatology. Our carefully curated products are crafted based on
            solid scientific research, designed to cater to your unique skin
            needs. We’re here to guide you through each step of your skincare
            journey.
            <br />
            <span className={`font-semibold italic `}>
            Step into the world of empowered skincare
            </span>
             with Purely—where
            beauty meets science, and where your skin gets the royal treatment
            it deserves.
          </p>
        </div>

        <div data-aos="fade-up" className={`my-[2rem]`}>
          <div className={`${styles.flexBetween} flex-col md:flex-row`}>
            <h1
              className={` ${styles.aboutHeading} z-20 font-Kalnia text-white `}
            >
              Getting Started
            </h1>
            <div
              onMouseEnter={() => setHover(true)} 
              onMouseLeave={() => setHover(false)}
              className={`${styles.flexCenter} block z-10 mt-[2.5rem] lg:mt-0 text-[0.8rem] ss:text-[1rem] font-semibold hero-btn1 hero-btn-glow1 text-white py-[1rem] px-[2rem] rounded-full md:w-[40%] lg:w-fit  `}
            >
              <a href="/guide">Know your roots</a>
            </div>
          </div>
          <p className={` ${styles.text1} font-Quicks text-white mt-[1rem]`}>
            You might wonder if all those fancy bottles and tubes are just a way
            to spend your money. Here’s the real deal:{" "}
          </p>
          <ul
            typeof="disc"
            className={` ${styles.text2} mt-[1rem] font-Quicks text-white `}
          >
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Trial and Error:&nbsp;
              </span>
              It’s okay to try different things until you find what works for
              you.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Patience Pays Off:&nbsp;
              </span>
              Give new products a few weeks to show results. Quick fixes are
              rare in skincare.
            </li>
            <li>
              🖤
              <span className={`font-semibold italic`}>
                &nbsp;Ask Questions:&nbsp;
              </span>
              Not sure where to start? Ask! No question is too small if it helps
              you feel better about your skincare.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
