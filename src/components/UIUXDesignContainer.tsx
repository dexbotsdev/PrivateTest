import { FunctionComponent, memo } from "react";
import FormsInputLeftIconLargeFi from "./FormsInputLeftIconLargeFi";
import styles from "./UIUXDesignContainer.module.css";
const UIUXDesignContainer: FunctionComponent = memo(() => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.itemParent}>
        <div className={styles.item}>
          <div className={styles.uiuxDesigner}>UI/UX Design</div>
          <div className={styles.sometimesFeaturesRContainer}>
            <p
              className={styles.sometimesFeaturesRequire}
            >{`Sometimes features require `}</p>
            <p className={styles.sometimesFeaturesRequire}>
              a short description
            </p>
          </div>
        </div>
        <div className={styles.item1}>
          <div className={styles.uiuxDesigner}>Logo Branding</div>
          <img className={styles.iconspaceCompass25px} alt="" src="/base.svg" />
          <div className={styles.sometimesFeaturesRContainer}>
            <p
              className={styles.sometimesFeaturesRequire}
            >{`Sometimes features require `}</p>
            <p className={styles.sometimesFeaturesRequire}>
              a short description
            </p>
          </div>
          <img className={styles.itemChild} alt="" src="/group-1796.svg" />
        </div>
        <div className={styles.item2}>
          <div className={styles.uiuxDesigner}>App Design</div>
          <div className={styles.sometimesFeaturesRContainer}>
            <p
              className={styles.sometimesFeaturesRequire}
            >{`Sometimes features require `}</p>
            <p className={styles.sometimesFeaturesRequire}>
              a short description
            </p>
          </div>
          <div className={styles.itemChild}>
            <div className={styles.groupChild} />
          </div>
        </div>
        <div className={styles.item3}>
          <div className={styles.uiuxDesigner}>Webiste Design</div>
          <div className={styles.sometimesFeaturesRContainer}>
            <p
              className={styles.sometimesFeaturesRequire}
            >{`Sometimes features require `}</p>
            <p className={styles.sometimesFeaturesRequire}>
              a short description
            </p>
          </div>
        </div>
        <div className={styles.followOurNewslette}>
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </div>
        <div className={styles.form}>
          <FormsInputLeftIconLargeFi />
        </div>
        <b className={styles.saasProductsCoreContainer}>
          <p className={styles.sometimesFeaturesRequire}>How we can help you</p>
        </b>
      </div>
      <div className={styles.labelWrapper}>
        <div className={styles.label}>Subscribe</div>
      </div>
      <img className={styles.groupItem} alt="" src="/group-1793.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
    </div>
  );
});

export default UIUXDesignContainer;
