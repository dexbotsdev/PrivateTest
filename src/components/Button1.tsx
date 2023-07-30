import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import Button from "./Button";
import styles from "./Button1.module.css";

type Button1Type = {
  button?: string;

  /** Style props */
  buttonPosition?: Property.Position;
  buttonFlexShrink?: Property.FlexShrink;
  buttonPadding?: Property.Padding;
  buttonBackgroundColor?: Property.BackgroundColor;
  buttonBorder?: Property.Border;
  buttonTop?: Property.Top;
  buttonRight?: Property.Right;
  buttonColor?: Property.Color;
};

const Button1: FunctionComponent<Button1Type> = ({
  button,
  buttonPosition,
  buttonFlexShrink,
  buttonPadding,
  buttonBackgroundColor,
  buttonBorder,
  buttonTop,
  buttonRight,
  buttonColor,
}) => {
  const button2Style: CSS.Properties = useMemo(() => {
    return {
      position: buttonPosition,
      flexShrink: buttonFlexShrink,
      padding: buttonPadding,
      backgroundColor: buttonBackgroundColor,
      border: buttonBorder,
      top: buttonTop,
      right: buttonRight,
    };
  }, [
    buttonPosition,
    buttonFlexShrink,
    buttonPadding,
    buttonBackgroundColor,
    buttonBorder,
    buttonTop,
    buttonRight,
  ]);

  const button1Style: CSS.Properties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div className={styles.button} style={button2Style}>
      <Button
        button="Button"
        buttonPosition="unset"
        buttonColor="#fff"
        buttonOverflow="hidden"
        buttonPadding="10px"
        buttonAlignItems="center"
        buttonJustifyContent="flex-start"
        buttonMargin="unset"
        buttonTop="unset"
        buttonLeft="unset"
        buttonBorderRadius="unset"
        buttonBackgroundColor="unset"
        buttonZIndex="unset"
        buttonLetterSpacing="0.2px"
        buttonLineHeight="20px"
        buttonFontFamily="Roboto"
        buttonTextAlign="left"
        buttonFontWeight="unset"
      />
    </div>
  );
};

export default Button1;
