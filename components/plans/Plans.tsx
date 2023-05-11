"use client";

import Image from "next/image";
import styles from "./Plans.module.css";
import localFont from "next/font/local";
import { Fragment, useEffect, useState } from "react";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

interface AllPlansType {
  index: number;
  type: "Monthly" | "Annually" | "Quarterly";
  access: string;
  price: string;
  items: string[];
}

const allPlans: AllPlansType[] = [
  {
    index: 1,
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
    index: 2,
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
    index: 3,
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

export default function Plans() {
  const [currentPlan, setCurrentPlan] = useState(allPlans[0].type);

  return (
    <section className={styles.plan}>
      <h3 className={`${styles.planHeading} ${myFont.className}`}>
        Choose a plan that&#39;s <br />
        right for you
      </h3>

      <div className={styles.allPlans}>
        <div
          className={`${styles.accentClass} ${
            currentPlan === "Monthly"
              ? styles.accentClassFirst
              : currentPlan === "Quarterly"
              ? styles.accentClassSecond
              : styles.accentClassThird
          }`}
        ></div>
        {allPlans.map((plan, index) => (
          <Fragment key={index}>
            <input
              type="radio"
              id={plan.type}
              name="plans"
              className={styles.planLabel}
              value={currentPlan}
              onClick={(e: any) => setCurrentPlan(plan.type)}
            />
            <label
              htmlFor={plan.type}
              className={`${styles.planButton} ${myFont.className} ${
                currentPlan === plan.type ? styles.planButtonCurrent : ""
              }`}
              onClick={() => setCurrentPlan(plan.type)}
            >
              {plan.type}
            </label>
          </Fragment>
        ))}
      </div>

      <div className={styles.allPlansMobile}>
        {allPlans.map((plan, index) => (
          <button
            key={index}
            className={`${styles.planButtonMobile} ${myFont.className} ${
              currentPlan === plan.type ? styles.currentPlanButtonMobile : ""
            }`}
            onClick={() => setCurrentPlan(plan.type)}
          >
            {plan.type}
          </button>
        ))}
      </div>

      <div className={styles.planDetails}>
        <div className={styles.roundDecorationWrapper}>
          <Image
            src="/round_decoration.png"
            alt="round decoration"
            fill
            className={styles.roundDecoration}
          />
        </div>

        <div className={styles.planDetailsTop}>
          <div className={styles.planSnippet}>
            <h3 className={`${styles.planHeadingBottom} ${myFont.className}`}>
              {currentPlan} Plan
            </h3>
            <p className={styles.planText}>{allPlans[0].access}</p>
            <div className={styles.planPriceWrapper}>
              <span className={`${styles.planPrice} ${myFont.className}`}>
                {allPlans[0].price}/
              </span>
              <span className={`${styles.planPriceAccent} ${myFont.className}`}>
                mo
              </span>
            </div>

            <button className={styles.startLearningButton}>
              Start Learning
            </button>
          </div>
        </div>

        <div className={styles.planInfo}>
          <h3 className={`${styles.planInfoHeading} ${myFont.className}`}>
            {currentPlan} plan includes:
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
    </section>
  );
}
