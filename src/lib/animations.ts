
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const fadeInDown = {
  initial: { 
    opacity: 0, 
    y: -20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const stagger = (delay = 0.05) => {
  return {
    animate: {
      transition: {
        staggerChildren: delay
      }
    }
  };
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const textReveal = {
  initial: { 
    clipPath: "inset(0 100% 0 0)" 
  },
  animate: { 
    clipPath: "inset(0 0 0 0)",
    transition: { 
      duration: 0.8, 
      ease: [0.77, 0, 0.175, 1], 
      delay: 0.2 
    }
  }
};

export const blurIn = {
  initial: { 
    opacity: 0,
    filter: "blur(10px)"
  },
  animate: { 
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
