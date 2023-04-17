import { motion } from "framer-motion";

import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex sm:flex-row flex-col items-center">
        <div
          className={`absolute inset-0 sm:top-[100px] top-[80px] flex-5 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          
          <div className='flex flex-col justify-center items-center mt-1'>
            <div className='w-5 h-5 rounded-full bg-[#EC9131]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className="mt-6">
            <h1 className={`${styles.heroHeadText} text-white mt-10`}>
              Hi, I'm <span className='text-[#EC9131]'>Isaac</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop software solutions, Apps <br className='sm:block hidden' />
              and web applications.
            </p>
          </div>
        </div>
        
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-screen sm:w-[500px] sm:ml-[700px]">
      <ComputersCanvas/>
      </motion.div>
       
      
      

      <div className='absolute xs:bottom-20 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[24px] h-[44px] rounded-3xl border-2 border-[#EC9131] flex justify-center items-start p-1'>
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#aC9100] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
