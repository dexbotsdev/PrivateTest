import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Subtitle.module.css";

type SubtitleType = {
  organizeAcrossAllAppsByHa?: string;

  /** Style props */
  subtitlePosition?: Property.Position;
  subtitlePadding?: Property.Padding;
  organizeAcrossAllColor?: Property.Color;
};

const Subtitle: FunctionComponent<SubtitleType> = memo(
  ({
    organizeAcrossAllAppsByHa,
    subtitlePosition,
    subtitlePadding,
    organizeAcrossAllColor,
  }) => {
    const subtitleStyle: CSS.Properties = useMemo(() => {
      return {
        position: subtitlePosition,
        padding: subtitlePadding,
      };
    }, [subtitlePosition, subtitlePadding]);

    const organizeAcrossAllStyle: CSS.Properties = useMemo(() => {
      return {
        color: organizeAcrossAllColor,
      };
    }, [organizeAcrossAllColor]);

    return (
      <div className={styles.subtitle} style={subtitleStyle}>
        <div
          className={styles.organizeAcrossAll}
          style={organizeAcrossAllStyle}
        >
          {organizeAcrossAllAppsByHa}
        </div>
      </div>
    );
  }
);

export default Subtitle;
