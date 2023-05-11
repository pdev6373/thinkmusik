import Image from "next/image";
import styles from "./Instructors.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

const instructors = [
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
];

export default function Instructors() {
  return (
    <section className={styles.generation}>
      <div className={styles.generationTextWrapper}>
        <h3
          className={`${styles.generationHeading} ${myFont.className}`}
          // data-aos="fade-up"
          // data-aos-delay="100"
        >
          Learn from a new <br /> generation of Musicians
        </h3>
        <p
          className={styles.generationBody}
          // data-aos="fade-up"
          // data-aos-delay="200"
        >
          Here are just a few of our incredible instructors.
        </p>
      </div>

      <div className={styles.instructors}>
        {instructors.map((instructor, index) => (
          <div className={styles.instructorsWrapper} key={index}>
            <Image
              src={instructor}
              alt="instructor image"
              fill
              className={styles.instructor}
            />
          </div>
        ))}
      </div>

      <div className={styles.viewAllInstructorsButtonWrapper}>
        <button className={styles.viewAllInstructorsButton}>
          View all Instructors
        </button>
      </div>
    </section>
  );
}
