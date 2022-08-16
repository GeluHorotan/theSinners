export const logoTop = {
  hidden: { x: 525.706, y: -1500, scale: 0, opacity: 0 },
  show: {
    x: 525.706,
    y: 51,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: 'easeOut',
      delayChildren: 0.5,
      when: 'beforeChildren',
      staggerChildren: 1,
      staggerDirection: -1,
    },
    scale: 1,
    opacity: 1,
  },
};

export const logoMiddle = {
  hidden: { x: -2322.03, y: -2054.64 },
  show: {
    x: -2322.03,
    y: -2054.64,
    rotateY: '360deg',
    transition: {
      delay: 1.2,
      repeat: Infinity,
      repeatType: 'loop',
      duration: 15,
    },
  },
};

export const logoBottom = {
  hidden: { x: 775.253, y: 1500, scale: 0, opacity: 0 },
  show: {
    x: 775.253,
    y: 698.021,
    transition: { delay: 0.4, duration: 0.8, ease: 'easeOut' },
    scale: 1,
    opacity: 1,
  },
};

export const logoLeft = {
  hidden: { x: '+100%', y: '-100%', scale: 0, opacity: 0 },
  show: {
    x: -2322.03,
    y: -2054.64,
    rotate: '360deg',
    transition: { type: 'spring', delay: 0.6, duration: 1.5, ease: 'easeOut' },
    scale: 1,
    opacity: 1,
  },
};

export const logoRight = {
  hidden: { x: '-100%', y: '100%', scale: 0, opacity: 0 },
  show: {
    x: -2322.03,
    y: -2054.64,
    rotate: '360deg',
    transition: { type: 'spring', delay: 0.6, duration: 1.5, ease: 'easeOut' },
    scale: 1,
    opacity: 1,
  },
};

export const popup = {
  hidden: { scale: 0.8 },
  show: { scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export const navUl = {
  hidden: { x: '100vw', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: '70',
      damping: 8,
      mass: 0.5,
    },
  },
};

export const navLogo = {
  hidden: { x: '-100vw', opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: '70',
      damping: 8,
      mass: 0.5,
    },
  },
};

export const sponsorItemLeft = {
  hidden: { x: '-60% ' },
  show: {
    x: 0,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 70,
      damping: 8,
      mass: 1,
    },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};
export const sponsorItemRight = {
  hidden: { x: '60%' },
  show: {
    x: 0,
    transition: {
      duration: 2,
      type: 'spring',
      stiffness: 70,
      damping: 8,
      mass: 1,
    },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

export const sponsorsBar = {
  hidden: { x: '-100%' },
  show: {
    x: '100%',
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 25,
    },
  },
};

export const logo = {
  hidden: { origin: 'center', rotate: 0, scale: 1 },
  show: {
    origin: 'center',
    rotate: 360,

    transition: {
      repeat: Infinity,

      duration: 10,
    },
  },
};

export const comingTop = {
  hidden: { y: '-100vh', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.2,
    },
  },
};

export const pathTest = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    strokeDash: 100,
  },
  show: {
    opacity: 1,
    strokeDash: 1000,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
};

export const bounce = {
  hidden: {
    y: '0',
  },
  show: {
    y: '-25px',
    transition: {
      repeat: Infinity,
      duration: 1,
      repeatType: 'reverse',
    },
  },
};

export const width = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
  },
};

export const leftSlide = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};
export const rightSlide = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const fadeDown = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 1 },
  },
};
export const fadeLeft = {
  hidden: {
    x: '-10%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,

    transition: { delay: 2, ease: 'easeInOut', duration: 1 },
  },
};

export const widthGrow = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '20%',
    transition: { delay: 3, ease: 'easeInOut', duration: 0.5 },
  },
};

export const widthNoDelay = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '20%',
    transition: { ease: 'easeInOut', duration: 1 },
  },
};

export const slidingRight = {
  hidden: {
    x: '1%',
  },
  show: {
    x: '-35.5%',

    transition: {
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',

      duration: 65,
    },
  },
};
export const slidingLeft = {
  hidden: {
    x: '-35.5%',
  },
  show: {
    x: '1%',

    transition: {
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'mirror',

      duration: 55,
    },
  },
};
