import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Headline.module.css";

type HeadlineType = {
  lightningFastPrototyping?: string;

  /** Style props */
  headlinePosition?: Property.Position;
  lightningFastPrototypingColor?: Property.Color;
  lightningFastPrototypingTextAlign?: Property.TextAlign;
};

const Headline: FunctionComponent<HeadlineType> = ({
  lightningFastPrototyping,
  headlinePosition,
  lightningFastPrototypingColor,
  lightningFastPrototypingTextAlign,
}) => {
  const headlineStyle: CSS.Properties = useMemo(() => {
    return {
      position: headlinePosition,
    };
  }, [headlinePosition]);

  const lightningFastPrototypingStyle: CSS.Properties = useMemo(() => {
    return {
      color: lightningFastPrototypingColor,
      textAlign: lightningFastPrototypingTextAlign,
    };
  }, [lightningFastPrototypingColor, lightningFastPrototypingTextAlign]);

  return (
    <div className={styles.headline} style={headlineStyle}>
      <div
        className={styles.lightningFastPrototyping}
        style={lightningFastPrototypingStyle}
      >
        {lightningFastPrototyping}
      </div>
    </div>
  );
};

export default Headline;
