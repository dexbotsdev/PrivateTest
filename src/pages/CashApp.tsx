import { FunctionComponent } from "react";
import styles from "./CashApp.module.css";
const CashApp: FunctionComponent = () => {
  return (
    <div className={styles.cashApp}>
      <div className={styles.heroSection}>
        <div className={styles.eyeButton}>
          <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
        </div>
        <div className={styles.menu}>
          <div className={styles.signIn}>Sign In</div>
          <div className={styles.signIn}>Legal</div>
          <div className={styles.signIn}>Security</div>
        </div>
        <img className={styles.cashappLogo} alt="" src="/cashapp--logo.svg" />
        <div className={styles.rays}>
          <div className={styles.hero}>
            <div className={styles.layer1}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
              </div>
            </div>
            <div className={styles.cash}>ARPA</div>
            <div className={styles.introPhone1} />
            <div className={styles.bot}>
              <span className={styles.botTxt}>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>BOT</p>
              </span>
            </div>
            <div className={styles.antiRugpullAllContainer}>
              <span className={styles.botTxt}>
                <p className={styles.blankLine1}>&nbsp;</p>
                <p className={styles.antiRugpullAll}>
                  Anti rugpull all your trades
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.fixedFooter}>
          <div className={styles.buttons}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
            <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
          </div>
        </div>
        <div className={styles.heroSectionChild} />
        <div className={styles.joinTheFray}>JOIN THE FRAY</div>
        <div className={styles.heroSectionItem} />
        <div className={styles.connect}>connect</div>
      </div>
    </div>
  );
};

export default CashApp;
