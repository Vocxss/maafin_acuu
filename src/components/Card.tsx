import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BackBackground, Background } from "./Bg";
import { slideFadeVariants } from "./utils";

export const Card = ({
  sectionShow,
  setNextSection,
}: {
  sectionShow: boolean;
  setNextSection: (section: string) => void;
}) => {
  const [timerDone, setTimerDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sectionShow) setTimerDone(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [sectionShow]);

  return (
    <motion.div
      variants={slideFadeVariants}
      initial="initial"
      animate="animate"
      // exit="exit"
      key={"B"}
      className=" bg-component w-screen h-dvh"
    >
      <BackBackground />
      <Background />
      <motion.div
        className="mx-auto z-20 flex h-full flex-col justify-center items-center relative"
      >
        <div className="w-[90%] border-2 rounded-lg bg-sky-50 pb-8 flex flex-col justify-start text-center">
          <div className="text-center font-bold text-lg bg-sky-200 border-b-4 rounded-tr-lg rounded-tl-lg mb-4 py-4">
            Message
          </div>
          <div className="px-2 flex gap-4 flex-col">
            <div>
              <p className="text-lg font-semibold">Dear Adikku Tercinta❤❤...</p>
              <p className="text-sm font-medium my-2">
                Bismillāhir-raḥmānir-raḥīm, <br /> Saya ingin meminta maaf
                dengan sungguh-sungguh dari hati yang paling terdalam (lebih
                dalam dari palung mariana), yang dimana saya selalu melakukan
                diskriminasi serta perbuatan yang tidak senonoh sewaktu kita
                kecil. Oleh karena itu, saya akan menebusnya dengan pertama-tama
                membuatkan website ini, kedua saya akan memberikan mobil
                lamborgini yang termahal, lalu terakhir... Itu aja, "Thank you
                udah baca sampai akhir" (alay jir)
              </p>
            </div>
            {timerDone && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  duration: 1,
                  damping: 10,
                  bounce: 0.5,
                }}
                className="flex justify-end px-4 items-center"
              >
                <button
                  className="z-50 px-6 cursor-pointer font-semibold text-sm py-2 border-2 rounded-sm bg-amber-200"
                  onClick={() => setNextSection("form-maaf")}
                >
                  Next
                </button>
              </motion.div>
            )}
            {/* <TypewriterWithMotion /> */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
