"use client";

import {
  Availability,
  BodyContainer,
  Courses,
  Expectation,
  Footer,
  FrequentlyAskedQuestions,
  Header,
  Hero,
  HowItWorks,
  Instructors,
  Plans,
  Steps,
} from "@/components";
import Image from "next/image";
import styles from "./page.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

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
      <HowItWorks />
      <Steps />
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
