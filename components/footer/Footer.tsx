import Image from "next/image";
import styles from "./Footer.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

const footerItems = [
  {
    title: "Instrument",
    content: ["Piano", "Guitar", "Bass"],
  },
  {
    title: "Level",
    content: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    title: "Music Tools",
    content: ["Tuner", "Metonome", "Tempo changer", "Easy score"],
  },
  {
    title: "Resources",
    content: ["About Us", "FAQs", "Blogs", "Contact Us"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <div className={styles.footerNavTop}>
          {/* <Image src="/logo_light.svg" alt="logo" width={202} height={51} /> */}
          <Image src="/logo.svg" alt="logo" width={158} height={52} />
          <p className={styles.footerNavTopText}>
            The fastest and fun way to learn and get better at playing any
            instrument
          </p>

          <div className={styles.footerCtaIcons}>
            <div className={styles.footerCtaIcon}>
              <Image src="/apple_icon.svg" alt="image" width={25} height={25} />
              <div>
                <p className={styles.footerCtaIconHeader}>Available on</p>
                <p className={styles.footerCtaIconBody}>APP STORE</p>
              </div>
            </div>
            <div className={styles.footerCtaIcon}>
              <Image
                src="/google_play.svg"
                alt="image"
                width={18}
                height={20}
              />
              <div>
                <p className={styles.footerCtaIconHeader}>Available on</p>
                <p className={styles.footerCtaIconBody}>APP STORE</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerNavWrapper}>
          {footerItems.map((item) => {
            return (
              <div key={item.title} className={styles.footerNavWrapperItem}>
                <h3 className={`${styles.footerTitle} ${myFont.className}`}>
                  {item.title}
                </h3>

                <div className={styles.footerItemWrapper}>
                  {item.content.map((item) => (
                    <p className={styles.footerItem} key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.terms}>
        <div className={styles.privacyWrapper}>
          <p className={styles.termsText}>Privacy</p>
          <p className={styles.termsText}>Terms</p>
        </div>

        <div className={styles.footerIconsWrapper}>
          <Image
            src="/social_icon4.svg"
            alt="social icon"
            width={24}
            height={24}
            className={styles.footerIcons}
          />
          <Image
            src="/social_icon3.svg"
            alt="social icon"
            width={24}
            height={24}
            className={styles.footerIcons}
          />
          <Image
            src="/social_icon2.svg"
            alt="social icon"
            width={24}
            height={24}
            className={styles.footerIcons}
          />
          <Image
            src="/social_icon1.svg"
            alt="social icon"
            width={24}
            height={24}
            className={styles.footerIcons}
          />
        </div>
      </div>

      <p className={styles.copyright}>© 2023 ThinkMusic Inc.</p>
    </footer>
  );
}
