import { CardTypes } from "@/types";
import styles from "./Card.module.css";

export default function Card({ header, body }: CardTypes) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <h3 className={styles.header}>{header}</h3>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
}
