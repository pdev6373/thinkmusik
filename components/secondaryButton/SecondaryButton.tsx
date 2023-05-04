import { ButtonType } from "@/types";
import styles from "./SecondaryButton.module.css";

export default function SecondaryButton({ text, onClick }: ButtonType) {
  return (
    <button onClick={() => onClick()} className={styles.button}>
      {text}
    </button>
  );
}
