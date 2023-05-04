"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { BodyTypes } from "@/types";
import { BodyContainer, MainButton } from "..";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-UltraBold.woff2" });

interface detailsType {
  icon: string;
  text: string;
}

const heroImages: string[] = [
  "/hero_image1.png",
  "/hero_image2.png",
  "/hero_image3.png",
];

const details: detailsType[] = [
  {
    icon: "video.svg",
    text: "600+ lessons",
  },
  {
    icon: "/user.svg",
    text: "20+ Instructors",
  },
  {
    icon: "symbol.svg",
    text: "24/7 Support",
  },
];

const body: BodyTypes[] = [
  {
    header: "Learn to play the Piano",
    body: "Yousician makes learning to play an instrument fun and easy, no matter your skill level. Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking. Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you’re hitting the right notes.",
    image: "/body_image1.png",
  },
  {
    header: "Learn to play the Guitar",
    body: "Yousician makes learning to play an instrument fun and easy, no matter your skill level. Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking. Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you’re hitting the right notes.",
    image: "/body_image2.png",
  },
  {
    header: "Learn to play the Bass",
    body: "Yousician makes learning to play an instrument fun and easy, no matter your skill level. Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking. Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you’re hitting the right notes.",
    image: "/body_image3.png",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTop}>
        <h2 className={`${styles.header} ${myFont.className}`}>
          Learn, Master
          <p className={`${styles.headerAccent} ${myFont.className}`}>Guitar</p>
        </h2>

        <p className={styles.text}>
          Perfect Your Musical Skills Anytime, Anywhere with Expert Guidance and
          Interactive Lessons and Become a Skilled Musician
        </p>
      </div>

      <div className={styles.heroImagesWrapper}>
        {heroImages.map((image, index) => (
          <div className={styles.heroImageWrapper} key={index}>
            {index === 1 && (
              <div className={styles.heroButton}>
                <MainButton
                  onClick={() => {}}
                  text="Get Started"
                  type="large"
                />
              </div>
            )}
            <Image
              src={image}
              alt="hero image"
              fill
              className={styles.heroImage}
            />
          </div>
        ))}
      </div>

      <div className={styles.details}>
        <div className={styles.detailsHeader}>
          <p className={`${styles.mostLoved} ${myFont.className}`}>
            Most loved music <br />
            learning platform
          </p>
          <Image
            src="most_loved.svg"
            alt="most loved image"
            // width={64}
            // height={64}
            width={48}
            height={48}
          />
        </div>

        <div className={styles.detailsWrapper}>
          {details.map((detail, index) => (
            <div
              key={index}
              className={
                index === 1
                  ? `${styles.detailsItem} ${styles.detailsItemMiddle}`
                  : styles.detailsItem
              }
            >
              <Image
                src={detail.icon}
                alt="details icon"
                width={45}
                height={45}
              />
              <p className={styles.detailsText}>{detail.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bodyContainerWrapper}>
        {body.map((item, index) => (
          <BodyContainer
            key={index}
            body={item.body}
            header={item.header}
            image={item.image}
            shouldReverse={!!(index % 2)}
            hasButton={true}
          />
        ))}
      </div>
    </section>
  );
}
