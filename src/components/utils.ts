export const slideFadeVariants = {
  initial: { x: 100, opacity: 0 },     // Saat komponen masuk
  animate: { x: 0, opacity: 1 },       // Saat komponen tampil
  exit: { x: -100, opacity: 0 },       // Saat komponen keluar
};

export const transitionConfig = {
  duration: 0.8,
  ease: "easeInOut",
};