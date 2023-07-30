import { FunctionComponent, memo } from "react";
import styles from "./TopLogo.module.css";
const TopLogo: FunctionComponent = memo(() => {
  return <img className={styles.vectorIcon} alt="" src="/vector4.svg" />;
});

export default TopLogo;
