import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.p
      initial={{ opacity: 0, y: -40, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 2 }}
      
      className="text-3xl font-bold pb-8 pt-12 flex justify-center md:text-5xl lg:text-6xl font-mono">
        Welcome to dev concepts
      </motion.p>
      <p className="italic text-2xl text-center p-10 bg-gray-200 m-6 rounded-4xl  shadow-lg shadow-gray-400 leading-14 md:text-3xl lg:text-4xl ">
        The idea of this webpage is to showcase my own understandings of various
        development concepts of web development technologies like JavaScript,
        React.js, Next.js etc. It is more like a notebook but in a webpage! So
        feel free to roam around and explore various concepts through my
        writings. Hope you find them useful and informative.
      </p>
      <motion.div
        animate={{
          y: [-2, 2, -2, 2, 0],
        }}
        transition={{
          duration: 0.35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className=" [ text-2xl text-right italic pr-8"
      >
        ~ all blogs are written by gazi fahim
      </motion.div>
    </>
  );
}
