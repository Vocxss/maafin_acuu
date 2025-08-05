import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { base, slideFadeVariants } from "./utils";

export const Loading = ({
  setNextSection,
  onExitComplete,
}: {
  setNextSection: () => void;
  onExitComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={slideFadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key={"A"}
      className="flex flex-col gap-2 justify-center items-center"
    >
      {progress < 100 && (
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <div className="custom-loader"></div>
          <p className="text-text text-center font-semibold text-xl">
            {progress}%
          </p>
        </motion.div>
      )}
      <p className="text-text text-lg">
        {progress >= 100 ? (
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="flex flex-col items-center border-8 border-zinc-950 justify-center shadow-lg transition-transform ease-in-out duration-300 bg-secondary px-6 py-4 gap-4"
          >
            <img
              src={base + "/heart.gif"}
              className="mix-blend-multiply brightness-110 w-32 aspect-square"
              alt=""
            />
            <p className="text-lg font-bold">Surat Cinta Untuk Cucunono</p>
            <button
              className="font-semibold cursor-pointer text-sm border-black border-3 bg-text text-black px-4 py-1"
              onClick={() => {
                setNextSection();
                onExitComplete();
              }}
            >
              Open
            </button>
          </motion.div>
        ) : (
          "Sabar ya..."
        )}
      </p>
    </motion.div>
  );
};
