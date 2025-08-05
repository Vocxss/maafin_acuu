import { motion } from "motion/react";
import { base, slideFadeVariants } from "./utils";

export const Ending = () => {
  return (
    <motion.div
      variants={slideFadeVariants}
      initial="initial"
      animate="animate"
      // exit="exit"
      key={"D"}
      className="bg-amber-200 w-screen h-dvh mx-auto z-20 flex flex-col justify-center items-center relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="w-[90%] border-2 rounded-lg bg-sky-50 pb-8 flex flex-col justify-start items-center text-center"
      >
        <motion.img
          src={base + "/kiss.gif"}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          alt=""
          className="w-32 mix-blend-multiply brightness-110 aspect-square mt-4"
        />
        <div className="flex flex-col gap-4 px-2">
          <div className="flex flex-col gap-2">
            <p className="text-center text-lg font-semibold">Thank You!</p>
            <p className="text-center">
              Becok cak beliin cnack kecukaan camu yaa 🤗🥰🥰😘🙏
            </p>
          </div>
          <button
            className="w-[90%] cursor-pointer mx-auto font-semibold border-2 px-4 py-2 rounded-sm bg-component"
            onClick={() =>
              window.open(
                "https://wa.me/6285396030410?text=Beliin%20lamborghini%20woiii"
              )
            }
          >
            WA cekarang biar acip ingat
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
