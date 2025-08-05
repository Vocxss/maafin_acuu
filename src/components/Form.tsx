import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { BackBackground, Background } from "./Bg";
import { slideFadeVariants } from "./utils";

const pesan = [
  "",
  "Terima dong masa nggk🤗",
  "Kok gitu?",
  "Udh effort loh sya buat ini. Kok gk dihargain?",
  "Sengaja ya bikin aku marah?😡",
  "Yaudah sih",
];

export const Form = ({
  setNextSection,
}: {
  setNextSection: (section: string) => void;
}) => {
  const [indexPesan, setIndexPesan] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isRejected, SetIsRejected] = useState(false);

  useEffect(() => {
    const padding = 100;
    setPositionX(Math.random() * (window.innerWidth - padding));
    setPositionY(Math.random() * (window.innerHeight - padding));
  }, [indexPesan]);

  const handleReject = () => {
    SetIsRejected(true);
    setIndexPesan((prev) => prev + 1);
  };

  return (
    <motion.div
      variants={slideFadeVariants}
      initial="initial"
      animate="animate"
      // exit="exit"
      key={"C"}
      className="bg-component w-screen h-dvh"
    >
      <BackBackground />
      <Background />
      <motion.div className="mx-auto z-20 flex h-full flex-col justify-center items-center relative">
        <div className="w-[90%] border-2 rounded-lg bg-sky-50 py-4 gap-6 flex flex-col justify-start text-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Jadi...</p>
            <p className="font-medium">Permintaan maafnya diterima gk?</p>
            {isRejected && (
              <p>
                {indexPesan < pesan.length
                  ? pesan[indexPesan]
                  : "TERIMA WOI😡😡"}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center px-2">
            <motion.button
              className={`${
                indexPesan > 0 ? `fixed z-50` : ""
              } bg-sky-200 border-2 font-semibold px-6 py-2 cursor-pointer rounded-sm`}
              style={
                indexPesan > 0
                  ? {
                      top: `${positionY}px`,
                      left: `${positionX}px`,
                      position: "fixed",
                    }
                  : {}
              }
              onClick={handleReject}
            >
              Skipp
            </motion.button>
            <div className="w-full flex justify-end items-end">
              <motion.button
                className="bg-sky-200  max-w-[84px] border-2 font-semibold px-6 py-2 cursor-pointer rounded-sm z-20"
                onClick={() => setNextSection("penutup")}
              >
                Iyap
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
