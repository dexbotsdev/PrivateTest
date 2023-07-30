import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Paragraphe.module.css";

type ParagrapheType = {
  slateHelpsYouSeeHowManyMo?: string;
  toWorkToReachYourFinancia?: string;
  theMonthAndYear?: string;

  /** Style props */
  paragraphePosition?: Property.Position;
  paragraphePadding?: Property.Padding;
  slateHelpsYouContainerFontFamily?: Property.FontFamily;
  slateHelpsYouContainerColor?: Property.Color;
  slateHelpsYouContainerTextAlign?: Property.TextAlign;
  slateHelpsYouFontFamily?: Property.FontFamily;
  toWorkToFontFamily?: Property.FontFamily;
  theMonthAndFontFamily?: Property.FontFamily;
};

const Paragraphe: FunctionComponent<ParagrapheType> = ({
  slateHelpsYouSeeHowManyMo,
  toWorkToReachYourFinancia,
  theMonthAndYear,
  paragraphePosition,
  paragraphePadding,
  slateHelpsYouContainerFontFamily,
  slateHelpsYouContainerColor,
  slateHelpsYouContainerTextAlign,
  slateHelpsYouFontFamily,
  toWorkToFontFamily,
  theMonthAndFontFamily,
}) => {
  const paragrapheStyle: CSS.Properties = useMemo(() => {
    return {
      position: paragraphePosition,
      padding: paragraphePadding,
    };
  }, [paragraphePosition, paragraphePadding]);

  const slateHelpsYouContainerStyle: CSS.Properties = useMemo(() => {
    return {
      fontFamily: slateHelpsYouContainerFontFamily,
      color: slateHelpsYouContainerColor,
      textAlign: slateHelpsYouContainerTextAlign,
    };
  }, [
    slateHelpsYouContainerFontFamily,
    slateHelpsYouContainerColor,
    slateHelpsYouContainerTextAlign,
  ]);

  const slateHelpsYouStyle: CSS.Properties = useMemo(() => {
    return {
      fontFamily: slateHelpsYouFontFamily,
    };
  }, [slateHelpsYouFontFamily]);

  const toWorkToStyle: CSS.Properties = useMemo(() => {
    return {
      fontFamily: toWorkToFontFamily,
    };
  }, [toWorkToFontFamily]);

  const theMonthAndStyle: CSS.Properties = useMemo(() => {
    return {
      fontFamily: theMonthAndFontFamily,
    };
  }, [theMonthAndFontFamily]);

  return (
    <div className={styles.paragraphe} style={paragrapheStyle}>
      <div
        className={styles.slateHelpsYouContainer}
        style={slateHelpsYouContainerStyle}
      >
        <p className={styles.slateHelpsYou} style={slateHelpsYouStyle}>
          {slateHelpsYouSeeHowManyMo}
        </p>
        <p className={styles.slateHelpsYou} style={toWorkToStyle}>
          {toWorkToReachYourFinancia}
        </p>
        <p className={styles.slateHelpsYou} style={theMonthAndStyle}>
          {theMonthAndYear}
        </p>
      </div>
    </div>
  );
};

export default Paragraphe;
