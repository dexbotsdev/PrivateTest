import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SecondHeadline.module.css";

type SecondHeadlineType = {
  /** Style props */
  secondHeadlinePosition?: Property.Position;
  availableExclusivelyOnConColor?: Property.Color;
  availableExclusivelyOnConTextAlign?: Property.TextAlign;
};

const SecondHeadline: FunctionComponent<SecondHeadlineType> = ({
  secondHeadlinePosition,
  availableExclusivelyOnConColor,
  availableExclusivelyOnConTextAlign,
}) => {
  const secondHeadlineStyle: CSS.Properties = useMemo(() => {
    return {
      position: secondHeadlinePosition,
    };
  }, [secondHeadlinePosition]);

  const availableExclusivelyOnContainerStyle: CSS.Properties = useMemo(() => {
    return {
      color: availableExclusivelyOnConColor,
      textAlign: availableExclusivelyOnConTextAlign,
    };
  }, [availableExclusivelyOnConColor, availableExclusivelyOnConTextAlign]);

  return (
    <div className={styles.secondHeadline} style={secondHeadlineStyle}>
      <b
        className={styles.availableExclusivelyOnContainer}
        style={availableExclusivelyOnContainerStyle}
      >
        <p
          className={styles.availableExclusivelyOn}
        >{`Available exclusively on the Mac `}</p>
        <p className={styles.availableExclusivelyOn}>for just $99.</p>
      </b>
    </div>
  );
};

export default SecondHeadline;
