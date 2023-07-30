import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./SubHeading.module.css";

type SubHeadingType = {
  mostCalendarsAreDesignedF?: string;
  freelancersWhoWantASimple?: string;

  /** Style props */
  subHeadingPosition?: Property.Position;
  mostCalendarsAreContainerColor?: Property.Color;
  mostCalendarsAreContainerTextAlign?: Property.TextAlign;
};

const SubHeading: FunctionComponent<SubHeadingType> = memo(
  ({
    mostCalendarsAreDesignedF,
    freelancersWhoWantASimple,
    subHeadingPosition,
    mostCalendarsAreContainerColor,
    mostCalendarsAreContainerTextAlign,
  }) => {
    const subHeadingStyle: CSS.Properties = useMemo(() => {
      return {
        position: subHeadingPosition,
      };
    }, [subHeadingPosition]);

    const mostCalendarsAreContainerStyle: CSS.Properties = useMemo(() => {
      return {
        color: mostCalendarsAreContainerColor,
        textAlign: mostCalendarsAreContainerTextAlign,
      };
    }, [mostCalendarsAreContainerColor, mostCalendarsAreContainerTextAlign]);

    return (
      <div className={styles.subHeading} style={subHeadingStyle}>
        <div
          className={styles.mostCalendarsAreContainer}
          style={mostCalendarsAreContainerStyle}
        >
          <p className={styles.mostCalendarsAre}>{mostCalendarsAreDesignedF}</p>
          <p className={styles.mostCalendarsAre}>{freelancersWhoWantASimple}</p>
        </div>
      </div>
    );
  }
);

export default SubHeading;
