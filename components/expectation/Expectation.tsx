import Image from "next/image";
import styles from "./Expectation.module.css";
import localFont from "next/font/local";
import { useState } from "react";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

const expectations = [
  {
    heading: "Multiple HD Angle",
    body: "See what the instructor sees. Multiple HD angles - so it feels like you're in the same room.",
    icon: "/play.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Modern Styles",
    body: "See what the instructor sees. Multiple HD angles - so it feels like you're in the same room.",
    icon: "/guitar_small.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Interactive Tabs",
    body: "See what the instructor sees. Multiple HD angles - so it feels like you're in the same room.",
    icon: "/music_list.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Track your progress",
    body: "See what the instructor sees. Multiple HD angles - so it feels like you're in the same room.",
    icon: "/user_play.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Personalized Feedback",
    body: "See what the instructor sees. Multiple HD angles - so it feels like you're in the same room.",
    icon: "/people.svg",
    image: "/big_guitar.png",
  },
];

export default function Expectation() {
  const [currentItem, setCurrentItem] = useState(expectations[0]);
  const [isCurrent, setIsCurrent] = useState(false);

  return (
    <section className={styles.expectation}>
      <div className={styles.expectationTextWrapper}>
        <h3
          className={`${styles.expectationHeading} ${myFont.className}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          What to expect from each lesson
        </h3>
        <p
          className={styles.expectationBody}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          ThinkMusic&#39;s learning features are designed to give you a guided,
          structured approach so you can make lasting progress.
        </p>
      </div>

      <div className={styles.expectationMain}>
        <div className={styles.expectationBoxWrapper}>
          {expectations.map((expectation, index) => (
            <div
              className={`${styles.expectationBoxInner} ${
                currentItem.heading === expectation.heading
                  ? styles.expectationBoxInnerCurrent
                  : ""
              }`}
              key={index}
            >
              <input
                type="checkbox"
                className={styles.expectationCheck}
                id={expectation.heading}
                checked={
                  currentItem.heading === expectation.heading && !isCurrent
                }
                onChange={() => {}}
              />
              <label
                htmlFor={expectation.heading}
                className={
                  expectation.heading === currentItem.heading
                    ? `${styles.expectationBox} ${styles.expectationBoxCurrent}`
                    : styles.expectationBox
                }
                onClick={() => {
                  if (expectation.heading === currentItem.heading)
                    setIsCurrent((prev) => !prev);
                  else setIsCurrent(false);

                  setCurrentItem(expectation);
                }}
              >
                <Image
                  src={expectation.icon}
                  alt="expecttion icon"
                  width={48}
                  height={48}
                />
                <h3
                  className={`${myFont.className} ${styles.expectationHeader}`}
                >
                  {expectation.heading}
                </h3>
              </label>

              <div className={styles.expectationDetailsInner}>
                <h3
                  className={`${myFont.className} ${styles.expectationHeaderBody}`}
                >
                  {currentItem.heading}
                </h3>
                <p className={styles.expectationBodyText}>{currentItem.body}</p>
                <div className={styles.expectationImageWrapper}>
                  <Image
                    src={currentItem.image}
                    alt="expection image"
                    fill
                    className={styles.expectationImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.expectationDetails}>
          <h3 className={`${myFont.className} ${styles.expectationHeaderBody}`}>
            {currentItem.heading}
          </h3>
          <p className={styles.expectationBodyText}>{currentItem.body}</p>
          <div className={styles.expectationImageWrapper}>
            <Image
              src={currentItem.image}
              alt="expection image"
              fill
              className={styles.expectationImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
