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
  hidden: { scale: 0, opacity: 0 },
  show: {
    transition: { delay: 0.2, duration: 1.25, ease: 'easeOut' },
    scale: 1,
    opacity: 1,
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
  hidden: { x: -1500, y: 237.242, scale: 0, opacity: 0 },
  show: {
    x: 188,
    y: 237.242,
    transition: { delay: 0.6, duration: 1, ease: 'easeOut' },
    scale: 1,
    opacity: 1,
  },
};

export const logoRight = {
  hidden: { x: '2000', y: 237.242, scale: 0, opacity: 0 },
  show: {
    x: 981.247,
    y: 237.242,
    transition: { delay: 0.6, duration: 1, ease: 'easeOut' },
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
