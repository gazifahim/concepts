import { motion } from "framer-motion";
import Avatar from "../Components/avataaars.png";

export default function Home() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 pt-10 flex flex-col justify-center absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      
      {/* Avatar */}
      <div className="flex justify-center mb-8">
        <motion.img
          src={Avatar}
          alt="Avatar"
          className="
            w-28 h-28
            sm:w-36 sm:h-36
            md:w-44 md:h-44
            lg:w-52 lg:h-52
            object-contain
          "
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="flex justify-center">
      <p
        className="italic text-center
         sm:text-lg md:text-2xl lg:text-3xl
        p-4 sm:p-6 md:p-8 lg:p-10
        bg-gray-200
        m-3 sm:m-4 md:m-6
        rounded-3xl
        shadow-lg shadow-gray-400
        leading-relaxed md:leading-snug lg:leading-tight
        max-w-5xl"
      >
        The idea of this webpage is to showcase my own understandings of various
        development concepts of web development technologies like JavaScript,
        React.js, Next.js etc. It is more like a notebook but in a webpage! So
        feel free to roam around and explore various concepts through my
        writings. Hope you find them useful and informative.
      </p>
      </div>

      {/* Footer note */}
      <motion.div
        animate={{ y: [-2, 2, -2, 2, 0] }}
        transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
        className="text-center italic
        text-sm sm:text-base md:text-lg
        pr-2 sm:pr-6 lg:pr-8
        mt-6 text-gray-700"
      >
        ~ all blogs are written by gazi fahim
      </motion.div>
    </section>
  );
}
