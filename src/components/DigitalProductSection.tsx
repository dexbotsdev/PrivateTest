import { FunctionComponent, memo } from "react";
import styles from "./DigitalProductSection.module.css";
const DigitalProductSection: FunctionComponent = memo(() => {
  return (
    <div className={styles.ourWorkWeDoAndParent}>
      <b className={styles.ourWorkWe}>We create world-class digital products</b>
      <div className={styles.followThisSteps}>
        By information about design the world to the best instructors, heatc
        helping By information
      </div>
      <img className={styles.bitmapIcon} alt="" src="/bitmap@2x.png" />
      <b className={styles.redesignChannelWeb}>App Redesign</b>
      <div className={styles.byInformationAbout}>
        By information about design the world to the best instructors, heatc
        helping By information about design the world to the best instructors,
        heatc helping
      </div>
      <div className={styles.uiuxDesign}>App Design - June 20, 2022</div>
      <img className={styles.baseIcon} alt="" src="/base.svg" />
      <img className={styles.pathIcon} alt="" src="/base.svg" />
      <b className={styles.redesignChannelWeb1}>
        Redesign channel website landng page
      </b>
      <div className={styles.uiuxDesign1}>App Design - June 20, 2022</div>
      <div className={styles.bitmap}>
        <div className={styles.mask} />
      </div>
      <img className={styles.bitmapIcon1} alt="" src="/bitmap1@2x.png" />
      <b className={styles.redesignChannelWebContainer}>
        <p className={styles.rentalRoomsWeb}>{`Rental Rooms Web `}</p>
        <p className={styles.rentalRoomsWeb}>{`App Platform `}</p>
        <p className={styles.rentalRoomsWeb}>{` `}</p>
      </b>
      <div className={styles.uiuxDesign2}>App Design - June 20, 2022</div>
      <img className={styles.bitmapIcon2} alt="" src="/bitmap2@2x.png" />
      <b className={styles.redesignChannelWebContainer1}>
        <p className={styles.rentalRoomsWeb}>{`New Locator App For `}</p>
        <p className={styles.rentalRoomsWeb}>a New Company</p>
      </b>
      <div className={styles.uiuxDesign3}>App Design - June 20, 2022</div>
      <img className={styles.bitmapIcon3} alt="" src="/bitmap3@2x.png" />
      <b className={styles.redesignChannelWebContainer2}>
        <p className={styles.rentalRoomsWeb}>Calendar App for Big</p>
        <p className={styles.rentalRoomsWeb}>SASS Company</p>
      </b>
      <div className={styles.uiuxDesign4}>App Design - June 20, 2022</div>
      <div className={styles.bitmap1}>
        <div className={styles.mask} />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      </div>
    </div>
  );
});

export default DigitalProductSection;
