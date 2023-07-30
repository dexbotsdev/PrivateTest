import { FunctionComponent, memo } from "react";
import styles from "./TrustedBySection.module.css";
const TrustedBySection: FunctionComponent = memo(() => {
  return (
    <div className={styles.section2Parent}>
      <div className={styles.section2} />
      <div className={styles.trustedByGreat}>Trusted by greatest companies</div>
      <img className={styles.logoIcon} alt="" src="/logo.svg" />
      <img className={styles.logoIcon1} alt="" src="/logo1.svg" />
      <img className={styles.logoIcon2} alt="" src="/logo2.svg" />
      <img className={styles.logoIcon3} alt="" src="/logo3.svg" />
      <img className={styles.logoIcon4} alt="" src="/logo4.svg" />
    </div>
  );
});

export default TrustedBySection;
