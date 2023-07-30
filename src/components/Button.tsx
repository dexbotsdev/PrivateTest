import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Button.module.css";

type ButtonType = {
  button?: string;

  /** Style props */
  buttonPosition?: Property.Position;
  buttonColor?: Property.Color;
  buttonOverflow?: Property.Overflow;
  buttonPadding?: Property.Padding;
  buttonAlignItems?: Property.AlignItems;
  buttonJustifyContent?: Property.JustifyContent;
  buttonMargin?: Property.Margin;
  buttonTop?: Property.Top;
  buttonLeft?: Property.Left;
  buttonBorderRadius?: Property.BorderRadius;
  buttonBackgroundColor?: Property.BackgroundColor;
  buttonZIndex?: Property.ZIndex;
  buttonLetterSpacing?: Property.LetterSpacing;
  buttonLineHeight?: Property.LineHeight;
  buttonFontFamily?: Property.FontFamily;
  buttonTextAlign?: Property.TextAlign;
  buttonFontWeight?: Property.FontWeight;
};

const Button: FunctionComponent<ButtonType> = ({
  button,
  buttonPosition,
  buttonColor,
  buttonOverflow,
  buttonPadding,
  buttonAlignItems,
  buttonJustifyContent,
  buttonMargin,
  buttonTop,
  buttonLeft,
  buttonBorderRadius,
  buttonBackgroundColor,
  buttonZIndex,
  buttonLetterSpacing,
  buttonLineHeight,
  buttonFontFamily,
  buttonTextAlign,
  buttonFontWeight,
}) => {
  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      position: buttonPosition,
      overflow: buttonOverflow,
      padding: buttonPadding,
      alignItems: buttonAlignItems,
      justifyContent: buttonJustifyContent,
      margin: buttonMargin,
      top: buttonTop,
      left: buttonLeft,
      borderRadius: buttonBorderRadius,
      backgroundColor: buttonBackgroundColor,
      zIndex: buttonZIndex,
    };
  }, [
    buttonPosition,
    buttonOverflow,
    buttonPadding,
    buttonAlignItems,
    buttonJustifyContent,
    buttonMargin,
    buttonTop,
    buttonLeft,
    buttonBorderRadius,
    buttonBackgroundColor,
    buttonZIndex,
  ]);

  const button1Style: CSS.Properties = useMemo(() => {
    return {
      color: buttonColor,
      letterSpacing: buttonLetterSpacing,
      lineHeight: buttonLineHeight,
      fontFamily: buttonFontFamily,
      textAlign: buttonTextAlign,
      fontWeight: buttonFontWeight,
    };
  }, [
    buttonColor,
    buttonLetterSpacing,
    buttonLineHeight,
    buttonFontFamily,
    buttonTextAlign,
    buttonFontWeight,
  ]);

  return (
    <div className={styles.button} style={buttonStyle}>
      <b className={styles.button1} style={button1Style}>
        {button}
      </b>
    </div>
  );
};

export default Button;
