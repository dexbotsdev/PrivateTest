import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Link.module.css";

type LinkType = {
  link?: string;

  /** Style props */
  linkPosition?: Property.Position;
  linkPadding?: Property.Padding;
  linkColor?: Property.Color;
};

const Link: FunctionComponent<LinkType> = ({
  link,
  linkPosition,
  linkPadding,
  linkColor,
}) => {
  const linkStyle: CSS.Properties = useMemo(() => {
    return {
      position: linkPosition,
      padding: linkPadding,
    };
  }, [linkPosition, linkPadding]);

  const link1Style: CSS.Properties = useMemo(() => {
    return {
      color: linkColor,
    };
  }, [linkColor]);

  return (
    <div className={styles.link} style={linkStyle}>
      <div className={styles.link1} style={link1Style}>
        {link}
      </div>
    </div>
  );
};

export default Link;
