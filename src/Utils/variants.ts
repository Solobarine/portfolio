export const slidingVariant = () => {
  return {
    initial: { scale: 0, opacity: 0, translateX: '-10em' },
    visible: {
      scale: 1,
      translateX: 0,
      opacity: 1,
      transition: {
        type: 'bounce',
        delay: 0.7,
      },
    },
  }
}

export const staggerVariant = (index: number) => {
  return {
    initial: {
      translateX: '-20px',
      opacity: 1,
    },
    visible: {
      translateX: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + 0.1 * index,
      },
    },
  }
}

export const fadeInVariant = (index: number) => {
  return {
    initial: {
      opacity: 0,
      translateZ: index % 2 === 0 ? '-15em' : '15em',
    },
    visible: {
      opacity: 1,
      translateZ: 0,
      transition: {
        delay: 1.6,
      },
    },
  }
}
