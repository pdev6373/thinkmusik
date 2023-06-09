import Image from "next/image";
import styles from "./Availability.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

export default function Availability() {
  return (
    <section className={styles.callToActionOuter}>
      <div className={styles.callToAction}>
        <div className={styles.callToActionInner}>
          <div
            className={styles.laptopWrapper}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <Image
              src="/laptop.png"
              alt="laptop"
              fill
              className={styles.laptop}
            />
          </div>

          <div className={styles.availability}>
            <h3
              className={`${styles.availabilityHeading} ${myFont.className}`}
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Available for all devices: <br />
              Web, Mobile, Tablet
            </h3>
            <p
              className={styles.availabilityText}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              For Mobile and Tablet you can download via <br /> playstore or
              Appstore below
            </p>
            <div
              className={styles.platforms}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Image
                src="/google.svg"
                alt="google"
                fill
                className={styles.platformImg}
              />
              <Image
                src="/apple.svg"
                alt="google"
                fill
                className={styles.platformImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
