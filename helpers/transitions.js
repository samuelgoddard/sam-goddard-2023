export const fadeDelay = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 1.22, delay: 2.7, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const imageZoom = {
	initial: { scale: 1.1 },
  enter: { 
    scale: 1,
    transition: { duration: 1.75, delay: 2.25, ease: [0.37, 0, 0.63, 1] }
  },
	exit: {
    scale: 1.1,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealIntro = {
	initial: { y: "120%" },
	enter: { 
    y: "0%",
    transition: { 
      duration: 1,
      delay: 0.55,
      ease: [0.83, 0, 0.17, 1]
    }
  }
}