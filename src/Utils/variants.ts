export const slidingVariant = () => {
  return {
    initial: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'bounce',
        delay: 0.4,
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
        delay: 1 + 1 * index,
      },
    },
  }
}

export const bounceVariant = {}
