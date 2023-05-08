"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FrequentlyAskedQuestions.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });
const myFont2 = localFont({ src: "../../fonts/GTWalsheimPro-Medium.woff2" });

const allQuestions = [
  "Is Thinkmusik right for me?",
  "What makes Pickup Music better than other guitar lesson sites?",
  "What's included in my Pickup Music membership?",
  "How long are the lessons? How long will it take me to complete them?",
  "I'm brand new to guitar. Is Pickup Music the right choice for me?",
];

const actions = ["Getting Started", "Pricing & plans", "Billing"];

export default function FrequentlyAskedQuestions() {
  const [currentAction, setCurrentAction] = useState("Getting Started");

  return (
    <section className={styles.questions}>
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
            <div className={styles.question} key={question}>
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
    </section>
  );
}
