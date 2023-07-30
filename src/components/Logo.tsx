import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Logo.module.css";

type LogoType = {
  /** Style props */
  logoPosition?: Property.Position;
  logoPadding?: Property.Padding;
  logoTop?: Property.Top;
  logoLeft?: Property.Left;
};

const Logo: FunctionComponent<LogoType> = memo(
  ({ logoPosition, logoPadding, logoTop, logoLeft }) => {
    const logoStyle: CSS.Properties = useMemo(() => {
      return {
        position: logoPosition,
        padding: logoPadding,
        top: logoTop,
        left: logoLeft,
      };
    }, [logoPosition, logoPadding, logoTop, logoLeft]);

    return (
      <div className={styles.logo} style={logoStyle}>
        <img className={styles.logoChild} alt="" src="/rectangle-4@2x.png" />
      </div>
    );
  }
);

export default Logo;
