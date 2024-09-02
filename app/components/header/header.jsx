import styles from "./header.module.css"
import logo from "@/public/images/s7logo.png"
import Image from "next/image"
import Nav from "../nav/nav"
import { useState } from "react"

export default function header() {

    const [isActive, setIsActive] = useState(false)

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Image src={logo}/>
                <p onClick={() => {setIsActive(!isActive)}}>Menu</p>
            </div>
            <Nav isActive={isActive} setIsActive={setIsActive}/>
        </div>

    )
}