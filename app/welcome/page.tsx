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

import { Card, Header, Hero } from "@/components";
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

const courses = [
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
];

export default function page() {
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
            – we've got the right learning pathway for you.
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
        <div className={styles.stepTextWrapper}>
          <h3 className={`${styles.stepHeading} ${myFont.className}`}>
            What to expect from each lesson
          </h3>
          <p className={styles.stepBody}>
            Pickup Music's learning features are designed to give you a guided,
            structured approach so you can make lasting progress.
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
    </div>
  );
}
