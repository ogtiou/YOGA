"use client"
import styles from "./home.module.css"
import Link from "next/link"
import Image from "next/image"
import img1 from "../public/images/bali 2.png"
import img2 from "../public/images/img1.jpg"
import img3 from "../public/images/img3.png"
import { useLenisContext } from "./lenis"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"

export default function home() {
    return(
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.page1}>
                <div className={styles.enclosure1}>
                    <p>yogas7</p>
                    <p>studio</p>
                    <div className={styles.buttonEnclosure}>
                        <a href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank">Meet your instructor</a>
                    </div>
                </div>
                <div className={styles.maksu}>
                    <p>Studiolla käy maksuvälineenä myös</p>
                    <p>ePassi, Edenred, Smartum, Liikunta setelit</p>
                </div>
            </div>
            <div className={styles.page2}>
                <div className={styles.left}>
                    <div className={styles.innerLeft}>
                        <p>Moikka,</p>
                        <p>Olen YOGA S7 yrityksen perustaja. Tarjoan hyvinvointia päästä varpaisin. 
                            Elokuussa auennut jooga, pilates ja hyvinvoinnin studio Lauttasaaressa 
                            Särkiniementie 5. <br /><br /> Tule sellaisena kuin olet rauhaisaan olohuoneeseen, 
                            kun tarvitset hengähdystaukoa arjen keskellä tai hetken aikaa jakaa ajatuksia. 
                            One moment can change a day. One day can change a life. One life can change 
                            the world.
                        </p>
                        <p>-Buddha-</p>
                        <a href="https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes" target="blank">Varaa</a>
                    </div>
                </div>
                <div className={styles.right}>
                    <Image className={styles.image1} src={img1}/>
                </div>
            </div>
            <div className={styles.page3}>
                <div className={styles.upperText}>
                    <p>studio</p>
                </div>
                <div className={styles.imgWrapper}>
                    <Image src={img2}/>
                    <Image src={img3}/>
                </div>
                <div className={styles.bottomText}>
                    <p>Studiolla on kaikki tarvittavat välineet</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}