"use client";

import React, { Fragment, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import {
  BodyContainer,
  Card,
  Header,
  Hero,
  MainButton,
  SecondaryButton,
} from "@/components";
import styles from "./page.module.css";

import localFont from "next/font/local";
import Image from "next/image";
import { CardTypes } from "@/types";
import Link from "next/link";

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

const allQuestions = [
  "Is Thinkmusik right for me?",
  "What makes Pickup Music better than other guitar lesson sites?",
  "What's included in my Pickup Music membership?",
  "How long are the lessons? How long will it take me to complete them?",
  "I'm brand new to guitar. Is Pickup Music the right choice for me?",
];

const footerItems = [
  {
    title: "Instrument",
    content: ["Piano", "Guitar", "Bass"],
  },
  {
    title: "Level",
    content: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    title: "Music Tools",
    content: ["Tuner", "Metonome", "Tempo changer", "Easy score"],
  },
  {
    title: "Resources",
    content: ["About Us", "FAQs", "Blogs", "Contact Us"],
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
            Whether you&#39;re just starting out or you already have some skills
            – we&#39;ve got the right learning pathway for you.
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
            Pickup Music&#39;s learning features are designed to give you a
            guided, structured approach so you can make lasting progress.
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
            Choose a plan that&#39;s <br />
            right for you
          </h3>
          <p className={styles.planBody}>
            Here are just a few of our incredible instructors.
          </p>
        </div>

        <div className={styles.allPlans}>
          {allPlans.map((plan, index) => (
            <div
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
              <p className={`${styles.planPrice} ${myFont.className}`}>
                {allPlans[0].price}/
                <p className={`${styles.planPriceAccent} ${myFont.className}`}>
                  mo
                </p>
              </p>

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

      <div className={styles.callToActionOuter}>
        <div className={styles.callToAction}>
          <div className={styles.callToActionInner}>
            <div className={styles.laptopWrapper}>
              <Image
                src="/laptop.png"
                alt="laptop"
                fill
                className={styles.laptop}
              />
            </div>

            <div className={styles.availability}>
              <h3
                className={`${styles.availabilityHeading} ${myFont.className}`}
              >
                Available for all devices: <br />
                Web, Mobile, Tablet
              </h3>
              <p className={styles.availabilityText}>
                For Mobile and Tablet you can download via playstore or Appstore
                below
              </p>
              <div className={styles.platforms}>
                <Image src="/google.svg" alt="google" width={176} height={54} />
                <Image src="/apple.svg" alt="google" width={166} height={54} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.questions}>
        <div className={styles.questionsInner}>
          <div className={styles.questionsTextWrapper}>
            <h3 className={`${styles.questionsHeading} ${myFont.className}`}>
              Frequently Asked Questions
            </h3>
            <p className={styles.questionsBody}>
              If your questions aren&#39;t answered below, please chat with us.
            </p>
          </div>

          <div className={styles.actions}>
            <MainButton
              onClick={() => {}}
              text="Getting Started"
              type="large"
            />
            <SecondaryButton
              onClick={() => {}}
              text="Pricing & plans"
              isBlack={true}
            />
            <SecondaryButton onClick={() => {}} text="Billing" isBlack={true} />
          </div>

          <div className={styles.questionWrapper}>
            {allQuestions.map((question) => (
              <div className={styles.question}>
                <p className={styles.questionText}>{question}</p>
                <Image
                  src="/Right 24px.svg"
                  alt="dropdown"
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerNav}>
          <div className={styles.footerNavTop}>
            {/* <Image src="/logo_light.svg" alt="logo" width={202} height={51} /> */}
            <Image src="/logo.svg" alt="logo" width={158} height={52} />
            <p className={styles.footerNavTopText}>
              The fastest and fun way to learn and get better at playing any
              instrument
            </p>

            <div className={styles.footerCtaIcons}>
              <Image src="/Group 145.png" alt="image" width={155} height={46} />
              <Image src="/Group 146.png" alt="image" width={155} height={46} />
            </div>
          </div>

          <div className={styles.footerNavWrapper}>
            {footerItems.map((item) => {
              return (
                <div>
                  <h3 className={`${styles.footerTitle} ${myFont.className}`}>
                    {item.title}
                  </h3>

                  <div className={styles.footerItemWrapper}>
                    {item.content.map((item) => (
                      <p className={styles.footerItem}>{item}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.terms}>
          <div className={styles.privacyWrapper}>
            <p className={styles.termsText}>Privacy</p>
            <p className={styles.termsText}>Terms</p>
          </div>

          <div className={styles.footerIconsWrapper}>
            <Image
              src="/social_icon4.svg"
              alt="social icon"
              width={24}
              height={24}
            />
            <Image
              src="/social_icon3.svg"
              alt="social icon"
              width={24}
              height={24}
            />
            <Image
              src="/social_icon2.svg"
              alt="social icon"
              width={24}
              height={24}
            />
            <Image
              src="/social_icon1.svg"
              alt="social icon"
              width={24}
              height={24}
            />
          </div>
        </div>

        <p className={styles.copyright}>© 2023 ThinkMusic Inc.</p>
      </footer>
    </div>
  );
}
