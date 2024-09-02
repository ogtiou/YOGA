import styles from "./footer.module.css"
import Facebook from "@/public/svg/facebook"
import Instagram from "@/public/svg/instagram.svg"

export default function footer() {
  return (

    <div className={styles.footer}>
        <div className={styles.map}>
            <iframe className={styles.mapEdit}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d853.5116377475606!2d24.878002222673185!3d60.148752303605015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920be8fe13e999%3A0x8532842a7ffbcae5!2sYOGA%20S7!5e0!3m2!1sen!2sfi!4v1725286700101!5m2!1sen!2sfi"
                style={{ border: 0 }} // Corrected to JSX object format
                allowFullScreen // JSX uses camelCase for props
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className={styles.bottom}>
            <div className={styles.left}>
                <a href="https://www.facebook.com/share/CjcB12YwpKuSpZua/?mibextid=LQQJ4d" target="blank">
                    <Facebook />
                    <p>Facebook</p>
                </a>
            </div>
            <p className={styles.rights}>© 2024, © YOGAS7, ® ALL RIGHTS RESERVED</p>
            <div className={styles.right}>
                <a href="https://www.instagram.com/yogas7.fi/?igsh=NmpjY2psY3JhcWlw" target="blank">
                    <Instagram className={styles.insta}/>
                    <p>Instagram</p>
                </a>
            </div>
        </div>
    </div>

  )
}
