// export const heroGradient = () => (
//   <>
//     <div
//       className={`absolute z-0 -left-10 bg-white/80 rounded-full w-[26rem] h-[9rem] blur-2xl -rotate-[25deg]`}
//     />
//     <div
//       className={`absolute z-0 -left-[6rem] top-[13rem] bg-coolPink/50 rounded-full w-[16rem] h-[12rem] blur-2xl rotate-[25deg]`}
//     />
//     <div
//       className={`absolute z-0 left-[1rem] top-[20rem] bg-warmPink/80 rounded-full w-[18rem] h-[6rem] blur-2xl -rotate-[15deg]`}
//     />
//     <div
//       className={`absolute z-0 -right-5 -top-2 bg-white rounded-full w-[26rem] h-[9rem] blur-2xl -rotate-[20deg]`}
//     />
//     <div
//       className={`absolute z-0 -right-[6rem] top-[3rem] bg-coolPink/50 rounded-full w-[16rem] h-[12rem] blur-2xl rotate-[25deg]`}
//     />
//     <div
//       className={`absolute z-0 right-[1rem] top-[4rem] bg-warmPink/60 rounded-full w-[18rem] h-[6rem] blur-2xl rotate-[15deg]`}
//     />
//   </>
// );

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
  easing: "ease",
});

export default AOS;
