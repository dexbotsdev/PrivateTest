import { FunctionComponent } from "react";
import styles from "./FilteredCardFormContainer.module.css";
const FilteredCardFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.section8}>
      <div className={styles.letsHearWhatContainer}>
        <p className={styles.letsHear}>{`Let’s hear `}</p>
        <p className={styles.whatTheySays}>What they says</p>
      </div>
      <div className={styles.loremIpsumDolorContainer}>
        <p className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt
        </p>
        <p className={styles.loremIpsumDolor}>
          fames quisque mauris at diam. Nullam morbi ipsum turpis amet id
          posuere torto
        </p>
        <p
          className={styles.loremIpsumDolor}
        >{`quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
        <p className={styles.whatTheySays}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore.
        </p>
      </div>
      <div className={styles.div}>“</div>
      <div className={styles.div1}>“</div>
      <img className={styles.section8Child} alt="" src="/ellipse-32.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <b className={styles.rickyAprilia}>Ricky Aprilia</b>
      <div className={styles.founderOfVaribo}>Founder of Varibo</div>
      <img className={styles.section8Item} alt="" src="/ellipse-33@2x.png" />
      <img className={styles.section8Inner} alt="" src="/ellipse-37@2x.png" />
      <img className={styles.ellipseIcon} alt="" src="/ellipse-34@2x.png" />
      <img className={styles.section8Child1} alt="" src="/ellipse-36@2x.png" />
    </div>
  );
};

export default FilteredCardFormContainer;
