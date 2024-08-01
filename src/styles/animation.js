// src/motionStyles.js
export const motionStyle = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 }, // L'élément rétrécit et devient transparent lors de la sortie
  transition:{ duration: 0.5 }
 
};


export const floatingAnimationStyle = {
  animate: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 180, 180, 0],
    borderRadius: ["5%", "5%", "50%", "50%", "5%"],
  },
  transition: {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.25, 0.5, 0.75, 1],
    repeat: Infinity,
  },
  style: {
    marginTop: "7vh",
    width: "4rem",
    height: "4rem",
    backgroundColor: "rgba(58, 197, 231, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
};

export const transitionStyle ={
  initial: { opacity: 0, scale: 0.5 },
  animate:{opacity: 1, scale: 1 },
  exit:{opacity: 0, scale: 0.5 },
  transition:{ duration: 0.5 }
}