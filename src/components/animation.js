export const top = {
 hidden: { x: 525.706, y: -1500, scale: 0, opacity:0 },
show: { x: 525.706, y: 51, transition: { delay: 1, duration: 1.75, ease: 'easeOut' , delayChildren: 0.5, when: 'beforeChildren',
      staggerChildren: 1, staggerDirection: -1 }, scale: 1, opacity:1 }
};



export const middle = {
  hidden: {  scale: 0, opacity:0},
  show: { transition: { delay: 0.4, duration: 1.25, ease: 'easeOut' },scale: 1, opacity:1}
}

export const bottom = {
 hidden: { x: 775.253, y: 1500, scale: 0, opacity:0 },
 show: { x: 775.253, y: 698.021, transition: {delay: 1,  duration: 1.75, ease: 'easeOut' },scale: 1, opacity:1 }
}


export const left = {
  hidden: { x: -1500, y: 237.242, scale: 0, opacity:0},
   show: { x: 188, y: 237.242, transition: { delay: 2, duration: 1.75, ease: 'easeOut' },scale: 1, opacity:1 }
}

export const right = {
  hidden: { x: 2000, y: 237.242, scale: 0, opacity:0},
   show: { x: 981.247, y: 237.242, transition: {delay: 2,  duration: 1.75, ease: 'easeOut' },scale: 1, opacity:1 }
}


