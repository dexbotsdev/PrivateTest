import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Title.module.css";

type TitleType = {
  atYourFingertips?: string;

  /** Style props */
  titlePosition?: Property.Position;
  atYourFingertipsColor?: Property.Color;
};

const Title: FunctionComponent<TitleType> = memo(
  ({ atYourFingertips, titlePosition, atYourFingertipsColor }) => {
    const titleStyle: CSS.Properties = useMemo(() => {
      return {
        position: titlePosition,
      };
    }, [titlePosition]);

    const atYourFingertipsStyle: CSS.Properties = useMemo(() => {
      return {
        color: atYourFingertipsColor,
      };
    }, [atYourFingertipsColor]);

    return (
      <div className={styles.title} style={titleStyle}>
        <div className={styles.atYourFingertips} style={atYourFingertipsStyle}>
          {atYourFingertips}
        </div>
      </div>
    );
  }
);

export default Title;
