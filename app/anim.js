const transition = {duration: 1.2, ease: [0.35,0.19,0,1]}
const transition2 = {duration: 0.9, ease: [0.49,0.05,0.15,0.97]}


export const overlay = {
    open: {
        height: "auto",
        transition: {...transition,}
    },
    closed: {
        height: "0",
        transition: {...transition}
    }
}

export const stagger = {
    open: (i) => ({
        y: "0",
        opacity: 1,
        transition: {...transition2, delay: (i) * 0.06}
    }),
    closed: (i) => ({
        y: "100%",
        opacity: 0,
        transition: {...transition2, delay: (3 - i) * 0.04}
    }),
}