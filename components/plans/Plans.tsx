"use client";

import Image from "next/image";
import styles from "./Plans.module.css";
import localFont from "next/font/local";
import { useEffect, useState } from "react";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

const allPlans = [
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
  const [currentPlan, setCurrentPlan] = useState(allPlans[0]);
  const [direction, setDirection] = useState<
    "left" | "right" | "right2" | "left2" | null
  >(null);
  let [accentClass, setAccentClass] = useState(
    `${styles.currentPlanAccent} ${myFont.className}`
  );

  useEffect(() => {
    direction &&
      setAccentClass(
        `${styles.currentPlanAccent} ${myFont.className} ${
          direction === "left"
            ? styles.currentPlanAccentLeft
            : direction === "right"
            ? styles.currentPlanAccentRight
            : direction === "left2"
            ? styles.currentPlanAccentLeft2
            : direction === "right2"
            ? styles.currentPlanAccentRight2
            : ""
        }`
      );
  }, [direction]);

  return (
    <section className={styles.plan}>
      <h3 className={`${styles.planHeading} ${myFont.className}`}>
        Choose a plan that&#39;s <br />
        right for you
      </h3>

      <div className={styles.allPlans}>
        <div className={accentClass}>{currentPlan.type}</div>
        {allPlans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.planButton} ${myFont.className} ${
              !index ? styles.currentPlanButton : ""
            }`}
            // onClick={() => {
            //   setDirection(
            //     currentPlan.index > plan.index
            //       ? direction === "left" || currentPlan.index - plan.index === 2
            //         ? "left2"
            //         : "left"
            //       : direction === "right" ||
            //         plan.index - currentPlan.index === 2
            //       ? "right2"
            //       : "right"
            //   );
            //   setCurrentPlan(plan);
            // }}
          >
            {plan.type}
          </div>
        ))}
      </div>

      <div className={styles.allPlansMobile}>
        {allPlans.map((plan, index) => (
          <button
            key={index}
            className={`${styles.planButtonMobile} ${myFont.className} ${
              !index ? styles.currentPlanButtonMobile : ""
            }`}
          >
            {plan.type}
          </button>
        ))}
      </div>

      <div className={styles.planDetails}>
        <div className={styles.planDetailsTop}>
          <div className={styles.planSnippet}>
            <h3 className={`${styles.planHeadingBottom} ${myFont.className}`}>
              {allPlans[0].type} Plan
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
    </section>
  );
}
