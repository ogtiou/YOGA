import styles from "./nav.module.css"
import Link from "next/link"
import { motion } from "framer-motion"
import { stagger, overlay } from "@/app/anim"

export default function nav({ isActive, setIsActive }) {

    const links = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About',
            href: 'https://3dmagazine.aflip.in/e585a148c9.html'
        },
        {
            title: 'Schedule',
            href: 'https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes'
        },
        {
            title: 'Location',
            href: 'https://maps.app.goo.gl/iLJzx2ENozE6tWW6A'
        },
    ]

  return (
    <motion.div variants={overlay} initial="closed" animate={!isActive ? "closed" : "open"} className={styles.wrapper}>
        <div className={styles.overlay}>
            <div className={styles.ul}>
                {links.map((link, index) => {
                    const {title, href} = link
                    return(
                        <Link href={href} key={`l_${index}`}>
                            <div className={styles.mask}>
                                <motion.p onClick={() => {setIsActive(!isActive)}} custom={index} variants={stagger} initial="closed" animate={!isActive ? "closed" : "open"}>{title}</motion.p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    </motion.div>
  )
}
