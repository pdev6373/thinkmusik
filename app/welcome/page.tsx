"use client";
import AOS from "aos";
import "aos/dist/aos.css";

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
import styles from "./page.module.css";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.welcome}>
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {!isNavOpen ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
