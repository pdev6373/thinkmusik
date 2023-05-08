"use client";

import { CardTypes } from "@/types";
import { Fragment } from "react";
import {
  Availability,
  BodyContainer,
  Card,
  Courses,
  Expectation,
  Footer,
  FrequentlyAskedQuestions,
  Header,
  Hero,
  Instructors,
  Plans,
} from "@/components";
import Image from "next/image";
import styles from "./page.module.css";
import localFont from "next/font/local";

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

const body = [
  {
    header: "Build connections right from your practice room",
    body: "Yousician makes learning to play an instrument fun and easy, no matter your skill level. Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking. Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you're hitting the right notes.",
    image: "/connection1.png",
  },
  {
    header: "Get access to music gigs and earn money",
    body: "Yousician makes learning to play an instrument fun and easy, no matter your skill level. Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking. Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you're hitting the right notes.",
    image: "/connection2.png",
  },
];

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <Header />
      <Hero />
      <div className={styles.howItWorks}>
        <div className={styles.howItWorksTextWrapper}>
          <h3 className={`${styles.howItWorksHeading} ${myFont.className}`}>
            Build confidence in playing music with ThinkMusik
          </h3>
          <p className={styles.howItWorksBody}>
            Perfect Your Musical Skills Anytime, Anywhere with Expert Guidance
            and Interactive Lessons and Become a Skilled Musician
          </p>
        </div>

        <div className={styles.confidenceImageWrapper}>
          <Image
            src="/confidence.png"
            alt="confidence image"
            fill
            className={styles.confidenceImage}
          />
        </div>
      </div>

      <div className={styles.step}>
        <div className={styles.stepTextWrapper}>
          <h3 className={`${styles.stepHeading} ${myFont.className}`}>
            Step-by-step learning
          </h3>
          <p className={styles.stepBody}>
            Whether you&#39;re just starting out or you already have some skills
            - we&#39;ve got the right learning pathway for you.
          </p>
        </div>

        <div className={styles.cardWrapper}>
          {cardDetails.map((details, index) => (
            <Fragment key={index}>
              <Card header={details.header} body={details.body} />
            </Fragment>
          ))}
        </div>
      </div>

      <Courses />
      <Expectation />
      <div className={styles.bodyContainerWrapper}>
        {body.map((item, index) => (
          <BodyContainer
            key={index}
            body={item.body}
            header={item.header}
            image={item.image}
            shouldReverse={!!(index % 2)}
            hasButton={false}
          />
        ))}
      </div>
      <Instructors />
      <Plans />
      <Availability />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}
