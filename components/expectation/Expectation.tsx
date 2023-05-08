import Image from "next/image";
import styles from "./Expectation.module.css";
import localFont from "next/font/local";

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
  return (
    <section className={styles.expectation}>
      <div className={styles.expectationTextWrapper}>
        <h3 className={`${styles.expectationHeading} ${myFont.className}`}>
          What to expect from each lesson
        </h3>
        <p className={styles.expectationBody}>
          Pickup Music&#39;s learning features are designed to give you a
          guided, structured approach so you can make lasting progress.
        </p>
      </div>

      <div className={styles.expectationMain}>
        <div className={styles.expectationBoxWrapper}>
          {expectations.map((expectation, index) => (
            <div
              className={!index ? styles.expectationBoxInner : ""}
              key={index}
            >
              <div
                //   className={
                //     expectation.heading === currentExpectation.heading
                //       ? `${styles.expectationBox} ${styles.expectationBoxCurrent}`
                //       : styles.expectationBox
                //   }
                className={
                  index
                    ? styles.expectationBox
                    : `${styles.expectationBox} ${styles.expectationBoxCurrent}`
                }
                //   onClick={() => setCurrentExpectation(expectation)}
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
              </div>

              {!index && (
                <div className={styles.expectationDetailsInner}>
                  <h3
                    className={`${myFont.className} ${styles.expectationHeaderBody}`}
                  >
                    {expectations[0].heading}
                  </h3>
                  <p className={styles.expectationBodyText}>
                    {expectations[0].body}
                  </p>
                  <div className={styles.expectationImageWrapper}>
                    <Image
                      src={expectations[0].image}
                      alt="expection image"
                      fill
                      className={styles.expectationImage}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.expectationDetails}>
          <h3 className={`${myFont.className} ${styles.expectationHeaderBody}`}>
            {expectations[0].heading}
          </h3>
          <p className={styles.expectationBodyText}>{expectations[0].body}</p>
          <div className={styles.expectationImageWrapper}>
            <Image
              src={expectations[0].image}
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
