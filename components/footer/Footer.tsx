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
        <div
          className={styles.footerNavTop}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Image src="/logo_light.png" alt="logo" width={202} height={51} />
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
          {footerItems.map((item, index) => {
            return (
              <div
                key={item.title}
                className={styles.footerNavWrapperItem}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
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
        <div
          className={styles.privacyWrapper}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className={styles.termsText}>Privacy</p>
          <p className={styles.termsText}>Terms</p>
        </div>

        <div
          className={styles.footerIconsWrapper}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="https://facebook.com/people/ThinkMusikhq/100092090272031/"
            target="_blank"
          >
            <Image
              src="/social_icon4.svg"
              alt="social icon"
              width={24}
              height={24}
              className={styles.footerIcons}
            />
          </a>
          <a href="https://twitter.com/thinkmusikhq" target="_blank">
            <Image
              src="/social_icon3.svg"
              alt="social icon"
              width={24}
              height={24}
              className={styles.footerIcons}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/thinkmusik/"
            target="_blank"
          >
            <Image
              src="/social_icon2.svg"
              alt="social icon"
              width={24}
              height={24}
              className={styles.footerIcons}
            />
          </a>

          <a href="https://www.instagram.com/thinkmusikhq/" target="_blank">
            <Image
              src="/social_icon1.svg"
              alt="social icon"
              width={24}
              height={24}
              className={styles.footerIcons}
            />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>© 2023 ThinkMusic Inc.</p>
    </footer>
  );
}
