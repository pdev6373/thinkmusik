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
      className={`${styles.wrapper} ${
        shouldReverse ? styles.wrapperReverse : null
      }`}
    >
      <div>
        <h3 className={`${styles.header} ${myFont.className}`}>{header}</h3>
        <p className={styles.body}>{body}</p>
        {hasButton && (
          <SecondaryButton
            text="Start Learning"
            onClick={handleStartLearning}
          />
        )}
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt="container image"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
}
