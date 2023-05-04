import { ButtonType } from "@/types";
import styles from "./SecondaryButton.module.css";

export default function SecondaryButton({
  text,
  onClick,
  isBlack = false,
}: ButtonType) {
  return (
    <button
      onClick={() => onClick()}
      className={
        isBlack ? `${styles.button} ${styles.buttonBlack}` : styles.button
      }
    >
      {text}
    </button>
  );
}
