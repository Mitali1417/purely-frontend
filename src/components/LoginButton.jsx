import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { styles } from "../style";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      setScrolled(position > viewportHeight / 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.flexCenter}  `}>
        {isAuthenticated ? (
          <button
            className={`${styles.navtext} bg-black hover:bg-transparent border-black hover:border-white border-[2px] text-white rounded-full px-[0.6rem] ss:px-[1rem] py-[0.4rem] mx-[0.5rem]`}
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        ) : (
          <button
            className={`${styles.navtext} bg-black hover:bg-transparent border-black hover:border-white border-[2px] text-white rounded-full px-[0.6rem] ss:px-[1rem] py-[0.4rem] mx-[0.5rem]`}
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
        {isAuthenticated && (
          <div
            className={` ${styles.navtext} hidden lg:flex ${
              styles.flexBetween
            } ${
              scrolled
                ? "border-[#CCB0DD] text-[#AA7CC7]"
                : "border-[#fff] text-[#fff]"
            } border-[2px]  rounded-full py-[0.2rem] px-[0.3rem] `}
          >
            <img
              src={user.picture}
              className={`w-[2rem] h-[2rem] rounded-full `}
              alt={user.name}
            />
            <h2 className={`mx-[0.3rem]`}>{user.name}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default LoginButton;
