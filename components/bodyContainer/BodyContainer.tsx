import { BodyContainerTypes } from "@/types";
import { SecondaryButton } from "..";
import Image from "next/image";
import styles from "./BodyContainer.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

export default function BodyContainer({
  header,
  body,
  image,
  shouldReverse,
  hasButton,
}: BodyContainerTypes) {
  const handleStartLearning = () => {};

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className={`${styles.wrapper} ${
        shouldReverse ? styles.wrapperReverse : null
      }`}
    >
      <div>
        <h3
          className={`${styles.header} ${myFont.className}`}
          data-aos={shouldReverse ? "fade-left" : "fade-right"}
          data-aos-delay="300"
        >
          {header}
        </h3>
        <p
          className={styles.body}
          data-aos={shouldReverse ? "fade-left" : "fade-right"}
          data-aos-delay="400"
        >
          {body}
        </p>
        {hasButton && (
          <div className={styles.buttonWrapper}>
            <SecondaryButton
              text="Start Learning"
              onClick={handleStartLearning}
            />
          </div>
        )}
      </div>

      <div
        className={styles.imageWrapper}
        data-aos={!shouldReverse ? "zoom-in-left" : "zoom-in-right"}
        data-aos-delay="100"
      >
        <Image
          src={image}
          alt="container image"
          fill
          className={styles.image}
        />
      </div>

      {hasButton && (
        <div className={styles.buttonWrapperBottom}>
          <SecondaryButton
            text="Start Learning"
            onClick={handleStartLearning}
          />
        </div>
      )}
    </div>
  );
}
