import Image from "next/image";
import styles from "./HowItWorks.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.howItWorksTextWrapper}>
        <h3
          className={`${styles.howItWorksHeading} ${myFont.className}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Build confidence in playing music with ThinkMusik
        </h3>
        <p
          className={styles.howItWorksBody}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Perfect Your Musical Skills Anytime, Anywhere with Expert Guidance and
          Interactive Lessons and Become a Skilled Musician
        </p>
      </div>

      <div className={styles.confidenceImageWrapper} data-aos="zoom-in">
        <Image
          src="/confidence.png"
          alt="confidence image"
          fill
          className={styles.confidenceImage}
        />
      </div>
    </section>
  );
}
