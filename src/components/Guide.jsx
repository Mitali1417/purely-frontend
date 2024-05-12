import React, { useState } from "react";
import { styles } from "../style";
import { getCleanser, getMoisturizer, skinType } from "../data";
import Marquee from "react-fast-marquee";

const Guide = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`${styles.flexCenter} ${styles.xPaddings} flex-col w-full h-full p-[1rem] `}
    >
      <div className={`${styles.flexCenter} flex-col w-full min-h-[96vh] `}>
        {/* ------------------------------------Section 1------------------------------------------ */}
        <div
          className={`${styles.flexCenter} flex-col mt-[4.5rem] ss:mt-[8rem] bg-gradient-to-tr from-[#CCB0DD] to-[#BC97D3] shadow-2xl rounded-3xl p-[2rem] px-[1.3rem] ss:px-[2rem] sm:px-[2.5rem] md:px-[5rem] min-h-[70vh] w-full`}
        >
          <h2
            className={` ${styles.guideHeading} mb-[1rem] z-20 font-Kalnia text-white w-full`}
          >
            Hey There, Welcome to Your{" "}
            <span className={`text-primary font-semibold w-full `}>
              Skincare
            </span>{" "}
            Journey!
          </h2>
          <p
            className={` hidden ss:flex ${styles.text1} font-Quicks w-full text-white `}
          >
            If you're stepping into the world of skincare, you've come to the
            right place.
          </p>
        </div>

        {/* ------------------------------------Section 2------------------------------------------ */}
        <div className={`mt-[8rem] my-[2rem]`}>
          <h1
            className={` ${styles.head1} z-20 font-Kalnia text-white mx-[2rem]`}
          >
            What’s Your
            <span className={`text-primary font-semibold`}>
              &nbsp;Skin Type&nbsp;
            </span>
            ?
          </h1>
          <p
            className={` ${styles.text1} mt-[1rem] font-Quicks text-white mx-[2rem]`}
          >
            First things first, let’s find out what your skin is really asking
            for. Here’s a quick rundown:
          </p>
          <div
            className={` hidden md:flex justify-center items-start flex-row flex-wrap w-full`}
          >
            {skinType.map((item) => {
              return (
                <>
                  <div
                    data-aos="fade-zoom-in"
                    key={item.id}
                    className={`${styles.flexCenter} flex-col text-center relative w-[13rem] mt-[4rem] m-[1rem] my-[1rem] h-full`}
                  >
                    <div
                      className={`category-container ${
                        item.id % 2 !== 0
                          ? "rounded-full sm:rounded-t-full sm:rounded-b-none"
                          : "rounded-full sm:rounded-b-full sm:rounded-t-none"
                      } w-[12rem] h-[18rem] relative `}
                    >
                      <img
                        src={item.image}
                        alt={item.typeName}
                        className="w-full h-full object-cover"
                      />
                      <span className="category-span absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 text-white font-DM transition-all">
                        🤍&nbsp;{item.typeName}
                      </span>
                    </div>
                    <div>
                      <ul
                        typeof="disc"
                        className={` ${styles.text2} mt-[1rem] font-Quicks text-white `}
                      >
                        <li className={`font-semibold italic`}>
                          {item.description}
                        </li>
                      </ul>
                      <h5
                        className={` ${styles.text2} font-semibold font-Quicks text-white `}
                      >
                        🖤&nbsp;{item.getType}
                      </h5>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* ------------------------------------mobile view----------------------------------------------- */}
          {/* Marquee for mobile view */}
          <div className={` md:hidden w-[96vw] my-[2rem]`}>
            <Marquee
              pauseOnHover={true}
              play={true}
              delay={0}
              loop={100}
              speed={80}
              gradientWidth={100}
            >
              {skinType.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.flexCenter} bg-white/20  flex-col text-center relative w-full h-full p-[1.5rem]`}
                >
                  <div
                    className={`category-container rounded-full w-[7rem] ss:w-[12rem] h-[7rem] ss:h-[12rem] relative `}
                  >
                    <img
                      src={item.image}
                      alt={item.typeName}
                      className="w-full h-full object-cover"
                    />
                    <span className="category-span absolute bottom-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 text-white font-DM transition-all">
                      🤍&nbsp;{item.typeName}
                    </span>
                  </div>
                  <div>
                    <ul
                      typeof="disc"
                      className={` ${styles.text2} mt-[1rem] font-Quicks text-white `}
                    >
                      <li className={`font-semibold italic`}>
                        {item.description}
                      </li>
                    </ul>
                    <h5
                      className={` ${styles.text2} font-semibold font-Quicks text-white `}
                    >
                      🖤&nbsp;{item.getType}
                    </h5>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        {/* ------------------------------------Section 2------------------------------------------ */}
        <div
          data-aos="fade-up"
          className={`bg-black shadow-2xl  block z-10 relative overflow-hidden ${styles.flexBetween} px-[2rem] ${styles.yPaddings}  flex-col lg:flex-row w-full rounded-2xl `}
        >
          <p className={` ${styles.text2} font-Quicks text-white `}>
            <span
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`${styles.head1}`}
            >
              Quick Tip
              <button className={`${hover && "bulb-glow"}`}>💡</button>
              <br />
            </span>
            <span>
              Your skin can change with the seasons or even with age, so check
              in on it now and then!
            </span>
          </p>
          <div
            className={`w-[22rem] h-[8rem] absolute bg-white/50  blur-3xl  right-[5rem] -top-[5rem] rounded-full -rotate-[38deg]`}
          />
          <div
            className={`w-[22rem] h-[8rem] absolute bg-white/50  blur-3xl  left-[5rem] -bottom-[5rem] rounded-full -rotate-[38deg]`}
          />
        </div>

        {/* ---------------------------------Section 3: Skincare ABC's--------------------------------------- */}
        <div className={`mt-[8rem] my-[2rem] w-[90%]`}>
          <h2 className={` ${styles.head1} z-20 font-Kalnia text-white`}>
            Skincare
            <span className={`text-primary font-semibold`}>
              &nbsp;ABC's&nbsp;
            </span>
          </h2>
          <div className={`my-[2rem]`}>
            <h3
              className={`${styles.text1} italic font-semibold text-[3rem] z-20 font-Quicks text-white`}
            >
              Start Fresh: Cleansing
            </h3>

            <p className={` ${styles.text2} font-Quicks text-white `}>
              🤍Morning Buzz: Wake up your skin by washing away the sleep and
              any overnight products.
            </p>
            <p className={` ${styles.text2} font-Quicks text-white `}>
              🤍Nighttime Ritual: Before you hit the pillows, cleanse again to
              remove the day’s grime, makeup, and oil build-up.
            </p>
            <div
              className={`bg-black shadow-2xl block z-10 relative ${styles.flexBetween} flex-col lg:flex-row w-full rounded-2xl px-[2rem] py-[1.5rem] my-[1rem]`}
            >
              <p className={` ${styles.text2} font-Quicks text-white `}>
                <span className={`${styles.text1} font-semibold `}>
                  Why?
                  <br />
                </span>
                <span>
                  Keeping your skin clean is the first step to clear, happy
                  skin. It’s like setting a clean canvas every morning and
                  night!
                </span>
              </p>
            </div>
          </div>
          <div
            className={` ${styles.flexCenter} flex-wrap text-white w-full mb-[5rem]`}
          >
            {getCleanser.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className={`category-container relative w-[20rem] h-[25rem] m-[0.5rem] bg-gradient-to-tr from-[#d5bee3] to-[#bb96d2]  p-[0.5rem] rounded-2xl`}
              >
                <a
                  href={item.ProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.ProductImage}
                    alt={item.ProductName}
                    className={`rounded-xl w-full h-[75%]`}
                  />
                  <span
                    className={`absolute text-center p-[1rem] z-0 bottom-0 left-0 w-full h-full flex items-center justify-center bg-[#aa7cc7] bg-opacity-85  text-white font-DM transition-all category-span`}
                  >
                    {item.ProductName}
                  </span>
                </a>
                <a
                  className={`block z-10 ${styles.text3} font-medium font-Quicks w-full my-[1rem] px-[1rem]`}
                  href={item.ProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.ProductName}
                </a>
              </div>
            ))}
          </div>

          <div className={`my-[2rem]`}>
            <h3
              className={`${styles.text1} italic font-semibold text-[3rem] z-20 font-Quicks text-white`}
            >
              Hydrate and Protect: Moisturizing
            </h3>

            <p className={` ${styles.text2} font-Quicks text-white `}>
              🤍Daily Dose: After cleansing, apply a moisturizer that fits your
              skin type—oily, dry, combination, sensitive, or normal.
            </p>
            <p className={` ${styles.text2} font-Quicks text-white `}>
              🤍Lock and Load: Moisturizer not only hydrates but also locks in
              all the goodness of your previous skincare steps.
            </p>
            <div
              className={`bg-black shadow-2xl block z-10 relative ${styles.flexBetween} flex-col lg:flex-row w-full rounded-2xl px-[2rem] py-[1.5rem] my-[1rem]`}
            >
              <p className={` ${styles.text2} font-Quicks text-white `}>
                <span className={`${styles.text1} font-semibold `}>
                  Why?
                  <br />
                </span>
                <span>
                  Hydrated skin is healthy skin. It looks smoother, feels
                  softer, and stays supple longer. It's your daily armor against
                  dryness and fine lines.
                </span>
              </p>
            </div>
          </div>
          <div
            className={` ${styles.flexCenter} flex-wrap text-white w-full mb-[5rem]`}
          >
            {getMoisturizer.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id}
                className={`category-container relative w-[20rem] h-[25rem] m-[0.5rem] bg-gradient-to-tr from-[#d5bee3] to-[#bb96d2]  p-[0.5rem] rounded-2xl`}
              >
                <a
                  href={item.ProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.ProductImage}
                    alt={item.ProductName}
                    className={`rounded-xl w-full h-[75%]`}
                  />
                  <span
                    className={`absolute text-center p-[1rem] z-0 bottom-0 left-0 w-full h-full flex items-center justify-center bg-[#aa7cc7] bg-opacity-85  text-white font-DM transition-all category-span`}
                  >
                    {item.ProductName}
                  </span>
                </a>
                <a
                  className={`block z-10 ${styles.text3} font-medium font-Quicks w-full my-[1rem] px-[1rem]`}
                  href={item.ProductLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.ProductName}
                </a>
              </div>
            ))}
          </div>

          <div className={`my-[2rem]`}>
            <h3
              className={`${styles.text1} italic font-semibold text-[3rem] z-20 font-Quicks text-white`}
            >
              Shield Up: Sun Protection
            </h3>

            <p className={` ${styles.text2} font-Quicks text-white `}>
              🤍Every Single Day: Yes, even when it's cloudy, raining, or if
              you're spending most of your day indoors. UV rays don’t play fair!
            </p>

            <div
              className={`bg-black shadow-2xl block z-10 relative ${styles.flexBetween} flex-col lg:flex-row w-full rounded-2xl px-[2rem] py-[1.5rem] my-[1rem]`}
            >
              <p className={` ${styles.text2} font-Quicks text-white `}>
                <span className={`${styles.text1} font-semibold `}>
                  Why?
                  <br />
                </span>
                <span>
                  Sunscreen is the ultimate anti-aging tool. It prevents
                  sunburn, premature aging, and most importantly, reduces the
                  risk of skin cancer. Make it a non-negotiable part of your
                  morning routine.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------------Section 4: React and response------------------------------------------- */}
        <div className={` my-[2rem]`}>
          <h2 className={` ${styles.head1} z-20 font-Kalnia text-white`}>
            Quick Heads Up: Listen to
            <span className={`text-primary font-semibold`}>
              &nbsp;Skin&nbsp;
            </span>
            !
          </h2>

          <p className={` ${styles.text2} font-Quicks text-white `}>
            ✔️Skin SOS: If any product causes redness, itching, or irritation,
            it’s your skin waving a red flag.
          </p>
          <p className={` ${styles.text2} font-Quicks text-white `}>
            ✔️Patch Test Pro: Always introduce new products slowly. Apply a
            small amount on your wrist or behind your ear to see how your skin
            feels about it over a day or two.
          </p>

          <div
            className={`bg-black shadow-2xl block z-10 relative ${styles.flexBetween} flex-col lg:flex-row w-full rounded-2xl px-[2rem] py-[1.5rem] my-[1rem]`}
          >
            <p className={` ${styles.text2} font-Quicks text-white `}>
              <span className={`${styles.text1} font-semibold `}>
                Why?
                <br />
              </span>
              <span>
                Your skin’s comfort is key. Adjusting products based on your
                skin’s response helps you tailor your skincare journey for the
                best results.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
