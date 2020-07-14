// import React from 'react';

// // export default function Hero({ childern,hero }) {
// //     return <header className={hero}>{childern}</header>;
// // };

// const Hero = ({ childern,hero }) => {
//     return <header className={hero}>{childern}</header>;
// };
// export default Hero;


// Hero.defaultProps = {
//     hero: "defaultHero"
// };



import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero"
};