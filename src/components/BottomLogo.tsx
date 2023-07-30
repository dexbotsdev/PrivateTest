import { FunctionComponent, memo } from "react";
import styles from "./BottomLogo.module.css";
const BottomLogo: FunctionComponent = memo(() => {
  return <img className={styles.vectorIcon} alt="" src="/vector5.svg" />;
});

export default BottomLogo;
