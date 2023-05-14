import Image from "next/image";
import styles from "./HowItWorks.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.starWrapper}>
        <Image src="/star.svg" alt="circle" className={styles.star} fill />
      </div>

      <div className={styles.rocketWrapper}>
        <Image src="/rocket.svg" alt="circle" className={styles.rocket} fill />
      </div>
      <div className={styles.howItWorksTextWrapper}>
        <h3
          className={`${styles.howItWorksHeading} ${myFont.className}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Build confidence in playing <br /> music with ThinkMusik
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
        <button className={styles.confidenceButton}>
          <Image
            src="/material-symbols_play-circle-outline-rounded.svg"
            alt="image"
            fill
            className={styles.confidenceIcon}
          />
          <p>See How it works</p>
        </button>
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
