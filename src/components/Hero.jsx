import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
       max-w-7xl flex flex-row items-start gap-5`}
      >
        {/* // circle line design */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi ! I am <span className="text-[#915eff]"> Suresh</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            I am an enthusiast <br className="sm:block hidden" />
            web developer
          </p>
        </div>

        {/* <ComputersCanvas /> */}
      </div>
    </section>
  );
};

export default Hero;
