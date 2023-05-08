import { Fragment } from "react";
import styles from "./Steps.module.css";
import localFont from "next/font/local";
import Card from "../card/Card";
import { CardTypes } from "@/types";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

const cardDetails: CardTypes[] = [
  {
    header: "Beginner",
    body: "ThinkMusik offers you unlimited access to all instrument. This will give you room to explore and see which musical instrument matches your interest",
  },
  {
    header: "Intermediate",
    body: "ThinkMusik offers you unlimited access to all instrument. This will give you room to explore and see which musical instrument matches your interest",
  },
  {
    header: "Advance",
    body: "ThinkMusik offers you unlimited access to all instrument. This will give you room to explore and see which musical instrument matches your interest",
  },
];

export default function Steps() {
  return (
    <section className={styles.step}>
      <div className={styles.stepTextWrapper}>
        <h3 className={`${styles.stepHeading} ${myFont.className}`}>
          Step-by-step learning
        </h3>
        <p className={styles.stepBody}>
          Whether you&#39;re just starting out or you already have some skills -
          we&#39;ve <br /> got the right learning pathway for you.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        {cardDetails.map((details, index) => (
          <Fragment key={index}>
            <Card header={details.header} body={details.body} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}