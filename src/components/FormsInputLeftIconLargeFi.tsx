import { FunctionComponent } from "react";
import styles from "./FormsInputLeftIconLargeFi.module.css";
const FormsInputLeftIconLargeFi: FunctionComponent = () => {
  return (
    <div className={styles.formsinputleftIconlargefi}>
      <div className={styles.base}>
        <div className={styles.shadow} />
        <div className={styles.base1} />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </div>
      <div className={styles.label}>Enter your email address</div>
    </div>
  );
};

export default FormsInputLeftIconLargeFi;
