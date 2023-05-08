"use client";

import { CardTypes } from "@/types";
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import {
  Availability,
  BodyContainer,
  Card,
  Footer,
  FrequentlyAskedQuestions,
  Header,
  Hero,
  MainButton,
  SecondaryButton,
} from "@/components";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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
    image: "/image 747.png",
  },
  {
    header: "Get access to music gigs and earn money",
    body: "Yousician makes learning to play an instrument fun and easy, no matter your skill level. Follow lesson plans created by real music teachers, learn fast with interactive tutorials, and stay motivated with goals and progress tracking. Our award-winning technology listens to you play and gives instant feedback on your accuracy and timing. You always know when you're hitting the right notes.",
    image: "/image 746 (3).png",
  },
];

const expectations = [
  {
    heading: "Multiple HD Angle",
    body: "See what the instructor sees. Multiple HD angles – so it feels like you're in the same room.",
    icon: "/play.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Modern Styles",
    body: "See what the instructor sees. Multiple HD angles – so it feels like you're in the same room.",
    icon: "/guitar_small.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Interactive Tabs",
    body: "See what the instructor sees. Multiple HD angles – so it feels like you're in the same room.",
    icon: "/music_list.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Track your progress",
    body: "See what the instructor sees. Multiple HD angles – so it feels like you're in the same room.",
    icon: "/user_play.svg",
    image: "/big_guitar.png",
  },
  {
    heading: "Personalized Feedback",
    body: "See what the instructor sees. Multiple HD angles – so it feels like you're in the same room.",
    icon: "/people.svg",
    image: "/big_guitar.png",
  },
];

const courses = [
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
];

const instructors = [
  "/image 741 (1).png",
  "/image 741 (2).png",
  "/image 741 (3).png",
  "/image 741 (1).png",
  "/image 741 (2).png",
  "/image 741 (3).png",
];

const allPlans = [
  {
    type: "Monthly",
    access: "All-access to everything per instrument selected",
    price: "N2,000",
    items: [
      "Unlimited access",
      "Guided learning",
      "Progress tracking",
      "New releases every Month",
      "Interactive TAB",
      "Multiple HD angles",
      "Supportive community",
      "Available for mobile, tablet and desktop",
    ],
  },
  {
    type: "Quarterly",
    access: "All-access to everything per instrument selected",
    price: "N2,000",
    items: [
      "Unlimited access",
      "Guided learning",
      "Progress tracking",
      "New releases every Month",
      "Interactive TAB",
      "Multiple HD angles",
      "Supportive community",
      "Available for mobile, tablet and desktop",
    ],
  },
  {
    type: "Annually",
    access: "All-access to everything per instrument selected",
    price: "N2,000",
    items: [
      "Unlimited access",
      "Guided learning",
      "Progress tracking",
      "New releases every Month",
      "Interactive TAB",
      "Multiple HD angles",
      "Supportive community",
      "Available for mobile, tablet and desktop",
    ],
  },
];

export default function Welcome() {
  const [currentExpectation, setCurrentExpectation] = useState(expectations[0]);

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
            Whether you're just starting out or you already have some skills –
            we've got the right learning pathway for you.
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

      <div className={styles.offer}>
        <div className={styles.offerTextWrapper}>
          <div className={styles.offerHeadingWrapper}>
            <h3 className={`${styles.offerHeading} ${myFont.className}`}>
              One membership.
            </h3>
            <h3
              className={`${styles.offerHeading} ${styles.offerHeading2} ${myFont.className}`}
            >
              Access to every course.
            </h3>
          </div>

          <p className={styles.offerBody}>
            Explore in-depth courses designed by experts
          </p>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className={styles.coursesWrapper}>
                <Image
                  src={course}
                  alt="course image"
                  fill
                  className={styles.coursesWrapperImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.allCoursesLinkWrapper}>
          <Link href="/all-courses" className={styles.allCoursesLink}>
            View all Courses
          </Link>
        </div>
      </div>

      <div className={styles.expectation}>
        <div className={styles.expectationTextWrapper}>
          <h3 className={`${styles.expectationHeading} ${myFont.className}`}>
            What to expect from each lesson
          </h3>
          <p className={styles.expectationBody}>
            Pickup Music's learning features are designed to give you a guided,
            structured approach so you can make lasting progress.
          </p>
        </div>

        <div className={styles.expectationMain}>
          <div className={styles.expectationBoxWrapper}>
            {expectations.map((expectation, index) => (
              <div
                key={index}
                className={
                  expectation.heading === currentExpectation.heading
                    ? `${styles.expectationBox} ${styles.expectationBoxCurrent}`
                    : styles.expectationBox
                }
                onClick={() => setCurrentExpectation(expectation)}
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
            ))}
          </div>

          <div className={styles.expectationDetails}>
            <h3
              className={`${myFont.className} ${styles.expectationHeaderBody}`}
            >
              {currentExpectation.heading}
            </h3>
            <p className={styles.expectationBodyText}>
              {currentExpectation.body}
            </p>
            <div className={styles.expectationImageWrapper}>
              <Image
                src={currentExpectation.image}
                alt="expection image"
                fill
                className={styles.expectationImage}
              />
            </div>
          </div>
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
            hasButton={false}
          />
        ))}
      </div>

      <div className={styles.generation}>
        <div className={styles.generationTextWrapper}>
          <h3 className={`${styles.generationHeading} ${myFont.className}`}>
            Learn from a new <br /> generation of Musicians
          </h3>
          <p className={styles.generationBody}>
            Here are just a few of our incredible instructors.
          </p>
        </div>

        <div className={styles.instructors}>
          {instructors.map((instructor, index) => (
            <Image
              key={index}
              src={instructor}
              alt="instructor image"
              width={377}
              height={590}
            />
          ))}
        </div>
      </div>

      <div className={styles.plan}>
        <div className={styles.planTextWrapper}>
          <h3 className={`${styles.planHeading} ${myFont.className}`}>
            Choose a plan that's <br />
            right for you
          </h3>
          <p className={styles.planBody}>
            Here are just a few of our incredible instructors.
          </p>
        </div>

        <div className={styles.allPlans}>
          {allPlans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.planButton} ${myFont.className} ${
                !index ? styles.currentPlanButton : ""
              }`}
            >
              {plan.type}
            </div>
          ))}
        </div>

        <div className={styles.planDetails}>
          <div className={styles.planDetailsTop}>
            <div className={styles.planSnippet}>
              <h3 className={`${styles.planHeading} ${myFont.className}`}>
                {allPlans[0].type} Plan
              </h3>
              <p className={styles.planText}>{allPlans[0].access}</p>
              <div className={styles.planPriceWrapper}>
                <span className={`${styles.planPrice} ${myFont.className}`}>
                  {allPlans[0].price}/
                </span>
                <span
                  className={`${styles.planPriceAccent} ${myFont.className}`}
                >
                  mo
                </span>
              </div>

              <MainButton onClick={() => {}} text="Start Learning" />
            </div>
          </div>

          <div className={styles.planInfo}>
            <h3 className={`${styles.planInfoHeading} ${myFont.className}`}>
              {allPlans[0].type} plan includes:
            </h3>

            <div className={styles.items}>
              {allPlans[0].items.map((item) => (
                <div key={item} className={styles.planItem}>
                  <Image
                    src="/check-circle.svg"
                    alt="benefits"
                    width={24}
                    height={24}
                  />
                  <p className={styles.playList}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Availability />
      <FrequentlyAskedQuestions />
      <Footer />
    </div>
  );
}
