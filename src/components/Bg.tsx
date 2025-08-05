import { motion } from "framer-motion";

export const BackBackground = () => {
  return (
    <div className="w-dvw h-dvh bg-transparent inset-0 absolute z-10">
      <div className="flex flex-wrap gap-8 justify-center items-center">
        {Array.from({ length: 120 }, (_, i) => (
          <motion.img
            key={`${i}`}
            src="/sparkle.png"
            animate={{ y: [0, -100, 0], rotate: [0, 360, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className={`w-4 aspect-square`}
          />
        ))}
      </div>
    </div>
  );
};

export const Background = () => {
  return (
    <div className="w-dvw h-dvh inset-0 absolute">
      <motion.img
        src="/sparkle.png"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        alt=""
        className="absolute top-4 right-2 z-30 w-12 aspect-square"
      />
      <motion.img
        src="/sparkle.png"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        alt=""
        className="absolute top-8 right-10 z-30 w-10 aspect-square"
      />
      <motion.img
        src="/smile.png"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        alt=""
        className="absolute bottom-6 left-6 z-30 w-28 aspect-square"
      />
      <motion.img
        src="/star.png"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        alt=""
        className="absolute top-6 left-4 z-30 w-20 aspect-square"
      />
    </div>
  );
};
