import styles from "./mainButton.module.css";
import { ButtonType } from "@/types";

export default function MainButton({
  text,
  onClick,
  type = "small",
}: ButtonType) {
  return (
    <button
      onClick={() => onClick()}
      className={type === "small" ? styles.button : styles.buttonLarge}
    >
      {text}
    </button>
  );
}
