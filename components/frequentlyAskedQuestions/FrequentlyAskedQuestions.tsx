"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FrequentlyAskedQuestions.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });
const myFont2 = localFont({ src: "../../fonts/GTWalsheimPro-Medium.woff2" });

const allQuestions = [
  {
    question: "Is Thinkmusik right for me?",
    answers: [
      "You'll start with Pickup Music's introductory program Guitar for Complete Beginners. Over three weeks, we break down everything from simple chords and melodies to rhythm and lead playing. By the end of the program, you'll be able to play any simple pop or rock song (and even write your own).",
      "Everything! You'll have unlimited access to every lesson on Pickup Music from every instructor. That means every Bootcamp, Master Class, SongSquad, Licks Package, 5-Minute Lesson... we could go on, but you get the idea. It's an all-inclusive membership for one affordable price.",
      "Our lessons take you beyond the basics. Most online guitar lessons are good at teaching new guitarists the easy stuff. Pickup Music goes beyond that to help advanced-beginners and intermediate guitarists break through to the next level.",
    ],
  },
  {
    question: "What makes Pickup Music better than other guitar lesson sites?",
    answers: [
      "You'll start with Pickup Music's introductory program Guitar for Complete Beginners. Over three weeks, we break down everything from simple chords and melodies to rhythm and lead playing. By the end of the program, you'll be able to play any simple pop or rock song (and even write your own).",
      "Everything! You'll have unlimited access to every lesson on Pickup Music from every instructor. That means every Bootcamp, Master Class, SongSquad, Licks Package, 5-Minute Lesson... we could go on, but you get the idea. It's an all-inclusive membership for one affordable price.",
      "Our lessons take you beyond the basics. Most online guitar lessons are good at teaching new guitarists the easy stuff. Pickup Music goes beyond that to help advanced-beginners and intermediate guitarists break through to the next level.",
    ],
  },
  {
    question: "What's included in my Pickup Music membership?",
    answers: [
      "You'll start with Pickup Music's introductory program Guitar for Complete Beginners. Over three weeks, we break down everything from simple chords and melodies to rhythm and lead playing. By the end of the program, you'll be able to play any simple pop or rock song (and even write your own).",
      "Everything! You'll have unlimited access to every lesson on Pickup Music from every instructor. That means every Bootcamp, Master Class, SongSquad, Licks Package, 5-Minute Lesson... we could go on, but you get the idea. It's an all-inclusive membership for one affordable price.",
      "Our lessons take you beyond the basics. Most online guitar lessons are good at teaching new guitarists the easy stuff. Pickup Music goes beyond that to help advanced-beginners and intermediate guitarists break through to the next level.",
    ],
  },
  {
    question:
      "How long are the lessons? How long will it take me to complete them?",
    answers: [
      "You'll start with Pickup Music's introductory program Guitar for Complete Beginners. Over three weeks, we break down everything from simple chords and melodies to rhythm and lead playing. By the end of the program, you'll be able to play any simple pop or rock song (and even write your own).",
      "Everything! You'll have unlimited access to every lesson on Pickup Music from every instructor. That means every Bootcamp, Master Class, SongSquad, Licks Package, 5-Minute Lesson... we could go on, but you get the idea. It's an all-inclusive membership for one affordable price.",
      "Our lessons take you beyond the basics. Most online guitar lessons are good at teaching new guitarists the easy stuff. Pickup Music goes beyond that to help advanced-beginners and intermediate guitarists break through to the next level.",
    ],
  },
  {
    question:
      "I'm brand new to guitar. Is Pickup Music the right choice for me?",
    answers: [
      "You'll start with Pickup Music's introductory program Guitar for Complete Beginners. Over three weeks, we break down everything from simple chords and melodies to rhythm and lead playing. By the end of the program, you'll be able to play any simple pop or rock song (and even write your own).",
      "Everything! You'll have unlimited access to every lesson on Pickup Music from every instructor. That means every Bootcamp, Master Class, SongSquad, Licks Package, 5-Minute Lesson... we could go on, but you get the idea. It's an all-inclusive membership for one affordable price.",
      "Our lessons take you beyond the basics. Most online guitar lessons are good at teaching new guitarists the easy stuff. Pickup Music goes beyond that to help advanced-beginners and intermediate guitarists break through to the next level.",
    ],
  },
];

const actions = ["Getting Started", "Pricing & plans", "Billing"];

export default function FrequentlyAskedQuestions() {
  const [currentAction, setCurrentAction] = useState("Getting Started");
  const [currentQuestion, setCurrentQuestion] = useState("");

  return (
    <section className={styles.questions}>
      <div className={styles.questionsInner}>
        <div className={styles.questionsTextWrapper}>
          <h3
            className={`${styles.questionsHeading} ${myFont.className}`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Frequently Asked Questions
          </h3>
          <p
            className={styles.questionsBody}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            If your questions aren&#39;t answered below, please chat with us.
          </p>
        </div>

        <div className={styles.actions}>
          {actions.map((action) => (
            <button
              key={action}
              className={`${
                currentAction === action ? styles.buttonCurrent : styles.button
              } ${myFont2.className}
              `}
              onClick={() => setCurrentAction(action)}
            >
              {action}
            </button>
          ))}
        </div>

        <div className={styles.questionWrapper}>
          {allQuestions.map((question) => (
            <div
              className={styles.questionInnerWrapper}
              key={question.question}
            >
              <input
                type="checkbox"
                id={question.question}
                className={styles.questionInput}
                checked={question.question === currentQuestion}
                onChange={() => {}}
              />
              <label
                htmlFor={question.question}
                className={styles.question}
                onClick={() =>
                  setCurrentQuestion(
                    currentQuestion === question.question
                      ? ""
                      : question.question
                  )
                }
              >
                <p className={styles.questionText}>{question.question}</p>
                <Image
                  src="/Right 24px.svg"
                  alt="dropdown"
                  width={24}
                  height={24}
                  className={styles.dropDownIcon}
                />
              </label>

              <div className={styles.answers}>
                {question.answers.map((answer, index) => (
                  <p className={styles.answer} key={index}>
                    {answer}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
